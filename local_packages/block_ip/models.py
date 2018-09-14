import ipcalc
import datetime
from django.db import models
from django.utils.translation import ugettext_lazy as _
from django.core.cache import cache
from django.db.models.signals import post_save, post_delete
from django.contrib.auth.models import User


class BlockIP(models.Model):
    network = models.CharField(_('IP address or mask'), max_length=255)
    reason_for_block = models.TextField(blank=True, null=True, help_text=_("Optional reason for block"))
    ban_length_days = models.IntegerField(null = False, default=666666666)
    ban_start = models.DateTimeField(auto_now_add=True)
    banned_username = models.TextField(blank=True, null=True)
    banned_by = models.ForeignKey(User)

    def __unicode__(self):
        return 'BlockIP: %s' % self.network

    def get_network(self):
        return ipcalc.Network(self.network)

    class Meta:
        verbose_name = _('IPs & masks to ban')
        verbose_name_plural = _('IPs & masks to ban')


def _clear_cache(sender, instance, **kwargs):
    cache.set('blockip:list', BlockIP.objects.all())


post_save.connect(_clear_cache, sender=BlockIP)
post_delete.connect(_clear_cache, sender=BlockIP)
