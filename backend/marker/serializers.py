from .models import Marker
from rest_framework import serializers


class MarkerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Marker
        fields = ('id', 'lat', 'long', 'user', 'type', 'description', 'resolved', 'pub_date')
