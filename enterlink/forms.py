# -*- coding: utf-8 -*-
import os
from django.forms import ModelForm
from enterlink.models import Contact
from django import forms
from django.utils.translation import ugettext_lazy
from fbwiki.settings import LANGUAGES

# "Contact Us" page
class ContactForm(ModelForm):
    contacttext = forms.CharField(max_length=16384, widget=forms.Textarea(attrs={'placeholder': ugettext_lazy('How can we help?')}))
    contactemail = forms.EmailField(max_length=512, widget=forms.TextInput(attrs={'placeholder': ugettext_lazy('Email')}))
    contactname = forms.CharField(max_length=512, widget=forms.TextInput(attrs={'placeholder': ugettext_lazy('Full Name')}))
    contactsubject = forms.CharField(max_length=512, widget=forms.TextInput(attrs={'placeholder': ugettext_lazy('Subject')}))
    contacttype = forms.ChoiceField(choices=(('Report Bug', ugettext_lazy('Report Abuse')), ('Report Bug', ugettext_lazy('Report Bug')), ('Verify Account', ugettext_lazy('Verify Account')), ('Anonymous Tip', ugettext_lazy('Anonymous Tip')), ('Investment Inquiries', ugettext_lazy('Investment Inquiries')), ('other', ugettext_lazy('Other'))))

    class Meta:
        model = Contact
        fields = ['contactsubject', 'contacttext', 'contacttype', 'contactemail', 'contactname']

# Search bar
class SearchBox(forms.Form):
    SearchBox = forms.CharField(
        widget=forms.TextInput(attrs={'placeholder': ugettext_lazy('Search by Entering a Link')}), max_length=512)

# New file additions
class NewlinkFileForm(forms.Form):
    linkcomment = forms.CharField(max_length=16384, widget=forms.Textarea(attrs={'placeholder': ugettext_lazy(
        'Describe the file briefly. A summary of the information found is best. Avoid simply repeating the page title.')}))
    file = forms.FileField()

    # Reject bad file types
    def clean_file(self):
        file = self.cleaned_data.get("file", False)
        base, extension = os.path.splitext(os.path.basename(file.name))
        extension = extension.upper()
        extension = extension[1:]
        badList = ['0XE', '73K', '89K', 'A6P', 'AC', 'ACC', 'ACR', 'ACTM', 'AHK', 'AIR', 'APP', 'ARSCRIPT', 'AS', 'ASB',
                   'AWK', 'AZW2', 'BEAM', 'BTM', 'CEL', 'CELX', 'CHM', 'COF', 'CRT', 'DEK', 'DLD', 'DMC', 'DMG', 'DXL',
                   'EAR', 'EBM', 'EBS', 'EBS2', 'ECF', 'EHAM', 'ELF', 'ES', 'EX4', 'EXOPC', 'EZS', 'FAS', 'FKY', 'FPI',
                   'FRS', 'FXP', 'GS', 'HAM', 'HMS', 'HPF', 'HTA', 'IIM', 'IPF', 'ISP', 'JAR', 'JS', 'JSX', 'KIX', 'LO',
                   'LS', 'MAM', 'MCR', 'MEL', 'MPX', 'MRC', 'MS', 'MS', 'MXE', 'NEXE', 'OBS', 'ORE', 'OTM', 'PEX',
                   'PLX', 'POTM', 'PPAM', 'PPSM', 'PRC', 'PVD', 'PWC', 'PYC', 'PYO', 'QPX', 'RBX', 'ROX', 'RPJ', 'S2A',
                   'SBS', 'SCA', 'SCAR', 'SCB', 'SCR', 'SCRIPT', 'SMM', 'SPR', 'TCP', 'THM', 'TLB', 'TMS', 'UDF', 'UPX',
                   'URL', 'VLX', 'VPM', 'WCM', 'WIDGET', 'WIZ', 'WPK', 'WPM', 'XAP', 'XBAP', 'XLAM', 'XLM', 'XQT',
                   'XYS', 'ZL9', 'ACTION', 'APK', 'APP', 'BAT', 'BIN', 'CMD', 'COM', 'COMMAND', 'CPL', 'CSH', 'EXE',
                   'GADGET', 'INF', 'INS', 'INX', 'IPA', 'ISU', 'JOB', 'JSE', 'KSH', 'LNK', 'MSC', 'MSI', 'MSP', 'MST',
                   'OSX', 'OUT', 'PAF', 'PIF', 'PRG', 'PS1', 'REG', 'RGS', 'RUN', 'SCT', 'SHB', 'SHS', 'U3P', 'VB',
                   'VBE', 'VBS', 'VBSCRIPT', 'WORKFLOW', 'WS', 'WSF']
        for badExt in badList:
            if badExt == extension:
                raise forms.ValidationError(ugettext_lazy("File type not allowed."))
        return file

# New link additions
class LinkForm(forms.Form):
    newlink_tag = None
    linkurl = forms.URLField(max_length=1024, min_length=1, error_messages={'required': ugettext_lazy('Please .')},
                             widget=forms.TextInput(attrs={'placeholder': ugettext_lazy('Enter a URL')}))
    linkcomment = forms.CharField(max_length=16384, widget=forms.Textarea(attrs={'placeholder': ugettext_lazy(
        'Describe the URL briefly. A summary of the information found is best. Avoid simply repeating the page title.')}))

# New infoboxes
class Infobox_Form_Tagged(forms.Form):
    infotype = forms.CharField(widget=forms.TextInput(attrs={'placeholder': ugettext_lazy('Enter type (e.g. Occupation)')}), required=False, max_length=2048)
    infocontent = forms.CharField(widget=forms.TextInput(attrs={'placeholder': ugettext_lazy('Enter value (e.g. CEO)')}), required=False, max_length=2048)

# Page metadata
class PageMetaForm(forms.Form):
    page_type = forms.ChoiceField(required=False, choices=(
        ('Person', ugettext_lazy('Person')), ('Place', ugettext_lazy('Place/Location')),
        ('Organization', ugettext_lazy('Organization/Company/Institution')), ('Event', ugettext_lazy('Event')),
        ('ItemList', ugettext_lazy('List/Ranking')), ('Product', ugettext_lazy('Product/Merchandise')),
        ('Product', ugettext_lazy('Electronics/Software')), ('MedicalEntity', ugettext_lazy('Medical/Biology')),
        ('CreativeWork', ugettext_lazy('Creative Work/Art')),
        ('MedicalEntity', ugettext_lazy('Science/Academia/Humanities')), ('Thing', ugettext_lazy('Other')), (None, None)))
    is_removed = forms.BooleanField(required=False)
    is_adult_content = forms.BooleanField(required=False)
    page_lang = forms.ChoiceField(required=False, choices=LANGUAGES)

