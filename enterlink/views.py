# -*- coding: utf-8 -*-
# 2014 - 2017 Travis Moore, Sam Kazemian, Theodor Forselius
# MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
# MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
# MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
# MMMMMMMMMMMMMMMMMmdhhydNMMMMMMMMMMMMMMMMMMMMMMMMMM
# MMMMMMMMMMMMMNdy    hMMMMMMNdhhmMMMddMMMMMMMMMMMMM
# MMMMMMMMMMMmh      hMMMMMMh     yMMM  hNMMMMMMMMMM
# MMMMMMMMMNy       yMMMMMMh       MMMh   hNMMMMMMMM
# MMMMMMMMd         dMMMMMM       hMMMh     NMMMMMMM
# MMMMMMMd          dMMMMMN      hMMMm       mMMMMMM
# MMMMMMm           yMMMMMM      hmmh         NMMMMM
# MMMMMMy            hMMMMMm                  hMMMMM
# MMMMMN             hNMMMMMmy                 MMMMM
# MMMMMm          ymMMMMMMMMmd                 MMMMM
# MMMMMm         dMMMMMMMMd                    MMMMM
# MMMMMMy       mMMMMMMMm                     hMMMMM
# MMMMMMm      dMMMMMMMm                      NMMMMM
# MMMMMMMd     NMMMMMMM                      mMMMMMM
# MMMMMMMMd    NMMMMMMN                     mMMMMMMM
# MMMMMMMMMNy  mMMMMMMM                   hNMMMMMMMM
# MMMMMMMMMMMmyyNMMMMMMm         hmh    hNMMMMMMMMMM
# MMMMMMMMMMMMMNmNMMMMMMMNmdddmNNd   ydNMMMMMMMMMMMM
# MMMMMMMMMMMMMMMMMMMMMMMMMMMNdhyhdmMMMMMMMMMMMMMMMM
# MMMMMMMMMMMMMMMMMMMMMMMMMMNNMMMMMMMMMMMMMMMMMMMMMM
# MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
# MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM

import datetime
import gzip
import ipfsapi
import json
import os
import pytz
import requests
import StringIO
import urllib
import urllib2
from bs4 import BeautifulSoup
from datetime import datetime as dateTimeImportClass
from django.contrib.auth.models import AnonymousUser
from django.core.mail import EmailMultiAlternatives
from django.core.paginator import Paginator, EmptyPage, PageNotAnInteger
from django.db.models import F, Q
from django.http import HttpResponseRedirect, HttpResponse, HttpResponsePermanentRedirect
from django.shortcuts import render
from django.utils import timezone, translation
from django.utils.translation import LANGUAGE_SESSION_KEY, ugettext
from django.views.decorators.csrf import csrf_exempt
from enterlink.forms import ContactForm, SearchBox
from enterlink.models import HashCache, SchemaObject, ArticleTable, EditProposal, SiteNotice
from enterlink.view_functions import parseBlockchainHTML, \
    blurbSplitter, parseTinyMCE_Citations, getTheArticleObject, \
    refreshTemplateCacheBlockchain, whiteSpaceStripper, parseTinyMCE_Media
from enterlink.media_functions import addItemToS3FromURL_local_function, getYouTubeIdIfPresent
from enterlink.model_functions import getIPAddress, mainSearch
from fbwiki import settings
from fbwiki.settings import VALID_VIDEO_EXTENSIONS, VALID_AUDIO_EXTENSIONS
from requests.packages.urllib3.exceptions import InsecureRequestWarning
requests.packages.urllib3.disable_warnings(InsecureRequestWarning)
import warnings

# Whitelist for URLs in article citations
DOFOLLOW_WHITELIST = [".edu", ".org", ".gov", ".mil", ".int", ".gob", ".ac.", 'nbcnews.com', 'latimes.com', 'ktla.com',
  'wsj.com', 'usatoday.com', 'washingtonpost.com', 'nytimes.com', 'thetimes.co.uk', 'telegraph.co.uk', 'forbes.com', 'fortune.com',
  'huffingtonpost.com', 'nypost.com', 'letemps.ch', 'nzz.ch', 'elpais.com', 'chosun.com', 'straitstimes.com', 'politika.rs',
  'nzherald.co.nz', 'haaretz.co', 'inquirer.net', 'dn.pt', 'corriere.it', 'dn.se', 'kompas.com', 'irishtimes.com', 'indiatimes.com',
  'scmp.com', 'sueddeutsche.de', 'diepresse.com', 'smh.com.au', 'theage.com.au', 'lanacion.com.ar',
  'faz.net', 'welt.de', 'zeit.de', 'lefigaro.fr', 'lemonde.fr', 'liberation.fr', 'kathimerini.gr', 'aftenposten.no',
  'ledevoir.com', 'theglobeandmail.com', 'estadao.com.br', 'eldiario.net', 'standaard.be', 'lesoir.be', 'thedailystar.net',]

# List of social media URLs
SOCIAL_MEDIA_URL_WHITELIST = [("facebook.com/", "facebook"), ("twitter.com/", "twitter"), ("plus.google.com/", "google"),
                             ("instagram.com/", "instagram"), ("youtube.com/", 'youtube'),
                             ("linkedin.com/", "linkedin"),
                             ("myspace.com/", "myspace"), ("pinterest.com/", "pinterest"),
                             ("soundcloud.com/", "soundcloud"),
                             ("songkick.com/artists/", "songkick"), ("bandcamp.com", "bandcamp"),
                             ("tumblr.com", "tumblr"), ("quora.com/profile/", "quora"),
                             ("vine.co/", "vine"), ("vk.com/", "vk"), ("last.fm/music/", "lastfm"),
                             ("last.fm/user/", "lastfm"), ("reddit.com/user/", "reddit"),
                             ("medium.com/@", "medium"), ("yelp.com/biz/", "yelp"), ("snapchat.com/add/", "snapchat")
                             ]

# List of regular expressions that are for social media URLs, but not profile pages (i.e. Tweets and Facebook posts)
SOCIAL_MEDIA_URL_BLACKLIST_REGEX = [r"facebook.com/photo.*", r"facebook.com/.*?/videos/vb.*",
   r"facebook.com/.*?/photos/", r"facebook.com/.*?/timeline/", r"facebook.com/.*?/posts", r"facebook.com/events/.*?",
   r"blog.facebook.com/.*", r"developers.facebook.com/.*",
   r"bandcamp.com/track/.*", r"bandcamp.com/album/.*", r"blog.bandcamp.com/.*",
   r"instagram.com/p/.*", r"blog.instagram.com/.*",
   r"linkedin.com/pub/.*", r"press.linkedin.com/.*", r"blog.linkedin.com/.*",
   r"last.fm/music/.*/.*",
   r"medium.com/@.*/.*",
   r"myspace.com/.*/.*", r"blogs.myspace.com/.*",
   r"pinterest.com/pin/.*", r"blog.pinterest.com/.*",
   r"soundcloud.com/.*/tracks/.*", r"soundcloud.com/.*/sets/.*", r"soundcloud.com/.*/reposts/.*",
   r"tumblr.com/post.*",
   r"twitter.com/.*?/status.*?", r"dev.twitter.com/.*", r"blog.twitter.com/.*", r"help.twitter.com/.*",
   r"support.twitter.com/.*",
   r"youtube.com/playlist.*[?]list=.*", r"youtube.com/v/.*", r"youtube.com/channel/.*?#p.*?", r"youtube.com/embed/.*",
   r"youtube.com/watch?v=.*", r"youtube.com/watch.*[?]v=.*", r"youtube.com/watch.*[?]v=.*", "youtube.com/watch?.*?"
   r"youtube.com/user/.*?#p.*?", r"youtube.com/subscription_center.*",
   ]

# List of placeholders for inputs
PLACEHOLDER_LIST = [
    "Write about the topic of this page. Think of this as a brief encyclopedia entry. Make sure to write in an encyclopedic tone and not in 1st person or in an autobiographical narrative fashion.",
    "Describe the link...",
    "Reply...",
    "This is a discussion about the above article. Concerns about the topic, its accuracy, inclusion of information etc. should be discussed here. Comments do not necessarily need to be sourced. Off-topic discussion not pertaining to the topic of the page will be removed by Master Editors.",
    "Add a link to an external source here to enable its citation in the main article summary. Briefly describe the link.",
    "<span style=\"color: #999999;\" data-mce-style=\"color: #999999;\">(Optional) Enter a single infobox item at a time. The dropdown choices are only recommendations - they are not enforced. Separate multiple items with a semicolon.</span>",
    "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"]

# Suppress certain BeautifulSoup warnings
warnings.filterwarnings("ignore", category=UserWarning, module='bs4')

# Homepage
@csrf_exempt
def index(request):
    return render(request, "enterlink/index.html")

# Search for Schema.org properties for a given article
@csrf_exempt
def AJAX_Schema_Search(request):
    # Fetch the search term from the GET parameter
    searchterm = request.GET['searchterm']

    # Get the article object from the provided slug
    cleanedParamList = getTheArticleObject(request.GET['article_slug'])
    articleObject = cleanedParamList[1]

    # Determine what the page type is. Example: https://schema.org/Person
    pageTypeToUse = "Person" if (articleObject.page_type is None or articleObject.page_type == "") else articleObject.page_type

    # Fetch all the possible schema properties for the given page type
    schemaSet = SchemaObject.objects.filter(Q(schema_for=pageTypeToUse) | Q(schema_for='Thing'), Q(exclude_from_dropdown=0))

    # Generate the list in the appropriate language
    localMappedList, localSchemaListOrig, localSchemaListTrans = [], [], []
    for schemaNugget in schemaSet:
        try:
            localMappedList.append(ugettext(schemaNugget.mapped_keyword))
            localSchemaListOrig.append(ugettext(schemaNugget.schema_keyword))
            localSchemaListTrans.append(schemaNugget.schema_keyword)
        except:
            localMappedList.append(schemaNugget.mapped_keyword)
            localSchemaListOrig.append(schemaNugget.schema_keyword)
            localSchemaListTrans.append(schemaNugget.schema_keyword)

    # See if the search term matches (exact or partially) any of schema keywords and if they do, return them.
    my_list_keywords, my_list_mapped_keywords = [], []
    if searchterm == "":
        # Return all of the possible schema properties
        my_list_keywords = localSchemaListOrig
        my_list_mapped_keywords = localMappedList
    else:
        # Look for partial or exact matches
        try:
            for index in range(0, len(localMappedList)):
                if (searchterm.lower() in localMappedList[index].lower()) or (
                    searchterm.lower() in localSchemaListTrans[index].lower()):
                    my_list_keywords.append(localSchemaListOrig[index])
                    my_list_mapped_keywords.append(localMappedList[index])
        except:
            print("Error in schema search")

    # JSONifying the data will make the links be displayable as data[0], data[1], etc in Javascript
    if schemaSet.count() == 0:
        schemaSet = 'nolinks'
        return HttpResponse("")

    # Format the JSON data
    json_data = json.dumps([my_list_keywords, my_list_mapped_keywords])

    # Return the list as a JSON
    return HttpResponse(json_data, content_type='application/json')

# Make sure the submitted entry has a citation
@csrf_exempt
def AJAX_Check_Blurb(request):
    # Fetch the blurb text
    blurbText = request.POST['blurbNugget']

    # Make sure at least citation is present in the text
    citeIndex = blurbText.find("tooltippableCarat")
    if citeIndex != -1:
        pass
    else:
        return HttpResponse("NO_CITATION")

    # Deprecated
    return HttpResponse("THIRD_PERSON")

# Article photo click-and-drag code
# https://www.dropzonejs.com/
@csrf_exempt
def dropzone(request):
    return render(request, 'enterlink/dropzone.html')

# A test page
@csrf_exempt
def test_page(request):
    return render(request, 'enterlink/test_page.html')

# Language selection page
@csrf_exempt
def language_selector(request):
    try:
        redirect_to = request.META['HTTP_REFERER']
    except:
        redirect_to = "/"
    return render(request, 'enterlink/language_selector.html', { 'redirect_to': redirect_to})

# Sometimes /favicon.ico is pinged by browsers.
@csrf_exempt
def favicon(request):
    return HttpResponse(status=204)

# Contact Us page
@csrf_exempt
def contact(request):
    # Indicates if the form was sent
    sent = False

    # Check if a form has been submitted
    if request.method == 'POST':
        # Collect the form from the POST data
        form = ContactForm(request.POST)

        # Make sure the form is valid
        if form.is_valid():
            # Recaptcha stuff
            recaptcha_response = request.POST.get('g-recaptcha-response')
            url = 'https://www.google.com/recaptcha/api/siteverify'
            values = {
                'secret': settings.RECAPTCHA_PRIVATE_KEY,
                'response': recaptcha_response
            }
            data = urllib.urlencode(values)

            # Send the CAPTCHA request to Google to be verified
            req = urllib2.Request(url, data)
            response = urllib2.urlopen(req)

            # Convert the response into a JSON
            result = json.load(response)

            # Check the CAPTCHA result
            if result['success']:
                pass
            else:
                return HttpResponse("Invalid reCAPTCHA. Please try again")

            # Save the contact form
            contactObject = form.save(commit=True)

            # return index(request)
            sent = True
            data = form.cleaned_data

            # Check the IP address of the sender
            theIP, theUserAgent = None, None
            try:
                theIP = getIPAddress(request)
            except:
                pass

            # Get the user agent of the sender
            try:
                theUserAgent = request.META['HTTP_USER_AGENT']
            except:
                pass

            # Update the contact form
            contactObject.contactip = theIP
            contactObject.contactuseragent = theUserAgent
            contactObject.save()

            # Email subject line
            email_subject = "NEW CONTACT US FORM: " + data['contactsubject']

            # Prepare the HTML
            html_content = "Contact Type: " + data['contacttype'] + "<br><br>Message:<br>------------------------------<br>" + data[ 'contacttext'] +\
                           "<br>------------------------------<br>Sender: " + data['contactname'] + "<br>Email: " + data['contactemail'] + \
                           "<br>IP: " + theIP + "<br>User Agent: " + theUserAgent

            # Set up the email
            msg1 = EmailMultiAlternatives(email_subject, html_content, 'welcome@everipedia.com', ["webmaster@everipedia.com"], reply_to=[data['contactemail']], bcc=["sam@everipedia.com", "mahbod@everipedia.com", "theodor@everipedia.com",
               "christian@everipedia.com", "angel@everipedia.com", "dave@everipedia.com", "navin@everipedia.com", "romi@everipedia.com"])

            # Attach the message as text
            msg1.attach_alternative(html_content, "text/html")

            # Send the email
            msg1.send()

        else:
            print(form.errors)
    else:
        form = ContactForm()

    # Return the page HTML
    return render(request, 'enterlink/contact.html', {'form': form, 'sent': sent})

# Generate the QR page for the page
@csrf_exempt
def AJAX_QR_Code_Iframe(request, inputslug):
    pageinfo = ArticleTable.objects.get(slug=inputslug)
    return render(request, 'enterlink/qr_code_iframe.html', {'pageinfo': pageinfo})

# Error page (a wiki)
@csrf_exempt
def error(request):
    response = template_handler_blockchain(request, 'HTTP_404')
    response.status_code = 404
    response['X-Robots-Tag'] = 'noindex, noarchive'
    return response

# Search bar and results iframe, for Google AMP mobile pages
@csrf_exempt
def searchiframe(request):
    return search(request, useIframe=True)

# Search page
@csrf_exempt
def search(request, useIframe=False):
    # Set some variables
    result, paginatedresult, paginatedblurbs, original_searchterm, searchterm = '', '', '', '', ''

    # See if the search is an iframe
    if (request.GET.get('iframe') == '1') or (useIframe == True):
        return render(request, 'enterlink/search-iframe.html', {})

    # Construct search form from the POST data
    searchform = SearchBox(request.POST)

    # Try to get the search term
    if searchform.is_valid():
        # Process the search form itself
        data = searchform.cleaned_data
        original_searchterm = data['SearchBox']
        searchterm = data['SearchBox'].lower()
    else:
        # Try to fetch the search term if it is a GET parameter
        try:
            searchterm = request.GET['searchterm']
            original_searchterm = searchterm
        except:
            searchterm = ""
            original_searchterm = searchterm

    # Process the main search
    BLURB_CHAR_LIMIT = 650
    result = mainSearch(None, "tinyMCE_JSON", searchterm, 80, BLURB_CHAR_LIMIT)

    # Paginate the search results
    paginator = Paginator(result, 20)

    # Handle the pagination
    page = request.GET.get('page')
    try:
        paginatedresult = paginator.page(page)
    except PageNotAnInteger:
         paginatedresult = paginator.page(1)
    except EmptyPage:
         paginatedresult = paginator.page(paginator.num_pages)

    # Handle empty result sets
    try:
        if len(result) == 0 or (result == 'nopersonfoundwiththatname'):
            result = 'nopersonfoundwiththatname'
            paginatedresult = 'nopersonfoundwiththatname'
            try:
                if request.GET['create_req'] == '1':
                    return HttpResponseRedirect("/create_page/advanced_edit/?key=" + searchterm)
            except:
                pass
    except:
        print("Uncaught error in search")

    # Return the search result
    return render(request, 'enterlink/search.html',{'result': result, 'searchterm': searchterm, 'searchterm_orig_cap': original_searchterm, 'paginatedresult': paginatedresult, 'paginatedblurb': paginatedblurbs})

# Increment the pageviews
@csrf_exempt
def pagecounter(request, page_slug):
    ArticleTable.objects.filter(Q(slug__iexact=page_slug) | Q(slug_alt__iexact=page_slug)).update(pageviews=F('pageviews') + 1)
    return HttpResponse("")

# Hover blurb (when a blue link is hovered over on an article page)
@csrf_exempt
def hoverBlurb(request, url_param, isAJAX=False):
    # Get the article object from the URL parameter
    cleanedParamList = getTheArticleObject(url_param)
    articleObject = cleanedParamList[1]

    # Handle removed pages
    try:
        if articleObject.is_removed == True:
            return HttpResponseRedirect('/error/')
    except:
        pass

    # Get all the data from the article and pass it to the Django template
    contextDictionary = {}
    contextDictionary.update({"ARTICLE_NAME": articleObject.page_title})
    contextDictionary.update({"ARTICLE_SLUG": articleObject.slug})
    contextDictionary.update({"ARTICLE_SLUG_ALT": articleObject.slug_alt})
    contextDictionary.update({"ARTICLE_IS_REMOVED": articleObject.is_removed})
    contextDictionary.update({"ARTICLE_PHOTO_URL": articleObject.photo_url})
    contextDictionary.update({"ARTICLE_THUMB_URL": articleObject.photo_thumb_url})
    contextDictionary.update({"BLURB_SNIPPET": articleObject.blurb_snippet})

    # Return the hoverblurb HTML
    if isAJAX:
        return render(request, "enterlink/hoverblurb_ajax_blockchain.html", contextDictionary)
    else:
        return render(request, "enterlink/hoverblurb_blockchain.html", contextDictionary)

# Hover blurb bubble for the Google AMP page
@csrf_exempt
def AJAX_Hoverblurb(request, url_param):
    return hoverBlurb(request, url_param, isAJAX=True)

# Hover pane bubble for citations when they are clicked
@csrf_exempt
def AJAX_Hoverlink(request, url_param):
    # Get the article from the url parameter
    cleanedParamList = getTheArticleObject(url_param)
    articleObject = cleanedParamList[1]

    # Fail if the article has been removed
    try:
        if articleObject.is_removed == True:
            return HttpResponseRedirect('/error/')
    except:
        pass

    # Determine whether to use the lightbox (if desktop or tablet) or the hover bubble (if mobile AMP)
    useLightBox = False
    if request.GET.get('lightbox') == "1":
        useLightBox = True

    # Determine which area to parse
    try:
        mediaType = request.GET.get('media_type')
    except:
        mediaType = ""


    # Get the link to use
    try:
        linkURL = request.GET['target_url']
        linkURL = urllib.unquote_plus(linkURL)
    except:
        linkURL = ""
        print("LinkURL not found")

    # Get the cached HTML for the article
    cacheObject = HashCache.objects.get(ipfs_hash=articleObject.ipfs_hash_current)

    # Parse the HTML
    resultDictionary = parseBlockchainHTML(cacheObject.html_blob)

    # Check for YouTube
    youtubeResult = getYouTubeIdIfPresent(linkURL)

    # Get all the citations from the parsed article and loop through them until the requested one is found
    # When found, save the JSON for that citation
    citationObject = ""
    for citation in resultDictionary["CITATION_OBJECTS"]:
        if citation["url"] == linkURL:
            citationObject = citation
            break
        if youtubeResult:
            if youtubeResult in citation["url"]:
                citationObject = citation
                break

    # Fill the Django template context with relevant data from both the article...
    contextDictionary = {}
    contextDictionary.update({"ARTICLE_NAME": articleObject.page_title})
    contextDictionary.update({"ARTICLE_SLUG": articleObject.slug})
    contextDictionary.update({"ARTICLE_SLUG_ALT": articleObject.slug_alt})
    contextDictionary.update({"ARTICLE_IS_REMOVED": articleObject.is_removed})
    contextDictionary.update({"ARTICLE_PHOTO_URL": articleObject.photo_url})
    contextDictionary.update({"ARTICLE_THUMB_URL": articleObject.photo_thumb_url})
    contextDictionary.update({"ARTICLE_PAGE_TYPE": articleObject.page_type})
    contextDictionary.update({"BLURB_SNIPPET": articleObject.blurb_snippet})

    # ... and the citation JSON
    try:
        # Try the main citations first
        contextDictionary.update({"CITATION_DESCRIPTION": citationObject["description"]})
        contextDictionary.update({"CITATION_TIMESTAMP": citationObject["timestamp"]})
        contextDictionary.update({"CITATION_URL": citationObject["url"]})
        contextDictionary.update({"CITATION_THUMB": citationObject["thumb"]})
        contextDictionary.update({"CITATION_MIME": citationObject["mime"]})
        contextDictionary.update({"CITATION_CATEGORY": citationObject["category"]})
        contextDictionary.update({"CITATION_YOUTUBE_ID": youtubeResult})
    except:
        # Otherwise try the media ones
        mediaObject = ""
        for mediaItem in resultDictionary["MEDIA_OBJECTS"]:
            # print(mediaItem)
            # print(linkURL)
            if mediaItem["url"] == linkURL or mediaItem["thumb"] == linkURL:
                mediaObject = mediaItem
                break
            if youtubeResult:
                if youtubeResult in mediaItem["url"]:
                    mediaObject = mediaItem
                    break
        contextDictionary.update({"CITATION_DESCRIPTION": mediaObject["caption"]})
        contextDictionary.update({"CITATION_TIMESTAMP": mediaObject["timestamp"]})
        contextDictionary.update({"CITATION_URL": mediaObject["url"]})
        contextDictionary.update({"CITATION_THUMB": mediaObject["thumb"]})
        contextDictionary.update({"CITATION_MIME": mediaObject["mime"]})
        contextDictionary.update({"CITATION_CATEGORY": mediaObject["class"]})
        contextDictionary.update({"CITATION_YOUTUBE_ID": youtubeResult})

    # Render the hoverlink bubble appropriately
    if (useLightBox):
        # Desktop and Tablet
        return render(request, "enterlink/hoverlink_iframe_blockchain.html", contextDictionary)
    else:
        # Mobile
        return render(request, 'enterlink/hoverlink_ajax_blockchain.html', contextDictionary)

# Various search processes. Includes citation, blue-links (to other pages), and in-article picture injections into the TinyMCE object
# on the edit page.
@csrf_exempt
def AJAX_Search(request, url_param):
    FETCH_LIMIT = 20
    resultDictionary = {}

    # See if the search request is for a citation
    # If so, create a list of citations in the article and construct the citation HTML superscript block (e.g. [24])
    # that is to be injected into the article
    if url_param == 'tinymce-cite-source':
        try:
            cited_by = request.GET.get('cited_by')
            citer_rank = request.GET.get('citer_rank')
            citer_is_verified = request.GET.get('citer_is_verified')
        except:
            cited_by = ""
            citer_rank = ""
            citer_is_verified = ""

        # Get the POST variables
        slug = request.POST['slug']
        htmlBlock = request.POST['htmlblock']

        # Create the BeautifulSoup object
        theSoup = BeautifulSoup(htmlBlock, "html5lib")

        # Parse the citations from the HTML and add them to the context dictionary
        parseTinyMCE_Citations(theSoup, resultDictionary)

        # Create the citation HTML (e.g. [26])
        resultArray = []
        for linkNugget in resultDictionary["CITATION_OBJECTS"]:
            stringToRespond = u"<span class='tooltip-wrap'><a class='tooltippableCarat' rel='nofollow'"
            stringToRespond = stringToRespond + u" href='/wiki/" + unicode(slug) + u"/"
            stringToRespond = stringToRespond + u"' data-username='" + unicode(linkNugget["url"]) + \
                              u"' data-cited_by='" + unicode(cited_by) + \
                              u"' data-cited_rank='" + unicode(citer_rank) + \
                              u"' data-citer_is_verified='" + unicode(citer_is_verified) + \
                              u"' ><sup>"
            stringToRespond = stringToRespond + u"[" + unicode(linkNugget["integer"]) + u"]"
            stringToRespond = stringToRespond + u"</sup></a></span>&#8203;"
            linkNugget["tooltipHTML"] = stringToRespond
            resultArray.append(linkNugget)

        # Return the list of citations on the page
        return render(request, 'enterlink/ajaxresults.html',
              {"result": resultArray, "renderType": url_param, "cited_by": cited_by,
               "citer_rank": citer_rank, "citer_is_verified": citer_is_verified})

    # Generate a list of the photos
    if url_param == 'tinymce-cite-picture':
        try:
            cited_by = request.GET.get('cited_by')
            citer_rank = request.GET.get('citer_rank')
            citer_is_verified = request.GET.get('citer_is_verified')
        except:
            cited_by = ""
            citer_rank = ""
            citer_is_verified = ""

        # Get the POST variables
        slug = request.POST['slug']
        htmlBlock = request.POST['htmlblock']

        # Create the BeautifulSoup object
        theSoup = BeautifulSoup(htmlBlock, "html5lib")

        # Parse the media gallery objects from the HTML and add them to the context dictionary
        parseTinyMCE_Media(theSoup, resultDictionary)

        # Create the in-article image container.
        mediaNugget, resultArray = [], []
        for linkNugget in resultDictionary["MEDIA_OBJECTS"]:
            # Get the URL
            theLinkURL = linkNugget["url"]

            # Parse the name and extension
            name, extension = os.path.splitext(theLinkURL)
            extension = extension.lower()

            # Get some relevant data from the media object
            theMIME = linkNugget["mime"]
            theLinkComment = unicode(linkNugget["caption"].decode("UTF-8"))
            theLinkID = ""
            theLinkTimestamp = linkNugget["timestamp"]

            # Structure the media container according to what type of MIME it is
            if theMIME == "" or theMIME is None:
                theMIME = "NONE"
            if theMIME == 'image/gif':
                thumbURL = linkNugget["thumb"]
                mediaNugget = [theLinkURL, theLinkComment, "GIF", theLinkID, slug, thumbURL, theLinkTimestamp]
                picString = u"<td>"
                picString += u"<a class='imagelink' href='/wiki/%s/%s/'>" % (slug, theLinkID)
                picString += u"<img class='caption-img lazyloadable' alt='%s' height='AAA111BBB222CCC333DDD444EEE' width='200' data-mimetype='%s' src='%s' data-src='%s' ></a></td>" % (u'Image', theMIME, thumbURL, theLinkURL )
            elif 'image' in theMIME:
                thumbURL = linkNugget["thumb"]
                mediaNugget = [theLinkURL, theLinkComment, "PICTURE", theLinkID, slug, thumbURL, theLinkTimestamp, theMIME]
                picString = u"<td>"
                picString += u"<a class='imagelink' href='/wiki/%s/%s/'>" % (slug, theLinkID)
                picString += u"<img class='caption-img lazyloadable' alt='%s' height='AAA111BBB222CCC333DDD444EEE' width='200' data-mimetype='%s' src='%s' data-src='%s' ></a></td>" % (u'Image', theMIME, thumbURL, theLinkURL)
            elif getYouTubeIdIfPresent(theLinkURL):
                yt_id = getYouTubeIdIfPresent(theLinkURL)
                LOAD_YOUTUBE_JS = True
                mediaNugget = [theLinkURL, theLinkComment, "YOUTUBE", yt_id, theLinkID, slug, theLinkTimestamp]
                picString = u"<td class='inline-video-wrapper'>"
                picString += u"<a class='imagelink inline-video-overlay' href='/wiki/%s/%s/'>" % (slug, theLinkID)
                picString += u"<img class='caption-img caption-video lazyloadable' alt='%s' height='AAA111BBB222CCC333DDD444EEE' width='200' data-mimetype='%s' src='https://i.ytimg.com/vi/%s/default.jpg' data-src='https://i.ytimg.com/vi/%s/hqdefault.jpg' ></a></td>" % (u'Youtube Video', theMIME, yt_id, yt_id )
            elif extension in VALID_VIDEO_EXTENSIONS:
                mediaNugget = [theLinkURL, theLinkComment, "NORMAL_VIDEO", theLinkID, theMIME, theLinkTimestamp]
                picString = u"<td class='inline-video-wrapper'>"
                picString += u"<a class='imagelink inline-video-overlay' href='/wiki/%s/%s/'>" % (slug, theLinkID)
                picString += u"<video class='caption-img caption-video' alt='%s' height='AAA111BBB222CCC333DDD444EEE' width='200' data-mimetype='%s' src='%s' preload='metadata'><source src='%s#t=0.1' type='%s'></video></a></td>" % (u'Video', theMIME, theLinkURL, theLinkURL, theMIME  )
            elif extension in VALID_AUDIO_EXTENSIONS:
                mediaNugget = [theLinkURL, theLinkComment, "AUDIO", theLinkID, theMIME, theLinkTimestamp]
                picString = u"<td class='inline-audio-wrapper'>"
                picString += u"<a class='imagelink inline-audio-overlay' href='/wiki/%s/%s/'>" % (slug, theLinkID)
                picString += u"<img class='caption-img caption-audio' alt='%s' height='AAA111BBB222CCC333DDD444EEE' width='200' data-mimetype='%s' src='%s' ></a></td>" % (u'Audio', theMIME, theLinkURL )
            else:
                continue
            stringToRespond = u"<table class='mce-item-table blurb-inline-image-container'  data-nlid='%s' data-mce-selected='1'>" \
              u"<tbody><tr>%s</tr><tr><caption class='blurbimage-caption'>%s</caption></tr></tbody></table>" % (theLinkID, picString, theLinkComment)
            resultArray.append([mediaNugget, stringToRespond])

        return render(request, 'enterlink/ajaxresults.html',
              {"result": resultArray, "renderType": url_param, "cited_by": cited_by,
               "citer_rank": citer_rank, "citer_is_verified": citer_is_verified})

    # Get the search term
    searchterm = request.GET['searchterm']

    # Get the conditions of the search
    if request.GET.get('search_type'):
        search_type = request.GET.get('search_type')
    else:
        search_type = None

    # The TinyMCE bookmark is a pointer to where the cursor / mouse was in the TinyMCE window. This is useful for inserting
    # objects there.
    if request.GET.get('tinymceBookmark'):
        tinymceBookmark = request.GET.get('tinymceBookmark')
    else:
        tinymceBookmark = None

    # Get the ID of a relevant element, if applicable
    if request.GET.get('elementID'):
        elementID = request.GET.get('elementID')
    else:
        elementID = None

    # tinymce-link-page
    BLURB_CHAR_LIMIT = 250

    # Perform the search
    result = mainSearch(url_param, search_type, searchterm, FETCH_LIMIT, BLURB_CHAR_LIMIT)

    blurbResults = []
    # Blank result
    if ((result == 0) and (blurbResults == 0)):
        return render(request, 'enterlink/ajaxresults.html',
               {"result": result, "renderType": url_param, "blurbResults": blurbResults, "searchterm": searchterm,
                "search_type": search_type, "tinymceBookmark": tinymceBookmark, "elementID": elementID})

    # Return the results
    return render(request, 'enterlink/ajaxresults.html',
                  {"result": result, "renderType": url_param, "blurbResults": blurbResults, "searchterm": searchterm,
                   "search_type": search_type, "tinymceBookmark": tinymceBookmark, "elementID": elementID})


# Set the language in the session and the cookie
def nonPOSTSetLanguage(request, theLanguage):
    lang_code = theLanguage
    try:
        translation.activate(lang_code)
        request.LANGUAGE_CODE = lang_code
        request.LANG = lang_code
    except:
        pass
    try:
        request.session[LANGUAGE_SESSION_KEY] = lang_code
    except:
        pass

    return request

# Redirect to the edit page
@csrf_exempt
def edit_301(url_param="create_page"):
    # Fetch the article object from the url parameter
    cleanedParamList = getTheArticleObject(url_param)
    cleaned_url_param = cleanedParamList[0]

    # Do the redirect
    return HttpResponsePermanentRedirect("/wiki/%s/advanced_edit/" % cleaned_url_param)

# Redirect to the main article page
@csrf_exempt
def template_handler_301(url_param):
    # Fetch the article object from the url parameter
    cleanedParamList = getTheArticleObject(url_param)
    cleaned_url_param = cleanedParamList[0]

    # Do the redirect
    return HttpResponsePermanentRedirect("/wiki/%s/" % cleaned_url_param)

# Redirect to the main article page, AMP version
@csrf_exempt
def template_handler_301_amp(url_param):
    # Fetch the article object from the url parameter
    cleanedParamList = getTheArticleObject(url_param)
    cleaned_url_param = cleanedParamList[0]

    # Do the redirect
    return HttpResponsePermanentRedirect("/wiki/%s/amp/" % cleaned_url_param)

# Get the HTML for an article
@csrf_exempt
def get_article_raw_html(ipfs_hash="", lastactivity="", articletable=""):
    # Account for a blank IPFS
    if ipfs_hash == "":
        return HttpResponse("NEED THE IPFS HASH")

    # Try pulling the article HTML from the cache
    try:
        hashCache = HashCache.objects.get(ipfs_hash=ipfs_hash)
        lastCacheRefresh = hashCache.timestamp
    except:
        hashCache = ""
        lastCacheRefresh = dateTimeImportClass(2000, 1, 1, 1, 1, 1, tzinfo=pytz.timezone('UTC'))

    # Account for the last time the cache was updated. If it is too old, pull from IPFS itself rather than the cache
    if (lastactivity is None):
        pullFromIPFS = True
    else:
        try:
            pullFromIPFS = (lastactivity > lastCacheRefresh)
        except:
            pullFromIPFS = False

    # FIX LATER
    pullFromIPFS = False

    if pullFromIPFS:
        # Pull from IPFS
        # Connect to the IPFS API
        api = ipfsapi.connect('127.0.0.1', 5001)

        # Fetch the article HTML and unzip it
        rawHTML = api.cat(ipfs_hash)
        rawHTML = gzip.GzipFile(fileobj=StringIO.StringIO(rawHTML)).read()

        # Get the current time
        lilStamp = datetime.datetime.now(tz=pytz.utc)
        try:
            # Update the HTML cache
            hashTable = HashCache.objects.get(ipfs_hash=ipfs_hash)
            hashTable.articletable = articletable
            hashTable.timestamp = lilStamp
            hashTable.html_blob = rawHTML
            hashTable.save()
        except:
            print("CREATING A NEW HASHCACHE")
            # Establish a cache for the HTML
            hashTable = HashCache.objects.create(ipfs_hash=ipfs_hash, timestamp=lilStamp, html_blob=rawHTML, articletable=articletable)
        return rawHTML
    else:
        # Pull from the HashCache
        return hashCache.html_blob

# Main article handler
@csrf_exempt
def template_handler_blockchain(request, url_param='url_param'):
    # Handle blank requests
    if ("/None" in url_param):
        return HttpResponse("")

    # Get the article object from the url parameter
    cleanedParamList = getTheArticleObject(url_param)
    articleObject = cleanedParamList[1]

    # See if the request is from mobile or tablet
    useMobile = False
    if (request.mobile or '/amp/' in request.path) and not request.tablet :
        useMobile = True

    # Get the last activity time
    lastActivityTime = articleObject.lastmod_timestamp

    # Get the relevant cache depending on the request type
    if useMobile:
        styledHTMLCacheTime = articleObject.mobile_cache_timestamp
    else:
        styledHTMLCacheTime = articleObject.desktop_cache_timestamp

    # Assume an old cache time if it is NULL, since comparing a datetime with NULL gives errors
    if (styledHTMLCacheTime is None):
        styledHTMLCacheTime = dateTimeImportClass(2000, 1, 1, 1, 1, 1, tzinfo=pytz.timezone('UTC'))
    useStyledHTMLCache = (lastActivityTime <= styledHTMLCacheTime)

    # Get the hash cache time
    try:
        hashCacheHTMLTime = HashCache.objects.get(ipfs_hash=articleObject.ipfs_hash_current).timestamp

        # Assume an old cache time if it is NULL, since comparing a datetime with NULL gives errors
        if (hashCacheHTMLTime is None):
            hashCacheHTMLTime = dateTimeImportClass(2000, 1, 1, 1, 1, 1, tzinfo=pytz.timezone('UTC'))
    except:
        hashCacheHTMLTime = dateTimeImportClass(2000, 1, 1, 1, 1, 1, tzinfo=pytz.timezone('UTC'))

    # Detect the incoming language
    incomingLanguage = translation.get_language()

    # Determine whether to pull the cached CSS-stylized pages from Azure blob storage, or to generate new ones
    if useStyledHTMLCache == True:
        # Determing to pull either the mobile or desktop / tablet pages
        if useMobile:
            fetchURL = 'https://epcdndisk.blob.core.windows.net/mobile-template-blockchain/%s.html.gz' % (articleObject.ipfs_hash_current)
        else:
            fetchURL = 'https://epcdndisk.blob.core.windows.net/desktop-template-blockchain/%s.html.gz' % (articleObject.ipfs_hash_current)

        # Fetch the cached page
        response = urllib2.urlopen(fetchURL)

        # Read the page and unzip it
        responseNugget = response.read()
        content = gzip.GzipFile(fileobj=StringIO.StringIO(responseNugget)).read()

        # Return the HTML
        response = HttpResponse(content)
        return response
    else:
        # Set the user as anonymous
        request.user = AnonymousUser()

        # Fetch the language that the article was created in
        renderLang = articleObject.page_lang

        # Set the session language to the page language. This is temporary so the page is generated with the correct language
        request = nonPOSTSetLanguage(request, renderLang)

        # Fetch the site notice
        try:
            # Try the language specific version
            theNotice = SiteNotice.objects.get(id=2, lang=renderLang)
        except:
            # Default to English if that fails
            theNotice = SiteNotice.objects.get(id=2, lang="en")



        # Get the raw, unstyled HTML for the page
        unstyledHTML = get_article_raw_html(ipfs_hash=articleObject.ipfs_hash_current, lastactivity=lastActivityTime, articletable=articleObject )
        if useMobile:
            # Parse the HTML for relevant data
            newDictionary = parseBlockchainHTML(unstyledHTML, useAMP=True)

            # Set some variables
            newDictionary.update({"CURRENT_IPFS_HASH": articleObject.ipfs_hash_current})
            newDictionary.update({"LANG_OVERRIDE": renderLang})
            newDictionary.update({'SITE_NOTICE': theNotice.mobile_html})
            newDictionary.update({'IS_REMOVED_FROM_INDEX': articleObject.is_removed_from_index})

            # Generate the CSS-styled page from the template, filling in variables parsed from the unstyled/raw HTML
            styledHTMLResponse =  render(request, 'enterlink/template_blockchain_styled_amp.html', newDictionary)

            # Store the CSS-styled mobile page to Azure blob
            refreshTemplateCacheBlockchain(articleObject.ipfs_hash_current, styledHTMLResponse.content, 'mobile-template-blockchain')

            # Set the cache timestamp
            articleObject.mobile_cache_timestamp = timezone.now()
            articleObject.save()
        else:
            # Parse the HTML for relevant data
            newDictionary = parseBlockchainHTML(unstyledHTML, useAMP=False)
            newDictionary.update({'SITE_NOTICE': theNotice.desktop_html})

            # Set some variables
            newDictionary.update({"CURRENT_IPFS_HASH": articleObject.ipfs_hash_current})
            newDictionary.update({"LANG_OVERRIDE": renderLang})
            newDictionary.update({'IS_REMOVED_FROM_INDEX': articleObject.is_removed_from_index})

            # Generate the CSS-styled page from the template, filling in variables parsed from the unstyled/raw HTML
            styledHTMLResponse = render(request, 'enterlink/template_blockchain_styled_desktop.html', newDictionary)

            # Store the CSS-styled desktop/tablet page to Azure blob
            refreshTemplateCacheBlockchain(articleObject.ipfs_hash_current, styledHTMLResponse.content, 'desktop-template-blockchain')

            # Set the cache timestamp
            articleObject.desktop_cache_timestamp = timezone.now()
            articleObject.save()

        # Construct a blurb snippet
        miniBlurb = blurbSplitter(newDictionary["BLURB"], truncateLimit=2048, miniblurb=True)[0]
        miniBlurb = whiteSpaceStripper(miniBlurb)

        # Update the article object with info from the HTML
        ArticleTable.objects.filter(slug__iexact=articleObject.slug).update(
            page_title=newDictionary["PAGETITLE"],
            blurb_snippet=miniBlurb,
            photo_url=newDictionary["PHOTOOBJECT"]["url"],
            photo_thumb_url=newDictionary["PHOTOOBJECT"]["thumb"],
            page_type=newDictionary["PAGEMETADATA"]["page_type"],
            page_sub_type=newDictionary["PAGEMETADATA"]["sub_page_type"],
            is_removed=newDictionary["PAGEMETADATA"]["is_removed"],
            is_removed_from_index=newDictionary["PAGEMETADATA"]["is_indexed"],
            bing_index_override=newDictionary["PAGEMETADATA"]["bing_index_override"],
            is_adult_content=newDictionary["PAGEMETADATA"]["is_adult_content"]
        )

        # Set the pageviews
        if articleObject.pageviews == None:
            articleObject.pageviews = newDictionary["PAGEMETADATA"]["pageviews"]
            articleObject.save()

        # Set the language back to what it was before
        nonPOSTSetLanguage(request, incomingLanguage)

        # Return the HTML
        return styledHTMLResponse

# IQ Brainpower management page
@csrf_exempt
def brainpowermgmt(request, account_name):
    return render(request, 'enterlink/brainpowermgmt.html', )

# IQ Rewards management page
@csrf_exempt
def rewardsmgmt(request, account_name):
    return render(request, 'enterlink/rewardsmgmt.html', )

# Recent article proposals
@csrf_exempt
def recent_activity(request):
    # Fetch all of the proposals
    proposal_list = EditProposal.objects.all().order_by('-starttime')

    # Set up pagination
    paginator = Paginator(proposal_list, 25)

    # See if an existing pagination is occuring
    page = request.GET.get('page')
    try:
        theProposals = paginator.page(page)
    except PageNotAnInteger:
        # If page is not an integer, deliver first page.
        theProposals = paginator.page(1)
    except EmptyPage:
        # If page is out of range (e.g. 9999), deliver last page of results.
        theProposals = paginator.page(paginator.num_pages)

    # Return the HTML
    return render(request, 'enterlink/recent-activity.html', {'theProposals': theProposals})
