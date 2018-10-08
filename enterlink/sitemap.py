# -*- coding: utf-8 -*-
from django.contrib.sitemaps import Sitemap
from django.db import connection
from enterlink.models import ArticleTable
import datetime
import urllib

#python manage.py refresh_sitemap

# Subclassed sitemap that formats the URLs properly
class SlashedListSitemap(Sitemap):
    def location(self, obj):
        returnString = ""
        try:
            returnString = (u"/wiki/%s/" % unicode(obj)).decode("utf-8").encode('utf-8')
        except:
            try:
                returnString = u"/wiki/%s/" % obj.encode('utf-8')
            except:
                returnString = u"/wiki/%s/" % urllib.quote(obj.encode('utf-8'), safe="")

        return returnString

# For recent pages
class ThisMonthsEdits_Sitemap(Sitemap):
    changefreq = 'daily'
    priority = 1.0
    protocol = 'https'

    def items(self):
        return ArticleTable.objects.filter(is_removed=False, is_removed_from_index=False, lastmod_timestamp__gt=(datetime.datetime.today()-datetime.timedelta(days=30))).exclude(blurb_snippet='<p><br/></p>').order_by('-lastmod_timestamp')[0:750]

    def location(self, obj):
        return u"/wiki/%s/" % unicode(obj.slug)

# All indexed pages
class IndexedSitemap(SlashedListSitemap):
    changefreq = 'monthly'
    priority = 0.5
    protocol = 'https'

    def items(self):
        cursor = connection.cursor()
        queryString = "SELECT slug FROM enterlink_articletable art WHERE art.is_removed=0 AND art.is_removed_from_index=0 AND blurb_snippet != '<p><br/></p>'"

        cursor.execute(queryString)
        resultItems = [item[0] for item in cursor.fetchall()]
        for item in cursor.fetchall():
            obj = item[0]
            candidateString = item[0]

            # Make sure the URLs do not throw errors
            try:
                test = obj.decode('utf-8')
                candidateString = test
            except:
                candidateString = obj
            # print("--------")
            # print(unicode(obj))
            # print(unicode(candidateString))
            # print("--------")
            resultItems.append(candidateString)
        return resultItems

    def location(self, obj):
        return u"/wiki/%s/" % unicode(obj)

sitemaps = {
	'indexed':IndexedSitemap,
}