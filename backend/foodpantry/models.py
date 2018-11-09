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
