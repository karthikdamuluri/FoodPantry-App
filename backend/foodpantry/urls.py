from django.conf.urls import include, url

#Django Rest Framework
from rest_framework import routers

from foodpantry import controllers
from django.views.decorators.csrf import csrf_exempt

#REST API routes
router = routers.DefaultRouter(trailing_slash=False)
router.register(r'volunteers', controllers.VolunteerViewSet)
router.register(r'inventories', controllers.InventoryViewSet)
router.register(r'donors', controllers.DonorViewSet)
router.register(r'donations', controllers.DonationViewSet)

urlpatterns = [
    url(r'^session', csrf_exempt(controllers.Session.as_view())),
    url(r'^register', csrf_exempt(controllers.Register.as_view())),
    url(r'^', include(router.urls)),
    url(r'^inventories/(?P<pk>\d+)/itemstotal/$', controllers.itemstotal, name='itemtotal'),
]
