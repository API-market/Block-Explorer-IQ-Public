# -*- coding: utf-8 -*-
from azure.storage.blob import BlockBlobService, ContentSettings
from bs4 import BeautifulSoup
from collections import Counter
from csscompressor import compress
from django.template.loader import render_to_string
from django.utils.crypto import get_random_string
from django.utils.html import strip_tags
from django.utils.translation import ugettext
from enterlink.model_functions import BAD_TAGS, linkCategorizer
from enterlink.models import SeeAlso, ArticleTable, EditProposal
from fbwiki.settings import AZURE_ACCOUNT_NAME, AZURE_ACCOUNT_KEY
from jsmin import jsmin
from threading import Thread
import difflib
import django.utils.text as DjangoText
import gzip
import random, re, time, os, sys
import StringIO
import timeout_decorator
import urllib

AMP_REGEXES = [r'<html.*</head>', r'</html', r' style=".*?"', r" style='.*?'", r' scope=".*?"', r' summary=".*?"',
                  r' item=".*?"', r" item='.*?'", r" align='.*?'", r' valign=".*?"', r' v=".*?"', r' rules=".*?"',
                  r' nowrap=".*?"',
                  r' size=".*?"', r' face=".*?"', r' color=".*?"', r' usemap=".*?"', r'<html><head></head>', r'</html>',
                  r' unselectable=".*?"', r' target=".*?"', r' onclick=".*?"']

# Generate the See Also units at the bottom of the article pages
def get_see_also_units(blurbOverride=""):
    # Get all of the ad-related units
    all_ad_units = SeeAlso.objects.filter(is_removed=False)
    single_page_units = []
    related_page_ad_units = []

    # Get all of the sitewide See Also units
    sitewide_ad_units = all_ad_units.filter(single_page=False, related_pages=False, all_pages=True, is_active=True)

    # Convert the units to a list instead of a QuerySet
    sitewide_list = list(sitewide_ad_units)

    # Get the id of the largest See Also unit
    max_id = len(sitewide_list) - 1

    # Select a random integer between 0 and the max unit ID
    pk = random.randint(0, max_id)

    # Get the randomly-selected ad
    sitewide_ad_pick = sitewide_list[pk]

    # Convert the page HTML into a BeautifulSoup and get a list of all of the blue links (to other wiki pages)
    try:
        theb = blurbOverride
        bsoup = BeautifulSoup(theb, "html5lib")
        bhrefs = bsoup.find_all('a', class_='tooltippable')
    except:
        theb = ""
        bsoup = ""
        bhrefs = ""


    # Try to find the most commonly linked articles on the page
    try:
        # Count the most common articles
        commonArticles = Counter(bhrefs).most_common(6)

        # Get the 1st and 2nd most common articles linked on the page
        firstLink = commonArticles[0][0]['href'].replace("/wiki", "").replace("https://www.everipedia.com/", "")
        secondLink = commonArticles[1][0]['href'].replace("/wiki", "").replace("https://www.everipedia.com/", "")

        # Format the links
        while firstLink.startswith('/') or firstLink.startswith('.'):
           firstLink = firstLink[1:]
        if firstLink.endswith("/"):
           firstLink = firstLink[:-1]
        while secondLink.startswith('/') or secondLink.startswith('.'):
           secondLink = secondLink[1:]
        if secondLink.endswith("/"):
           secondLink = secondLink[:-1]

        # Get the article objects from the links
        firstPage = getTheArticleObject(firstLink)[1]
        secondPage = getTheArticleObject(secondLink)[1]

        # Override the blurbs if applicable
        if (blurbOverride == ""):
            if firstPage == "":
               firstPage = ''
            elif secondPage == "":
               secondPage = ''
            else:
               pass
    except:
        firstPage = ''
        secondPage = ''

    # Make sure that the two suggestions themselves are not the same
    if firstPage != '' and firstPage == secondPage:
        secondPage = ''

    # Return some variables
    return(single_page_units, related_page_ad_units, sitewide_ad_pick, firstPage, secondPage)

# Render the table of contents for an article
def Prerender_Table_Of_Contents(blurbChunk, articleSlug, templateType, pageName, flags=[], isAuthenticated=False):
    # Convert the article blurb into a BeautifulSoup
    pageSoup = BeautifulSoup(blurbChunk, "html5lib")
    
    # Find all the headings and Wikipedia heading spans
    rawHeadings = pageSoup.find_all(['h1','h2','h3','h4','h5','h6' ])
    rawHeadings += pageSoup.find_all('span', {'class' : 'mw-headline'})

    # Loop through the raw headings and append them to the processed headings list
    processedHeadings = [[pageName, "toc-top","top", "top_header", "camera", "description"]]
    for listItem in rawHeadings:
        # Account for the Wikipedia spans and normal headings
        if (listItem.name == 'span'):
            fixedName = listItem.parent.name
        else:
            fixedName = listItem.name

        # Account for normal IDs
        if listItem.has_attr('id'):
            if listItem['id'] != "":
                theID = listItem['id']

                # Test for bad strings and add good ones to the processed header
                try:
                    for badString in ['idh2']:
                        if badString in theID:
                            raise
                    # Add the heading to the list
                    processedHeadings.append([listItem.getText(), theID, theID, theID, "controller-record", fixedName])
                except:
                    pass

    # Add the media gallery to the table of contents, if there are actually media present
    if "NO_GALLERY" not in flags:
        processedHeadings.append([ugettext("Images & Videos"), "mediaGallery", "gallery", "Gallery_Pseudo_ID", "camera", "gallery"])

    # Add the references to the ToC
    processedHeadings.append([ugettext("References"), "link_list_container","referenceList", "Reference_Links-button", "link", "references"])

    # # Add the page comments to the ToC
    # if not templateType == "BLOCKCHAIN_AMP":
    #     processedHeadings.append([ugettext("Article Discussion"), "pageCommentContainer","pageComments", "menu1-button", "chat", "discussion"])

    # Add the See Also pages to the ToC
    processedHeadings.append([ugettext("See Also"), "link_list_container", "seeAlsoPanel", "menu2-button", "new-message"])

    # Render the ToC to a string and return it
    return render_to_string('enterlink/template_table_of_contents.html', {'rawHeadings': processedHeadings,
                          'articleSlug': articleSlug, 'templateType': templateType, 'isAuthenticated': isAuthenticated})

# Clean up the article HTML so it passes Google AMP validation, which is used for the mobile pages
def ampSanitizer(inputBlurb, bypassRegex=False, hide_ads=True, pageSlug=""):
    try:
        # Create a copy of the blurb
        intermediate = inputBlurb

        # Remove strings with bad tags and attributes
        if bypassRegex == False:
            for compileItem in AMP_REGEXES:
                try:
                    pat = re.compile(compileItem, re.IGNORECASE)
                    intermediate = pat.sub('', intermediate)
                except:
                    pass

        # Store the sanitized blurb as the intermediate
        ampSanitizedBlurb = intermediate

        # Convert the blurb to a BeautifulSoup object
        ampSoup = BeautifulSoup(ampSanitizedBlurb, "html5lib")

        # Find the HTML tag and convert it into a div
        badWikipediaHTMLTag = ampSoup.findAll('html')[0]
        badWikipediaHTMLTag.name = 'div'

        # Replace <font> with <span>
        if bypassRegex == False:
            try:
                replacementTags = [['font', 'span']]

                for replaceTagPair in replacementTags:
                    listOfReplaces = ampSoup.findAll(replaceTagPair[0])
                    for item in listOfReplaces:
                        item.name = replaceTagPair[1]
            except:
                pass

        # Remove bad tags from the HTML
        try:
            for badTag in BAD_TAGS:
                listOfBads = ampSoup.findAll(badTag)
                for item in listOfBads:
                    item.extract()
        except:
            pass

        # Remove empty <p> tags to make the text look cleaner
        try:
            listOfBads = ampSoup.findAll('p', string=' ')
            for item in listOfBads:
                item.extract()
        except:
            pass

        # Remove tags with bad classes from the HTML
        try:
            badClasses = ['mwe-math-fallback-image-inline', 'sortkey', 'mw-graph-img','oly_at__img', 'timeline-wrapper', 'PopUpMediaTransform']

            for badClass in badClasses:
                listOfBadClasses = ampSoup.findAll(class_=badClass)
                for item in listOfBadClasses:
                    item.extract()
        except:
            pass

        # Get the innerHTML
        if ampSoup.body:
            ampSoup = ampSoup.body
        elif ampSoup.html:
            ampSoup = ampSoup.html
        else:
            pass

        # Since Google AMP has limited Javascript functions, special amp-lightbox panes with iframes must be created
        # These are needed for the hoverblurbs and the hoverlinks
        # Handle the hoverblurbs
        try:
            # Create a BeautifulSoup object from the HTML
            sanitizedSoup = BeautifulSoup(unicode(ampSoup), "html.parser")

            # List of all amp-lightboxes
            tooltipHoverblobs = []

            # Find the hoverblurb links
            tooltippableBlurbs = sanitizedSoup.findAll('a', class_='tooltippable')

            # Construct the AMP-compatible hoverblurb pane
            for index, ttBlurb in enumerate(tooltippableBlurbs):
                # Generate a random string for the tag ID
                unique_id = get_random_string(length=10)

                # Get the slug
                strippedUsername = urllib.quote_plus(ttBlurb['data-username'])

                # Get the text of the blue link
                anchorText = ''.join(ttBlurb.findAll( text = True )).strip()

                # Open button for the pane
                openButtonTag = sanitizedSoup.new_tag('button')
                openButtonTag['on'] = 'tap:hvrblb-%s__%s' % (strippedUsername, unique_id)
                openButtonTag['role'] = 'button'
                openButtonTag['tabindex'] = 0
                openButtonTag['aria-label'] = strippedUsername
                openButtonTag['aria-labelledby'] = 'hvrblb-%s__%s' % (strippedUsername, unique_id)
                openButtonTag['class'] = 'tooltippable'
                openButtonTag.string = anchorText

                # Reconstruct with interior tags
                try:
                    interiorTags = ttBlurb.find_all()
                    for intTag in interiorTags:
                        openButtonTag.append(intTag)
                except:
                    pass

                # Replace the <a> with the <button>
                ttBlurb.replace_with(openButtonTag)

                # Construct the amp-lightbox
                lightBoxTag = sanitizedSoup.new_tag('amp-lightbox')
                lightBoxTag['id'] = 'hvrblb-%s__%s' % (strippedUsername, unique_id)
                lightBoxTag['class'] = 'amp-hc'
                lightBoxTag['tabindex'] = 0
                lightBoxTag['role'] = 'button'
                lightBoxTag['on'] = 'tap:hvrblb-%s__%s.close' % (strippedUsername, unique_id)
                lightBoxTag['layout'] = 'nodisplay'

                # Construct the amp-iframe
                iframeTag = sanitizedSoup.new_tag('amp-iframe')
                iframeTag['class'] = 'amp-hc'
                iframeTag['sandbox'] = 'allow-same-origin allow-scripts allow-top-navigation'
                iframeTag['layout'] = 'fill'
                iframeTag['frameborder'] = '0'
                iframeTag['scrolling'] = 'no'
                iframeTag['src'] = 'https://www.iqnetwork.io/AJAX-REQUEST/AJAX_Hoverblurb/%s/?from-amp=1' % strippedUsername

                # Placeholder image (leave this here or it will cause stupid AMP problems)
                placeholderTag = sanitizedSoup.new_tag('amp-img')
                placeholderTag['layout'] = 'fill'
                placeholderTag['src'] = 'https://epcdn-vz.azureedge.net/static/images/white_dot.png'
                placeholderTag['placeholder'] = ''

                # Construct the amp-lightbox
                iframeTag.append(placeholderTag)
                lightBoxTag.append(iframeTag)

                # Convert the amp-lightbox into a string
                unicodeBlob = unicode(lightBoxTag.prettify())

                # Append the amp-lightbox raw HTML to the list
                tooltipHoverblobs.append(unicodeBlob)

            # Handle the hoverlinks
            tooltippableLinks = sanitizedSoup.findAll('a', class_='tooltippableCarat')
            for index, ttLink in enumerate(tooltippableLinks):
                # Generate a random string for the tag ID
                unique_id = get_random_string(length=10)

                # Encode the URL
                linkURLEncoded = urllib.quote_plus(ttLink['data-username'])
                try:
                    if "everipedia.com" in ttLink['href']:
                        quickSplit = ttLink['href'].replace('https://www.everipedia.com','').split('/')
                    elif "everipedia.org" in ttLink['href']:
                        quickSplit = ttLink['href'].replace('https://everipedia.org', '').split('/')
                    else:
                        quickSplit = ttLink['href'].split('/')
                except:
                    continue

                # Get the text of the link
                anchorText = ''.join(ttLink.findAll(text=True)).strip()

                # Open button for the pane
                openButtonTag = sanitizedSoup.new_tag('button')
                openButtonTag['on'] = 'tap:hvrlnk-%s' % unique_id
                openButtonTag['role'] = 'button'
                openButtonTag['tabindex'] = 0
                openButtonTag['aria-label'] = anchorText
                openButtonTag['aria-labelledby'] = 'hvrlnk-%s' % unique_id
                openButtonTag['class'] = 'tooltippableCarat'
                openButtonTag.string = anchorText

                # Replace the <a> with the <button>
                ttLink.replace_with(openButtonTag)

                # AMP-lightbox
                lightBoxTag = sanitizedSoup.new_tag('amp-lightbox')
                lightBoxTag['id'] = 'hvrlnk-%s' % unique_id
                lightBoxTag['class'] = 'amp-hc'
                lightBoxTag['tabindex'] = 0
                lightBoxTag['role'] = 'button'
                lightBoxTag['on'] = 'tap:hvrlnk-%s.close' % unique_id
                lightBoxTag['layout'] = 'nodisplay'

                # AMP-iframe
                iframeTag = sanitizedSoup.new_tag('amp-iframe')
                iframeTag['class'] = 'amp-hc'
                iframeTag['height'] = '250'
                iframeTag['sandbox'] = 'allow-same-origin allow-scripts allow-top-navigation'
                iframeTag['layout'] = 'fill'
                iframeTag['frameborder'] = '0'
                iframeTag['scrolling'] = 'no'
                iframeTag['src'] = 'https://www.iqnetwork.io/AJAX-REQUEST/AJAX_Hoverlink/%s/?from-amp=1&target_url=%s' % (pageSlug, linkURLEncoded)

                # Placeholder image (leave this here or it will cause stupid AMP problems)
                placeholderTag = sanitizedSoup.new_tag('amp-img')
                placeholderTag['layout'] = 'fill'
                placeholderTag['src'] = 'https://epcdn-vz.azureedge.net/static/images/white_dot.png'
                placeholderTag['placeholder'] = ''

                # Construct the amp-lightbox
                iframeTag.append(placeholderTag)
                lightBoxTag.append(iframeTag)

                # Convert the amp-lightbox into a string
                unicodeBlob = unicode(lightBoxTag.prettify())

                # Append the amp-lightbox raw HTML to the list
                tooltipHoverblobs.append(unicodeBlob)

            # Convert GIFs into amp-anim's
            theImages = sanitizedSoup.findAll('img', {'data-mimetype': 'image/gif'})
            for index, gifTag in enumerate(theImages):
                # Get the full and thumbnail URLs
                if gifTag.has_attr('data-src'):
                    fullImgSrc = gifTag['data-src']
                    thumbImgSrc = gifTag['src']
                else:
                    fullImgSrc = gifTag['src']
                    thumbImgSrc = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7'

                # Create the amp-anim
                ampAnimTag = sanitizedSoup.new_tag('amp-anim')
                ampAnimTag['width'] = "auto"
                ampAnimTag['height'] = 250
                ampAnimTag['layout'] = "fixed-height"
                ampAnimTag['data-mimetype'] = "image/gif"
                ampAnimTag['src'] = fullImgSrc

                # Placeholder image
                placeholderTag = sanitizedSoup.new_tag('amp-img')
                placeholderTag['layout'] = 'fill'
                placeholderTag['width'] = 1
                placeholderTag['height'] = 1
                placeholderTag['src'] = thumbImgSrc
                placeholderTag['placeholder'] = ''

                # Construct the amp-anim
                ampAnimTag.append(placeholderTag)
                gifTag.replace_with(ampAnimTag)


            # Collect all the non-GIF images
            theImages = sanitizedSoup.findAll('img', {'data-mimetype': re.compile(r'^image\/(?!gif).*$')})
            theImages.extend(sanitizedSoup.findAll('img', class_='caption-video'))

            # Convert images to amp-img's
            for index, picTag in enumerate(theImages):
                # Get the full and thumbnail URLs
                if picTag.has_attr('data-src'):
                    fullImgSrc = picTag['data-src']
                    thumbImgSrc = picTag['src']
                else:
                    fullImgSrc = picTag['src']
                    thumbImgSrc = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7'

                # Create the amp-img
                ampImgTag = sanitizedSoup.new_tag('amp-img')
                ampImgTag['width'] = "auto"
                ampImgTag['height'] = 250
                ampImgTag['layout'] = "fixed-height"
                ampImgTag['data-mimetype'] = picTag['data-mimetype']
                ampImgTag['src'] = fullImgSrc

                # Placeholder image
                placeholderTag = sanitizedSoup.new_tag('amp-img')
                placeholderTag['layout'] = 'fill'
                placeholderTag['width'] = 1
                placeholderTag['height'] = 1
                placeholderTag['src'] = thumbImgSrc
                placeholderTag['placeholder'] = ''

                # Construct the amp-img
                ampImgTag.append(placeholderTag)
                picTag.replace_with(ampImgTag)

            # Convert HTML5 Videos to amp-video's
            theImages = sanitizedSoup.findAll('video')
            for index, videoTag in enumerate(theImages):
                # Create the amp-video
                ampVideoTag = sanitizedSoup.new_tag('amp-video')
                ampVideoTag['width'] = "auto"
                ampVideoTag['height'] = 250
                ampVideoTag['layout'] = "fixed-height"
                ampVideoTag['preload'] = "metadata"
                ampVideoTag['data-mimetype'] = videoTag['data-mimetype']
                ampVideoTag.string = " "

                # Create the source tag
                sourceTag = sanitizedSoup.new_tag('source')
                sourceTag['src'] = videoTag['src'] + "#t=0.1"
                sourceTag['type'] = videoTag['data-mimetype']

                # Construct the amp-video HTML
                ampVideoTag.append(sourceTag)
                videoTag.replace_with(ampVideoTag)

        except:
            sanitizedSoup = ampSoup

    except Exception, e:
        print(unicode(e))
        return([inputBlurb, ""])

    # Check for remaining images in the HTML and make sure they have heights and widths
    allImages = sanitizedSoup.findAll(re.compile(r'(img|amp-img)'))
    for imgTag in allImages:
        useFixTag = False
        if imgTag.has_attr('height'):
            if imgTag['height'] == "100%":
                imgTag['height'] = 275
                useFixTag = True
        else:
            imgTag["height"] = 275
            useFixTag = True

        if imgTag.has_attr('width'):
            if imgTag['width'] == "100%":
                imgTag['width'] = 275
                useFixTag = True
        else:
            imgTag["width"] = 275
            useFixTag = True

        if useFixTag == True:
            ampFixTag = sanitizedSoup.new_tag('div', **{'class':'amp-san-picfix'})
            contents = imgTag.replace_with(ampFixTag)
            ampFixTag.append(contents)

        # Cleans up remaining images (mainly from wikipedia imports). Will fail for GIFs
        if imgTag.name == 'img':
            try:
                if not imgTag.has_attr('placeholder'):
                    # Construct the amp-img
                    ampImgTag = sanitizedSoup.new_tag('amp-img')
                    ampImgTag['width'] = imgTag['width']
                    ampImgTag['height'] = imgTag["height"]
                    ampImgTag['layout'] = "fixed"
                    ampImgTag['src'] = imgTag['src']

                    # Replace the img with amp-img
                    imgTag.replace_with(ampImgTag)
            except:
                pass

    # Convert the BeautifulSoup to a string
    sanitizedText = unicode("".join([unicode(x) for x in sanitizedSoup.contents]))

    # Replace font tags with spans
    pat = re.compile(r'<font.*?>?')
    temp2 = pat.sub('<span>', sanitizedText)
    pat = re.compile(r"</font>")
    sanitizedText = pat.sub('</span>', temp2)

    # Attribute cleanup
    if bypassRegex == False:
        badAttributes = [r"border=\".*?\"", r"pic_id=\".*?\"", r'style=".*?"', r"style='.*?'", r'xml:lang=".*?"']
        for badAttribute in badAttributes:
            pat = re.compile(badAttribute)
            sanitizedText = pat.sub('', sanitizedText)

    # Clean up tooltip attributes
    sanitizedText = sanitizedText.replace(" style=\"color: #71b8e4;\"", "")
    sanitizedText = sanitizedText.replace(" style=\"color: #71b8e4; font-face: bold; text-decoration: none;\"", "")

    # Add all the amp-lightbox constructs to the list
    tooltipChunk = ""
    try:
        for ttBlob in tooltipHoverblobs:
            tooltipChunk += ttBlob
    except:
        tooltipChunk = ""

    # Return the amp-sanitized text as well as the list of amp-lightboxes
    return [sanitizedText, tooltipChunk]

# Split the blurb into two parts. This is for the mobile AMP page (one before the infobox, one after)
def blurbSplitter(inputBlurb, truncateLimit=0, miniblurb=False):
    try:
        # Create a BeautifulSoup
        blurbSoup = BeautifulSoup(inputBlurb, "html.parser")
        badNuggets = ['<p><span></span></p>']
        goodParaFound = False

        # Search the first 10 <p> tags
        for pIndex in xrange(0,10):
            if (goodParaFound):
                break
            try:
                paraNugget = blurbSoup.findAll('p')[pIndex]
                # Find the first <p> tag that is at least 25 characters long
                assert (len(strip_tags(unicode(paraNugget))) > 25)
                try:
                    # If the bad nugget is found, break the loop
                    for badNug in badNuggets:
                        if paraNugget == badNug :
                            raise
                    goodParaFound = True
                    break
                except:
                    paraNugget.extract()
            except:
                pass
        if not goodParaFound:
            raise

        # Conver the first paragraph into a string, then remove it from the soup
        firstPara = unicode(paraNugget)
        paraNugget.extract()

        # Convert the remaining blurb into a string
        remainingChunk = unicode(blurbSoup)
    except:
        # If the first paragraph could not be found, just get the blurb itself
        try:
            if (truncateLimit == 0):
                firstPara = unicode(inputBlurb)
            else:
                firstPara = unicode(inputBlurb[0:truncateLimit])
            remainingChunk = ""
        except:
            if (truncateLimit == 0):
                firstPara = unicode(inputBlurb.decode('utf-8'))
            else:
                firstPara = unicode(inputBlurb[0:truncateLimit].decode('utf-8'))
            remainingChunk = ""

    # Return the first paragraph and the remaining blurb
    return [firstPara, remainingChunk]

# Refresh the Azure blob for the article
@timeout_decorator.timeout(15, use_signals=False)
def refreshTemplateCacheBlockchain(ipfs_hash, htmlBlob, folderPath):
    # Gzip the HTML
    out = StringIO.StringIO()
    with gzip.GzipFile(fileobj=out, compresslevel=9, mode="w") as f:
        f.write(htmlBlob)
    gZipBlob = out.getvalue()

    # Construct the file name
    fileName = '%s.html.gz' % ipfs_hash

    # Upload the gzipped HTML
    block_blob_service = BlockBlobService(account_name=AZURE_ACCOUNT_NAME, account_key=AZURE_ACCOUNT_KEY)
    theSettings = ContentSettings(content_type='text/html', content_encoding='gzip')
    block_blob_service.create_blob_from_text(folderPath, fileName, gZipBlob, content_settings=theSettings)
    return gZipBlob

# Calculate the difference between two HTML strings
def getDiffs(textBlob1, textBlob2):
    # BeautifulSoup the first HTML string
    blob1Soup = BeautifulSoup(textBlob1, "html.parser")

    # Remove the <head> tag
    theHead = blob1Soup.find_all("head")
    theHead[0].extract()

    # Remove problematic tags that BeautifulSoup tends to add
    resultCollection = blob1Soup.findAll("html")
    for item in resultCollection:
        item.unwrap()
    resultCollection = blob1Soup.findAll("head")
    for item in resultCollection:
        item.unwrap()
    resultCollection = blob1Soup.findAll("body")
    for item in resultCollection:
        item.unwrap()

    # BeautifulSoup the second HTML string
    blob2Soup = BeautifulSoup(textBlob2, "html.parser")

    # Remove the <head> tag
    theHead = blob2Soup.find_all("head")
    theHead[0].extract()

    # Remove problematic tags that BeautifulSoup tends to add
    resultCollection = blob2Soup.findAll("html")
    for item in resultCollection:
        item.unwrap()
    resultCollection = blob2Soup.findAll("head")
    for item in resultCollection:
        item.unwrap()
    resultCollection = blob2Soup.findAll("body")
    for item in resultCollection:
        item.unwrap()

    # Convert the soups into HTML strings
    textBlob1 = unicode(blob1Soup).replace("<!DOCTYPE html>", "")
    textBlob2 = unicode(blob2Soup).replace("<!DOCTYPE html>", "")

    # Get a list of all the lines
    text1_lines = textBlob1.splitlines()
    text2_lines = textBlob2.splitlines()

    # Compare differences between the lines
    d = difflib.HtmlDiff()
    theFile = d.make_file(text2_lines, text1_lines)
    return theFile

# Return the page object from either a slug or an IPFS hash
def getTheArticleObject(theParam):
    cleaned_url_param = theParam

    # Test first for an IPFS hash
    if (cleaned_url_param[0:2] == "Qm"):
        try:
            articleObject = ArticleTable.objects.get(ipfs_hash_current__iexact=cleaned_url_param)
        except:
            try:
                testProposal = EditProposal.objects.get(proposed_article_hash__iexact=cleaned_url_param)
                articleObject = testProposal.article
            except:
                pass
    # Try various other encodings of the slug to try to find a match
    else:
        try:
            try:
                cleaned_url_param = urllib.quote_plus(theParam.encode("utf8").replace(" ", "_"), safe="").replace("%252F", "%2F")
                articleObject = ArticleTable.objects.get(slug__iexact=cleaned_url_param)
            except:
                try:
                    cleaned_url_param = urllib.unquote(cleaned_url_param).replace("%25", "%")
                    articleObject = ArticleTable.objects.get(slug__iexact=cleaned_url_param)
                except:
                    quickSplit = theParam.split(u"#")[0].split(u"%23")
                    cleaned_url_param = quickSplit[0]
                    if (cleaned_url_param[0] == '/'):
                        cleaned_url_param = cleaned_url_param[1:]
                    articleObject = ArticleTable.objects.get(slug__iexact=cleaned_url_param)
        except:
            try:
                articleObject = ArticleTable.objects.get(slug__iexact=theParam)
                cleaned_url_param = theParam
            except:
                try:
                    articleObject = ArticleTable.objects.get(slug_alt__iexact=theParam)
                    cleaned_url_param = articleObject.slug
                except:
                    try:
                        cleaned_url_param = urllib.quote_plus(theParam.encode("utf8").replace(" ", "_"), safe="").replace("%252F", "%2F")
                        articleObject = ArticleTable.objects.get(slug_alt__iexact=cleaned_url_param)
                    except:
                        try:
                            cleaned_url_param = urllib.unquote(cleaned_url_param).replace("%25", "%")
                            articleObject = ArticleTable.objects.get(slug_alt__iexact=cleaned_url_param)
                        except:
                            pass

    # Check if the article has a redirect page and if so, return it
    if (articleObject.redirect_page != None):
        articleObject = articleObject.redirect_page
        cleaned_url_param = articleObject.slug

    # Return the canonical slug and the article object
    return ([cleaned_url_param, articleObject])

# Parse the raw HTML for the page into a JSON dictionary
def parseBlockchainHTML(htmlBlob, useAMP=False):
    # Convert the HTML string into a BeautifulSoup
    theSoup = BeautifulSoup(htmlBlob, "html5lib")

    # Set the dictionary
    parsedDictionary = {}

    # Remove bad tags
    badTagPairs = [("thumbcaption", "magnify"), ("blurb-wrap", "thumbinner")]
    for pair in badTagPairs:
        try:
            badNodeParents = theSoup.findAll(class_=pair[0])
            for parentNode in badNodeParents:
                badNodes = parentNode.findAll(class_=pair[1])[0]
                for badNode in badNodes:
                    badNode.extract()
        except:
            pass

    # Extract the page title
    pageTitle = ""
    itemMappedName = "Title"
    try:
        # Find the page title
        targetNode = theSoup.findAll("h1", class_="page-title")

        # Convert the title node into a string
        itemValue = targetNode[0].encode_contents(indent_level=None, encoding='utf-8').strip()

        # Store the page title
        pageTitle = itemValue
        parsedDictionary.update({"PAGETITLE": itemValue})
    except:
        print("%s not found" % itemMappedName)

    # Extract the main photo
    photoObject = {}
    itemMappedName = "Main Photo"
    try:
        # Find the main photo
        targetNode = theSoup.findAll(class_="main-photo-wrap")
        photoNode = targetNode[0].findAll("img", class_="main-photo")

        # Collect the photo URL and thumbnail URL
        photoURL = photoNode[0]["src"]
        photoThumb = photoNode[0]["data-thumbnail"]

        # Try to find the caption, if present
        try:
            captionNode = targetNode[0].findAll("figcaption", class_="main-photo-caption")
            photoCaption = captionNode[0].encode_contents(indent_level=None, encoding='utf-8').strip()
        except:
            photoCaption = ""

        # Try to find the photo attribution, if present
        try:
            captionAttributionNode = targetNode[0].findAll(class_="main-photo-og-url")
            captionAttributionURL = captionAttributionNode[0].encode_contents(indent_level=None, encoding='utf-8').strip()
        except:
            captionAttributionURL = None

        # Store the photo data into a dictionary
        photoObject = {"url": photoURL, "thumb": photoThumb, "caption": photoCaption, "attribution_url": captionAttributionURL}
        parsedDictionary.update({"PHOTOOBJECT": photoObject})
    except Exception as e:
        print("%s not found" % itemMappedName)

    # AMP validation requires a specific dimension for a photo, so calculate that by starting this thread
    if useAMP:
        from enterlink.threadCommander import threadHandlerTemplate
        try:
            if (photoObject['url'] != ""):
                # Get the image size
                resultsCollectionPhoto = [["", "", ""], None, photoObject['url']]
                tPhoto = Thread(target=threadHandlerTemplate, args=("GET_IMAGE_SIZE", 0, resultsCollectionPhoto, None))
                tPhoto.start()
        except:
            pass

    # Extract the blob box, which is another name for the Wikipedia-imported info boxes
    blobBoxObject = ""
    itemMappedName = "Blob Box"
    try:
        # Try to find the blob box
        targetNode = theSoup.findAll("div", class_="blobbox-wrap")
        itemValue = targetNode[0].encode_contents(indent_level=None, encoding='utf-8').strip()

        # Store the data
        blobBoxObject = itemValue
        parsedDictionary.update({"BLOBBOX": blobBoxObject})
    except Exception as e:
        parsedDictionary.update({"BLOBBOX": ""})

    # Try to find the infobox
    nonpluralObjects, pluralPackages = [], []
    itemMappedName = "Infobox Objects"
    try:
        # Find the singular infobox items
        nonpluralNodes = theSoup.findAll("table", class_="ibox-item-nonplural")
        for nonpluralNode in nonpluralNodes:
            keyNode = nonpluralNode.findAll(class_="ibox-nonplural-key")
            key = keyNode[0].encode_contents(indent_level=None, encoding='utf-8').strip()

            valueNode = nonpluralNode.findAll(class_="ibox-nonplural-value")
            value = valueNode[0].encode_contents(indent_level=None, encoding='utf-8').strip()

            # Try to get schema.org properties
            try:
                schemaNode = nonpluralNode.findAll(class_="ibox-schema")
                schema = schemaNode[0].encode_contents(indent_level=None, encoding='utf-8').strip()
            except:
                schema = ""

            try:
                addlschematypeNode = nonpluralNode.findAll(class_="ibox-additionalschematype")
                addlSchematype = addlschematypeNode[0].encode_contents(indent_level=None, encoding='utf-8').strip()
            except:
                addlSchematype = ""

            try:
                addlschemaitempropNode = nonpluralNode.findAll(class_="ibox-addl_schema_itemprop")
                addlSchemaItemprop = addlschemaitempropNode[0].encode_contents(indent_level=None, encoding='utf-8').strip()
            except:
                addlSchemaItemprop = ""

            nonpluralObjects.append({"key": key, "value": value, "schema": schema, "addlSchematype": addlSchematype, "addlSchemaItemprop": addlSchemaItemprop})
    except Exception as e:
        print("%s not found" % itemMappedName)

    # Find the plural infobox items
    pluralNodes = theSoup.findAll("table", class_="ibox-item-plural")
    try:
        for pluralNode in pluralNodes:
            keyNode = pluralNode.findAll(class_="ibox-plural-key-inner")
            key = keyNode[0].encode_contents(indent_level=None, encoding='utf-8').strip()

            # Try to get schema.org properties
            try:
                schemaNode = pluralNode.findAll(class_="ibox-schema")
                schema = schemaNode[0].encode_contents(indent_level=None, encoding='utf-8').strip()
            except:
                schema = ""

            try:
                addlschematypeNode = pluralNode.findAll(class_="ibox-additionalschematype")
                addlSchematype = addlschematypeNode[0].encode_contents(indent_level=None, encoding='utf-8').strip()
            except:
                addlSchematype = ""

            try:
                addlschemaitempropNode = pluralNode.findAll(class_="ibox-addl_schema_itemprop")
                addlSchemaItemprop = addlschemaitempropNode[0].encode_contents(indent_level=None, encoding='utf-8').strip()
            except:
                addlSchemaItemprop = ""

            valueNodes = pluralNode.findAll("td", class_="ibox-plural-value")
            pluralObjects = []
            for valueNode in valueNodes:
                value = valueNode.encode_contents(indent_level=None, encoding='utf-8').strip()
                pluralObjects.append({"key": key, "value": value, "schema": schema, "addlSchematype": addlSchematype, "addlSchemaItemprop": addlSchemaItemprop})
            pluralPackages.append({"key": key, "objects": pluralObjects})
        parsedDictionary.update({"NONPLURAL_INFOBOXES": nonpluralObjects})
        parsedDictionary.update({"PLURAL_INFOBOX_PACKAGES": pluralPackages})
    except Exception as e:
        print("%s not found" % itemMappedName)

    # Parse the media objects from the article
    parseTinyMCE_Media(theSoup, parsedDictionary)

    # Parse the citations from the article
    parseTinyMCE_Citations(theSoup, parsedDictionary)

    # Find the page metadata
    pageMetaObjects = {}
    itemMappedName = "Page Metadata"
    try:
        # Find the metadata key-value pairs
        metaNodes = theSoup.findAll("tr", class_="data-pair")
        for metaNode in metaNodes:
            dataRowNode = metaNode.findAll("td")
            dataRowValue = dataRowNode[1].encode_contents(indent_level=None, encoding='utf-8').strip()
            pageMetaObjects[metaNode["data-key"]] = dataRowValue
        parsedDictionary.update({"PAGEMETADATA": pageMetaObjects})
    except Exception as e:
        print("%s not found" % itemMappedName)

    # Get the article slug
    articleSlug = pageMetaObjects["url_slug"]

    # Get the article blurb / description
    blurbObject = ""
    itemMappedName = "Description"
    try:
        targetNode = theSoup.findAll(class_="blurb-wrap")
        itemValue = targetNode[0].encode_contents(indent_level=None, encoding='utf-8').strip()
        blurbObject = itemValue

        parsedDictionary.update({"BLURB": blurbObject})
    except Exception as e:
        print("%s not found" % itemMappedName)

    # Generate a flag if there are no media objects
    if (len(parsedDictionary["MEDIA_OBJECTS"]) == 0):
        flags = ['NO_GALLERY']
    else:
        flags = []

    # Generate the table of contents depending on desktop / tablet or mobile
    if useAMP:
        renderedTableOfContents = Prerender_Table_Of_Contents(blurbObject, pageMetaObjects['url_slug'], 'BLOCKCHAIN_AMP', pageTitle, flags, False)
    else:
        renderedTableOfContents = Prerender_Table_Of_Contents(blurbObject, pageMetaObjects['url_slug'], 'BLOCKCHAIN', pageTitle, flags, False)

    # Update the Django context dictionary
    parsedDictionary.update({"tableOfContentsChunk": renderedTableOfContents})
    parsedDictionary.update({"SEEALSOS": get_see_also_units(blurbObject)})

    # Use either the mobile or desktop / tablet templates to render the parsed data into the article page
    # Mobile
    if useAMP:
        # Create the infobox HTML block and sanitize it for AMP-validation
        infoboxBlob = render_to_string('enterlink/infobox_amp_json_blockchain.html', parsedDictionary)
        sanitizedInfoboxCollection = ampSanitizer(infoboxBlob, hide_ads=True, pageSlug=articleSlug)
        ampSanitizedInfobox = sanitizedInfoboxCollection[0] + sanitizedInfoboxCollection[1]
        parsedDictionary.update({"ampSanitizedInfobox": ampSanitizedInfobox})

        # Create the citation HTML block and sanitize it for AMP-validation
        linksetBlob = render_to_string('enterlink/template_amp_links_json_blockchain.html', parsedDictionary)
        quickLinksetArr = ampSanitizer(linksetBlob, bypassRegex=True, hide_ads=True, pageSlug=articleSlug)
        ampSanitizedLinkset = quickLinksetArr[0] + quickLinksetArr[1]
        parsedDictionary.update({"ampSanitizedLinkset": ampSanitizedLinkset})

        # Create the media gallery HTML block and sanitize it for AMP-validation
        photoGalleryBlob = render_to_string('enterlink/template_photos_amp_json_blockchain.html', parsedDictionary)
        quickPhotoGalleryArr = ampSanitizer(photoGalleryBlob, hide_ads=True, pageSlug=articleSlug)
        ampSanitizedPhotoGallery = quickPhotoGalleryArr[0] + quickPhotoGalleryArr[1]
        parsedDictionary.update({"ampSanitizedPhotoGallery": ampSanitizedPhotoGallery})

        # Compress the AMP CSS
        parsedDictionary.update({"USE_BLOCKCHAIN_AMP_CSS": True})
        compressedCSSBlob = compress(render_to_string('enterlink/inline-css/amp_style.html', parsedDictionary))
        parsedDictionary.update({"compressedCSSBlob": compressedCSSBlob})

        # AMP-sanitize the main article text
        ampSanitizedBlurb, tooltipChunk = "", ""
        try:
            sanitizedCollection = ampSanitizer(blurbObject, hide_ads=True, pageSlug=articleSlug)
            ampSanitizedBlurb = sanitizedCollection[0]
            tooltipChunk = sanitizedCollection[1]
        except:
            ampSanitizedBlurb = ""
            tooltipChunk = ""

        # Generate the stripped blurb summary
        try:
            stripped_blurb_summary = strip_tags(ampSanitizedBlurb.replace("[+]", "").replace("[]", ""))[:255]
        except:
            stripped_blurb_summary = ''

        # If the blurb is short, auto-generate one
        if len(stripped_blurb_summary) < 5:
                stripped_blurb_summary = "%s %s. %s" % (ugettext('Wiki and references for'), pageTitle,
                                                        ugettext('You can edit something on this wiki now!'))

        # Add the stripped blurb to the Django context
        parsedDictionary.update({"PREFETCH_BLURB_255_STRIPPED": stripped_blurb_summary})

        # Split the blurb into two parts: a small section above the infobox and a larger one after it
        splitBlurbSet = blurbSplitter(ampSanitizedBlurb)
        splitBlurbSet.append(tooltipChunk)
        parsedDictionary.update({"splitBlurbSet": splitBlurbSet})

        # Finish the thread for calculation the profile photo dimensions
        try:
            if (photoObject['url'] != ""):
                tPhoto.join(30)
                photoData = resultsCollectionPhoto[1]
                if photoData is None:
                    photoData = [850, 850, 'NOTHING']
            else:
                photoData = [1050, 1050, 'image/png']
        except:
            photoData = [1050, 1050, 'image/png']
        parsedDictionary.update({"photoData": photoData})

        # AMP-sanitize the photo caption
        try:
            quickCommentCollection = ampSanitizer(photoObject["caption"], hide_ads=True, pageSlug=articleSlug)
            ampSanitizedPhotoComment = quickCommentCollection[0] + quickCommentCollection[1]
            if (ampSanitizedPhotoComment is None):
                ampSanitizedPhotoComment = ""
        except:
            ampSanitizedPhotoComment = ""
        parsedDictionary.update({"ampSanitizedPhotoComment": ampSanitizedPhotoComment})

    # Desktop / Tablet
    else:
        # Compress CSS for the table of contents
        compressedCSSBlob_PUSH_LEFT_COMPONENT = compress(render_to_string('enterlink/inline-css/pushleftcomponent.html', parsedDictionary))
        parsedDictionary.update({"compressedCSSBlob_PUSH_LEFT_COMPONENT": compressedCSSBlob_PUSH_LEFT_COMPONENT})

        # Bootstrap CSS
        compressedCSSBlob_BOOTSTRAP_CUSTOM_TEMPLATE = compress(render_to_string('enterlink/inline-css/bootstrap-custom-EP-template-optimized.html', parsedDictionary))
        parsedDictionary.update({"compressedCSSBlob_BOOTSTRAP_CUSTOM_TEMPLATE": compressedCSSBlob_BOOTSTRAP_CUSTOM_TEMPLATE})

        # Sitewide CSS
        compressedCSSBlob_COMMON = compress(render_to_string('enterlink/inline-css/common-css-template-desktop-only.html', parsedDictionary))
        parsedDictionary.update({"compressedCSSBlob_COMMON": compressedCSSBlob_COMMON})

        # Navigation bar CSS
        compressedCSSBlob_APPLICATION = compress(render_to_string('enterlink/inline-css/application.html', parsedDictionary))
        parsedDictionary.update({"compressedCSSBlob_APPLICATION": compressedCSSBlob_APPLICATION})

        # Featherlight (a lightbox / popup) CSS
        compressedCSSBlob_FEATHERLIGHT = compress(render_to_string('enterlink/inline-css/featherlight-min.html', parsedDictionary))
        parsedDictionary.update({"compressedCSSBlob_FEATHERLIGHT": compressedCSSBlob_FEATHERLIGHT})

        # Tooltip / hover cards JS
        compressedJSBlob_AJAX_TOOLTIPPABLES = jsmin(render_to_string('enterlink/inline-js/enterlink-ajax-tooltippables.html', parsedDictionary))
        parsedDictionary.update({"compressedJSBlob_AJAX_TOOLTIPPABLES": compressedJSBlob_AJAX_TOOLTIPPABLES})

        # Search JS
        compressedJSBlob_EXECUTE_SEARCH = jsmin(render_to_string('enterlink/inline-js/enterlink-ajax-execute-search.html', parsedDictionary))
        parsedDictionary.update({"compressedJSBlob_EXECUTE_SEARCH": compressedJSBlob_EXECUTE_SEARCH})

    return parsedDictionary

# Parse the citations into JSON objects
def parseTinyMCE_Citations(theSoup, parsedDictionary):
    citationObjects, socialLinkObjects = [], []
    itemMappedName = "Citations"
    try:
        targetNodes = theSoup.findAll("li", class_="link-row")
        for targetNode in targetNodes:
            try:
                # Link thumbnail
                try:
                    thumbNode = targetNode.findAll(class_="link-thumb")
                    citeThumb = thumbNode[0]["src"]
                except:
                    try:
                        thumbNode = targetNode.findAll(class_="link-thumb")
                        citeThumb = thumbNode[0]["src"]
                    except:
                        citeThumb = ""

                # Citation number
                try:
                    integerNode = targetNode.findAll(class_="link-url-citation-number")
                    citeInteger = integerNode[0].encode_contents(indent_level=None, encoding='utf-8').strip()
                except:
                    citeInteger = 0

                # URL
                try:
                    urlNode = targetNode.findAll(class_="link-url")
                    citeURL = urlNode[0]["href"]
                except:
                    urlNode = targetNode.findAll(class_="link-url-wrap")
                    citeURL = urlNode[0].encode_contents(indent_level=None, encoding='utf-8').strip()

                # Link description
                try:
                    descriptionNode = targetNode.findAll(class_="link-description")
                    citeDescription = descriptionNode[0].encode_contents(indent_level=None, encoding='utf-8').strip()
                except:
                    citeDescription = ""

                # Timestamp
                try:
                    timestampNode = targetNode.findAll(class_="link-timestamp")
                    citeTimestamp = timestampNode[0].encode_contents(indent_level=None, encoding='utf-8').strip()
                except:
                    citeTimestamp = ""

                # Is the link social media (e.g. Facebook, Twitter, etc)
                try:
                    socialNode = targetNode.findAll(class_="link-social-media")
                    isSocial = socialNode[0].encode_contents(indent_level=None, encoding='utf-8').strip()
                except:
                    isSocial = False

                # Link attribution, if present
                try:
                    attrNode = targetNode.findAll(class_="link-attr")
                    citeAttr = attrNode[0].encode_contents(indent_level=None, encoding='utf-8').strip()
                except:
                    citeAttr = ""

                # MIME type
                try:
                    mimeNode = targetNode.findAll(class_="link-mime")
                    citeMIME = mimeNode[0].encode_contents(indent_level=None, encoding='utf-8').strip()
                except:
                    citeMIME = ""

                # Categorize the link
                citeCategory = linkCategorizer(citeURL, citeMIME)

                # Add the citation to the list
                citationObjects.append(
                    {"url": citeURL, "thumb": citeThumb, "description": citeDescription, "category": citeCategory,
                     "integer": citeInteger, "isSocial": isSocial, "attr": citeAttr, "timestamp": citeTimestamp,
                     "mime": citeMIME})

            except Exception as e:
                print(e)

        parsedDictionary.update({"CITATION_OBJECTS": citationObjects})
    except Exception as e:
        print("%s not found" % itemMappedName)

    return parsedDictionary

# Parse the media into JSON objects
def parseTinyMCE_Media(theSoup, parsedDictionary):
    # Set some variables
    mediaObjects = []

    # Indicate whether to load certain AMP JS libraries
    LOAD_YOUTUBE_JS = False
    LOAD_AUDIO_JS = False
    LOAD_VIDEO_JS = False

    # Collect the media gallery items
    itemMappedName = "Media Gallery"
    try:
        targetNodes = theSoup.findAll("li", class_="media-row")
        for targetNode in targetNodes:
            mediaNode = targetNode.findAll(class_="media-obj")

            # Caption for the media object
            captionNode = targetNode.findAll(class_="media-caption")
            mediaCaption = captionNode[0].encode_contents(indent_level=None, encoding='utf-8').strip()

            # Classification (IMAGE, YOUTUBE, VIDEO, etc)
            classNode = targetNode.findAll(class_="media-class")
            mediaClass = classNode[0].encode_contents(indent_level=None, encoding='utf-8').strip()

            # MIME type
            mimeNode = targetNode.findAll(class_="media-mime")
            mediaMIME = mimeNode[0].encode_contents(indent_level=None, encoding='utf-8').strip()

            # Timestamp
            timestampNode = targetNode.findAll(class_="media-timestamp")
            mediaTimestamp = timestampNode[0].encode_contents(indent_level=None, encoding='utf-8').strip()

            # Check if there is an attribution
            try:
                mediaAttributionNode = targetNode.findAll(class_="media-ogsource")
                mediaAttributionURL = mediaAttributionNode[0].encode_contents(indent_level=None, encoding='utf-8').strip()
            except:
                mediaAttrURL = None

            # Random ID (for unique identification on the front end), if needed. Changes every time the front end is reloaded
            mediaUnique = ""

            # Get the URL and the thumbnail URL depending on the category of the media
            try:
                if mediaClass == "PICTURE" or mediaClass == "GIF":
                    mediaURL = mediaNode[0]["src"]
                    mediaThumb = mediaNode[0]["data-thumb"]
                elif mediaClass == "YOUTUBE":
                    LOAD_YOUTUBE_JS = True
                    mediaURL = mediaNode[0]["data-videourl"]
                    mediaThumb = mediaNode[0]["src"]
                elif mediaClass == "NORMAL_VIDEO":
                    LOAD_VIDEO_JS = True
                    sourceNode = mediaNode[0].findAll("source")
                    mediaURL = sourceNode[0]["src"]
                    mediaThumb = ""
                    mediaUnique = get_random_string(length=10)
                elif mediaClass == "AUDIO":
                    LOAD_AUDIO_JS = True
                    sourceNode = mediaNode[0].findAll("source")
                    mediaURL = sourceNode[0]["src"]
                    mediaThumb = ""
                    mediaUnique = get_random_string(length=10)
            except:
                pass

            # Add the media to the list
            mediaObjects.append({"url": mediaURL, "thumb": mediaThumb, "caption": mediaCaption, "class": mediaClass,
                                 "mime": mediaMIME, "timestamp": mediaTimestamp, "attribution_url": mediaAttributionURL, "unique": mediaUnique})

        parsedDictionary.update({"MEDIA_OBJECTS": mediaObjects})
    except Exception as e:
        print(unicode(e))
        print("%s not found" % itemMappedName)

    parsedDictionary.update({"PREFETCH_LOAD_YOUTUBE_JS": LOAD_YOUTUBE_JS})
    parsedDictionary.update({"PREFETCH_LOAD_AUDIO_JS": LOAD_AUDIO_JS})
    parsedDictionary.update({"PREFETCH_LOAD_VIDEO_JS": LOAD_VIDEO_JS})
    return parsedDictionary

# Strip white spaces
def whiteSpaceStripper(inputText):
    pat = re.compile(r'\t')
    temp = pat.sub('', inputText)
    pat = re.compile(r'\n')
    temp2 = pat.sub('', temp)
    pat = re.compile(r' +')
    result = pat.sub(' ', temp2)
    result = result.strip()
    return result

# Return the integer value of the provided char
def charToSymbol(theChar):
    if( theChar >= 'a' and theChar <= 'z' ):
        return ((ord(theChar) - ord('a')) + 6)
    if( theChar >= '1' and theChar <= '5' ):
        return ((ord(theChar) - ord('1')) + 1)
    return 0

# Swap the endianness of the provided data
def swapEndian(data):
    s = "Error: Only 'unsigned' data of type 'int' or 'long' is allowed"
    if not ((type(data) == int)or(type(data) == long)):
        s1 = "Error: Invalid data type: %s" % type(data)
        print(''.join([s,'\n',s1]))
        return data
    if(data < 0):
        s2 = "Error: Data is signed. Value is less than 0"
        print(''.join([s,'\n',s2]))
        return data

    seq = ["0x"]

    while(data > 0):
        d = data & 0xFF     # extract the least significant(LS) byte
        seq.append('%02x'%d)# convert to appropriate string, append to sequence
        data >>= 8          # push next higher byte to LS position

    revD = int(''.join(seq),16)

    return revD

# Encode the string into an EOS-style name (uint64_t)
def encodeName(name):
    totalLength = len(name)
    value = 0
    i = 0
    while i <= 12:
        c = 0
        if i < totalLength and i < 12:
            c = charToSymbol(name[i])
        if i < 12:
            c &= 0x1f
            c <<= 64-5*(i+1)
        else:
            c &= 0x0f
        value |= c
        i += 1
    return value

# Encode the string into an EOS-style name (uint64_t) with a swapped endian
def encodeNameSwappedEndian(name):
    totalLength = len(name)
    value = 0
    i = 0
    while i <= 12:
        c = 0
        if i < totalLength and i < 12:
            c = charToSymbol(name[i])
        if i < 12:
            c &= 0x1f
            c <<= 64-5*(i+1)
        else:
            c &= 0x0f
        value |= c
        i += 1
    return swapEndian(value)

# Convert a truncated IPFS hash into an integer
# This is because EOS does not allow for indexing by strings, yet
def ipfs_to_uint64_trunc(hash):
    my_new_string = re.sub('[6789]', '', hash)
    truncatedHash = my_new_string[2:15].lower()
    quickResult = encodeName(truncatedHash)
    quickResult = quickResult % 9007199254740990
    return quickResult


def getCleanStrippedSlug(inputString):
    new_slug_name = inputString

    # Remove dots and whitespaces from the provided slug
    new_slug_stripped = re.sub('[.]', '', new_slug_name).lower()
    new_slug_stripped = re.sub(' ', '', new_slug_stripped).lower()

    # Unicode slugify the provided slug
    testname = DjangoText.slugify(new_slug_name, allow_unicode=True)

    # Make sure the slug doesnt start with "-
    if (testname[-1] == "-"):
        testname = testname[:-1]

    # Check to see if the slug exists already. If so, add "-" and the counter to the end of the slug
    counter = 0
    new_slug_stripped = ""
    while True:
        if (counter == 0):
            if ArticleTable.objects.filter(slug=testname).exists():
                counter = counter + 1
                continue
            else:
                new_slug_stripped = testname
                break
        else:
            new_slug_stripped = testname + "-" + unicode(counter)
            if ArticleTable.objects.filter(slug=new_slug_stripped).exists():
                counter = counter + 1
                continue
            else:
                break

    # Make sure that the unicode / ascii stuff isn't broken
    try:
        test = "/%s/" % unicode(new_slug_stripped)
        theSlugStripped = new_slug_stripped
    except:
        theSlugStripped = urllib.quote(new_slug_stripped.encode("utf-8"))

    # Return the slug
    return theSlugStripped

