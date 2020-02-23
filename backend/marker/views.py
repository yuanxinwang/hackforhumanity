from .serializers import MarkerSerializer
from .models import Marker
from rest_framework import generics

class markerListCreate(generics.ListCreateAPIView):
    serializer_class = MarkerSerializer
    queryset = Marker.objects.all()
