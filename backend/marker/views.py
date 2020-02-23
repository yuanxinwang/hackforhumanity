from .serializers import MarkerSerializer
from .models import Marker
from rest_framework import generics

class markerListCreate(generics.ListCreateAPIView):
    queryset = Marker.objects.all()
    serializer_class = MarkerSerializer
