from __future__ import unicode_literals

from django.db import models

from django.utils import timezone
from django.core.validators import *

from django.contrib.auth.models import User, Group

from django.contrib import admin
from django.core.exceptions import ValidationError
from django.utils.translation import gettext_lazy as _
#from rest_framework import serializers
import base64
#To sanitize he input char and text fields using bleach
from django_bleach.models import BleachField
from sanitizer.models import SanitizedCharField
# Create your models here.

class Volunteer(models.Model):
    #REGEX for phone number
    phone_regex = RegexValidator(regex=r'^\+?1?\d{9,15}$', message="Phone number must be entered in the format: '+999999999'. Up to 15 digits allowed.")

    volnumber = models.IntegerField(unique=True,blank=False, null=False)
    lname = models.CharField(max_length=50)
    fname = models.CharField(max_length=50)
    voldob = models.DateTimeField(default=timezone.now)
    address = models.CharField(max_length=200)
    city = models.CharField(max_length=50)
    state = models.CharField(max_length=50)
    zipcode = models.CharField(max_length=10)
    email = models.EmailField(max_length=200)
    cellphone = models.CharField(validators=[phone_regex], max_length=17, blank=False)
    volnotes = models.CharField(max_length=500)
    createddate = models.DateTimeField(
        default=timezone.now)
    updateddate = models.DateTimeField(auto_now_add=True)

    class JSONAPIMeta:
        resource_name = "volunteers"

class Inventory(models.Model):
    itemcode = models.IntegerField(unique=True,blank=False, null=False)
    itemname =  models.CharField(unique=True,max_length=30)
    createdate = models.DateTimeField(auto_now_add = True, blank = False)

    def __str__(self):
        return str(self.itemname)

    class JSONAPIMeta:
        resource_name = "inventories"



class Donor(models.Model):
    donorname = models.CharField(max_length=50)
    joindate = models.DateTimeField(auto_now_add = True, blank = False)
    email = models.EmailField(max_length=100)
    notes = models.CharField(max_length=50)

    def __str__(self):
        return str(self.donorname)

    class JSONAPIMeta:
        resource_name = "donors"



class Donation(models.Model):
    item = models.ForeignKey(Inventory, related_name='donations', on_delete=models.CASCADE,null=True)
    donor = models.ForeignKey(Donor, related_name='donations', on_delete=models.CASCADE, default=1)
    quantity = models.DecimalField(max_digits=10,decimal_places=1)
    receiveddate = models.DateTimeField(default=timezone.now)

    def __str__(self):
        return str(self.quantity)

    class JSONAPIMeta:
        resource_name = "donations"



class VolunteerAdmin(admin.ModelAdmin):
    list_display = ('volnumber', 'fname')

class InventoryAdmin(admin.ModelAdmin):
    list_display = ('itemcode','itemname')

class DonorAdmin(admin.ModelAdmin):
    list_display = ('donorname','email')

class DonationAdmin(admin.ModelAdmin):
    list_display = ('item','donor')
