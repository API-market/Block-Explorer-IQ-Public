# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from bs4 import BeautifulSoup
from django.core import management
from django.db import connection
from django.db.models import Q
from django.utils.text import slugify
from django.utils import translation
from django.utils.translation import gettext, ugettext
from django.utils.html import strip_tags
from elasticsearch import Elasticsearch
import json
from threading import Thread
from operator import itemgetter
import os
import re
import unicodedata
import warnings
from fbwiki.settings import VALID_VIDEO_EXTENSIONS, VALID_AUDIO_EXTENSIONS, ELASTICSEARCH_HOST, ELASTICSEARCH_PORT, ELASTICSEARCH_PROTOCOL, \
    ELASTICSEARCH_USERNAME, ELASTICSEARCH_PASSWORD, ELASTICSEARCH_INDEX_NAME, ELASTICSEARCH_DOCUMENT_TYPE, ELASTICSEARCH_URL_PREFIX

# Create the Elasticsearch connection
ELASTIC_OBJECT = Elasticsearch(hosts=[ELASTICSEARCH_HOST], http_auth=(ELASTICSEARCH_USERNAME, ELASTICSEARCH_PASSWORD),
                               scheme=ELASTICSEARCH_PROTOCOL, port=ELASTICSEARCH_PORT, use_ssl=True, url_prefix=ELASTICSEARCH_URL_PREFIX)

# Tags to replace in BeautifulSoup
BAD_TAGS = ['audio', 'head', 'map', 'math', 'mi', 'mo', 'mtd', 'mrow', 'mspace', 'mtext', 'msub', 'msup', 'mstyle',
            'semantics', 'usemap', 'xml', 'w:worddocument', 'm:mathpr', 'm:mathfont', 'code', 'picture']

# BAD TAGS UNWRAP ONLY
BAD_TAGS_UNWRAP_ONLY = ['g']

# Tags allowed in the page, but not in the infobox
BAD_TAGS_LINK_AND_INFOBOX = ["html", "head", "body", "header", "section", "input", "article", "img", "video", "script"]

# Tags to remove that BeautifulSoup introduces
BAD_TAGS_BY_BEAUTIFULSOUP = ["<html>", "</html>", "<head>", "</head>", "<body>", "</body>", "<p>html</p>"]

# Attributes to replace in BeautifulSoup
REMOVE_ATTRIBUTES = ['style', 'scope', 'data-mce-style', 'xml:lang', 'summary', 'item', 'align', 'valign', 'v', 'rules',
                     'nowrap', 'size', 'face', 'color', 'usemap', 'unselectable', 'target', 'onclick', 'dir']

# Tags to eliminate in BeautifulSoup
WHITELIST_LINK_CLASSES = ['tooltippable', 'tooltippableCarat', 'imagelink', 'tooltippableImage', 'social-logo',
                          'eos-link', 'accordion-toggle', 'micro-image', 'link-box-url', 'avatar-wrap', 'grid-attribution',
                          'copyURL-btn', 'mainphoto-anchor', 'dropdown-toggle', 'app-notifications', 'link-url', 'external']

# String to replace in BeautifulSoup
BLURB_STRING_REPLACES = [
    [u"<p></p>", u"<p><br></p>"],
    [u"<p><span></span></p>", u"<p><br></p>"],
]

# Remove warnings that BeautifulSoup sometimes throws
warnings.filterwarnings("ignore", category=UserWarning, module='bs4')

# Get the IP address from a request
def getIPAddress(theRequest):
    from ipware.ip import get_real_ip, get_ip

    # Try to get the real IP address if it is proxied. If not, just get the provided IP
    ip = get_real_ip(theRequest)
    if ip is not None:
        return ip
    else:
        ip = get_ip(theRequest)
        if ip is not None:
            return ip
        else:
            return ""

# Test if the URL is from social media, like Facebook, Reddit, Twitter, etc.
def profileLinkTester(inputLink):
    # Fetch the whitelists and blacklists
    from enterlink.views import SOCIAL_MEDIA_URL_WHITELIST, SOCIAL_MEDIA_URL_BLACKLIST_REGEX

    # Set some variables
    is_blacklist_profile_link = False
    is_profile_link = False
    profileString = ""

    # See if the URL matches the whitelist
    for match_string in SOCIAL_MEDIA_URL_WHITELIST:
        if match_string[0] in inputLink:
            # Since a match occured, get which social media site it belongs to
            profileString = match_string[1]

            # Test to make sure it is not a false positive
            for blacklist_regex in SOCIAL_MEDIA_URL_BLACKLIST_REGEX:
                is_matched = re.search(blacklist_regex, inputLink)

                # Mark the boolean if the link is indeed a false positive
                if is_matched:
                    is_blacklist_profile_link = True
                    break
            if is_blacklist_profile_link:
                break
            else:
                is_profile_link = True
    return {"isProfileLink": is_profile_link, "profileString": profileString}

# Categorize the link depending on its MIME type and/or URL extension. This is used to determine how to display the link
# and is especially important for if-statements in AMP
def linkCategorizer(citeURL, citeMIME):
    from enterlink.media_functions import getYouTubeIdIfPresent

    # Get the file extension
    name, extension = os.path.splitext(citeURL)
    extension = extension.lower()

    # Determine the category
    if citeMIME == "" or citeMIME is None:
        citeCategory = "NONE"
    if citeMIME == 'image/gif':
        citeCategory = "GIF"
    elif 'image' in citeMIME:
        citeCategory = "PICTURE"
    elif getYouTubeIdIfPresent(citeURL):
        citeCategory = "YOUTUBE"
    elif extension in VALID_VIDEO_EXTENSIONS:
        citeCategory = "NORMAL_VIDEO"
    elif extension in VALID_AUDIO_EXTENSIONS:
        citeCategory = "AUDIO"
    else:
        citeCategory = "NONE"

    return citeCategory

# Sanitize the provided string, removing links to external sites unless they are Everipedia links. Also remove certain tags and attributes
# that break AMP validation or the canonical article HTML structure
def badLinkSanitizer(inputString):
    # Create a BeautifulSoup object from the provided string
    try:
        soup = BeautifulSoup(inputString.decode('utf-8', 'ignore'), "html5lib")
    except:
        soup = BeautifulSoup(inputString, "html5lib")

    # Check the links on the page and plaintext them if they are not Everipedia related
    for link in soup.find_all('a'):
        try:
            theClassCollection = link['class']
            if u'tooltippable' in theClassCollection:
                continue
            elif u'tooltippableCarat' in theClassCollection:
                continue
            elif u'imagelink' in theClassCollection:
                continue
            elif u'tooltippableImage' in theClassCollection:
                continue
            elif link['href'][0:22] == "https://www.everipedia" or (link['href'][0] == "/" or link['href'][0:3] == "../"):
                continue
            else:
                link.replace_with(link.text)
        except:
            link.replace_with(link.text)

    # Check for page-allowed, but locally disallowed tags (like section and header)
    for badTag in BAD_TAGS_LINK_AND_INFOBOX:
        for match in soup.findAll(badTag):
            match.unwrap()

    # Reconstruct the string and remove bad tags that are introduced by BeautifulSoup
    enteredcontent = "".join([unicode(item) for item in soup.contents])
    for badTag in BAD_TAGS_BY_BEAUTIFULSOUP:
        enteredcontent = enteredcontent.replace(badTag, u"")

    # Return the cleaned string
    return enteredcontent.strip()


def entireArticleHTMLSanitizer(inputString):
    # Create a BeautifulSoup object from the input string
    try:
        soup = BeautifulSoup(inputString.decode('utf-8', 'ignore'), "html.parser")
    except:
        soup = BeautifulSoup(inputString, "html.parser")

    # Find the body tag
    mainSoup = soup.findAll("body")[0]

    # Remove bad HTML tags
    for tagType in BAD_TAGS:
        for tagNode in mainSoup.find_all(tagType):
            tagNode.extract()

    # Check for unwrap only bad tags like <g> (from Grammarly)
    for badTag in BAD_TAGS_UNWRAP_ONLY:
        for match in soup.findAll(badTag):
            match.unwrap()

    # Loop down the HTML structure and look for bad attributes
    for tag in mainSoup.recursiveChildGenerator():
        try:
            newTagDict = {}
            for key, value in tag.attrs.iteritems():
                if(key not in REMOVE_ATTRIBUTES):
                    newTagDict[key] = value
            tag.attrs = newTagDict
        except AttributeError:
            # 'NavigableString' object has no attribute 'attrs'
            pass

    # Replace fonts with spans (mainly for AMP validation)
    replacementTags = [['font', 'span']]
    for replaceTagPair in replacementTags:
        listOfReplaces = mainSoup.findAll(replaceTagPair[0])
        for item in listOfReplaces:
            item.name = replaceTagPair[1]

    # Clean up non-Everipedia links
    for link in soup.find_all('a'):
        try:
            if link['href'][0:22] == "https://www.everipedia" or (link['href'][0] == "/" or link['href'][0:3] == "../"):
                continue

            theClassCollection = link['class']
            for goodClass in WHITELIST_LINK_CLASSES:
                if goodClass in theClassCollection:
                    replaceLink = False
                    break

            link.replace_with(link.text)
        except:
            link.replace_with(link.text)

    # Replace URL slugs with IPFS hashes. A redirect table will be maintained to always map old IPFS hashes to article
    # the slug belongs to.
    from enterlink.models import ArticleTable
    for link in soup.find_all('a', class_='tooltippable'):
        # Get the URL slug from the link attribute
        theSlug = link['data-username']
        try:
            # Get the article attached to that slug
            quickArticle = ArticleTable.objects.filter(Q(slug__iexact=theSlug) | Q(slug_alt__iexact=theSlug))[0]

            # Change the href for the link to the IPFS hash
            link['href'] = "/wiki/%s/" % quickArticle.ipfs_hash_current
        except:
            pass

    # Strip HTML appearing in the title
    titleSoup = mainSoup.findAll("h1", class_='page-title')
    for anyTag in titleSoup[0].findAll():
        anyTag.unwrap()
    # titleSoup[0].string = strip_tags(unicode(titleSoup[0].encode_contents(indent_level=None, encoding='utf-8').strip()))

    # Correct plural infoboxes if they are incorrectly marked as non-plural
    iboxItems = mainSoup.find_all("table", class_="ibox-item-nonplural")
    movedTables = []
    for iboxTable in iboxItems:
        iboxRows = iboxTable.find_all("tr", class_="ibox-value-row")
        try:
            # If there is more than one value row, then it is automatically plural
            if (len(iboxRows) > 1):
                for indivRow in iboxRows:
                    try:
                        theTD = indivRow.find_all("td", class_="ibox-nonplural-value")
                        tdNode = theTD[0]
                        # Rename classes for the values
                        tdNode['class'] = "ibox-plural-value"
                    except:
                        pass
                    try:
                        rootTable = tdNode.find_parents("table", class_="ibox-item-nonplural")
                        rootTable[0]["class"] = "ibox-item-plural"
                    except:
                        pass

                # Rename the class for the table from nonplural to plural
                iboxTable["class"] = "ibox-item-plural"

                # Rename the class of the key row
                try:
                    iboxKeyRow = iboxTable.select("tr.ibox-key-row")
                    iboxKeyRow[0]["class"] = "ibox-plural-key"
                except:
                    pass

                # Rename the class of the key inner row
                try:
                    iboxKeyRowInner = iboxTable.select("td.ibox-nonplural-key")
                    iboxKeyRowInner[0]["class"] = "ibox-plural-key-inner"
                except:
                    pass

                # Append the table to the list of tables to be moved
                movedTables.append(iboxTable)
        except Exception as e:
            print(unicode(e))



    # Get or create the plural infobox list
    nonBlobWrapTag = mainSoup.find_all("div", class_="nonblob-wrap")
    try:
        iboxListPlural = mainSoup.find_all("div", class_="ibox-list-plural")
        iboxListPlural = iboxListPlural[0]
    except:
        iboxListPlural = mainSoup.new_tag("div", class_="ibox-list-plural")
        nonBlobWrapTag.append(iboxListPlural)

    # Move the table from nonplural to plural
    for movingTable in movedTables:
        iboxListPlural.append(movingTable.extract())

    # Get the blurb
    blurbSoup = mainSoup.findAll(class_='blurb-wrap')

    # Find all the header tags and make sure they have ids. This is necessary for making the table of contents.
    for headingTag in blurbSoup[0].find_all(['h1','h2','h3','h4','h5','h6' ]):
        # Change h1's to h2's if they appear inside the main article text
        if headingTag.name == 'h1':
            headingTag.name = 'h2'

        try:
            # Convert mw-headlines (from Wikipedia imports) to ids
            possibleWikiSpan = headingTag.find_all('span', {'class' : 'mw-headline'})
            if len(possibleWikiSpan) > 0:
                # Create an id string from the header text
                innerText = possibleWikiSpan[0].text
                if innerText != "":
                    headingTag['id'] = slugify(innerText, allow_unicode=True)
                else:
                    headingTag['id'] = slugify(unicode(headingTag), allow_unicode=True)

                # Remove the span tag
                try:
                    del possibleWikiSpan[0]["id"]
                except:
                    pass
            else:
                # Create an id string from the header text
                innerText = headingTag.text
                if innerText != "":
                    headingTag['id'] = slugify(innerText, allow_unicode=True)
                else:
                    headingTag['id'] = slugify(unicode(headingTag), allow_unicode=True)
        except:
            pass

    # See what the page language is and make sure that certain strings are changed if it changes
    langRow = mainSoup.findAll("tr", {"data-key": "page_lang"})
    langTd = langRow[0].findAll("td", class_=re.compile(ur"meta-value", flags=re.UNICODE))
    theParsedLocale = langTd[0].string

    with translation.override(theParsedLocale):
        # Media Gallery
        theSection = mainSoup.findAll("section", class_='media-gallery')
        theHeader = theSection[0].findAll("h2", class_='section-headline')
        theHeader[0].string = gettext("Media Gallery")

        # References and Citations
        theSection = mainSoup.findAll("section", class_='reference-container')
        theHeader = theSection[0].findAll("h2", class_='section-headline')
        theHeader[0].string = gettext("References and Citations")

        # Page Type
        theRow = mainSoup.findAll("tr", {"data-key": "page_type"})
        theLabel = theRow[0].findAll("td", class_="no-edit")
        theLabel[0].string = gettext("Page Type")

        # Is Removed
        theRow = mainSoup.findAll("tr", {"data-key": "is_removed"})
        theLabel = theRow[0].findAll("td", class_="no-edit")
        theLabel[0].string = gettext("Removed From Site")

        # Is Adult Content
        theRow = mainSoup.findAll("tr", {"data-key": "is_adult_content"})
        theLabel = theRow[0].findAll("td", class_="no-edit")
        theLabel[0].string = gettext("Adult Content")

        # Page Language
        theRow = mainSoup.findAll("tr", {"data-key": "page_lang"})
        theLabel = theRow[0].findAll("td", class_="no-edit")
        theLabel[0].string = gettext("Page Language")

        # TODO
        # Link and media object rows labels need to be translated

    # Check the infoboxes and citation descriptions for page-allowed, but locally disallowed tags (like section and header)
    littleBoxes = mainSoup.findAll(True, {'class':['link-description', 'media-caption', 'ibox-nonplural-value', 'ibox-plural-value']})
    for littleBox in littleBoxes:
        for badTag in BAD_TAGS_LINK_AND_INFOBOX:
            for match in littleBox.findAll(badTag):
                match.unwrap()

    return deBeautifySoup(soup)

# BeautifulSoup has a tendency to add weird crap, so remove this and return
def deBeautifySoup(inputSoup, skipSlice=False):
    # Turn the HTML back into a string
    cleanedcontent = "".join([unicode(item) for item in inputSoup.contents])

    # Remove bad tags that BeautifulSoup tends to add
    for badTag in BAD_TAGS_BY_BEAUTIFULSOUP:
        cleanedcontent = cleanedcontent.replace(badTag, u"")

    # Replace certain HTML things
    for replaceStringPair in BLURB_STRING_REPLACES:
        cleanedcontent = cleanedcontent.replace(replaceStringPair[0], replaceStringPair[1])

    # Return the cleaned string
    if (skipSlice == False):
        return cleanedcontent.strip()[5:]
    else:
        return cleanedcontent.strip()

# Detect duplicate citation links
def dupeLinkDetector(inputURL, comparisonURLs=[]):
    variantURLs = [inputURL.replace(u"https://", u"http://"), inputURL.replace(u"https://www.", u"http://"), inputURL.replace(u"http://", u"https://"), inputURL.replace(u"http://www.", u"https://"),
                inputURL.replace(u"http://www.", u"http://"), inputURL.replace(u"https://www.", u"https://"), inputURL.replace(u"https://", u"https://www."), inputURL.replace(u"http://", u"http://www.")]

    # Create a second set of URLs with trailing slashes
    secondVariants = []
    for item in variantURLs:
        secondVariants.append(item + u"/")

    # Combine both sets of URLs
    variantURLs += secondVariants

    # Loop through the supplied URLs (comparisonURLs parameter) and test them against the variantURLs in search of duplicates
    try:
        for compURL in comparisonURLs:
            for variantURL in variantURLs:
                if compURL == variantURL:
                    print("DUPLICATE LINK DETECTED")
                    return True
    except:
        pass
    return False

# Generate the sitemap
def dispatchSitemapCreation():
    try:
        management.call_command('refresh_sitemap')
    except:
        pass

# Functionalized search. Allows for parallelization and threading
def normalSearch(searchterm):
    # jsonRequest = {
    #     "size": 20,
    #     "query": {
    #         "match_phrase_prefix": {
    #             "page_title": {
    #                 "query": searchterm,
    #                 "slop": 5,
    #                 "max_expansions": 500
    #             }
    #         }
    #     },
    #     "_source": []
    # }

    jsonRequest = {
        "size": 20,
        "query": {
            "bool": {
              "should": [
                  {
                      "multi_match": {
                          "query": searchterm,
                          "fields": [
                              "page_title"
                          ],
                          "type": "phrase_prefix",
                          "slop": 5,
                          "max_expansions": 250
                      }
                  },
                  {
                      "multi_match": {
                          "query": searchterm,
                          "fields": [
                              "page_title"
                          ],
                          "type": "phrase",
                          "boost": 5
                      }
                  }
              ],
            }
          },
        "_source": []
    }

    res = ELASTIC_OBJECT.search(index=ELASTICSEARCH_INDEX_NAME, body=jsonRequest)
    # parsed_json = json.loads(res)
    resultsList = []
    for item in res['hits']['hits']:
        sourceJSON = item['_source']
        resultsList.append({"id": sourceJSON["id"], "canonical_id": sourceJSON["canonical_id"], "page_title": sourceJSON["page_title"],
                            "score": item["_score"]})

    return resultsList


# Main search. Calls the normalSearch function with parallel threads
def mainSearch(url_param, search_type, searchterm, FETCH_LIMIT, BLURB_CHAR_LIMIT, passedLang='en'):
    try:
        # Get the results
        theResults = normalSearch(searchterm)
        print(len(theResults))

        # Remove duplicates from the search results
        seenIDs, cleanedResults = [], []
        for resultNugget in theResults:
            theCanonicalID = resultNugget["canonical_id"]

            # Mark the search result as seen so it can be checked for a duplicate later
            if theCanonicalID in seenIDs:
                pass
            else:
                seenIDs.append(theCanonicalID)
                cleanedResults.append({"canonical_id": resultNugget["canonical_id"], "score": resultNugget["score"]})

        # Assign a new variable and extract the article ids from the sorted results
        resultIDs = [int(x["canonical_id"]) for x in cleanedResults]
        idCommas = str(resultIDs)[1:-1]
        idString = "(" + idCommas + ")"

        # Get the full data for each article
        cursor = connection.cursor()
        queryString = """SELECT art.page_title, art.slug, art.photo_thumb_url, art.pageviews, art.is_adult_content, art.blurb_snippet, 
                              art.photo_url, art.id, art.ipfs_hash_current, art.page_lang FROM enterlink_articletable art 
                              WHERE art.id IN %s
                              ORDER BY art.is_adult_content ASC,
                              IF(art.page_lang='%s', 1, 0) DESC, 
                              FIELD(art.id, %s)
                              """ % (idString, passedLang, idCommas )

        cursor.execute(queryString)
        result = cursor.fetchall()

    except:
        print("USING DEFAULT SEARCH")
        result = 'nopersonfoundwiththatname'

    # Account for empty results
    try:
        if len(result) == 0:
            result = 'nopersonfoundwiththatname'
    except:
        result = 'nopersonfoundwiththatname'

    # Return the search results
    return result

def updateElasticsearch(articleObject, ACTION_TYPE="PAGE_UPDATED_OR_CREATED"):
    try:
        # NOTE: Elasticsearch is only indexing IDs, canonical IDs, and page titles. Technically, you only need to update in the following cases:
        # 4) A new page is created
        # 2) A page is removed
        # 3) The page title changes
        # 4) A merge / redirect
        if articleObject.redirect_page_id is None:
            canonicalID = articleObject.id
        else:
            canonicalID = articleObject.redirect_page_id
        jsonRequest = {
            "id": articleObject.id,
            "page_title": articleObject.page_title,
            "canonical_id": canonicalID,
        }
        # A new page is created
        if ACTION_TYPE == "PAGE_UPDATED_OR_CREATED":
            ELASTIC_OBJECT.index(index=ELASTICSEARCH_INDEX_NAME, body=jsonRequest, doc_type=ELASTICSEARCH_DOCUMENT_TYPE, id=articleObject.id)
        # A page is removed
        elif ACTION_TYPE == "PAGE_REMOVED":
            ELASTIC_OBJECT.delete(index=ELASTICSEARCH_INDEX_NAME, body=jsonRequest, doc_type=ELASTICSEARCH_DOCUMENT_TYPE, id=articleObject.id)
        # A merge / redirect
        elif ACTION_TYPE == "MERGE_REDIRECT":
            ELASTIC_OBJECT.index(index=ELASTICSEARCH_INDEX_NAME, body=jsonRequest, doc_type=ELASTICSEARCH_DOCUMENT_TYPE, id=articleObject.id)
    except:
        pass