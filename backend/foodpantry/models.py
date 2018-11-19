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
# Create your models here.

class Volunteer(models.Model):
    volnumber = models.IntegerField(unique=True,blank=False, null=False)
    lname = models.CharField(max_length=50)
    fname = models.CharField(max_length=50)
    voldob = models.DateTimeField(
        default=timezone.now)
    address = models.CharField(max_length=200)
    city = models.CharField(max_length=50)
    state = models.CharField(max_length=50)
    zipcode = models.CharField(max_length=10)
    email = models.EmailField(max_length=200)
    cellphone = models.CharField(max_length=50)
    volnotes = models.CharField(max_length=50)
    createddate = models.DateTimeField(
        default=timezone.now)
    updateddate = models.DateTimeField(auto_now_add=True)

    class JSONAPIMeta:
        resource_name = "volunteers"

class Inventory(models.Model):
    itemcode = models.IntegerField(unique=True,blank=False, null=False)
    itemname =  models.CharField(unique=True,max_length=25)
    createdate = models.DateTimeField(default=timezone.now)

    class JSONAPIMeta:
        resource_name = "inventories"

    class Meta:
        unique_together= ('itemcode','itemname')

class Donor(models.Model):
    donorname = models.CharField(max_length=50)
    joindate = models.DateField(default=timezone.now)
    email = models.EmailField(max_length=100)
    notes = models.CharField(max_length=50)

    class JSONAPIMeta:
        resource_name = "donors"

    def __str__(self):
        return str(self.donorname)

class Donation(models.Model):
    item = models.ForeignKey(Inventory,on_delete=models.CASCADE, default=1)
    donor = models.ForeignKey(Donor,on_delete=models.CASCADE, default=1)
    quantity = models.DecimalField(max_digits=10,decimal_places=1)
    receiveddate = models.DateField(default=timezone.now)

    class JSONAPIMeta:
        resource_name = "donations"

    def __str__(self):
        return str(self.donor)
