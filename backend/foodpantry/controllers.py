from django.shortcuts import render
from rest_framework import viewsets
from .models import *
from .serializers import *

#create your views here
from rest_framework.views import APIView
from django.template import RequestContext
from django.shortcuts import render_to_response

from django.db import models
from django.contrib.auth.models import *
from django.contrib.auth import *


#rest API
from rest_framework import serializers
from rest_framework.response import Response

from django.contrib.auth import authenticate, login, logout
from rest_framework.permissions import *
from rest_framework.decorators import *
from rest_framework.authentication import *

from django.http import Http404
from rest_framework.permissions import AllowAny
from rest_framework import status
import json, datetime, pytz
import requests

def home(request):
   """
   Send requests to / to the ember.js clientside app
   """
   return render_to_response('ember/index.html',
               {}, RequestContext(request))

class Session(APIView):
    permission_classes = (AllowAny,)
    def form_response(self, isauthenticated, userid, username, error=""):
        data = {
            'isauthenticated': isauthenticated,
            'userid': userid,
            'username': username
        }
        if error:
            data['message'] = error

        return Response(data)

    def get(self, request, *args, **kwargs):
        # Get the current user
        if request.user.is_authenticated():
            return self.form_response(True, request.user.id, request.user.username)
        return self.form_response(False, None, None)

    def post(self, request, *args, **kwargs):
        # Login
        username = request.POST.get('username')
        password = request.POST.get('password')
        user = authenticate(username=username, password=password)
        if user is not None:
            if user.is_active:
                login(request, user)
                return self.form_response(True, user.id, user.username)
            return self.form_response(False, None, None, "Account is suspended")
        return self.form_response(False, None, None, "Invalid username or password")

    def delete(self, request, *args, **kwargs):
        # Logout
        logout(request)
        return Response(status=status.HTTP_204_NO_CONTENT)

#volunteer viewset
class VolunteerViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows volunteer members to be CRUDed.
    """
    permission_classes = (AllowAny,)
    queryset = Volunteer.objects.all()
    serializer_class = VolunteerSerializer

#viewset for inventories
class InventoryViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows Inventories to be CURDed
    """
    permission_classes = (AllowAny,)
    queryset = Inventory.objects.all()
    serializer_class = InventorySerializer

#viewset for Donors
class DonorViewSet(viewsets.ModelViewSet):
    """
    API endpoint for the donor details
    """
    permission_classes = (AllowAny,)
    queryset = Donor.objects.all()
    serializer_class = DonorSerializer

#viewset for Donations
class DonationViewSet(viewsets.ModelViewSet):
    """
    API endpoint for the donations to be CURDed
    """
    permission_classes = (AllowAny,)
    queryset = Donation.objects.all()
    serializer_class = DonationSerializer




    #serializer = VolunteerSerializer(data=data)

#    if serializer.is_valid():
    #    serializer.save()
        #return Response({'success': True}, status=status.HTTP_200_OK)
    #return Response({'success':False, 'error':serializer.errors}, status=status.HTTP_400_BAD_REQUEST)
