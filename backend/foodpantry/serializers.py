from rest_framework import serializers
from .models import *



class VolunteerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Volunteer
        fields = fields = ('id', 'volnumber', 'lname', 'fname','voldob', 'address', 'city', 'state', 'zipcode', 'email', 'cellphone','volnotes')

class DonationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Donation
        fields = ('id', 'item', 'donor', 'quantity', 'receiveddate')

class InventorySerializer(serializers.ModelSerializer):
    donations = DonationSerializer(read_only=True, many=True)
    class Meta:
        model = Inventory
        fields = ('id', 'itemcode', 'itemname', 'createdate', 'donations')

class Inventory1Serializer(serializers.ModelSerializer):
    donations = DonationSerializer(read_only=True, many=True)
    class Meta:
        model = Inventory
        fields = ('id', 'itemcode', 'itemname', 'createdate', 'donations')

class DonorSerializer(serializers.ModelSerializer):
    donations = DonationSerializer(read_only=True, many=True)
    class Meta:
        model = Donor
        fields ='__all__'

class Donor1Serializer(serializers.ModelSerializer):
    donations = DonationSerializer(read_only=True, many=True)
    class Meta:
        model = Donor
        fields ='__all__'
