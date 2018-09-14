# -*- coding: utf-8 -*-
from django.core.management.base import BaseCommand
from static_sitemaps.generator import SitemapGenerator

# python manage.py refresh_sitemap

class Command(BaseCommand):
    command = None
    help = 'Generates sitemaps files to a predefined directory.'

    def handle(self, **options):
        generator = SitemapGenerator(int(options.get('verbosity', 3)))
        generator.write()
