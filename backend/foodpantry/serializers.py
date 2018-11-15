from rest_framework import serializers
from .models import *


class VolunteerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Volunteer
        fields = fields = ('volnumber', 'lname', 'fname','voldob', 'address', 'city', 'state', 'zipcode', 'email', 'cellphone','volnotes')

class InventorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Inventory
        fields = ('itemcode', 'itemname', 'createdate')

class DonorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Donor
        fields = '__all__'

class DonationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Donation
        fields ='__all__'
