from django.conf.urls import include, url

#Django Rest Framework
from rest_framework import routers

from foodpantry import controllers
from django.views.decorators.csrf import csrf_exempt

#REST API routes
router = routers.DefaultRouter(trailing_slash=False)

urlpatterns = [
url(r'^volunteers/$', csrf_exempt(controllers.VolunteerViewSet.as_view({"get": "list"}))),
url(r'^volunteers/(?P<pk>[0-9]+)/$', csrf_exempt(controllers.VolunteerViewSet.as_view({"get": "list"}))),
url(r'^inventories/$', csrf_exempt(controllers.InventoryViewSet.as_view({"get": "list"}))),
url(r'^inventories/(?P<pk>[0-9]+)/$', csrf_exempt(controllers.InventoryViewSet.as_view({"get": "list"}))),
url(r'^donors/$', csrf_exempt(controllers.DonorViewSet.as_view({"get": "list"}))),
url(r'^donations/$', csrf_exempt(controllers.DonationViewSet.as_view({"get": "list"}))),
url(r'^', include(router.urls)),
]
