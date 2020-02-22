from django.urls import path

from . import views

urlpatterns = [
    path('api/polls/', views.LeadListCreate.as_view() ),
]