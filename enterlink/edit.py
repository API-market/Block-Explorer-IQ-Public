# -*- coding: utf-8 -*-
# 2014 - 2018 Travis Moore, Sam Kazemian
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

from bs4 import BeautifulSoup
from datetime import datetime
from django.core.files.uploadedfile import InMemoryUploadedFile
from django.http import HttpResponseRedirect, HttpResponse, JsonResponse
from django.shortcuts import render
from django.template.loader import render_to_string
from django.utils import timezone, translation
from django.utils.html import strip_tags
from django.utils.translation import ugettext
from django.views.decorators.csrf import csrf_exempt
from django.views.decorators.http import require_GET, require_POST
from enterlink.forms import NewlinkFileForm, LinkForm, PageMetaForm
from enterlink.models import ArticleTable, HashCache, SchemaObject, EditProposal, SavedDraft
from enterlink.model_functions import linkCategorizer, profileLinkTester, dupeLinkDetector, badLinkSanitizer, \
    entireArticleHTMLSanitizer
from enterlink.view_functions import getTheArticleObject, parseBlockchainHTML, parseTinyMCE_Citations, getDiffs, ipfs_to_uint64_trunc, encodeNameSwappedEndian, getCleanStrippedSlug
from enterlink.media_functions import processPhoto, addMediaImage, fetchMetaThumbnail
from fbwiki.settings import AWS_STORAGE_BUCKET_NAME, AWS_ACCESS_KEY_ID, AWS_SECRET_ACCESS_KEY
import datetime
import django.utils.text as DjangoText
import gzip
import ipfsapi
import json
import pytz
import magic
from mimetypes import MimeTypes
import requests
import StringIO
import time

# Placeholders for various forms
PLACEHOLDER_LIST = [
    "Write about the topic of this page. Think of this as a brief encyclopedia entry. Make sure to write in an encyclopedic tone and not in 1st person or in an autobiographical narrative fashion.",
    "Describe the link...",
    "Reply...",
    "This is a discussion about the above article. Concerns about the topic, its accuracy, inclusion of information etc. should be discussed here. Comments do not necessarily need to be sourced. Off-topic discussion not pertaining to the topic of the page will be removed by Master Editors.",
    "Add a link to an external source here to enable its citation in the main article summary. Briefly describe the link.",
    "<span style=\"color: #999999;\" data-mce-style=\"color: #999999;\">(Optional) Enter a single infobox item at a time. The dropdown choices are only recommendations - they are not enforced. Separate multiple items with a semicolon.</span>",
    "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"]

# Default IPFS template page
DEFAULT_PAGE_HASH_OLD = "QmQCeAYSbKut79Uvw2wPHzBnsVpuLCjpbE5sm7nBXwJerR"
# Has <p></p>\n inside blurb-wrap
DEFAULT_PAGE_HASH_OLD_2 = "Qmd1DSADAWLQsDKMozi7WWXsguoEAQhtqbzU5YcF3CNeze"

# Has <p></br></p> inside blurb-wrap (no newline)
DEFAULT_PAGE_HASH = "QmVtWo4WhpMRQfehgJi3dV5ELyupzobaA8t9PhdfKrWa77"


# Standard header for URL requests
REQUEST_HEADER = {
    'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.11 (KHTML, like Gecko) Chrome/23.0.1271.64 Safari/537.11',
    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
    'Accept-Charset': 'ISO-8859-1,utf-8;q=0.7,*;q=0.3',
    'Accept-Encoding': 'none',
    'Accept-Language': 'en-US,en;q=0.8',
    'Connection': 'close'}

# Create a new page
@csrf_exempt
def create_page(request):
    # Fetch the page title
    try:
        pagetitle = request.GET.get("newtitle")
        assert(pagetitle is not None)
    except:
        pagetitle = request.POST.get("SearchBox")

    # Create a URL slug from the page title
    newSlug = getCleanStrippedSlug(pagetitle)

    # Fetch the blank page template HTML
    hashObject = HashCache.objects.get(ipfs_hash=DEFAULT_PAGE_HASH)

    # Fill in the template page with the title and language-specific headers
    replaceList = [("everipedia-blank-page-template", newSlug), ('<h1 class="page-title">', '<h1 class="page-title">%s' % pagetitle),
                   ("Page Type", ugettext("Page Type")), ("Removed From Site", ugettext("Removed From Site")), ("Adult Content", ugettext("Adult Content")),
                   ("Media Gallery", ugettext("Media Gallery")), ("References and Citations", ugettext("References and Citations"))]
    alteredDefaultHTML = hashObject.html_blob
    for replaceItem in replaceList:
        alteredDefaultHTML = alteredDefaultHTML.replace(replaceItem[0], replaceItem[1])

    # Connect to IPFS daemon
    api = ipfsapi.connect('127.0.0.1', 5001)

    # Add the new page to IPFS
    ipfs_created_page = api.add_str(alteredDefaultHTML)

    # Create the article object
    newArticle = ArticleTable.objects.create(ipfs_hash_parent=DEFAULT_PAGE_HASH, ipfs_hash_current=ipfs_created_page, page_title=pagetitle, blurb_snippet="",
            page_type=None, lastmod_timestamp=datetime.datetime.utcnow(), slug=newSlug, slug_alt=newSlug, photo_url="https://epcdn-vz.azureedge.net/static/images/no-image-slide-big.png",
            photo_thumb_url="https://epcdn-vz.azureedge.net/static/images/no-image-slide.png", is_new_page=True,
            is_removed_from_index=True, page_lang=translation.get_language())

    # Cache the IPFS
    HashCache.objects.create(ipfs_hash=ipfs_created_page, timestamp=datetime.datetime.now(tz=pytz.utc), html_blob=alteredDefaultHTML, articletable=newArticle)

    # Redirect to the edit page
    return HttpResponseRedirect("/wiki/%s/advanced_edit/" % newSlug)



# Sync the MySQL-stored edit proposals to the proposals on chain
@csrf_exempt
def sync_to_chain(request):
    # # Fetch all proposals for all articles that have not been verified
    # unverifiedProposals = EditProposal.objects.filter(chainverified=True, status=2, grandparent_hash="Qmd1DSADAWLQsDKMozi7WWXsguoEAQhtqbzU5YcF3CNeze").order_by('starttime')
    #
    # # Loop through the unverified proposals
    # for proposal in unverifiedProposals:
    #     try:
    #         print("Processing proposal %s" % proposal.id)
    #         cacheFinalizedResult(proposal.id, False)
    #     except:
    #         pass

    # Fetch all proposals for all articles that have not been verified
    unverifiedProposals = EditProposal.objects.filter(chainverified=False).order_by('starttime')

    # Loop through the unverified proposals
    for proposal in unverifiedProposals:
        try:
            print("Processing proposal %s" % proposal.id)
            cacheFinalizedResult(proposal.id, False)
        except Exception as e:
            print(unicode(e))

    # Return the page HTML
    return HttpResponse("Complete")

@csrf_exempt
def check_new_articles(request):
    # Fetch all proposals marked as is_new_page = True
    newArticles = ArticleTable.objects.filter(is_new_page=True)

    # Loop through all of the articles and check their proposals
    for article in newArticles:
        proposals = EditProposal.objects.filter(article_id=article.id)
        for proposal in proposals:
            try:
                print("Processing proposal %s" % proposal.id)
                cacheFinalizedResult(proposal.id, False)
            except Exception as e:
                print(unicode(e))

    # Return the page HTML
    return HttpResponse("Complete")

# Show all the votes for a given article
@csrf_exempt
def vote(request, url_param):
    # Fetch the article from the URL parameter
    cleanedParamList = getTheArticleObject(url_param)
    articleObject = cleanedParamList[1]

    # Fetch all proposals for a given article that have not been verified
    unverifiedProposals = EditProposal.objects.filter(article_id=articleObject.id, chainverified=False)

    # Loop through the unverified proposals
    for proposal in unverifiedProposals:
        try:
            print("Processing proposal %s" % proposal.id)
            cacheFinalizedResult(proposal.id, True)
        except:
            pass

    # Fetch all proposals for a given article
    allProposals = EditProposal.objects.filter(article_id=articleObject.id).order_by('-endtime')

    # Return the page HTML
    return render(request, 'enterlink/votehistory.html', {"articleObject": articleObject, "allProposals": allProposals})

# Once a page is finalized
@csrf_exempt
def cacheFinalizedResult(proposal_id, verify_only=False):
    # Convert the proposal id into an integer
    proposalID = int(proposal_id)

    # Store the proposal ID incremented by one. This is needed for the get table API call below
    proposalIDPlusOne = proposalID + 1

    # Prepare the JSON for the get table API call
    jsonDict = {"scope": "eparticlectr", "code": "eparticlectr", "table": "propstbl", "key_type":"i64", "index_position":"3",
     "lower_bound": proposalID, "upper_bound": proposalIDPlusOne, "json": "true"}

    # Get the JSON response
    page = requests.post('https://nodes.get-scatter.com:443/v1/chain/get_table_rows', headers=REQUEST_HEADER, timeout=10, verify=False, json=jsonDict)

    # Load the JSON response into a dictionary object
    json_data = json.loads(page.text)

    # Get the status of the proposal
    try:
        proposalStatus = int(json_data['rows'][0]['status'])
    except:
        jsonDict = {"scope": "eparticlectr", "code": "eparticlectr", "table": "propstbl", "key_type": "i64",
                    "index_position": "3",
                    "lower_bound": proposalID, "upper_bound": proposalIDPlusOne, "json": "true"}

        # Get the JSON response
        page = requests.post('https://nodes.get-scatter.com:443/v1/chain/get_table_rows', headers=REQUEST_HEADER,
                             timeout=10, verify=False, json=jsonDict)

        # Load the JSON response into a dictionary object
        json_data = json.loads(page.text)

        proposalStatus = int(json_data['rows'][0]['status'])

    # Update the edit proposal
    quickproposal = EditProposal.objects.get(id=proposal_id)
    quickproposal.status = proposalStatus
    if (proposalStatus != 0):
        quickproposal.chainverified = True
    else:
        print("Proposal is not finalized yet. Quitting...")
        return HttpResponse("Proposal is not finalized yet.")
    quickproposal.save()

    if not verify_only:
        # Handle the rejection, if present, by reverting the ArticleTable entry
        articleObject = quickproposal.article

        # Revert the page if the proposal failed
        if(proposalStatus == 2):
            articleObject.ipfs_hash_current = quickproposal.old_article_hash
            articleObject.ipfs_hash_parent = quickproposal.grandparent_hash
            articleObject.desktop_cache_timestamp = None
            articleObject.mobile_cache_timestamp = None

            # If it is a brand new page that gets rejected, just delete it
            if quickproposal.grandparent_hash in [ DEFAULT_PAGE_HASH, DEFAULT_PAGE_HASH_OLD, DEFAULT_PAGE_HASH_OLD_2]:
                articleObject.is_removed = True
                articleObject.is_removed_from_index = True
                print("REMOVED THE NEW PAGE SINCE IT WAS VOTED DOWN")

            hashCache = HashCache.objects.get(ipfs_hash=quickproposal.old_article_hash)
            lastCacheRefresh = hashCache.timestamp
            articleObject.lastmod_timestamp = lastCacheRefresh
            print("PROPOSAL REJECTED... REVERTING TO OLD HASHES")
        else:
            articleObject.is_new_page = False
            print("Removed the new page marker")

        # Save the article
        articleObject.save()

    # Return the HTML page
    return HttpResponse(page)

# Edit page
@csrf_exempt
def edit(request, url_param="everipedia-blank-page-template"):
    # Fetch the article object from the URL parameter
    cleanedParamList = getTheArticleObject(url_param)
    articleObject = cleanedParamList[1]

    # Pull the article HTML from the cache
    hashObject = HashCache.objects.get(ipfs_hash=articleObject.ipfs_hash_current)

    # Check if the article is being submitted
    if (request.GET.get('submission') == '1'):
        # Get the POSTed article HTML
        innerHTMLBlock = request.POST.get("blurbHTML")

        # Clean up and canonicalize the submitted HTML
        innerHTMLBlock = entireArticleHTMLSanitizer(innerHTMLBlock)[5:]

        # Remove temporary HTML elements that were injected into the TinyMCE in order to make the page more interactive
        theSoup = BeautifulSoup(innerHTMLBlock, "html.parser")
        try:
            badClasses = [ 'add-row-btn', 'button-wrap', 'add-new-ibox', 'add-heading-wrap',  ]
            for badClass in badClasses:
                listOfBads = theSoup.findAll(class_=badClass)
                for item in listOfBads:
                    item.extract()
        except:
            pass

        # quickTitleNode = theSoup.findAll("h1")
        # print(unicode(quickTitleNode[0]))

        # Convert the BeautifulSoup object back into a string
        innerHTMLBlock = unicode(theSoup)

        # quickBody = theSoup.findAll(class_="blurb-wrap")
        # print(quickBody[0])
        # raise

        # Render the article HTML and its wrapper as a string and save it to the variable
        resultHTML = render_to_string('enterlink/blockchain_article_wrap.html', {'innerHTMLBlock': innerHTMLBlock,})

        # Connect to the IPFS daemon and add the article HTML
        api = ipfsapi.connect('127.0.0.1', 5001)
        ipfs_hash_new = api.add_str(resultHTML)
        print("THE OFFICIAL NEW HASH IS: %s" % ipfs_hash_new)

        # Cache the article HTML
        try:
            hashTable = HashCache.objects.create(ipfs_hash=ipfs_hash_new, timestamp=datetime.datetime.now(tz=pytz.utc),
                                                 html_blob=resultHTML, articletable=articleObject)
        except:
            return HttpResponse("NO CHANGES DETECTED!")

        # Set some variables
        ipfs_hash_old = articleObject.ipfs_hash_current
        ipfs_hash_grandparent = articleObject.ipfs_hash_parent

        # Need to switch this later. MAKE SURE TO FIX BLURB COMPARE TOO
        # return JsonResponse({"newIPFS": ipfs_hash_new, "oldIPFS": ipfs_hash_old, "grandparentIPFS": ipfs_hash_grandparent})
        return JsonResponse({"newIPFS": ipfs_hash_new, "oldIPFS": ipfs_hash_old, "grandparentIPFS": ipfs_hash_grandparent})


    # Verify that submission was actually recorded on the EOS chain
    if (request.GET.get('verification') == '1'):
        # Get the IPFS hash
        ipfs_hash_new = request.GET.get('newIPFS')

        # Because the EOS get tables command does not allow string lookups, convert the IPFS hash to a 64-bit unsigned integer
        proposal_id = ipfs_to_uint64_trunc(ipfs_hash_new)
        proposalID = int(proposal_id)
        proposalIDPlusOne = proposalID + 1

        # Prepare the JSON for the get table API call
        jsonDict = {"scope": "eparticlectr", "code": "eparticlectr", "table": "propstbl", "key_type": "i64",
                    "index_position": "3", "lower_bound": proposalID, "upper_bound": proposalIDPlusOne, "json": "true"}

        # Make the API request and parse the JSON into a variable
        # page = requests.post('https://mainnet.libertyblock.io:7777/v1/chain/get_table_rows', headers=REQUEST_HEADER, timeout=10, verify=False, json=jsonDict)
        page = requests.post('https://nodes.get-scatter.com:443/v1/chain/get_table_rows', headers=REQUEST_HEADER, timeout=10, verify=False, json=jsonDict)

        json_data = json.loads(page.text)

        # Get the status of the proposal
        proposalStatus = json_data['rows'][0]['status']

        # Make sure the proposal is actually recorded on-chain
        try:
            if (proposalStatus != 0):
                # Possibly delete the IPFS entry to prevent spamming
                pass
        except:
            return JsonResponse({'status': 'false', 'message': "NO PROPOSAL FOUND"}, status=500)

        # Parse some variables from the JSON
        proposer = json_data['rows'][0]['proposer']
        currentTime = json_data['rows'][0]['starttime']
        endTime = json_data['rows'][0]['endtime']

        # Get the cached article HTML and parse it
        hashTable = HashCache.objects.get(ipfs_hash=ipfs_hash_new)
        parsedDict = parseBlockchainHTML(hashTable.html_blob)

        # Set some variables
        ipfs_hash_old = articleObject.ipfs_hash_current
        ipfs_hash_grandparent = articleObject.ipfs_hash_parent

        # Update the articleObject cache with data from the article HTML file (from the cache)
        articleObject.ipfs_hash_parent = articleObject.ipfs_hash_current
        articleObject.ipfs_hash_current = ipfs_hash_new
        articleObject.blurb_snippet = parsedDict["BLURB"]
        articleObject.page_type = parsedDict["PAGEMETADATA"]["page_type"]
        articleObject.page_title = parsedDict["PAGETITLE"]
        articleObject.lastmod_timestamp = timezone.now()
        articleObject.is_removed = parsedDict["PAGEMETADATA"]["is_removed"]
        articleObject.is_removed_from_index = False
        articleObject.is_adult_content = parsedDict["PAGEMETADATA"]["is_adult_content"]
        articleObject.save()

        # Record the edit proposal internally. This should match all the proposals that are on-chain.
        EditProposal.objects.create(id=ipfs_to_uint64_trunc(ipfs_hash_new), proposed_article_hash=ipfs_hash_new, old_article_hash=ipfs_hash_old,
                grandparent_hash=ipfs_hash_grandparent, proposer=proposer, proposer_64t=encodeNameSwappedEndian(proposer), starttime=currentTime,
                endtime=endTime, status=0, article=articleObject)

        # Need to switch this later. MAKE SURE TO FIX BLURB COMPARE TOO
        # return JsonResponse({"newIPFS": ipfs_hash_new, "oldIPFS": ipfs_hash_old, "grandparentIPFS": ipfs_hash_grandparent})
        return JsonResponse({"newIPFS": ipfs_hash_new, "oldIPFS": ipfs_hash_old, "grandparentIPFS": ipfs_hash_grandparent})

    # Temporary
    # if(articleObject.id < 18682257):
    #     return HttpResponseRedirect("/editing-disabled/")
    if 'draft' in request.GET:
        account_name = request.GET.get('draft')
        draft = SavedDraft.objects.get(article_slug=articleObject.slug, account_name=account_name)
        hashObject.html_blob = draft.html_blob

    # Update the Django templating dictionary for the edit page
    contextDictionary = {}
    contextDictionary.update({"ARTICLE_BLOB": hashObject.html_blob})
    contextDictionary.update({"ARTICLE_NAME": articleObject.page_title})
    contextDictionary.update({"ARTICLE_SLUG": articleObject.slug})
    contextDictionary.update({"ARTICLE_SLUG_ALT": articleObject.slug_alt})
    contextDictionary.update({"ARTICLE_IS_REMOVED": articleObject.is_removed})
    contextDictionary.update({"ARTICLE_PHOTO_URL": articleObject.photo_url})
    contextDictionary.update({"ARTICLE_THUMB_URL": articleObject.photo_thumb_url})
    contextDictionary.update({"ARTICLE_PAGE_TYPE": articleObject.page_type})
    # contextDictionary.update({"ARTICLE_PAGEVIEWS": articleObject.pageviews})
    contextDictionary.update({"newlinkfileform": NewlinkFileForm()})
    contextDictionary.update({"linkform": LinkForm()})
    contextDictionary.update({"pagemetaform": PageMetaForm(initial={'page_type': articleObject.page_type, 'sub_page_type': articleObject.page_sub_type, 'is_removed': articleObject.is_removed, 'is_adult_content': articleObject.is_adult_content})})

    # Return the HTML for the editing page
    return render(request, 'enterlink/edit.html', contextDictionary)

# Generate the diff table between the two versions
@csrf_exempt
def AJAX_Fetch_Blurb_Compare(request, new_ipfs, old_ipfs):
    # Get the two article HTMLs from the provided IPFS hashes
    try:
        hashObj = HashCache.objects.get(ipfs_hash=new_ipfs)
        leftHTMLBlob = hashObj.html_blob
    except:
        hashObj = ""
        leftHTMLBlob = ""

    try:
        rightHTMLBlob = HashCache.objects.get(ipfs_hash=old_ipfs).html_blob
    except:
        rightHTMLBlob = ""

    # Get the article object
    articleObject = hashObj.articletable

    # Get the diff table
    returnBlob = getDiffs(leftHTMLBlob, rightHTMLBlob)

    # Parse the diff table into a BeautifulSoup object
    returnSoup = BeautifulSoup(returnBlob, "html.parser")

    # Get the list of all changes by parsing the HTML
    counter = 0
    tocIDList = []
    try:
        diffSect = returnSoup.find_all("span", {'class': ['diff_add', 'diff_chg', 'diff_sub']})
        for diffNode in diffSect:
            diffNode['id'] = "change-id-%s" % counter
            tocIDList.append((diffNode['id'], diffNode.getText()))
            counter += 1
    except Exception, e:
        print("---------------")
        print(str(e))
        print("---------------")
    returnBlob = unicode(returnSoup)

    # Determine the type of request
    if (request.mobile):
        templateType = "AMP"
    else:
        templateType = "NORMAL"

    # Generate the HTML for the table of contents (left hand side) of the voting page
    renderedToC = render_to_string('enterlink/voting_table_of_contents.html', {'tocIDList': tocIDList, 'templateType': templateType, "articleObject": articleObject})

    return render(request, "enterlink/voting.html", {'compareBlob': returnBlob, 'renderedToC': renderedToC, 'new_ipfs': new_ipfs,
            'old_ipfs': old_ipfs})
#

# ================================================================================
# ================================NEWLINK EDITING=================================
# ================================================================================

@csrf_exempt
def AJAX_Add_New_Link(request):
    from enterlink.media_functions import getYouTubeIdIfPresent
    # Get the POST variables
    pageSlug = request.POST['pageSlug']
    option = request.POST['group1']
    citeHTML = request.POST['citeHTML']
    URLComment = request.POST['nl_linkcomment']

    # Make sure an empty description was not provided
    placeholderPresent = any(placeholder in URLComment for placeholder in PLACEHOLDER_LIST)
    if (placeholderPresent or URLComment.strip() == "" or URLComment is None or URLComment == "<br data-mce-bogus=\"1\">"):
        return HttpResponse("ERROR_NO_DESCRIPTION")
    else:
        pass

    URLComment = badLinkSanitizer(URLComment)

    # Get and format the UTC timestamp
    timestamp = datetime.datetime.utcnow()
    timestamp = pytz.utc.localize(timestamp).strftime('%m/%d/%Y %I:%M:%S %p %Z')

    # Get the article object from the URL slug provided
    cleanedParamList = getTheArticleObject(pageSlug)
    pageSlug = cleanedParamList[0]
    articleObject = cleanedParamList[1]

    # Parse all the current citations for the article.
    # This will be used later for things such as finding duplicates and getting the citation number
    theSoup = BeautifulSoup(citeHTML, "html5lib")
    resultDictionary = {}
    parseTinyMCE_Citations(theSoup, resultDictionary)

    # Set up a blank dictionary for the new link
    newLinkDict = {"url": None, "thumb": None, "description": URLComment, "category": "NONE", "integer": None, "isSocial": False,
                   "attr": None, "timestamp": timestamp, "mime": None, "attribution_url": None}

    # Create a list of all current citations
    citationList, urlList = [], []
    try:
        for citation in resultDictionary["CITATION_OBJECTS"]:
            citationList.append(int(citation["integer"]))
            urlList.append(citation["url"])
    except:
        pass

    # Calculate and set the citation number for the new link
    if len(citationList) == 0:
        citationInteger = 1
    else:
        try:
            citationInteger = max(citationList) + 1
        except:
            citationInteger = None
    newLinkDict["integer"] = citationInteger

    # Check if the new link is a file
    if option == 'id_file':
        # Get and set some variables
        theFile = request.FILES['file']

        # Add the file to the Amazon S3 bucket and get some information about it
        resultPack = addMediaImage(request=request, pageID=pageSlug, theFile=theFile, fileComment=URLComment,
                      PLACEHOLDER_LIST=PLACEHOLDER_LIST, inputMime="EMPTY")

        # Update the new link dictionary with information about the file
        newLinkDict["url"] = resultPack["url"]
        newLinkDict["thumb"] = resultPack["thumb"]
        newLinkDict["mime"] = resultPack["mime"]
        newLinkDict["category"] = linkCategorizer(resultPack["url"], resultPack["mime"])

        # Check for duplicate links
        if dupeLinkDetector(newLinkDict["url"], urlList):
            return HttpResponse("ERROR_ALREADY_EXISTS")

        # Decide where to put the new link. If it is an image, video, or YouTube link, put it in the media gallery.
        # Otherwise, put it in the normal citation list.
        if newLinkDict["category"] == "NONE":
            newLinkHTMLBlock = render_to_string('enterlink/ajax_link_singlet.html', {'theLink': newLinkDict})
            return JsonResponse({"type": "NORMAL", "htmlblock": newLinkHTMLBlock})
        else:
            newLinkHTMLBlock = render_to_string('enterlink/ajax_media_gallery_singlet.html', {'theLink': newLinkDict})
            return JsonResponse({"type": "MEDIA", "htmlblock": newLinkHTMLBlock})

    # Check if the new link is a URL
    elif option == 'id_linkurl':
        # Get the URL and check if it is a Wikipedia link.
        if request.POST['linkurl']:
            theURL = request.POST['linkurl']
            if ('wikipedia.org' in theURL):
                return HttpResponse("ERROR_WIKIPEDIA_LINK")
            else:
                pass
        else:
            return HttpResponse("ERROR_NO_URL")

        # Check for a duplicate link
        if dupeLinkDetector(theURL, urlList):
            return HttpResponse("ERROR_ALREADY_EXISTS")

        # Update the new link JSON data
        newLinkDict["url"] = theURL
        newLinkDict["isSocial"] = profileLinkTester(theURL)["isProfileLink"]

        # Check if the URL is a link to a media object
        isMedia = False
        try:
            # Ping the URL to see get the data and response headers
            mediaTest = requests.get(theURL, headers=REQUEST_HEADER, timeout=6, verify=False, stream=True)

            # See if the response header indicates it is a media item. If so, set isMedia to True
            listOfMedias = ["video", "image", "audio"]
            for mediaItem in listOfMedias:
                mediaName = u"%s/" % mediaItem
                if mediaName in mediaTest.headers['Content-Type']:
                    isMedia = True
                    break

            # Check for YouTube
            youtubeID = getYouTubeIdIfPresent(theURL)
            if youtubeID:
                isMedia = True

            # Analyze and process the URL if it is a media file
            if isMedia:
                # Process depending on media type
                if youtubeID:
                    newLinkDict["thumb"] = "https://i.ytimg.com/vi/%s/hqdefault.jpg" % youtubeID
                    newLinkDict["mime"] = "youtube"
                    newLinkDict["category"] = "YOUTUBE"
                else:
                    # Create an empty string buffer and fill it with the media file data
                    streamObject = StringIO.StringIO()
                    streamObject.write(mediaTest.raw.read(decode_content=False))

                    # Create a file in memory from the media file
                    theFile = InMemoryUploadedFile(streamObject, None, theURL.split("?")[0].split("/")[-1],
                                                   mediaTest.headers['Content-Type'], streamObject.len, None)

                    # Add the media file to the Amazon S3 bucket and analyze the media file
                    resultPack = addMediaImage(request=request, pageID=pageSlug, theFile=theFile, fileComment=URLComment,
                                  PLACEHOLDER_LIST=PLACEHOLDER_LIST, inputMime=mediaTest.headers['Content-Type'])

                    # Update the new link dictionary with info about the file
                    newLinkDict["thumb"] = resultPack["thumb"]
                    newLinkDict["mime"] = resultPack["mime"]
                    newLinkDict["category"] = linkCategorizer(resultPack["url"], resultPack["mime"])

                # Render the new media object as an HTML block
                newLinkHTMLBlock = render_to_string('enterlink/ajax_media_gallery_singlet.html', {'theLink': newLinkDict})
                return JsonResponse({"type": "MEDIA", "htmlblock": newLinkHTMLBlock})

        except Exception as e:
            print(str(e))
            print("Is not media, or timeout. Considering link as normal url...")

        # Find the thumbnail for the new link web page, if it has one from the og:image, schema, etc.
        theThumbURL = fetchMetaThumbnail(request, theURL, articleObject.slug, articleObject.ipfs_hash_current[:10])
        newLinkDict["thumb"] = theThumbURL

        # Render the new link as an HTML block
        newLinkHTMLBlock = render_to_string('enterlink/ajax_link_singlet.html', {'theLink': newLinkDict})
        return JsonResponse({"type": "NORMAL", "htmlblock": newLinkHTMLBlock})


# ================================================================================
# ================================INFOBOX EDITING=================================
# ================================================================================

# Prepare a new infobox form
@csrf_exempt
def AJAX_Fetch_New_Infobox_Form(request, url_param):
    # Get the article object from the url parameter
    cleanedParamList = getTheArticleObject(url_param)
    articleObject = cleanedParamList[1]

    # Update the Django HTML template variables
    contextDictionary = {}
    contextDictionary.update({"ARTICLE_NAME": articleObject.page_title})
    contextDictionary.update({"ARTICLE_SLUG": articleObject.slug})
    contextDictionary.update({"ARTICLE_SLUG_ALT": articleObject.slug_alt})
    contextDictionary.update({"ARTICLE_IS_REMOVED": articleObject.is_removed})
    contextDictionary.update({"ARTICLE_PAGE_TYPE": articleObject.page_type})

    # Return the HTML
    return render(request, 'enterlink/edit_ajax_addinfobox.html', contextDictionary)

# Process the new infobox
@csrf_exempt
def AJAX_Add_New_Infobox(request):
    # Get the POSTed variables
    enteredcontent = request.POST['infocontent']
    infotype = request.POST['infotype']
    infotype = infotype.split("~")[0]
    pageslug = request.POST['pageslug']

    # Get the article object from the page slug
    cleanedParamList = getTheArticleObject(pageslug)
    articleObject = cleanedParamList[1]

    # Look to see if the provided infotype is a schema.org itemprop
    try:
        schema_info = ""

        # Get all the possible schema.org properties based on the page type
        # E.g. for "Person", it is https://schema.org/Person
        possibleSchemas = SchemaObject.objects.filter(schema_for=articleObject.page_type)

        # Encode and lowercase the infotype
        lowerInfotype = infotype.lower().encode('utf-8')

        # Check to see if the infotype submitted matches a schema.org property, accounting for language differences
        for schemaTest in possibleSchemas:
            translatedMapped = ugettext(schemaTest.mapped_keyword).lower().encode('utf-8')
            if (lowerInfotype == translatedMapped):
                schema_info = schemaTest
                break

    except SchemaObject.DoesNotExist:
        schema_info = ''  # this means that no schema data could be found for the mapped keyword so this infobox won't be tagged by schema tags

    # Process the schema variable
    try:
        schematypeVariable = schema_info.schema_keyword
    except:
        schematypeVariable = ""

    try:
        addlSchematype = schema_info.schema_argument
    except:
        addlSchematype = None

    try:
        addlSchemaItemprop = schema_info.addl_schema_default_itemprop
    except:
        addlSchemaItemprop = None

    # Check and clean the submitted infobox content
    cleanedContent = badLinkSanitizer(enteredcontent)
    cleanedInfotype = strip_tags(badLinkSanitizer(infotype))

    # Prepare variables
    pluralPackages = {}
    newIboxDict = ""

    # Quick split test
    try:
        quicksplit = cleanedContent.split("|")
    except:
        quicksplit = ""

    # Test to see if infobox is plural (multiple rows for one infotype). Example: Education: UCLA; USC;
    if (len(quicksplit) > 1):
        returnType = "PLURAL"
        pluralObjects = []
        for pluralNugget in quicksplit:
            pluralObjects.append({"key": cleanedInfotype, "value": pluralNugget, "schema": schematypeVariable, "addlSchematype": addlSchematype, "addlSchemaItemprop": addlSchemaItemprop})

        pluralPackages = {"key": cleanedInfotype, "objects": pluralObjects, "schema": schematypeVariable, "addlSchematype": addlSchematype, "addlSchemaItemprop": addlSchemaItemprop}
    else:
        returnType = "SINGLE"
        newIboxDict = {"key": cleanedInfotype, "value": cleanedContent, "schema": schematypeVariable, "addlSchematype": addlSchematype, "addlSchemaItemprop": addlSchemaItemprop}

    # Render the infobox HTML container and return it
    newIboxHTML = render_to_string('enterlink/ajax_infobox_singlet.html', {'returnType': returnType, 'newIboxDict': newIboxDict, 'pluralPackages': pluralPackages, })
    return JsonResponse({"type": returnType, "htmlblock": newIboxHTML})

# ================================================================================
# ===============================MAINPHOTO EDITING================================
# ================================================================================

# Fetch the article photo editing HTML
@csrf_exempt
def AJAX_Fetch_Page_Photo(request, url_param):
    # Get the article object from the url parameter
    cleanedParamList = getTheArticleObject(url_param)
    articleObject = cleanedParamList[1]

    # Return the photo editing HTML
    return render(request, 'enterlink/edit_ajax_page_photo.html', {'articleObject': articleObject,})

# Process a photo upload
@csrf_exempt
def AJAX_Picture_Upload(request, photo_type, identifier, existingActivity=None):
    # See if the photo is a profile picture
    if photo_type == "ProfilePics":
        pageSlug = request.POST['pageID']

        # Get the article object from the provide URL slug
        cleanedParamList = getTheArticleObject(pageSlug)
        articleObject = cleanedParamList[1]

        # Slugify the article title
        theNameSlugged = DjangoText.slugify(unicode(articleObject.page_title).encode('utf-8'), allow_unicode=True)
        identifier = theNameSlugged

    # Get the caption of the picture
    try:
        fileCaption = request.POST['caption']
    except:
        fileCaption = ugettext("This is the reference link for the lead picture/gif of the page. Delete this link here or replace the picture/gif above.")

    # Get the image file
    image_file = request.FILES['file']
    image_file_thumb = request.FILES['file']

    # Find the MIME type for the image
    try:
        theMIME = magic.from_buffer(image_file.read(), mime=True)
    except:
        theMIME = MimeTypes().guess_type(image_file.name)

    # Seek to the beginning of the image buffer
    image_file.seek(0)

    # Format and gzip the image
    photoResult = processPhoto(image_file, theMIME, photo_type, identifier, fileCaption)

    # Update the article object if the upload was for a profile picture
    if photo_type == "ProfilePics":
        mainPhotoURL = photoResult["mainPhotoURL"].replace('https://everipedia-storage.s3.amazonaws.com/',
                                            'https://everipedia-storage.s3-accelerate.amazonaws.com/')
        thumbnailPhotoURL = photoResult["thumbnailPhotoURL"].replace('https://everipedia-storage.s3.amazonaws.com/',
                                                      'https://everipedia-storage.s3-accelerate.amazonaws.com/')


        articleObject.photo_url = mainPhotoURL
        articleObject.photo_thumb_url = thumbnailPhotoURL
        articleObject.save()

    # Return the result of this upload process
    return JsonResponse(photoResult["returnDict"])

@csrf_exempt
@require_POST
def save_draft(request):
    # Get the POSTed article HTML
    innerHTMLBlock = request.POST.get("html_blob")

    # Clean up and canonicalize the submitted HTML
    innerHTMLBlock = entireArticleHTMLSanitizer(innerHTMLBlock)[5:]

    # Remove temporary HTML elements that were injected into the TinyMCE in order to make the page more interactive
    theSoup = BeautifulSoup(innerHTMLBlock, "html.parser")
    try:
        badClasses = [ 'add-row-btn', 'button-wrap', 'add-new-ibox', 'add-heading-wrap',  ]
        for badClass in badClasses:
            listOfBads = theSoup.findAll(class_=badClass)
            for item in listOfBads:
                item.extract()
    except:
        pass

    # Convert the BeautifulSoup object back into a string
    innerHTMLBlock = unicode(theSoup)

    # Render the article HTML and its wrapper as a string and save it to the variable
    resultHTML = render_to_string('enterlink/blockchain_article_wrap.html', {'innerHTMLBlock': innerHTMLBlock, })

    SavedDraft.objects.update_or_create(
        account_name = request.POST.get('account_name'),
        article_slug = request.POST.get('article_slug'),
        defaults = { "html_blob": innerHTMLBlock }
    );

    return JsonResponse({ "success": True })

@require_GET
def get_draft(request):
    draft = SavedDraft.objects.filter(
        account_name=request.GET.get('account_name'),
        article_slug=request.GET.get('article_slug')
    ).values('account_name', 'article_slug', 'html_blob')
    return JsonResponse( list(draft)[0] )

