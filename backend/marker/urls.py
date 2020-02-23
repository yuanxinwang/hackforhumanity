from django.urls import path
from . import views

urlpatterns = [
    path('', views.markerListCreate.as_view()),
]
