# -*- coding: utf-8 -*-
from azure.storage.blob import BlockBlobService, ContentSettings
from bs4 import BeautifulSoup
from collections import Counter
from csscompressor import compress
from django.template.loader import render_to_string
from django.db.models import Q
from django.utils.crypto import get_random_string
from django.utils.html import strip_tags
from django.utils.translation import gettext, ugettext
from enterlink.model_functions import BAD_TAGS, BAD_TAGS_BY_BEAUTIFULSOUP, BLURB_STRING_REPLACES, linkCategorizer, deBeautifySoup
from enterlink.models import SeeAlso, ArticleTable, EditProposal, ArticleGroup
from fbwiki.settings import AZURE_ACCOUNT_NAME, AZURE_ACCOUNT_KEY
import HTMLParser
from jsmin import jsmin
from threading import Thread
import difflib
import django.utils.text as DjangoText
import gzip
import random, re, time, os, sys
import StringIO
import timeout_decorator
from uuid import uuid4
import urllib
import urllib2
import textwrap

AMP_REGEXES = [r'<html.*</head>', r'</html', r' style=".*?"', r" style='.*?'", r' scope=".*?"', r' summary=".*?"',
                  r' item=".*?"', r" item='.*?'", r" align='.*?'", r' valign=".*?"', r' v=".*?"', r' rules=".*?"',
                  r' nowrap=".*?"', r" type='.*?'", r" aria-describedby='.*?'",
                  r' size=".*?"', r' face=".*?"', r' color=".*?"', r' usemap=".*?"', r'<html><head></head>', r'</html>',
                  r' unselectable=".*?"', r' target=".*?"', r' onclick=".*?"', r' onmouseout=".*?"']

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
        linkList = [[commonArticles[0][0]['href'].replace(u"/wiki", u"").replace(u"https://www.everipedia.com/", u""), u""],
                    [commonArticles[1][0]['href'].replace(u"/wiki", u"").replace(u"https://www.everipedia.com/", u""), u""]]

        # Format the links
        for linkPair in linkList:
            while linkPair[0].startswith('/') or linkPair[0].startswith('.'):
                linkPair[0] = linkPair[0][1:]
            if linkPair[0].endswith("/"):
                linkPair[0] = linkPair[0][:-1]

            if linkPair[0][0:5] == "lang_":
                quickSplit = linkPair[0][5:].split("/")
                linkPair[0] = quickSplit[1]
                linkPair[1] = quickSplit[0]
                print(linkPair)




        # Get the article objects from the links
        firstPage = getTheArticleObject(linkList[0][0], passedLang=linkList[0][1])[1]
        secondPage = getTheArticleObject(linkList[1][0], passedLang=linkList[1][1])[1]

        # Override the blurbs if applicable
        if (blurbOverride == ""):
            if firstPage == "":
               firstPage = ''
            elif secondPage == "":
               secondPage = ''
            else:
               pass
    except Exception, e:
        print(unicode(e))
        firstPage = ''
        secondPage = ''

    # Make sure that the two suggestions themselves are not the same
    if firstPage != '' and firstPage == secondPage:
        secondPage = ''

    # Return some variables
    return(single_page_units, related_page_ad_units, sitewide_ad_pick, firstPage, secondPage)

# Render the table of contents for an article
def Prerender_Table_Of_Contents(blurbChunk, articleSlug, templateType, pageName, flags=[], isAuthenticated=False, articleObj=""):
    # Convert the article blurb into a BeautifulSoup
    pageSoup = BeautifulSoup(blurbChunk, "html5lib", from_encoding="utf-8")
    
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
    processedHeadings.append([ugettext("See Also"), "seeAlsoPanel", "seeAlsoPanel", "menu2-button", "new-message"])

    # Render the ToC to a string and return it
    return render_to_string('enterlink/template_table_of_contents.html', {'rawHeadings': processedHeadings, 'PAGE_LANG': articleObj.page_lang,
                          'articleSlug': articleSlug, 'templateType': templateType, 'isAuthenticated': isAuthenticated})

# Clean up the article HTML so it passes Google AMP validation, which is used for the mobile pages
def ampSanitizer(inputBlurb, bypassRegex=False, hide_ads=True, pageSlug="", artObj=""):
    pageSlugEncoded = urllib.quote_plus(pageSlug)
    currentIPFS = artObj.ipfs_hash_current
    page_lang = artObj.page_lang

    try:
        # Create a copy of the blurb
        intermediate = inputBlurb

        # Remove strings with bad tags and attributes
        if bypassRegex == False:
            for compileItem in AMP_REGEXES:
                try:
                    pat = re.compile(compileItem, re.IGNORECASE|re.UNICODE)
                    intermediate = pat.sub('', intermediate)
                except:
                    pass

        # Store the sanitized blurb as the intermediate
        ampSanitizedBlurb = intermediate

        # Convert the blurb to a BeautifulSoup object
        ampSoup = BeautifulSoup(ampSanitizedBlurb, "html5lib")

        # Find the HTML tag and convert it into a div
        badWikipediaHTMLTag = ampSoup.findAll(u'html')[0]
        badWikipediaHTMLTag.name = u'div'

        # Replace <font> with <span>
        if bypassRegex == False:
            try:
                replacementTags = [[u'font', u'span']]

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
            listOfBads = ampSoup.findAll(u'p', string=u' ')
            for item in listOfBads:
                item.extract()
        except:
            pass

        # Remove tags with bad classes from the HTML
        try:
            badClasses = [u'mwe-math-fallback-image-inline', u'sortkey', u'mw-graph-img',u'oly_at__img', u'timeline-wrapper', u'PopUpMediaTransform']

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
            sanitizedSoup = BeautifulSoup(unicode(ampSoup), "html.parser", from_encoding='utf-8')

            # List of all amp-lightboxes
            tooltipHoverblobs = []

            # Find the hoverblurb links
            tooltippableBlurbs = sanitizedSoup.findAll(u'a', class_=u'tooltippable')

            # Construct the AMP-compatible hoverblurb pane
            for index, ttBlurb in enumerate(tooltippableBlurbs):
                # Generate a random string for the tag ID
                unique_id = get_random_string(length=10).decode('utf-8')

                # Get the slug
                # MAY ALREADY HAVE A lang_
                try:
                    strippedUsername = urllib2.unquote(ttBlurb[u'data-username']).encode('latin-1').decode('utf-8')
                except:
                    strippedUsername = ttBlurb[u'data-username']

                try:
                    strippedUsername = urllib.quote(strippedUsername.encode("utf-8")).replace(" ", "_").replace("%20", "_")
                except:
                    strippedUsername = strippedUsername

                # Get the text of the blue link
                anchorText = ''.join(ttBlurb.findAll( text = True )).strip()

                # Open button for the pane
                openButtonTag = sanitizedSoup.new_tag(u'button')
                # openButtonTag[u'on'] = u'tap:hvrblb-%s__%s' % (strippedUsername, unique_id)
                openButtonTag[u'on'] = u'tap:hvrblb-%s__%s' % (strippedUsername, unique_id)
                openButtonTag[u'role'] = u'button'
                openButtonTag[u'tabindex'] = 0
                openButtonTag[u'aria-label'] = strippedUsername
                openButtonTag[u'aria-labelledby'] = u'hvrblb-%s__%s' % (strippedUsername, unique_id)
                openButtonTag[u'class'] = u'tooltippable'
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
                lightBoxTag = sanitizedSoup.new_tag(u'amp-lightbox')
                lightBoxTag[u'id'] = u'hvrblb-%s__%s' % (strippedUsername, unique_id)
                lightBoxTag[u'class'] = u'amp-hc'
                lightBoxTag[u'tabindex'] = 0
                lightBoxTag[u'role'] = u'button'
                lightBoxTag[u'on'] = u'tap:hvrblb-%s__%s.close' % (strippedUsername, unique_id)
                lightBoxTag[u'layout'] = u'nodisplay'

                # Construct the amp-iframe
                iframeTag = sanitizedSoup.new_tag(u'amp-iframe')
                iframeTag[u'class'] = u'amp-hc'
                iframeTag[u'sandbox'] = u'allow-same-origin allow-scripts allow-top-navigation'
                iframeTag[u'layout'] = u'fill'
                iframeTag[u'frameborder'] = u'0'
                iframeTag[u'scrolling'] = u'no'
                iframeTag[u'src'] = u'https://www.everipedia.org/AJAX-REQUEST/AJAX_Hoverblurb/%s/' % strippedUsername

                # Placeholder image (leave this here or it will cause stupid AMP problems)
                placeholderTag = sanitizedSoup.new_tag(u'amp-img')
                placeholderTag[u'layout'] = u'fill'
                placeholderTag[u'src'] = u'https://epcdn-vz.azureedge.net/static/images/white_dot.png'
                placeholderTag[u'placeholder'] = u''

                # print("--------------------------")
                # print(linkURLEncoded)
                # print("--------------------------")

                # Construct the amp-lightbox
                iframeTag.append(placeholderTag)
                lightBoxTag.append(iframeTag)

                # Convert the amp-lightbox into a string
                unicodeBlob = unicode(lightBoxTag)

                # Append the amp-lightbox raw HTML to the list
                tooltipHoverblobs.append(unicodeBlob)


            # Handle the hoverlinks
            tooltippableLinks = sanitizedSoup.findAll(u'a', class_=u'tooltippableCarat')
            for index, ttLink in enumerate(tooltippableLinks):
                # Generate a random string for the tag ID
                unique_id = get_random_string(length=10)

                # Encode the URL
                try:
                    linkURLEncoded = urllib.quote_plus(ttLink[u'data-username'])
                except:
                    linkURLEncoded = ttLink[u'data-username']

                try:
                    if u"everipedia.com" in ttLink[u'href']:
                        quickSplit = ttLink[u'href'].replace(u'https://www.everipedia.com',u'').split(u'/')
                    elif u"everipedia.org" in ttLink[u'href']:
                        quickSplit = ttLink[u'href'].replace(u'https://everipedia.org', u'').split(u'/')
                    else:
                        quickSplit = ttLink[u'href'].split(u'/')
                except:
                    continue

                # Get the text of the link
                anchorText = u''.join(ttLink.findAll(text=True)).strip()

                # Open button for the pane
                openButtonTag = sanitizedSoup.new_tag(u'button')
                openButtonTag[u'on'] = u'tap:hvrlnk-%s' % unique_id
                openButtonTag[u'role'] = u'button'
                openButtonTag[u'tabindex'] = 0
                openButtonTag[u'aria-label'] = anchorText
                openButtonTag[u'aria-labelledby'] = u'hvrlnk-%s' % unique_id
                openButtonTag[u'class'] = u'tooltippableCarat'
                openButtonTag.string = anchorText
                # Replace the <a> with the <button>
                ttLink.replace_with(openButtonTag)

                # AMP-lightbox
                lightBoxTag = sanitizedSoup.new_tag(u'amp-lightbox')
                lightBoxTag[u'id'] = u'hvrlnk-%s' % unique_id
                lightBoxTag[u'class'] = u'amp-hc'
                lightBoxTag[u'tabindex'] = 0
                lightBoxTag[u'role'] = u'button'
                lightBoxTag[u'on'] = u'tap:hvrlnk-%s.close' % unique_id
                lightBoxTag[u'layout'] = u'nodisplay'

                # AMP-iframe
                iframeTag = sanitizedSoup.new_tag(u'amp-iframe')
                iframeTag[u'class'] = u'amp-hc'
                iframeTag[u'height'] = u'250'
                iframeTag[u'sandbox'] = u'allow-same-origin allow-scripts allow-top-navigation'
                iframeTag[u'layout'] = u'fill'
                iframeTag[u'frameborder'] = u'0'
                iframeTag[u'scrolling'] = u'no'
                iframeTag[u'src'] = u'https://www.everipedia.org/AJAX-REQUEST/AJAX_Hoverlink/%s/?target_url=%s' % (currentIPFS, linkURLEncoded)

                # Placeholder image (leave this here or it will cause stupid AMP problems)
                placeholderTag = sanitizedSoup.new_tag(u'amp-img')
                placeholderTag[u'layout'] = u'fill'
                placeholderTag[u'src'] = u'https://epcdn-vz.azureedge.net/static/images/white_dot.png'
                placeholderTag[u'placeholder'] = ''
                # Construct the amp-lightbox
                iframeTag.append(placeholderTag)
                lightBoxTag.append(iframeTag)

                # Convert the amp-lightbox into a string
                unicodeBlob = unicode(lightBoxTag)

                # Append the amp-lightbox raw HTML to the list
                tooltipHoverblobs.append(unicodeBlob)


            # Convert GIFs into amp-anim's
            theImages = sanitizedSoup.findAll(u'img', {u'data-mimetype': u'image/gif'})
            for index, gifTag in enumerate(theImages):
                # Get the full and thumbnail URLs
                if gifTag.has_attr(u'data-src'):
                    fullImgSrc = gifTag[u'data-src']
                    thumbImgSrc = gifTag[u'src']
                else:
                    fullImgSrc = gifTag[u'src']
                    thumbImgSrc = u'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7'

                # Create the amp-anim
                ampAnimTag = sanitizedSoup.new_tag(u'amp-anim')
                ampAnimTag[u'width'] = u"auto"
                ampAnimTag[u'height'] = 250
                ampAnimTag[u'layout'] = u"fixed-height"
                ampAnimTag[u'data-mimetype'] = u"image/gif"
                ampAnimTag[u'src'] = fullImgSrc

                # Placeholder image
                placeholderTag = sanitizedSoup.new_tag(u'amp-img')
                placeholderTag[u'layout'] = u'fill'
                placeholderTag[u'width'] = 1
                placeholderTag[u'height'] = 1
                placeholderTag[u'src'] = thumbImgSrc
                placeholderTag[u'placeholder'] = u''

                # Construct the amp-anim
                ampAnimTag.append(placeholderTag)
                gifTag.replace_with(ampAnimTag)


            # Collect all the non-GIF images
            theImages = sanitizedSoup.findAll(u'img', {u'data-mimetype': re.compile(ur'^image\/(?!gif).*$', flags=re.UNICODE)})
            theImages.extend(sanitizedSoup.findAll(u'img', class_=u'caption-video'))


            # Convert images to amp-img's
            for index, picTag in enumerate(theImages):
                # Get the full and thumbnail URLs
                if picTag.has_attr(u'data-src'):
                    fullImgSrc = picTag[u'data-src']
                    thumbImgSrc = picTag[u'src']
                else:
                    fullImgSrc = picTag[u'src']
                    thumbImgSrc = u'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7'

                # Create the amp-img
                ampImgTag = sanitizedSoup.new_tag(u'amp-img')
                ampImgTag[u'width'] = u"auto"
                ampImgTag[u'height'] = 250
                ampImgTag[u'layout'] = u"fixed-height"
                ampImgTag[u'data-mimetype'] = picTag[u'data-mimetype']
                ampImgTag[u'src'] = fullImgSrc

                # Placeholder image
                placeholderTag = sanitizedSoup.new_tag(u'amp-img')
                placeholderTag[u'layout'] = u'fill'
                placeholderTag[u'width'] = 1
                placeholderTag[u'height'] = 1
                placeholderTag[u'src'] = thumbImgSrc
                placeholderTag[u'placeholder'] = ''

                # Construct the amp-img
                ampImgTag.append(placeholderTag)
                picTag.replace_with(ampImgTag)

            # Convert HTML5 Videos to amp-video's
            theImages = sanitizedSoup.findAll(u'video')
            for index, videoTag in enumerate(theImages):
                # Create the amp-video
                ampVideoTag = sanitizedSoup.new_tag(u'amp-video')
                ampVideoTag[u'width'] = u"auto"
                ampVideoTag[u'height'] = 250
                ampVideoTag[u'layout'] = u"fixed-height"
                ampVideoTag[u'preload'] = u"metadata"
                ampVideoTag[u'data-mimetype'] = videoTag[u'data-mimetype']
                ampVideoTag.string = " "

                # Create the source tag
                sourceTag = sanitizedSoup.new_tag(u'source')
                sourceTag[u'src'] = videoTag[u'src'] + u"#t=0.1"
                sourceTag[u'type'] = videoTag[u'data-mimetype']

                # Construct the amp-video HTML
                ampVideoTag.append(sourceTag)
                videoTag.replace_with(ampVideoTag)

        except Exception, e:
            print("AMP SANITIZER ERROR")
            print(unicode(e))
            sanitizedSoup = ampSoup

    except Exception, e:
        print(unicode(e))
        return([inputBlurb, ""])

    # Check for remaining images in the HTML and make sure they have heights and widths
    allImages = sanitizedSoup.findAll(re.compile(ur'(img|amp-img)', flags=re.UNICODE))
    for imgTag in allImages:
        useFixTag = False
        if imgTag.has_attr(u'height'):
            if imgTag[u'height'] == u"100%":
                imgTag[u'height'] = 275
                useFixTag = True
        else:
            imgTag[u"height"] = 275
            useFixTag = True

        if imgTag.has_attr(u'width'):
            if imgTag[u'width'] == u"100%":
                imgTag[u'width'] = 275
                useFixTag = True
        else:
            imgTag[u"width"] = 275
            useFixTag = True

        if useFixTag == True:
            ampFixTag = sanitizedSoup.new_tag(u'div', **{u'class':u'amp-san-picfix'})
            contents = imgTag.replace_with(ampFixTag)
            ampFixTag.append(contents)

        # Cleans up remaining images (mainly from wikipedia imports). Will fail for GIFs
        if imgTag.name == u'img':
            try:
                if not imgTag.has_attr(u'placeholder'):
                    # Construct the amp-img
                    ampImgTag = sanitizedSoup.new_tag(u'amp-img')
                    ampImgTag[u'width'] = imgTag[u'width']
                    ampImgTag[u'height'] = imgTag[u"height"]
                    ampImgTag[u'layout'] = u"fixed"
                    ampImgTag[u'src'] = imgTag[u'src']

                    # Replace the img with amp-img
                    imgTag.replace_with(ampImgTag)
            except:
                pass

    # Remove duplicate body tags
    resultCollection = sanitizedSoup.findAll(u"body")
    for item in resultCollection:
        item.unwrap()

    # Convert the BeautifulSoup to a string
    sanitizedText = unicode("".join([unicode(x) for x in sanitizedSoup.contents]))

    # Replace font tags with spans
    pat = re.compile(ur'<font.*?>?', flags=re.UNICODE)
    temp2 = pat.sub(u'<span>', sanitizedText)
    pat = re.compile(ur"</font>", flags=re.UNICODE)
    sanitizedText = pat.sub(u'</span>', temp2)

    # Attribute cleanup
    if bypassRegex == False:
        badAttributes = [ur"border=\".*?\"", ur"pic_id=\".*?\"", ur'style=".*?"', ur"style='.*?'", ur'xml:lang=".*?"']
        for badAttribute in badAttributes:
            pat = re.compile(badAttribute)
            sanitizedText = pat.sub('', sanitizedText)

    # Clean up tooltip attributes
    sanitizedText = sanitizedText.replace(u" style=\"color: #71b8e4;\"", u"")
    sanitizedText = sanitizedText.replace(u" style=\"color: #71b8e4; font-face: bold; text-decoration: none;\"", u"")

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
def blurbSplitter(inputBlurb, truncateLimit=0, miniblurb=False, minimizeHTML=False):
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

        # Optionally reduce the amount of HTML to make the db entry smaller (helps with indexing)
        if minimizeHTML:
            paraNugget = snippifier(paraNugget)

        # Convert the first paragraph into a string, then remove it from the soup
        firstPara = unicode(paraNugget)
        paraNugget.extract()


        # Convert the remaining blurb into a string
        remainingChunk = unicode(blurbSoup)
    except:
        # If the first paragraph could not be found, just get the blurb itself

        # Optionally reduce the amount of HTML to make the db entry smaller (helps with indexing)
        if minimizeHTML:
            handledBlurb = snippifier(blurbSoup)
        else:
            handledBlurb = inputBlurb

        try:
            if (truncateLimit == 0):
                firstPara = unicode(handledBlurb)
            else:
                try:
                    firstPara = unicode(handledBlurb[0:truncateLimit])
                except:
                    firstPara = unicode(handledBlurb)[0:truncateLimit]
            remainingChunk = ""
        except:
            if (truncateLimit == 0):
                firstPara = unicode(handledBlurb.decode('utf-8'))
            else:
                try:
                    firstPara = unicode(handledBlurb[0:truncateLimit].decode('utf-8'))
                except:
                    firstPara = unicode(handledBlurb)[0:truncateLimit].decode('utf-8')
            remainingChunk = ""

    # Return the first paragraph and the remaining blurb
    return [firstPara, remainingChunk]

# Creates the blurb snippet by stripping unnecessary HTML
STRIP_LIST = [u'sup', u'img']
REPLACE_LIST =[(u"a", u"b"), (u"div", u"div"), (u"strong", u"b")]
UNWRAP_LIST = [u"span"]
def snippifier(inputSoup):
    try:
        for badTag in STRIP_LIST:
            for tag in inputSoup.findAll(badTag):

                tag.extract()
    except Exception, e:
        print(unicode(e))

    try:
        for badTag in REPLACE_LIST:
            for tag in inputSoup.findAll(badTag[0]):
                tag.name = badTag[1]
                tag.attrs = None
                tag.string = tag.get_text().strip()
    except Exception, e:
        print(unicode(e))

    try:
        for badTag in UNWRAP_LIST:
            for tag in inputSoup.findAll(badTag):
                tag.unwrap()
    except Exception, e:
        print(unicode(e))

    return inputSoup

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
def getDiffs(textBlob1, textBlob2, difftype='view'):
    soup1 = BeautifulSoup(textBlob1, "html5lib")
    soup2 = BeautifulSoup(textBlob2, "html5lib")
    soup1.find('style').decompose()
    soup2.find('style').decompose()
    [s.extract() for s in soup1.findAll('script')]
    [s.extract() for s in soup2.findAll('script')]
    lines1 = unicode(soup1).splitlines()
    lines2 = unicode(soup2).splitlines()

    if difftype == 'text':
        lines1 = soup1.findAll(text=True)
        lines2 = soup2.findAll(text=True)
        return difflib.HtmlDiff().make_file(lines1, lines2)

    if difftype == 'html': 
        return difflib.HtmlDiff().make_file(lines1, lines2)

    textdiff = list(difflib.ndiff(lines2, lines1))

    textdiff = [line for line in textdiff if line[0:2] != "? "]

    blacklist = ["<h1 class", "</h1>", "</div>", "<div class", "</section>", "<section class"]
    for i, line in enumerate(textdiff):
        # check blacklist
        blacked = False
        for black in blacklist:
            start = line[2:].strip()
            if start[0:len(black)] == black:
                textdiff[i] = line[2:]
                blacked = True
        if blacked:
            continue

        if line[0:2] == "+ ":
            textdiff[i] = '<span class="diff_add">' + line[2:] + '</span>'
        elif line[0:2] == "- ":
            textdiff[i] = '<span class="diff_sub">' + line[2:] + '</span>'

    textdiff = "\n".join(textdiff)

    return textdiff


def prettifyCorrector(inputBlurb):
    try:
        tempBlurb = inputBlurb.decode("utf-8")
    except Exception as e:
        print(unicode(e))
        tempBlurb = inputBlurb

    try:
        tempBlurb = re.sub(r"^\s+", " ", tempBlurb, flags=re.MULTILINE)
        tempBlurb = re.sub(r"\n </a>\n", u"</a>", tempBlurb, flags=re.MULTILINE)
        tempBlurb = re.sub(r"\n", u"", tempBlurb, flags=re.MULTILINE)
        tempBlurb = re.sub(r"</a> (,|\.|:|\'|\))", r"</a>\1", tempBlurb, flags=re.MULTILINE)
    except Exception as e:
        print(unicode(e))

    try:
        return tempBlurb.encode("utf-8")
    except Exception as e:
        print(unicode(e))

    return inputBlurb

def editorStructureCorrector(inputBlurb, passedLang="en"):
    # Create a BeautifulSoup object from the input string
    try:
        pagesoup = BeautifulSoup(inputBlurb.decode('utf-8', 'ignore'), "html.parser")
    except:
        pagesoup = BeautifulSoup(inputBlurb, "html.parser")

    # Add the page_lang tr if it is missing
    pageMetaTable = pagesoup.findAll("table", class_='pagemeta-table')
    pageMetaBody = pageMetaTable[0].findAll("tbody")
    pageLangNode = pageMetaBody[0].findAll("tr", {"data-key": "page_lang"})
    try:
        assert(len(pageLangNode) > 0)
    except:
        # Create the tr
        pageLangNode = pagesoup.new_tag(u'tr')
        pageLangNode[u'class'] = u'data-pair'
        pageLangNode[u'data-key'] = u'page_lang'

        # Create the first td
        nodeTdInnerOne = pagesoup.new_tag(u'td')
        nodeTdInnerOne[u'class'] = u'no-edit'
        nodeTdInnerOne.string = ugettext(u"Page Language")
        pageLangNode.append(nodeTdInnerOne)

        # Create the second td
        nodeTdInnerTwo = pagesoup.new_tag(u'td')
        nodeTdInnerTwo[u'class'] = u'no-edit meta-value'
        nodeTdInnerTwo.string = passedLang
        pageLangNode.append(nodeTdInnerTwo)

        # Inject the new tag into the HTML
        pageMetaBody[0].append(pageLangNode)
        # print(pageMetaBody)

    # Return the cleaned string
    blobString = deBeautifySoup(pagesoup)
    return blobString

# Return the page object from either a slug or an IPFS hash
def getTheArticleObject(theParam, passedLang=""):
    cleaned_url_param = theParam
    possibleArticles = []

    # Test first for an IPFS hash
    if (cleaned_url_param[0:2] == "Qm"):
        try:
            possibleArticles = ArticleTable.objects.filter(Q(ipfs_hash_current__iexact=cleaned_url_param) | Q(ipfs_hash_parent__iexact=cleaned_url_param))
            assert(len(possibleArticles) > 0)
        except:
            possibleArticles = []
            try:
                testProposal = EditProposal.objects.filter(Q(proposed_article_hash__iexact=cleaned_url_param) | Q(
                            old_article_hash__iexact=cleaned_url_param) | Q(grandparent_hash__iexact=cleaned_url_param))
                possibleArticles.append(testProposal[0].article)
            except Exception, e:
                pass
    # Try various other encodings of the slug to try to find a match
    else:
        try:
            cleaned_url_param = urllib.quote_plus(theParam.encode("utf8").replace(" ", "_"), safe="").replace("%252F", "%2F")
            possibleArticles = ArticleTable.objects.filter(Q(ipfs_hash_current__iexact=theParam) | Q(slug__iexact=theParam) |
                        Q(slug__iexact=cleaned_url_param) | Q(slug_alt__iexact=theParam) | Q(slug_alt__iexact=cleaned_url_param)).order_by('-creation_timestamp')
            assert(len(possibleArticles) > 0)
        except:
            try:
                cleaned_url_param = urllib.unquote(cleaned_url_param).replace("%25", "%")
                possibleArticles = ArticleTable.objects.filter(Q(slug__iexact=cleaned_url_param) | Q(slug_alt__iexact=cleaned_url_param)).order_by('-creation_timestamp')
                assert (len(possibleArticles) > 0)
            except:
                quickSplit = theParam.split(u"#")[0].split(u"%23")
                cleaned_url_param = quickSplit[0]
                if (cleaned_url_param[0] == '/'):
                    cleaned_url_param = cleaned_url_param[1:]
                    possibleArticles = ArticleTable.objects.filter(Q(slug__iexact=cleaned_url_param) | Q(slug_alt__iexact=cleaned_url_param)).order_by('-creation_timestamp')
                assert (len(possibleArticles) > 0)


    # NEED TO DO ARTICLE GROUPING SHIT HERE, OR NOT. THE ARTICLETABLE ROW NEEDS TO HAVE A FOREIGN KEY TO AN ARTICLEGROUP

    # Check if the article has a redirect page and if so, return it
    redirectedPossibleArticles = []
    for testArticle in possibleArticles:
        if (testArticle.redirect_page != None):
            redirectedPossibleArticles.append(testArticle.redirect_page)
        else:
            redirectedPossibleArticles.append(testArticle)

    # There may be more than one language version of an article. By default, select the oldest one unless there is extra logic
    returnedLang = ""
    try:
        for testArt in redirectedPossibleArticles:
            if testArt.page_lang == passedLang:
                articleObject = testArt
                returnedLang = articleObject.page_lang
                break
        assert(articleObject)
    except:
        # Default article as fallback
        articleObject = redirectedPossibleArticles[0]
        returnedLang = articleObject.page_lang

    cleaned_url_param = articleObject.slug


    # Try to get alternate language versions for the article
    altLangArticles = []
    try:
        artGroupObjects = ArticleGroup.objects.filter(group_id=articleObject.article_group_id).exclude(canonical_lang=returnedLang)
        for groupObj in artGroupObjects:
            if groupObj.canonical_lang != passedLang:
                altLangArticles.append(groupObj.canonical_article)
    except:
        pass


    # Return the canonical slug, the article object, and the other language variants of it, if any
    return ([cleaned_url_param, articleObject, altLangArticles])

# Parse the raw HTML for the page into a JSON dictionary
def parseBlockchainHTML(htmlBlob, useAMP=False, articleObj=""):
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
        itemValue = HTMLParser.HTMLParser().unescape(itemValue)

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
        try:
            photoURL = photoNode[0]["src"]
            photoThumb = photoNode[0]["data-thumbnail"]
        except:
            photoURL = "https://epcdn-vz.azureedge.net/static/images/no-image-slide-big.png"
            photoThumb = "https://epcdn-vz.azureedge.net/static/images/no-image-slide.png"

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
        blobBoxObject = prettifyCorrector(itemValue)

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
        parsedDictionary.update({"NONPLURAL_INFOBOXES": nonpluralObjects})
    except Exception as e:
        print("%s not found" % itemMappedName)

    # Find the plural infobox items
    pluralNodes = theSoup.select('table.ibox-item-plural')
    try:
        for pluralNode in pluralNodes:
            keyNode = pluralNode.findAll(class_=re.compile("ibox-plural-key-inner"))
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
        parsedDictionary.update({"PLURAL_INFOBOX_PACKAGES": pluralPackages})
        # print(pluralPackages)
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

        # Fix the prettify() problem
        blurbObject = prettifyCorrector(itemValue)

        # print(theLines)
        # print("---------------------")
        # print(blurbObject)
        # print("=====================")
        # print(repr(blurbObject))

        parsedDictionary.update({"BLURB": blurbObject})
    except Exception as e:
        print(e)
        print("%s not found" % itemMappedName)


    # Generate a flag if there are no media objects
    if (len(parsedDictionary["MEDIA_OBJECTS"]) == 0):
        flags = ['NO_GALLERY']
    else:
        flags = []

    # Generate the table of contents depending on desktop / tablet or mobile
    if useAMP:
        renderedTableOfContents = Prerender_Table_Of_Contents(blurbObject, pageMetaObjects['url_slug'], 'BLOCKCHAIN_AMP', pageTitle, flags, False, articleObj=articleObj)
    else:
        renderedTableOfContents = Prerender_Table_Of_Contents(blurbObject, pageMetaObjects['url_slug'], 'BLOCKCHAIN', pageTitle, flags, articleObj=articleObj)

    # Update the Django context dictionary
    parsedDictionary.update({"tableOfContentsChunk": renderedTableOfContents})
    parsedDictionary.update({"SEEALSOS": get_see_also_units(blurbObject)})

    # Use either the mobile or desktop / tablet templates to render the parsed data into the article page
    # Mobile
    if useAMP:
        # Create the infobox HTML block and sanitize it for AMP-validation
        infoboxBlob = render_to_string('enterlink/infobox_amp_json_blockchain.html', parsedDictionary)
        sanitizedInfoboxCollection = ampSanitizer(infoboxBlob, hide_ads=True, pageSlug=articleSlug, artObj=articleObj)
        ampSanitizedInfobox = sanitizedInfoboxCollection[0] + sanitizedInfoboxCollection[1]
        parsedDictionary.update({"ampSanitizedInfobox": ampSanitizedInfobox})

        # Create the citation HTML block and sanitize it for AMP-validation
        linksetBlob = render_to_string('enterlink/template_amp_links_json_blockchain.html', parsedDictionary)
        quickLinksetArr = ampSanitizer(linksetBlob, bypassRegex=True, hide_ads=True, pageSlug=articleSlug, artObj=articleObj)
        ampSanitizedLinkset = quickLinksetArr[0] + quickLinksetArr[1]
        parsedDictionary.update({"ampSanitizedLinkset": ampSanitizedLinkset})

        # Create the media gallery HTML block and sanitize it for AMP-validation
        photoGalleryBlob = render_to_string('enterlink/template_photos_amp_json_blockchain.html', parsedDictionary)
        quickPhotoGalleryArr = ampSanitizer(photoGalleryBlob, hide_ads=True, pageSlug=articleSlug, artObj=articleObj)
        ampSanitizedPhotoGallery = quickPhotoGalleryArr[0] + quickPhotoGalleryArr[1]
        parsedDictionary.update({"ampSanitizedPhotoGallery": ampSanitizedPhotoGallery})

        # Compress the AMP CSS
        parsedDictionary.update({"USE_BLOCKCHAIN_AMP_CSS": True})
        compressedCSSBlob = compress(render_to_string('enterlink/inline-css/amp_style.html', parsedDictionary))
        parsedDictionary.update({"compressedCSSBlob": compressedCSSBlob})

        # AMP-sanitize the main article text
        ampSanitizedBlurb, tooltipChunk = "", ""
        try:
            sanitizedCollection = ampSanitizer(blurbObject, hide_ads=True, pageSlug=articleSlug, artObj=articleObj)
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
            quickCommentCollection = ampSanitizer(photoObject["caption"], hide_ads=True, pageSlug=articleSlug, artObj=articleObj)
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
        parsedDictionary.update({"CITATION_OBJECTS": []})
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
            try:
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
                except Exception, e:
                    print(unicode(e))

                # Add the media to the list
                mediaObjects.append({"url": mediaURL, "thumb": mediaThumb, "caption": mediaCaption, "class": mediaClass,
                                     "mime": mediaMIME, "timestamp": mediaTimestamp, "attribution_url": mediaAttributionURL, "unique": mediaUnique})
            except:
                print("Something went wrong parsing a media gallery item. Skipping it...")

        parsedDictionary.update({"MEDIA_OBJECTS": mediaObjects})
    except Exception as e:
        print(unicode(e))
        parsedDictionary.update({"MEDIA_OBJECTS": []})
        print("%s not found" % itemMappedName)

    parsedDictionary.update({"PREFETCH_LOAD_YOUTUBE_JS": LOAD_YOUTUBE_JS})
    parsedDictionary.update({"PREFETCH_LOAD_AUDIO_JS": LOAD_AUDIO_JS})
    parsedDictionary.update({"PREFETCH_LOAD_VIDEO_JS": LOAD_VIDEO_JS})
    return parsedDictionary

# Strip white spaces
def whiteSpaceStripper(inputText):
    pat = re.compile(r'\t', flags=re.UNICODE)
    temp = pat.sub('', inputText)
    pat = re.compile(r'\n', flags=re.UNICODE)
    temp2 = pat.sub('', temp)
    pat = re.compile(r' +', flags=re.UNICODE)
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


def getCleanStrippedSlug(inputString, allowDupes=True):
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
                if allowDupes:
                    counter = counter + 1
                    continue
                else:
                    raise ValueError('Duplicate slugs with numbers is not allowed due to parameter')
            else:
                new_slug_stripped = testname
                break
        else:
            new_slug_stripped = testname + "-" + unicode(counter)
            if ArticleTable.objects.filter(slug=new_slug_stripped).exists():
                if allowDupes:
                    counter = counter + 1
                    continue
                else:
                    raise ValueError('Duplicate slugs with numbers is not allowed due to parameter')
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

# Create a redirect to the specified page
def createRedirect(new_title, target_page_hash):
    # Get the article
    theArticle = getTheArticleObject(target_page_hash)[1]

    # Get a random pseudo-hash
    psuedoHash = unicode(uuid4()) + unicode(int(time.time()))

    # Create a URL slug from the page title
    newSlug = getCleanStrippedSlug(new_title, allowDupes=False)

    try:
        newArticle = ArticleTable.objects.create(ipfs_hash_parent="REDIRECT",
                                                 ipfs_hash_current=psuedoHash,
                                                 page_title=new_title,
                                                 blurb_snippet=None,
                                                 page_type=None,
                                                 page_sub_type=None,
                                                 creation_timestamp=None,
                                                 lastmod_timestamp=None,
                                                 slug=newSlug,
                                                 slug_alt=urllib.quote(newSlug.encode("utf-8")).replace(" ", "_").replace("%20", "_"),
                                                 photo_url=None,
                                                 photo_thumb_url=None,
                                                 is_removed=0,
                                                 is_removed_from_index=1,
                                                 pageviews=0,
                                                 bing_index_override=0,
                                                 is_adult_content=0,
                                                 is_new_page=False,
                                                 redirect_page=theArticle,
                                                 page_lang=theArticle.page_lang)
    except:
        pass
