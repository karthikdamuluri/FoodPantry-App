from django.shortcuts import render
from rest_framework import viewsets
from .models import *
from .serializers import *
import foodpantry.serializers as foodpantry

#create your views here
from rest_framework.views import APIView
from django.template import RequestContext
from django.shortcuts import render_to_response

from django.db import models
from django.contrib.auth.models import *
from django.contrib.auth import *
from django.db.models.functions import Coalesce
from django.db.models import Sum, Value as V
from rest_framework.decorators import action
#rest API
from rest_framework import serializers
from rest_framework.response import Response

from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.decorators import login_required
from rest_framework.authentication import *
from rest_framework.permissions import *
from rest_framework.decorators import *
from django.core.exceptions import ValidationError
#from rest_framework.permissions import IsAuthenticated

from django.http import Http404
from django.shortcuts import get_object_or_404, render
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework import status
import json, datetime, pytz
import requests

def home(request):
   """
   Send requests to / to the ember.js clientside app
   """
   return render_to_response('ember/index.html',
               {}, RequestContext(request))

def admin_or_401(request):
    if not (request.user.is_staff or request.user.is_superuser):
        return Response({'success': False},status=status.HTTP_401_UNAUTHORIZED)

# class Register(APIView):
#     permission_classes = (AllowAny,)
#
#     def post(self, request, *args, **kwargs):
#         # Login
#         username = request.POST.get('username') #you need to apply validators to these
#         #print ('username')
#         password = request.POST.get('password') #you need to apply validators to these
#         email = request.POST.get('email') #you need to apply validators to these
#         #gender = request.POST.get('gender') #you need to apply validators to these
#         #age = request.POST.get('age') #you need to apply validators to these
#         #educationlevel = request.POST.get('educationlevel') #you need to apply validators to these
#         #city = request.POST.get('city') #you need to apply validators to these
#         #state = request.POST.get('state') #you need to apply validators to these
#
#         #print request.POST.get('username')
#         if User.objects.filter(username=username).exists():
#             return Response({'username': 'Username is taken.', 'status': 'error'})
#         elif User.objects.filter(email=email).exists():
#             return Response({'email': 'Email is taken.', 'status': 'error'})
#
#         #especially before you pass them in here
#         newuser = User.objects.create_user(email=email, username=username, password=password)
#         newprofile = Profile(user=newuser, gender=gender, age=age, educationlevel=educationlevel, city=city, state=state)
#         newprofile.save()
#
#         return Response({'status': 'success', 'userid': newuser.id, 'profile': newprofile.id})

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
#@login_required
class VolunteerViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows volunteer members to be CRUDed.
    """

    queryset = Volunteer.objects.all()
    serializer_class = VolunteerSerializer
    permission_classes = (IsAdminUser,)



#viewset for inventories
class InventoryViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows Inventories to be CURDed
    """

    queryset = Inventory.objects.all()
    serializer_class = InventorySerializer
    permission_classes = (IsAuthenticated,)


class Inventory1ViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows Inventories added by volunteers to be CURDed
    """

    queryset = Inventory.objects.all()
    serializer_class = Inventory1Serializer
    permission_classes = (IsAuthenticated,)


#viewset for Donorss
class DonorViewSet(viewsets.ModelViewSet):
    """
    API endpoint for the donor details
    """
    permission_classes = (AllowAny,)
    queryset = Donor.objects.all()
    serializer_class = DonorSerializer


class Donor1ViewSet(viewsets.ModelViewSet):

    """
    API endpoint for the donor details for volunteer
    """
    permission_classes = (AllowAny,)
    queryset = Donor.objects.all()
    serializer_class = Donor1Serializer


#viewset for Donations
class DonationViewSet(viewsets.ModelViewSet):
    """
    API endpoint for the donations to be CURDed
    """
    permission_classes = (AllowAny,)
    queryset = Donation.objects.all()
    serializer_class = DonationSerializer
    filter_fields = ('id', 'item', 'quantity')


    @action(detail=True, methods=['get'])
    def itemstotal(self, request, pk=None):
       donations = Donation.objects.filter(item=pk)
       sumitems = Donation.objects.filter(item=pk).aggregate(quantity__sum=Coalesce(Sum('quantity'),0.0))
       return Response({'success': True, 'sumitems': sumitems}, status=status.HTTP_200_OK)

    @action(detail=True, methods=['get'])
    def trackdonations2(self, request, pk):
        donations = Donation.objects.filter (donor=pk)
        return Response({'success': True, 'donations': donations, 'donorpk': pk}, status=status.HTTP_200_OK)




    #serializer = VolunteerSerializer(data=data)

#    if serializer.is_valid():
    #    serializer.save()
        #return Response({'success': True}, status=status.HTTP_200_OK)
    #return Response({'success':False, 'error':serializer.errors}, status=status.HTTP_400_BAD_REQUEST)
