from rest_framework import serializers
from .models import *


class VolunteerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Volunteer
        fields = fields = ('volnumber', 'lname', 'fname','voldob', 'address', 'city', 'state', 'zipcode', 'email', 'cellphone','volnotes')

class DonationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Donation
        fields ='__all__'


class InventorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Inventory
        fields = ('itemcode', 'itemname', 'createdate')

class DonorSerializer(serializers.ModelSerializer):
    donations = DonationSerializer(read_only=True, many=True)
    class Meta:
        model = Donor
        fields = '__all__'
