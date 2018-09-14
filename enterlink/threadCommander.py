__author__ = 'travismoore'
from django.db import connection
from enterlink.media_functions import getImageData

def threadHandlerTemplate(selection, resultSlotNumber, resultList, lockOrSemaphore=None):
    try:
        if selection == "PAGEVIEWS_TEMPLATE":
            cursor = connection.cursor()
            queryString = "UPDATE enterlink_facebookinfo SET pageviews=(pageviews + 1) WHERE id='%s'" % resultList[2]
            cursor.execute(queryString)
            cursor.close()
        elif selection == "GET_IMAGE_SIZE":
            try:
                resultList[1] = getImageData(resultList[2])
            except:
                resultList[1] = None
    except:
        pass
