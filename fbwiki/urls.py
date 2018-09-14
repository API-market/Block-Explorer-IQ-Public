import django
from django.conf.urls import include, url
from django.conf import settings
from django.contrib import admin, auth
from django.contrib.sitemaps.views import sitemap, index
from django.contrib.auth import urls
from django.views import static
import registration, enterlink
from registration.backends import default
from enterlink import views as ENTERLINK_VIEWS
from enterlink.sitemap import ThisMonthsEdits_Sitemap
from django.conf.urls.i18n import i18n_patterns
from django.views.i18n import javascript_catalog
from registration.backends.default import urls
from enterlink import urls
from django.contrib.staticfiles.urls import staticfiles_urlpatterns


admin.autodiscover()

#from django.views.generic import TemplateView #for robots.txt

import notifications

sitemaps_dict = {
	'edited-this-month':ThisMonthsEdits_Sitemap,
}



js_info_dict = {
    'domain': 'django',
    'packages': ('locale',),
}

handler400 = 'enterlink.views.error'
handler403 = 'enterlink.views.error'
handler404 = 'enterlink.views.error'
# Might want to have a custom server 500 search page
handler500 = 'enterlink.views.error'

urlpatterns = [
	url(ur'^karachi-admin/', include(admin.site.urls)),
	url(ur'^jsi18n/$', django.views.i18n.javascript_catalog, js_info_dict),
   	url(ur'^i18n/', include(django.conf.urls.i18n)),
   	# url(ur'^(?i)login/$', ENTERLINK_VIEWS.user_login, name='login'),
   	url(ur'^registration/', include(registration.backends.default.urls)),
	url(ur'', include(django.contrib.auth.urls)),
	url(r'^sitemap.xml/$', index, {'sitemaps': sitemaps_dict}, name='django.contrib.sitemaps.views.index'),
	url(r'^sitemap-(?P<section>.+).xml/$', sitemap, {'sitemaps': sitemaps_dict}, name='django.contrib.sitemaps.views.sitemap'),
	url(ur'^media/(?P<path>.*)$', django.views.static.serve, {'document_root': settings.MEDIA_ROOT}),
   	url(ur'', include(enterlink.urls)),
]

# For development only
urlpatterns += staticfiles_urlpatterns()
