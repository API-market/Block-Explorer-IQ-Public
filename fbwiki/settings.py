# -*- coding: utf-8 -*-
"""
Django settings for fbwiki project.

For more information on this file, see
https://docs.djangoproject.com/en/1.6/topics/settings/

For the full list of settings and their values, see
https://docs.djangoproject.com/en/1.6/ref/settings/
"""

# Build paths inside the project like this: os.path.join(BASE_DIR, ...)

import os
import django.conf.locale
import mimetypes
from datetime import datetime, tzinfo
import pytz

mimetypes.add_type("image/svg+xml", ".svg", True)
mimetypes.add_type("image/svg+xml", ".svgz", True)

BASE_DIR = os.path.dirname(os.path.dirname(__file__))
SETTINGS_DIR = os.path.dirname(__file__)


PROJECT_PATH = os.path.join(SETTINGS_DIR, os.pardir)
PROJECT_PATH = os.path.abspath(PROJECT_PATH)
DATABASE_PATH = os.path.join(PROJECT_PATH, 'enterlink.db') #check this later
TEMPLATE_PATH = os.path.join(PROJECT_PATH, 'templates')


STATIC_PATH = os.path.join(PROJECT_PATH,'static')
STATIC_URL = '/static/'
STATIC_ROOT = '/static/'

AWS_STORAGE_BUCKET_NAME = 'everipedia-storage'
AWS_FAST_CACHE_BUCKET_NAME = ''*******************''
AWS_ACCESS_KEY_ID = ''*******************''
AWS_SECRET_ACCESS_KEY = ''*******************''
AWS_S3_CUSTOM_DOMAIN = 's3.amazonaws.com/everipedia-storage'
AWS_S3_STORAGE_LINK = "http://s3.amazonaws.com"
STORAGE_URL = "https://%s/" % (AWS_S3_CUSTOM_DOMAIN)
DEFAULT_FILE_STORAGE = 'storages.backends.s3boto.S3BotoStorage'


AZURE_FILE_STORAGE = 'storages.backends.azure_storage.AzureStorage'
AZURE_ACCOUNT_NAME = 'epcdndisk'
AZURE_ACCOUNT_KEY = ''*******************''
AZURE_CONTAINER = 'templatecaches'

STATICFILES_DIRS = (
    STATIC_PATH,
)

# Quick-start development settings - unsuitable for production
# See https://docs.djangoproject.com/en/1.6/howto/deployment/checklist/

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = '*******************'

DEBUG_ON = True
# DEBUG_ON = False
#
# SSL_ON = True
SSL_ON = False

# '1/19/2017 20:30:00'
LAST_DEPLOY_TIME = datetime(2017, 7, 15, 14, 29, 00, tzinfo=pytz.timezone('UTC'))

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = DEBUG_ON  #SET TO TRUE FOR LOCALHOST VERSION!!!!

TEMPLATE_DEBUG = DEBUG_ON  # #SET TO TRUE FOR LOCALHOST VERSION!!!!

SITE_ID = 3

CSRF_COOKIE_SECURE = SSL_ON
SESSION_COOKIE_SECURE = SSL_ON
SECURE_SSL_REDIRECT = SSL_ON


# BACKUP DATABASE
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.mysql',
        'NAME': 'ebdb',
        'USER': ''*******************'',
        'PASSWORD': ''*******************'',
        'HOST': ''*******************'',
        'PORT': '3306',
        'OPTIONS': {
            'charset': 'utf8mb4',
#             'conv': django_conversions,
#             'use_unicode': 'True',
        },
    },
    'readonly': {
        'ENGINE': 'django.db.backends.mysql',
        'NAME': 'ebdb',
        'USER': ''*******************'',
        'PASSWORD': ''*******************'',
        'HOST': ''*******************'',
        'PORT': '3306',
        'OPTIONS': {
            'charset': 'utf8mb4',
#             'conv': django_conversions,
#             'use_unicode': 'True',
        },
    },
}


DATABASE_ROUTERS = ['fbwiki.db_routers.mainRouter']

ALLOWED_HOSTS = ['*']

MEDIA_URL = '/media/'
MEDIA_ROOT = os.path.join(PROJECT_PATH, 'media')

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [
            TEMPLATE_PATH,
        ],
        'OPTIONS': {
            'context_processors': [
                'django.contrib.auth.context_processors.auth',
                'django.template.context_processors.request',
                'django.template.context_processors.debug',
                'django.template.context_processors.i18n',
                'django.template.context_processors.csrf',
                'django.template.context_processors.media',
                'django.template.context_processors.static',
                'django.template.context_processors.tz',
                'django.contrib.messages.context_processors.messages',
                # 'ws4redis.context_processors.default',
            ],
            'loaders': [
                'django.template.loaders.filesystem.Loader',
                'django.template.loaders.app_directories.Loader',
            ]
        },
    },
]


COUNTRIES_FLAG_URL = 'https://epcdn-vz.azureedge.net/static/images/flags/png/48/{code}.png'

RECAPTCHA_PUBLIC_KEY = ''*******************''
RECAPTCHA_PRIVATE_KEY = ''*******************''
NOCAPTCHA = True

AUTH_USER_MODEL = 'auth.User'

LOGIN_REDIRECT_URL='/login/'

INVITATIONS_SIGNUP_REDIRECT = "/register/"
INVITATIONS_EMAIL_SUBJECT_PREFIX = ""

AUTHENTICATION_BACKENDS = (
    'django.contrib.auth.backends.ModelBackend',
)

INSTALLED_APPS = (
    'dal',
    'dal_select2',
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
	'django.contrib.sitemaps',
	'django.contrib.sites',
    'django.contrib.humanize',
    'django_ses',
    'django_mysql',
	'enterlink',
	'ipware',
    'locale',
    'registration',
    'mobi',
    'static_sitemaps',
    'local_packages.block_ip',
    'htmlmin',
    'statici18n',
)

TINYMCE_DEFAULT_CONFIG = {
    'plugins': "table,spellchecker,paste,searchreplace",
    'theme': "advanced",
    'cleanup_on_startup': True,
    'custom_undo_redo_levels': 15,
}
TINYMCE_SPELLCHECKER = True
TINYMCE_COMPRESSOR = False

CSRF_FAILURE_VIEW = True

MIDDLEWARE_CLASSES = (
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.locale.LocaleMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    # 'django.contrib.auth.middleware.AuthenticationMiddleware',
    'local_packages.block_ip.middleware.BlockIPMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'mobi.middleware.MobileDetectionMiddleware',
)


SECURE_PROXY_SSL_HEADER = ('HTTP:X-Forwarded-Proto', 'https')

ROOT_URLCONF = 'fbwiki.urls'


"""The email settings are for sending emails from Everipedia accounts for resetting password and confirming account etc"""
DEFAULT_FROM_EMAIL = ''*******************''
SERVER_EMAIL = ''*******************''

EMAIL_BACKEND = 'django_ses.SESBackend'
AWS_SES_REGION_NAME = ''*******************''
AWS_SES_REGION_ENDPOINT = ''*******************''


"""EMAIL_SETTINGS = {
    'welcome': {
        'backend': 'django.core.mail.backends.smtp.EmailBackend',
        'host': 'smtp.everipedia.com',
        'username': ''*******************'',
        'password': ''*******************'',
        'port': 587,
        'use_tls': True
    },
    'admin': {
        'backend': 'django.core.mail.backends.smtp.EmailBackend',
        'host': ''*******************'',aaa
        'username': ''*******************'',
        'password': ''*******************'',
        'port': 587,
        'use_tls': True
    }
}
"""
# ADMINS = (
#     ('admin', ''*******************''),
#
# )
"""
LOGGING = {
    'version': 1,
    'disable_existing_loggers': False,
    'filters': {
        'require_debug_false': {
            '()': 'django.utils.log.RequireDebugFalse'
        }
    },
    'handlers': {
        'mail_admins': {
            'level': 'ERROR',
            'filters': ['require_debug_false'],
            'class': 'django.utils.log.AdminEmailHandler'
        }
    },
    'loggers': {
        'django.request': {
            'handlers': ['mail_admins'],
            'level': 'ERROR',
            'propagate': True,
        },
    }
}
"""

#**********************************************
#IMPORTANT, IF YOU EDITED THE LOCALE TRANSLATIONS, YOU MUST RE_RUN python manage.py compilemessages EVERY TIME!!!!
#FOR THE CHANGES TO REFLECT
#**********************************************
LANGUAGE_CODE = 'en-us'
# LANGUAGE_CODE = 'zh-hans'

LANGUAGES = (
    ('en', u'English'),
    ('ar', u'العربية'),
    # ('bg', u'български'),
    # ('bn', u'বাঙালি'),
    # ('cs', u'Český'),
    # ('da', u'Dansk'),
    # ('de', u'Deutsch'),
    # ('el', u'Ελληνικά'),
    ('es', u'Español'),
    # ('fa', u'فارسی'),
    # ('fi', u'Suomi'),
    ('fr', u'Français'),
    # ('he', u'עברית'),
    # ('hi', u'मानक हिन्दी'),
    ('hr', u'Hrvatski'),
    # ('hu', u'Magyar'),
    # ('id', u'Bahasa Indonesia'),
    ('it', u'Italiano'),
    ('ja', u'日本語'),
    ('ko', u'한국어'),
    # ('ms', u'Bahasa Melayu'),
    # ('ml', u'മലയാളം'),
    # ('nb', u'Norsk (Bokmål)'),
    ('nl', u'Nederlands'),
    # ('pl', u'Polski'),
    ('pt', u'Português'),
    # ('ro', u'Română'),
    ('ru', u'Pусский'),
    # ('sk', u'Slovenčina'),
    # ('sl', u'Slovenščina'),
    # ('sv', u'Svenska'),
    # ('ta', u'தமிழ்'),
    # ('te', u'తెలుగు'),
    # ('th', u'ภาษาไทย'),
    # ('tl', u'Tagalog'),
    ('tr', u'Türkçe'),
    # ('vi', u'Tiếng Việt'),
    # ('uk', u'український'),
    ('zh-hans', u'中文'),
    ('zh-hant', u'(汉语/漢語'),
    ('zh-yue', u'廣東話'),
)


EXTRA_LANG_INFO = {
    'tl': {
        'bidi': False,
        'code': 'tl',
        'name': 'Tagalog',
        'name_local': u'Tagalog',
    },
    'ms': {
        'bidi': False,
        'code': 'ms',
        'name': 'Malay',
        'name_local': u'Bahasa Melayu',
    },
    'zh-yue': {
        'bidi': False,
        'code': 'zh-yue',
        'name': 'Cantonese',
        'name_local': u'廣東話',
    },

}

LANG_INFO = dict(django.conf.locale.LANG_INFO.items() + EXTRA_LANG_INFO.items())
django.conf.locale.LANG_INFO = LANG_INFO

LOCALE_PATHS = (
    os.path.join(PROJECT_PATH, 'locale'),
)

TIME_ZONE = 'UTC'
USE_I18N = True
USE_L10N = True
USE_TZ = True

CROPPED_WIDTH = 850
CROPPED_HEIGHT = 850
DISPLAY_WIDTH = 275
SCALING_RATIO = CROPPED_WIDTH / DISPLAY_WIDTH

CROPPED_THUMB_WIDTH = 200
CROPPED_THUMB_HEIGHT = 200
SCALING_RATIO_THUMB = CROPPED_WIDTH / DISPLAY_WIDTH

CROPPED_META_THUMB_WIDTH = 250
CROPPED_META_THUMB_HEIGHT = 250
SCALING_RATIO_META_THUMB = CROPPED_WIDTH / DISPLAY_WIDTH

STATICSITEMAPS_ROOT_SITEMAP = 'enterlink.sitemap.sitemaps'
STATICSITEMAPS_ROOT_DIR = STATIC_PATH + '/sitemaps/'
STATICSITEMAPS_GZIP_METHOD = 'system'
STATICSITEMAPS_USE_GZIP = True
STATICSITEMAPS_SYSTEM_GZIP_PATH = '/bin/gzip'
STATICSITEMAPS_MOCK_SITE = True
STATICSITEMAPS_URL = "everipedia.org/static/sitemaps/"
STATICSITEMAPS_MOCK_SITE_NAME = "everipedia.org"

MOBI_DETECT_TABLET = True

WSGI_APPLICATION = 'fbwiki.wsgi.application'

VALID_VIDEO_EXTENSIONS = ['.mp4', '.m4v', '.flv', '.f4v', '.ogv', '.ogx', '.wmv', '.webm', '.3gp', '.3g2',
  '.mpg', '.mpeg', '.mov', '.avi']

VALID_AUDIO_EXTENSIONS = ['.mp3', '.ogg', '.wav', '.m4a']
