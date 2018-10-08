from boto.s3.connection import S3Connection
from boto.s3.key import Key
from bs4 import BeautifulSoup
from cgi import parse_qs
from django.http import HttpResponse
from django.utils.html import strip_tags
from mimetypes import MimeTypes
from PIL import Image
from urlparse import urlparse
import StringIO
import cStringIO
import magic
import requests
import time, os, sys
from uuid import uuid4
import django.utils.text as DjangoText
import gzip
from fbwiki.settings import AWS_STORAGE_BUCKET_NAME, AWS_ACCESS_KEY_ID, AWS_SECRET_ACCESS_KEY, CROPPED_WIDTH, CROPPED_THUMB_WIDTH, \
    CROPPED_META_THUMB_WIDTH

# Analyze the GIF
def analyzeGIFImage(imgObject):
    im = imgObject
    results = { 'size': im.size, 'mode': 'full', }
    try:
        while True:
            if im.tile:
                tile = im.tile[0]
                update_region = tile[1]
                if update_region != (0, 0,) + im.size:
                    results['mode'] = 'partial'
                    break
                update_region_dimensions = update_region[2:]
                if update_region_dimensions != im.size:
                    results['mode'] = 'partial'
                    break
            im.seek(im.tell() + 1)
    except EOFError:
        pass
    return results

# Extract a PNG image from one of the frames of a GIF
def getGIFImageFramePNGBlob(imgObject):
    mode = analyzeGIFImage(imgObject)['mode']
    im = imgObject

    i = 0
    p = im.getpalette()
    last_frame = im.convert('RGBA')

    try:
        stringIO_BLOB = StringIO.StringIO()

        while True:
            if not im.getpalette():
                im.putpalette(p)

            new_frame = Image.new('RGBA', im.size)
            if mode == 'partial':
                new_frame.paste(last_frame)
            new_frame.paste(im, (0, 0), im.convert('RGBA'))
            new_frame.save(stringIO_BLOB, 'PNG')

            i += 1
            last_frame = new_frame
            im.seek(im.tell() + 1)

            if (i > 16 and (mode == 'partial')) or (mode == 'full') :
                # If the frames are partial, build them up first. If it is full, just return it right away
                return stringIO_BLOB

    except EOFError:
        pass

# Remove the transparent / alpha layer from PNG image
def removePNGAlphaLayer(im, bg_colour=(255, 255, 255)):
    if im.mode in ('RGBA', 'LA') or (im.mode == 'P' and 'transparency' in im.info):
        alpha = im.convert('RGBA').split()[-1]
        bg = Image.new("RGBA", im.size, bg_colour + (255,))
        bg.paste(im, mask=alpha)
        return bg
    else:
        return im

# Process a photo
def processPhoto(image_file, theMIME, photo_type, identifier, fileCaption):
    image_file_thumb = image_file
    # Process the file differently depending on the MIME type
    if theMIME == "image/svg+xml":
        suffix = "svg"
        thumbSuffix = 'svg'
        thumbMIME = "image/svg+xml"

        # Read the image files into variables
        image_file.seek(0)
        dataBlob_reg = image_file.read()
        image_file.seek(0)
        dataBlob_thumbnail = image_file.read()
    elif theMIME == "image/x-ms-bmp":
        suffix = "bmp"
        thumbSuffix = 'bmp'
        thumbMIME = "image/x-ms-bmp"

        # Read the image files into variables
        image_file.seek(0)
        dataBlob_reg = image_file.read()
        image_file.seek(0)
        dataBlob_thumbnail = image_file.read()
    elif theMIME == "image/gif":
        suffix = "gif"
        thumbSuffix = 'png'
        thumbMIME = "image/png"

        # Read the image files into variables
        image_file.seek(0)
        dataBlob_reg = image_file.read()
        image_file.seek(0)
        img = Image.open(image_file)

        # Get a frame from the GIF as a PNG
        dataBlob_thumbnail = getGIFImageFramePNGBlob(img)

        # Process the thumbnail
        try:
            # Write the thumbnail into a buffer
            tempBuff = StringIO.StringIO()
            tempBuff.write(dataBlob_thumbnail.getvalue())
            tempBuff.seek(0)

            # Process the thumbnail
            basewidth_thumb = CROPPED_THUMB_WIDTH
            img_thumb = Image.open(tempBuff)
            img_thumb = removePNGAlphaLayer(img_thumb)
            wpercent_thumb = (basewidth_thumb / float(img_thumb.size[0]))
            hsize_thumb = int((float(img_thumb.size[1]) * float(wpercent_thumb)))
            img_thumb = img_thumb.resize((basewidth_thumb, hsize_thumb), Image.ANTIALIAS)
            thumbnailString_thumb = StringIO.StringIO()
            img_thumb.save(thumbnailString_thumb, format="PNG", quality=90, optimize=True)

            dataBlob_thumbnail = thumbnailString_thumb.getvalue()
        except:
            # If the thumbnail fails, put the GIF itself as the thumbnail
            thumbSuffix = 'gif'
            thumbMIME = "image/gif"
            image_file.seek(0)
            dataBlob_thumbnail = image_file.read()

    elif theMIME == "image/jpeg":
        suffix = "jpeg"
        thumbSuffix = 'jpeg'
        thumbMIME = "image/jpeg"

        # Process the image and its thumbnail
        basewidth = CROPPED_WIDTH
        basewidth_thumb = CROPPED_THUMB_WIDTH
        img = Image.open(image_file)
        img_thumb = Image.open(image_file_thumb)
        wpercent = (basewidth / float(img.size[0]))
        wpercent_thumb = (basewidth_thumb / float(img_thumb.size[0]))
        hsize = int((float(img.size[1]) * float(wpercent)))
        hsize_thumb = int((float(img_thumb.size[1]) * float(wpercent_thumb)))
        img = img.resize((basewidth, hsize), Image.ANTIALIAS)
        img_thumb = img_thumb.resize((basewidth_thumb, hsize_thumb), Image.ANTIALIAS)
        thumbnailString = StringIO.StringIO()
        thumbnailString_thumb = StringIO.StringIO()
        img.save(thumbnailString, format='JPEG', subsampling=0, quality=100)
        img_thumb.save(thumbnailString_thumb, format="JPEG", subsampling=1, quality=85)
        dataBlob_reg = thumbnailString.getvalue()
        dataBlob_thumbnail = thumbnailString_thumb.getvalue()

    else:
        suffix = MimeTypes().guess_extension(theMIME)[1:]
        thumbSuffix = 'png'
        thumbMIME = "image/png"

        # Process the image and its thumbnail
        basewidth = CROPPED_WIDTH
        basewidth_thumb = CROPPED_THUMB_WIDTH
        img = Image.open(image_file)
        img = removePNGAlphaLayer(img)
        img_thumb = Image.open(image_file_thumb)
        img_thumb = removePNGAlphaLayer(img_thumb)
        wpercent = (basewidth / float(img.size[0]))
        wpercent_thumb = (basewidth_thumb / float(img_thumb.size[0]))
        hsize = int((float(img.size[1]) * float(wpercent)))
        hsize_thumb = int((float(img_thumb.size[1]) * float(wpercent_thumb)))
        img = img.resize((basewidth, hsize), Image.ANTIALIAS)
        img_thumb = img_thumb.resize((basewidth_thumb, hsize_thumb), Image.ANTIALIAS)
        thumbnailString = StringIO.StringIO()
        thumbnailString_thumb = StringIO.StringIO()
        img.save(thumbnailString, format="PNG", optimize=True)
        img_thumb.save(thumbnailString_thumb, format="PNG", quality=90, optimize=True)
        dataBlob_reg = thumbnailString.getvalue()
        dataBlob_thumbnail = thumbnailString_thumb.getvalue()

    # Write the image to a gzip blob
    out = StringIO.StringIO()
    with gzip.GzipFile(fileobj=out, compresslevel=9, mode="w") as f:
        f.write(dataBlob_reg)
    dataBlob_reg = out.getvalue()

    # Write the thumbnail to a gzip blob
    out = StringIO.StringIO()
    with gzip.GzipFile(fileobj=out, compresslevel=9, mode="w") as f:
        try:
            f.write(dataBlob_thumbnail)
        except:
            print("Failed to save thumb. Using the full size instead")
            thumbSuffix = suffix
            thumbMIME = theMIME
            f.write(dataBlob_reg)
    dataBlob_thumbnail = out.getvalue()

    # Connect to the Amazon S3 bucket
    conn = S3Connection(AWS_ACCESS_KEY_ID, AWS_SECRET_ACCESS_KEY)
    bucket = conn.get_bucket(AWS_STORAGE_BUCKET_NAME, validate=False)

    # Create the image file name
    theTimeString = unicode(int(time.time()))[5:]
    filename = unicode(identifier) + "__" + theTimeString

    # Update the return dictionary
    returnDict = {"filename": filename, "caption": fileCaption}

    # Main file upload
    k = Key(bucket)
    k.key = unicode(photo_type) + "/" + filename + "." + suffix
    k.set_contents_from_string(dataBlob_reg,
                               headers={'Content-Encoding': 'gzip', 'Content-Type': theMIME,
                                        'Cache-Control': 'max-age=86400'}, policy='public-read')
    k.make_public()
    mainPhotoURL = k.generate_url(expires_in=0, query_auth=False)

    # Thumbnail upload
    k = Key(bucket)
    k.key = unicode(photo_type) + "/" + filename + "_100x100." + thumbSuffix
    k.set_contents_from_string(dataBlob_thumbnail,
                               headers={'Content-Encoding': 'gzip', 'Content-Type': thumbMIME,
                                        'Cache-Control': 'max-age=86400'}, policy='public-read')
    k.make_public()
    thumbnailPhotoURL = k.generate_url(expires_in=0, query_auth=False)
    # print(thumbnailPhotoURL)

    # Close the connection to the Amazon S3 bucket
    conn.close()

    return {"mainPhotoURL": mainPhotoURL, "thumbnailPhotoURL": thumbnailPhotoURL, "returnDict": returnDict}

# Get the dimensions and the MIME type of a photo
def getImageData(inputURL):
    headers = {
        'user-agent': 'AMP-PHOTO-FETCHER',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
        'Accept-Charset': 'utf-8,ISO-8859-1;q=0.7,*;q=0.3',
        'Accept-Language': 'en-US,en;q=0.5',
        'Accept-Encoding': 'gzip, deflate',
        'Connection': 'keep-alive'}

    try:
        response = requests.get(inputURL, headers=headers, allow_redirects=True, verify=False, timeout=10)
    except:
        print("******************")
        print("ERROR (get image from s3): " + str(sys.exc_info()[0]))
        print("ATTEMPTED URL WAS: " + inputURL)
        print("******************")

    imgFile = StringIO.StringIO(response.content)

    theMIME = magic.from_buffer(response.content, mime=True)
    if theMIME == "image/svg+xml":
        outfile = StringIO.StringIO()
        img = outfile

    # print("AMP photo MIME type is: |%s|" % theMIME)
    im = Image.open(imgFile)
    photoDataHere = [im.size[0], im.size[1], theMIME]
    # print("AMP photo data is: |%s|" % photoDataHere)
    return photoDataHere

# Add a file to the Amazon S3 bucket
def addItemToS3FromURL_local_function(srcURL, destinationFolderPath, destinationFileNamePrefix, itemType):
    headers = {'user-agent': 'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2228.0 Safari/537.36',
       'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
       'Accept-Charset': 'utf-8,ISO-8859-1;q=0.7,*;q=0.3',
       'Accept-Language': 'en-US,en;q=0.5',
       'Accept-Encoding': 'gzip, deflate',
       'Connection': 'keep-alive'}

    # Start a connection to Amazon
    conn = S3Connection(AWS_ACCESS_KEY_ID, AWS_SECRET_ACCESS_KEY)
    bucket = conn.get_bucket(AWS_STORAGE_BUCKET_NAME, validate=False)
    k = Key(bucket)

    # If the file is a URL / Citation thumbnail
    if itemType in ("MetaImageThumbnail"):
        try:
            # Try fetching the image
            try:
                response = requests.get(srcURL, headers=headers, allow_redirects=True, timeout=7, verify=False)
            except:
                print("******************")
                print("ERROR (addItemToS3FromURL): " + str(sys.exc_info()[0]))
                print("ATTEMPTED URL WAS: " + srcURL)
                print("******************")
                return None

            # Fill an image buffer with the fetched image data
            img = StringIO.StringIO(response.content)
            theMIME = magic.from_buffer(response.content, mime=True)

            # Check if the image is an SVG file
            if theMIME == "image/svg+xml":
                outfile = StringIO.StringIO()
                img = outfile

            # Create a PIL object from the image
            im = Image.open(img)

            # Remove the transparent / alpha layer, if present
            im = removePNGAlphaLayer(im)

            # Thumbnail down to a 250px x 250px png file
            im.thumbnail((250, 250), Image.ANTIALIAS)

            # Create an empty buffer
            out_im = cStringIO.StringIO()

            try:
                # Try to guess the extension from the MIME type
                theExtension = MimeTypes().guess_extension(theMIME)[1:]

                # Save the image file in memory
                im.save(out_im, theExtension)
            except Exception, e:
                # If MIME was undetermined, try to convert to a PNG
                print('No extension determined, trying PNG')
                try:
                    im.convert('RGB').save(out_im, 'PNG', quality=90, optimize=True)
                    print("Failed to save as optimized PNG, will try something else")
                except Exception, e:
                    print str(e)
                    try:
                        im.convert('RGB').save(out_im, 'PNG', quality=90)
                        print("Failed to save as unoptimized PNG, will try something else")
                    except Exception, e:
                        print('Unable to thumbnail')

            # Create the file name
            k.key = destinationFolderPath + destinationFileNamePrefix + ".png"

            # Write the image to a gzip buffer
            out = StringIO.StringIO()
            with gzip.GzipFile(fileobj=out, compresslevel=9, mode="w") as f:
                f.write(out_im.getvalue())
            dataBlobGzip = out.getvalue()

            # Upload the file to Amazon S3
            k.set_contents_from_string(dataBlobGzip, headers={'Content-Encoding': 'gzip', 'Content-Type': "image/png", 'Cache-Control': 'max-age=86400'})
            k.make_public()

            # Return the the URL
            theAddedURL = "https://s3.amazonaws.com/everipedia-storage" + str(k.key)
            print("ADDED TO S3 BUCKET: %s" % theAddedURL)
            if((theAddedURL != "") and (theAddedURL is not None)):
                return theAddedURL
            else:
                return None
        except:
            return None

def addMediaImage(request, pageID, theFile, fileComment, PLACEHOLDER_LIST, inputMime):
    # Connect to the Amazon S3 bucket
    conn = S3Connection(AWS_ACCESS_KEY_ID, AWS_SECRET_ACCESS_KEY)
    bucket = conn.get_bucket(AWS_STORAGE_BUCKET_NAME, validate=False)
    k = Key(bucket)

    # Check for placeholder descriptions and reject them
    placeholderPresent = any(placeholder in fileComment for placeholder in PLACEHOLDER_LIST)
    if (placeholderPresent):
        return HttpResponse("ERROR_NO_DESCRIPTION")
    else:
        pass

    # Detect the MIME type
    if inputMime != "EMPTY":
        theMIME = inputMime
    else:
        theMIME = magic.from_buffer(theFile.read(), mime=True)

    # Check for bad MIME types
    if str(theMIME) in ["application/x-empty", "application/octet-stream"]:
        mime_type = MimeTypes().guess_type(theFile.name)
        theMIME = mime_type[0]

    # Seek to the beginning of the file buffer
    theFile.seek(0)

    # Create the file name and suffix
    unique_id = str(uuid4())
    mimeSuffixWithDot = MimeTypes().guess_extension(theMIME)
    theSlug = DjangoText.slugify(unicode(strip_tags(fileComment)).encode('utf-8'), allow_unicode=True)[:50]
    theNameSlugged = DjangoText.slugify(unicode(pageID).encode('utf-8'), allow_unicode=True)
    k.key = u"NewlinkFiles/" + unicode(pageID) + u"/" + unique_id[:5] + "___" +  theNameSlugged + u"/" + theSlug + mimeSuffixWithDot

    # Upload the file to the S3 bucket
    if "video" in theMIME:
        # Don't gzip videos due to streaming errors
        k.set_contents_from_string(theFile.read(), headers={'Content-Type': theMIME, 'Cache-Control': 'max-age=86400'})

    else:
        out = StringIO.StringIO()
        with gzip.GzipFile(fileobj=out, compresslevel=9, mode="w") as f:
            f.write(theFile.read())
        dataBlobGzip = out.getvalue()

        k.set_contents_from_string(dataBlobGzip, headers={'Content-Encoding': 'gzip', 'Content-Type': theMIME, 'Cache-Control': 'max-age=86400'})

    # Generate a URL
    k.make_public()
    fileEndPath = k.key
    mainMediaURL = k.generate_url(expires_in=0, query_auth=False)

    # Get the thumbnail
    thumb100url = None
    if "video" in theMIME:
        thumb100url = "https://epcdn-vz.azureedge.net/static/images/placeholder-video.png"
    elif "image" in theMIME:
        try:
            pictureRootPath = os.path.splitext(fileEndPath)[0]

            # Open connection to Amazon S3
            conn = S3Connection(AWS_ACCESS_KEY_ID, AWS_SECRET_ACCESS_KEY)
            bucket = conn.get_bucket(AWS_STORAGE_BUCKET_NAME, validate=False)

            # Thumbnail upload
            image_file_thumb = theFile

            # Seek to the beginning to the buffer
            theFile.seek(0)

            # Check if the file is an SVG image
            if theMIME == "image/svg+xml":
                outfile = StringIO.StringIO()
                image_file_thumb = outfile

            # Format and generate the thumbnail
            basewidth_thumb = CROPPED_META_THUMB_WIDTH
            img_thumb = Image.open(image_file_thumb)
            img_thumb = removePNGAlphaLayer(img_thumb)
            wpercent_thumb = (basewidth_thumb / float(img_thumb.size[0]))
            hsize_thumb = int((float(img_thumb.size[1]) * float(wpercent_thumb)))
            img_thumb = img_thumb.resize((basewidth_thumb, hsize_thumb), Image.ANTIALIAS)
            thumbnailString_thumb = StringIO.StringIO()
            thumbMIME = theMIME
            theExtension = MimeTypes().guess_extension(theMIME)[1:]
            thumbExtension = theExtension

            # Try to save the thumbnail to memory
            try:
                img_thumb.save(thumbnailString_thumb, theExtension, )
            except Exception, e:
                print str(e)
                try:
                    img_thumb.convert('RGB').save(thumbnailString_thumb, 'PNG', quality=90, optimize=True)
                    thumbExtension = "png"
                    thumbMIME = "image/png"
                except Exception, e:
                    print("Failed to save as optimized PNG, will try something else")
                    print str(e)
                    try:
                        img_thumb.convert('RGB').save(thumbnailString_thumb, 'PNG', quality=90)
                        thumbExtension = "png"
                        thumbMIME = "image/png"
                    except Exception, e:
                        print("Failed to save as unoptimized PNG, will try something else")
                        print str(e)
            k = Key(bucket)
            k.key = pictureRootPath + "_250x250." + thumbExtension

            # Gzip the file blob
            out = StringIO.StringIO()
            with gzip.GzipFile(fileobj=out, compresslevel=9, mode="w") as f:
                f.write(thumbnailString_thumb.getvalue())
            dataBlobGzip = out.getvalue()

            # Upload the thumbnail
            k.set_contents_from_string(dataBlobGzip, headers={'Content-Encoding': 'gzip', 'Content-Type': thumbMIME, 'Cache-Control': 'max-age=86400'})
            newThumbURL = k.generate_url(expires_in=0, query_auth=False)
            k.make_public()
            print(newThumbURL)
            print("CREATED 250x250 THUMBNAIL IMAGE AT: " + "https://everipedia-storage.s3.amazonaws.com/" + unicode(k.key))
            thumb100url = newThumbURL

        except:
            print("*********")
            quickResult = str(sys.exc_info()[0])
            print("ERROR (template_desktop): " + quickResult[0:1000])
            print("*********")
    else:
        pass

    # Return the results
    resultPack = {"url": mainMediaURL, "thumb": thumb100url, "mime": theMIME}
    return resultPack

# Fetch a thumbnail from an external URL, like the og:image or twitter:image
def fetch_meta_from_external(request="", externalUrl="", facebookId="", isMainLink=""):
    from enterlink.edit import REQUEST_HEADER

    # Fetch the external URL
    try:
        page = requests.get(externalUrl, headers=REQUEST_HEADER, timeout=10, verify=False)
    except:
        print("FAILED TO OPEN: " + externalUrl)

    # Parse the response into a BeautifulSoup object
    try:
        soup = BeautifulSoup(page.text, "html5lib")
    except:
        print("BEAUTIFUL SOUP FAILED")

    # If the URL is direct to an image, simply return that
    try:
        # Get the page content type
        maintype = page.headers['Content-Type'].split(';')[0].lower()

        # Check to see if the response is an image
        if maintype[:5] == 'image':
            return HttpResponse(externalUrl)
    except:
        print("URL is not an image, or page Content-Type not present")

    # If the page is a Facebook profile, get the image
    if ((externalUrl[:24] == "https://www.facebook.com") or (externalUrl[:23] == "http://www.facebook.com")) and (
        isMainLink == True):
        response = "http://graph.facebook.com/" + facebookId + "/picture?type=large"
        return HttpResponse(response)

    # if the url is not an image file, do some other tests
    else:
        count = 0
        result, tagWithImage = "", ""
        while count < 1:
            count = count + 1
            # try og:image first
            try:
                imageContent = soup.findAll('meta', attrs={'property': "og:image", 'content': True})
                result = imageContent[0]['content']
                tagWithImage = "OGIMAGE"
                break
            except:
                pass
            # try schema image next
            try:
                imageContent = soup.findAll('img', attrs={'itemprop': "image"})
                result = imageContent[0]['src']
                tagWithImage = "SCHEMA"
                break
            except:
                pass
            # Twitter Variant 1
            try:
                imageContent = soup.findAll('meta', attrs={'name': "twitter:image:src ", 'content': True})
                result = imageContent[0]['content']
                tagWithImage = "TWITTER_VARIANT_1"
                break
            except:
                pass
            # Twitter Variant 2
            try:
                imageContent = soup.findAll('meta', attrs={'property': "twitter:image", 'content': True})
                result = imageContent[0]['content']
                tagWithImage = "TWITTER_VARIANT_2"
                break
            except:
                pass
            # then Apple Touch
            try:
                imageContent = soup.findAll('link', attrs={'rel': "apple-touch-icon", 'href': True})
                result = imageContent[0]['href']
                tagWithImage = "APPLETOUCH"
                break
            except:
                pass
            # Another variant
            try:
                imageContent = soup.findAll('img', attrs={'class': "ProfileAvatar-image ", 'src': True})
                result = imageContent[0]['src']
                tagWithImage = "PROFILEAVATAR"
                break
            except:
                pass

            # another Apple Touch
            try:
                imageContent = soup.findAll('link', attrs={'rel': "apple-touch-icon-precomposed", 'href': True})
                result = imageContent[0]['href']
                tagWithImage = "APPLETOUCHPRECOMPOSED"
                break
            except:
                pass
            # Facebook
            try:
                imageContent = soup.findAll('img', attrs={'class': "newProfilePic img", 'src': True})
                result = imageContent[0]['src']
                tagWithImage = "FACEBOOK"
                break
            except:
                pass
            # Link Rel Image
            try:
                imageContent = soup.findAll('link', attrs={'rel': "image", 'href': True})
                result = imageContent[0]['href']
                tagWithImage = "LINK_REL_IMAGE"
                break
            except:
                pass
            # Generic favicon
            try:
                imageContent = soup.findAll('link', attrs={'rel': "shortcut icon", 'href': True})
                result = imageContent[0]['href']
                tagWithImage = "FAVICON"
                break
            except:
                pass
            # Generic favicon #2
            try:
                imageContent = soup.findAll('link', attrs={'rel': "icon", 'href': True})
                result = imageContent[0]['href']
                tagWithImage = "FAVICON_2"
                break
            except:
                pass

        # Extract the URI and the domain
        parsed_uri = urlparse(externalUrl)
        print("PARSED URI:" + str(parsed_uri))
        domain = '{uri.scheme}://{uri.netloc}/'.format(uri=parsed_uri)
        print("DOMAIN:" + str(domain))

        # Check if the extracted URL starts with "//" and if so, add http: in front of it
        if result[0:2] == "//":
            result = "http:" + result

        # Check if the extracted URL starts with "../" and if so, add the domain and protocol in front of it
        if result[0:2] == "..":
            domain = '{uri.scheme}://{uri.netloc}/'.format(uri=parsed_uri)
            result = domain + result
            result = result.replace("../", "")

        # Check if the extracted URL starts with "/" and if so, add the domain in front of it
        if result[0] == "/":
            result = domain + result[1:]

        print("EXTERNAL META RESULT IS: " + result)
        print("SOURCE OF IMAGE IS: " + tagWithImage)
        return result


# Try to fetch a thumbnail from a website
def fetchMetaThumbnail(request, linkurlcontent, slug, ipfs_truncated):
    try:
        # Try to fetch a thumbnail
        linkToMetaImage = fetch_meta_from_external(request=request, externalUrl=linkurlcontent, facebookId=unicode(slug), isMainLink=False)

        # Store the thumbnail variable
        theThumbURL = addItemToS3FromURL_local_function(srcURL=linkToMetaImage,
            destinationFolderPath="/MetaImageThumbnails/",
            destinationFileNamePrefix=unicode(slug) + "___" + unicode(ipfs_truncated) + str(uuid4())[:10],
            itemType="MetaImageThumbnail")
        return theThumbURL
    except:
        return None

# Get the YouTube ID from a URL
def getYouTubeIdIfPresent(value):
    value = value.replace("https://i.ytimg.com/vi/", "https://youtu.be/").replace("/hqdefault.jpg", "")
    try:
        query = urlparse(value)
        returnValue = ""
        if query.hostname == 'youtu.be':
            returnValue = query.path[1:]
        if query.hostname in ('www.youtube.com', 'youtube.com'):
            if query.path.startswith('/watch'):
                p = parse_qs(query.query)
                returnValue = p['v'][0]
            if query.path.startswith('/embed/'):
                returnValue = query.path.split('/')[2]
            if query.path.startswith('/v/'):
                returnValue = query.path.split('/')[2]

        quickSplit=returnValue.split("?")
        returnValue = quickSplit[0]
        quickSplit = returnValue.split("/")
        returnValue = quickSplit[0]
    except:
        return False

    if(returnValue != ""):
        return returnValue.replace("v=","")
    else:
        return False