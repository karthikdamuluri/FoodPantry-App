from rest_framework import serializers
from .models import Volunteer


class VolunteerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Volunteer
        fields = fields = ('volnumber', 'lname', 'fname','voldob', 'address', 'city', 'state', 'zipcode', 'email', 'cellphone','volnotes')
