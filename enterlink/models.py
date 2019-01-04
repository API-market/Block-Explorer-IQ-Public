from __future__ import unicode_literals
from django.contrib.auth.models import ( BaseUserManager, AbstractBaseUser, User)
from django.db import models
from django.utils.translation import ugettext_lazy
from django.db.models.signals import post_save
from django.dispatch import receiver

class EveripediaUser(AbstractBaseUser):
    id = models.BigAutoField(primary_key=True)
    username = models.CharField(max_length=255)
    first_name = models.CharField(max_length=255)
    last_name = models.CharField(max_length=255)
    nationality = models.CharField(max_length=10, blank=True, null=True)
    pref_lang = models.CharField(max_length=10, blank=True, null=True, default="en")
    email = models.EmailField(max_length=255,unique=True,)
    photo_url = models.URLField(max_length=1024)
    photo_thumb_url = models.URLField(max_length=1024)
    user_type = models.CharField(max_length=255) # e.g. OreID
    is_active = models.BooleanField(default=True)
    is_admin = models.BooleanField(default=False)

    USERNAME_FIELD = 'id'
    REQUIRED_FIELDS = []

    def get_full_name(self):
        return "%s %s (%s)" % (self.first_name, self.last_name, self.username)

    def get_short_name(self):
        return "%s %s (%s)" % (self.first_name, self.last_name, self.username)

    def __str__(self):
        return "%s %s (%s)" % (self.first_name, self.last_name, self.username)

    def __unicode__(self):
        return "%s %s (%s)" % (self.first_name, self.last_name, self.username)

    def has_perm(self, perm, obj=None):
        return True

    def has_module_perms(self, app_label):
        return True

    @property
    def is_staff(self):
        return self.is_admin


class UserContinued(models.Model):
    gender = models.CharField(max_length=7, choices=(('male', 'male'), ('female', 'female'), ('other', 'other')), blank=True, null=True)
    points = models.IntegerField(default=0)
    editnumber = models.IntegerField(default=0)
    rank = models.CharField(max_length=128, default="Link Editor", choices=(('Link Editor', 'Link Editor'), ('Everipedia Editor', 'Everipedia Editor'), ('Master Editor', 'Master Editor'), ('Staff', 'Staff'), ('Founder', 'Founder')))
    nationality = models.CharField(max_length=5, blank=True, null=True)
    usertag = models.OneToOneField(User)
    age = models.IntegerField(default=0, blank=True, null=True)
    isverified = models.BooleanField(default=False)
    usertitle = models.CharField(max_length=512, blank=True, null=True)
    activation_key = models.CharField(max_length= 40, blank=True)
    key_expires = models.DateTimeField(auto_now_add=True, null=True)
    badgestring = models.CharField(max_length=2048, blank=True, null=True)
    profile_pic = models.ImageField(upload_to='everipedia_profile_pics', blank=True)
    edit_amount = models.IntegerField(default=0) #for checking how much they have edited articles, the higher the number the more edits they have
    pref_lang = models.CharField(max_length=5, blank=True, null=True, default="en")
    noteItem = models.CharField(max_length=512, blank=True, null=True)
    everipediapage = models.IntegerField(default=0, blank=True, null=True)
    photourl = models.CharField(max_length=512, blank=True, null=True)
    photo_thumb100url = models.CharField(max_length=512, blank=True, null=True)
    btc_addr = models.CharField(max_length=34, blank=True, null=True)
    eth_addr = models.CharField(max_length=42, blank=True, null=True)
    doge_addr = models.CharField(max_length=34, blank=True, null=True)
    pages_created = models.IntegerField(blank=True, null=True)

    def __unicode__(self):
        if self.isverified == True:
            return self.usertag.first_name + ' ' + self.usertag.last_name + ', ' + self.usertitle
        else:
            return self.usertag.username

# "Contact Us" object
class Contact(models.Model):
    contactdate = models.DateTimeField(auto_now_add=True)
    contacttext = models.CharField(max_length=16384)
    contactemail = models.EmailField(max_length=512)
    contactname = models.CharField(max_length=512)
    contactsubject = models.CharField(max_length=512)
    contacttype = models.CharField(max_length=256, choices=(('Report Bug', ugettext_lazy('Report Abuse')), ('Report Bug', ugettext_lazy('Report Bug')), ('Verify Account', ugettext_lazy('Verify Account')), ('Anonymous Tip', ugettext_lazy('Anonymous Tip')), ('Investment Inquiries', ugettext_lazy('Investment Inquiries')), ('other', ugettext_lazy('Other'))), blank=False)
    contactip = models.CharField(max_length=255)
    contactuseragent = models.CharField(max_length=512)

    def __unicode__(self):
        return self.contactsubject

# Schema.org objects
class SchemaObject(models.Model):
    schema_for =  models.CharField(max_length=256, choices=(('Person', 'Person'), ('Place', 'Place/Location'), ('Organization', 'Organization/Company/Institution'),  ('Event', 'Event'), ('ItemList', 'List/Ranking'), ('Product', 'Product/Merchandise'), ('Product', 'Electronics/Software'), ('MedicalEntity', 'Medical/Biology'), ('CreativeWork', 'Creative Work/Art'), ('MedicalEntity', 'Science/Academia/Humanities'), ('Thing', 'Other')), blank=True, null=True)
    schema_keyword = models.CharField(max_length=512, blank=True, null=True) #the actual schema word
    mapped_keyword = models.CharField(max_length=512, blank=True, null=True) #english phrase mapped to the real schema word
    timestamp = models.DateTimeField(auto_now_add=True) #when this object was added to the DB
    takes_schema_argument = models.BooleanField(default=False)
    schema_argument = models.CharField(max_length=512, blank=True, null=True) #this is for storing the type of schema object it is if it has one
    exclude_from_dropdown = models.BooleanField(default=False)
    addl_schema_default_itemprop = models.CharField(max_length=512, blank=True, null=True)
    rev_sub_type = models.CharField(max_length=512, blank=True, null=True)
    wikidata_id = models.CharField(max_length=512, blank=True, null=True)
    machines_only = models.BooleanField(default=False)

    def __unicode__(self):
        return self.schema_keyword + ' = ' + self.mapped_keyword

# Site notice
class SiteNotice(models.Model):
    desktop_html = models.TextField(max_length=2048, null=True, blank=True)
    mobile_html = models.TextField(max_length=2048, null=True, blank=True)
    lang = models.CharField(max_length=16, blank=True, null=True)

# Caches of IPFS hashes
class HashCache(models.Model):
    ipfs_hash = models.CharField(max_length=255, primary_key=True)
    articletable = models.ForeignKey('ArticleTable', null=True, related_name='articletable')
    html_blob = models.TextField(null=True, blank=True)
    timestamp = models.DateTimeField(auto_now_add=True, null=True, blank=True)

# Redirect table for articles
class RedirectTable(models.Model):
    slug = models.CharField(max_length=255, primary_key=True)
    slug_alt = models.CharField(max_length=255, blank=True, unique=True, null=True)
    final_slug = models.CharField(max_length=255, blank=True, unique=True, null=True)
    final_slug_alt = models.CharField(max_length=255, blank=True, unique=True, null=True)

# Locally cached info about the on-chain articles
class ArticleTable(models.Model):
    id = models.BigAutoField(primary_key=True)
    ipfs_hash_current = models.CharField(max_length=255, blank=True, unique=True, null=True)
    ipfs_hash_parent = models.CharField(max_length=255, blank=True, null=True)
    slug = models.CharField(max_length=255, primary_key=True)
    slug_alt = models.CharField(max_length=255, blank=True, unique=True, null=True)
    page_title = models.CharField(max_length=255, blank=True, null=True)
    blurb_snippet = models.TextField(max_length=65536, null=True, blank=True)
    photo_url = models.URLField(max_length=1024)
    photo_thumb_url = models.URLField(max_length=1024)
    page_type = models.CharField(max_length=255, choices=(('Person', ugettext_lazy('Person')), ('Place', ugettext_lazy('Place/Location')), ('Organization', ugettext_lazy('Organization/Company/Institution')),  ('Event', ugettext_lazy('Event')), ('ItemList', ugettext_lazy('List/Ranking')), ('Product', ugettext_lazy('Product/Merchandise')), ('Product', ugettext_lazy('Electronics/Software')), ('MedicalEntity', ugettext_lazy('Medical/Biology')), ('CreativeWork', ugettext_lazy('Creative Work/Art')), ('MedicalEntity', ugettext_lazy('Science/Academia/Humanities')), ('Thing', ugettext_lazy('Other'))), blank=True, null=True)
    page_sub_type = models.CharField(max_length=255, null=True, blank=True)
    creation_timestamp = models.DateTimeField(auto_now_add=True, null=True, blank=True)
    lastmod_timestamp = models.DateTimeField(auto_now_add=True, null=True, blank=True)
    pageviews = models.IntegerField(null=False, default=0)
    is_removed = models.BooleanField(default=False)
    is_removed_from_index = models.BooleanField(default=False)
    bing_index_override = models.BooleanField(default=False)
    is_adult_content = models.BooleanField(default=False)
    has_pending_edits = models.BooleanField(default=False)
    desktop_cache_timestamp = models.DateTimeField(auto_now_add=False, null=True, blank=True)
    mobile_cache_timestamp = models.DateTimeField(auto_now_add=False, null=True, blank=True)
    is_new_page = models.BooleanField(default=False)
    redirect_page = models.ForeignKey('ArticleTable', null=True, related_name='redirectpage')
    page_lang = models.CharField(max_length=16, default="en")
    page_note = models.CharField(max_length=255, blank=True, null=True)
    article_group_id = models.BigIntegerField(null=True)

# Grouping different-language articles by their same topic
class ArticleGroup(models.Model):
    id = models.BigAutoField(primary_key=True)
    group_id = models.BigIntegerField()
    canonical_article = models.ForeignKey('ArticleTable', null=True, related_name='canonicalpage')
    canonical_lang = models.CharField(max_length=16, blank=True, null=True)


# Locally cached info about the on-chain edit proposals
class EditProposal(models.Model):
    id = models.BigIntegerField(primary_key=True)
    proposed_article_hash = models.CharField(max_length=255, blank=True, unique=True, null=True)
    old_article_hash = models.CharField(max_length=255, blank=True, null=True)
    grandparent_hash = models.CharField(max_length=255, blank=True, null=True)
    proposer = models.CharField(max_length=255)
    proposer_64t = models.BigIntegerField(max_length=255, blank=True, null=True)
    starttime = models.IntegerField(null=False, default=0)
    endtime = models.IntegerField(null=False, default=0)
    status = models.IntegerField(null=False, default=0)
    article = models.ForeignKey(ArticleTable, null=True, blank=True)
    chainverified = models.BooleanField(default=False)

# See Also pages
class SeeAlso(models.Model):
    see_also_tag_id = models.IntegerField(null=False, default=0)
    see_also_content = models.CharField(max_length=1024)
    see_also_date = models.DateTimeField(auto_now_add=True)
    # currenteditor = models.IntegerField(null=False, default=0)
    editnote = models.CharField(max_length=512, null=True, blank=True)
    see_also_clicks = models.IntegerField(null=False, default=0)
    is_active = models.BooleanField(default=False)
    is_removed = models.BooleanField(default=False)
    all_pages = models.BooleanField(default=False)
    related_pages = models.BooleanField(default=False)
    single_page = models.BooleanField(default=False)
    target_url = models.CharField(max_length=512, null=True, blank=True)
    photo_url = models.CharField(max_length=512, null=True, blank=True)
    thumb_url = models.CharField(max_length=512, null=True, blank=True)
    picture_type = models.CharField(max_length=256, null=True, blank=True)

    def __unicode__(self):
        return self.see_also_content

# Saved Drafts
class SavedDraft(models.Model):
    id = models.BigIntegerField(primary_key=True)
    account_name = models.CharField(max_length=20, null=False, blank=False)
    article_slug = models.CharField(max_length=512, null=False, blank=False)
    html_blob = models.TextField(null=True, blank=True)
    updated_at = models.DateTimeField()

# Press Releases
class PressRelease(models.Model):
    id = models.BigIntegerField(primary_key=True)
    link = models.URLField(max_length=1024)
    headline = models.CharField(max_length=1024, null=True, blank=True)
    timestamp = models.DateField(auto_now_add=True)