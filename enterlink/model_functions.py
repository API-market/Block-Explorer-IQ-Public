from __future__ import unicode_literals
from bs4 import BeautifulSoup
from django.core import management
from django.db import connection
from django.db.models import Q
from django.template.defaultfilters import slugify
from threading import Thread
from operator import itemgetter
import os
import re
import unicodedata
import warnings
from fbwiki.settings import VALID_VIDEO_EXTENSIONS, VALID_AUDIO_EXTENSIONS

# Tags to replace in BeautifulSoup
BAD_TAGS = ['audio', 'head', 'map', 'math', 'mi', 'mo', 'mtd', 'mrow', 'mspace', 'mtext', 'msub', 'msup', 'mstyle',
            'semantics', 'usemap', 'xml', 'w:worddocument', 'm:mathpr', 'm:mathfont', 'code']

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
BLURB_STRING_REPLACES = [[u"<p></p>", u"<p><br></p>"]]

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

    # Clean up non-Everipedia leaks
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

    # Get the blurb
    blurbSoup = mainSoup.findAll(class_='blurb-wrap')

    # Find all the header tags and make sure they have ids. This is necessary for making the table of contents.
    for headingTag in blurbSoup[0].find_all(['h1','h2','h3','h4','h5','h6' ]):
        # Change h1's to h2's
        if headingTag.name == 'h1':
            headingTag.name = 'h2'

        try:
            # Convert mw-headlines (from Wikipedia imports) to ids
            possibleWikiSpan = headingTag.find_all('span', {'class' : 'mw-headline'})
            if len(possibleWikiSpan) > 0:
                # Create an id string from the header text
                innerText = possibleWikiSpan[0].text
                if innerText != "":
                    headingTag['id'] = slugify(innerText)
                else:
                    headingTag['id'] = slugify(unicode(headingTag))

                # Remove the span tag
                try:
                    del possibleWikiSpan[0]["id"]
                except:
                    pass
            else:
                # Create an id string from the header text
                innerText = headingTag.text
                if innerText != "":
                    headingTag['id'] = slugify(innerText)
                else:
                    headingTag['id'] = slugify(unicode(headingTag))
        except:
            pass

    # Turn the HTML back into a string
    cleanedcontent = "".join([unicode(item) for item in soup.contents])

    # Remove bad tags that BeautifulSoup tends to add
    for badTag in BAD_TAGS_BY_BEAUTIFULSOUP:
        cleanedcontent = cleanedcontent.replace(badTag, u"")

    # Replace certain HTML things
    for replaceStringPair in BLURB_STRING_REPLACES:
        cleanedcontent = cleanedcontent.replace(replaceStringPair[0], replaceStringPair[1])

    # Return the cleaned string
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

# Functionalized search. Allows for parallelization and threading
def normalSearch(searchterm, resultItem, index):
    # Set variables
    searchString = searchterm + '%'
    FETCH_LIMIT = 2500
    exclusionString = ""
    cursor = connection.cursor()

    # Search string to be executed
    queryString = """SELECT art.page_title, art.slug, NULL, art.pageviews, art.is_adult_content, NULL, 
                      NULL, COALESCE(art.redirect_page_id, art.id), %s
                      FROM enterlink_articletable art 
                      WHERE art.page_title LIKE %s 
                      AND art.page_title !=%s 
                      AND art.is_removed=0 
                      ORDER BY art.pageviews DESC LIMIT %s"""

    # Execute the search
    cursor.execute(queryString, (index, searchString, exclusionString, FETCH_LIMIT))

    # Pass the result by reference, essentially, to the caller. Used for threads.
    resultItem[index] = cursor.fetchall()

# Main search. Calls the normalSearch function with parallel threads
def mainSearch(url_param, search_type, searchterm, FETCH_LIMIT, BLURB_CHAR_LIMIT):
    try:
        # Split the search term into multiple parts. For example, Travis Moore would be ["Travis", "Moore", "Travis Moore"]
        # searchterm is added to handle exact matches
        searchTermList = [searchterm] + searchterm.split(" ")
        
        # See how many elements are in the search list
        try:
            splitLength = len(searchTermList)
        except:
            splitLength = []

        # Prepare variables for the parallel threads
        threadlist = []
        resultsList = [None] * splitLength
        
        # Create threads for each item in the search term list
        for index, searchitem in enumerate(searchTermList):
            thisThread = Thread(target=normalSearch, args=(searchitem, resultsList, index))
            threadlist.append(thisThread)
            thisThread.start()

        # Set a timeout of 30 seconds
        for threadItem in threadlist:
            threadItem.join(30)

        # Join all the thread results together
        comboList = []
        for resultItem in resultsList:
            comboList += list(resultItem)  # [[i[0],i[1]] for i in resultItem]

        # NFKD normalize the search terms so unicode ones are handled properly
        searchTermList = [unicodedata.normalize('NFKD', x).encode('ASCII', 'ignore').lower() for x in searchTermList]

        # Count the number of times a search term appears in a search result. For an example, "1960 Summer Olympics" has three terms:
        # "1960", "Summer", and "Olympics". If "1964 Summer Olympics" appeared in the search result, it would have a matchcount of 2
        # "1964 Winter Olympics" would only have a matchcount of 1. The purpose here it to rank the matches in terms if relevance.
        # The search result for "1960 Summer Olympics" would have a matchcount of 3, and would rank the highest.
        multiMatches = []
        for index, item in enumerate(comboList):
            matchcount = 0
            failcount = 0
            try:
                for match in searchTermList:
                    # Check how many times a search term appears in the search result
                    if (match in unicodedata.normalize('NFKD', item[0]).encode('ASCII', 'ignore').lower()):
                        matchcount += 1
                    else:
                        failcount += 1
                # Make sure a match occurs at least once
                if (splitLength <= 2):
                    if (failcount > 0):
                        raise
                else:
                    if (matchcount < 2):
                        raise
                # Append the match count and the length of the search result to the search result list
                resultNugget = list(item) + [matchcount] + [len(item[0])]
                multiMatches.append(resultNugget)

            except:
                continue


        # Sort the search results. Adult content is pushed down first, exact matches, high numbers of matches are surfaced and shorter titles
        # appear closer to the top.
        # Sorted sort order is outside in, remember that
        # adult_content [4], then exact match / word order / index [8], then title length [10], then # of matches
        multiMatches = sorted(sorted(sorted(sorted(multiMatches, key=itemgetter(9), reverse=True), key=itemgetter(10)), key=itemgetter(8)), key=itemgetter(4))
        result = multiMatches[:FETCH_LIMIT + 10]

        # Remove duplicates from the search results
        seenIDs, cleanedResult = [], []
        for resultNugget in result:
            theID = resultNugget[7]

            # Mark the search result as seen so it can be checked for a duplicate later
            if theID in seenIDs:
                pass
            else:
                seenIDs.append(theID)
                cleanedResult.append(resultNugget)

        # Assign a new variable and extract the article ids from the sorted results
        result = cleanedResult
        resultIDs = [int(x[7]) for x in result]
        idCommas = str(resultIDs)[1:-1]
        idString = "(" + idCommas + ")"

        # Get the full data for each article
        cursor = connection.cursor()
        queryString = """SELECT art.page_title, art.slug, art.photo_thumb_url, art.pageviews, art.is_adult_content, art.blurb_snippet, 
                              art.photo_url, art.id, art.ipfs_hash_current FROM enterlink_articletable art 
                              WHERE art.id IN %s
                              ORDER BY FIELD(art.id, %s)""" % (idString, idCommas)

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

# Generate the sitemap
def dispatchSitemapCreation():
    try:
        management.call_command('refresh_sitemap')
    except:
        pass

