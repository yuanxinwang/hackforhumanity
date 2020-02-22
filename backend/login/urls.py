from django.urls import path
from . import views

urlpatterns = [
    path('login/', views.loginListCreate.as_view()),
]