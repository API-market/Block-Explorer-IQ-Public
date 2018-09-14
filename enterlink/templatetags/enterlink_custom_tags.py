__author__ = 'travismoore'

import os
import re
import json
import datetime
from datetime import datetime
import pytz
import requests
import time
from dateutil import tz
import dateutil.parser
from django import template
from email import utils
from enterlink.media_functions import getYouTubeIdIfPresent
from mimetypes import MimeTypes


register = template.Library()

@register.filter
def filename(value):
    return os.path.basename(value)

@register.filter
def image_exists(value):
    result = True
    try:
        response = requests.get(value)
        assert response.status_code < 400
        result = True
    except:
        result = False
    return result

@register.filter
def index(List, i):
    try:
        return List[int(i)]
    except:
        return ""

@register.filter
def handle_missing_photo(value, arg):
    if (value is None) or (value == ""):
        if (arg == 'link'):
            return "https://epcdn-vz.azureedge.net/static/images/link-2.png"
        elif (arg == 'photo'):
            return "https://epcdn-vz.azureedge.net/static/images/white.png"
    else:
        return value


@register.filter
def is_in(var, obj):
    return var in obj

@register.filter
def eq(value, arg):
    if (value == arg):
        return 1
    else:
        return 0

@register.filter
def gt_eq(value, arg):
    if (value >= arg):
        return 1
    else:
        return 0

@register.filter
def get_picture_type_from_url(inputURL):
    try:
        theLinkURL = inputURL
        theMIME = MimeTypes().guess_type(inputURL)
        theMIME = theMIME[0]
        if theMIME == "" or theMIME is None:
            theMIME = "NONE"
        if theMIME == 'image/gif':
            return "GIF"
        elif 'image' in theMIME:
            return "PICTURE"
        else:
            return "NOTHING"
    except:
        return "NOTHING"

@register.filter
def json_fix_time(inputTime):
    try:
        d = dateutil.parser.parse(inputTime)
        cleaned_date = d.strftime('%m/%d/%Y %I:%M:%S %p %Z')
        return cleaned_date
    except:
        return inputTime

@register.filter
def json_fix_time_datetime(inputTime):
    try:
        d = dateutil.parser.parse(inputTime)
        return d

    except:
        return inputTime

@register.filter
def parsetimestamp(value):
    return datetime.fromtimestamp(value)

@register.filter
def null_to_zero(inputString):
    if inputString is None:
        return 0
    else:
        return inputString

@register.filter
def get_youtube_id(inputString):
    try:
        result = getYouTubeIdIfPresent(inputString)
        if result is False:
            return ""
        else:
            return result
    except:
        return ""

@register.filter
def print_timestamp(timestamp):
    try:
        dateObj = datetime.fromtimestamp(timestamp)
    except:
        pass
    return dateObj.strftime('%m/%d/%Y %I:%M:%S %p %Z')

