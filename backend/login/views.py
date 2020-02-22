      # add this
from .serializers import LoginSerializer      # add this
from .models import Login                   # add this
from rest_framework import generics

class loginListCreate(generics.ListCreateAPIView):
    serializer_class = LoginSerializer
    queryset = Login.objects.all()
