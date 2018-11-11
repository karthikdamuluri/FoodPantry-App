from django.shortcuts import render
from rest_framework import viewsets
from .models import *
from .serializers import *
from rest_framework import serializers
from rest_framework.response import Response
from django.http import Http404
from rest_framework import status
import requests

class VolunteerViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows volunteer members to be CRUDed.
    """
    queryset = Volunteer.objects.all()
    serializer_class = VolunteerSerializer


class InventoryViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows Inventories to be CURDed
    """
    queryset = Inventory.objects.all()
    serializer_class = InventorySerializer

class DonorViewSet(viewsets.ModelViewSet):
    """
    API endpoint for the donor details
    """
    queryset = Donor.objects.all()
    serializer_class = DonorSerializer

class DonationViewSet(viewsets.ModelViewSet):
    """
    API endpoint for the donations to be CURDed
    """
    queryset = Donation.objects.all()
    serializer_class = DonationSerializer




    #serializer = VolunteerSerializer(data=data)

#    if serializer.is_valid():
    #    serializer.save()
        #return Response({'success': True}, status=status.HTTP_200_OK)
    #return Response({'success':False, 'error':serializer.errors}, status=status.HTTP_400_BAD_REQUEST)
