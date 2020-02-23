from django.urls import path, include
from django.contrib import admin

urlpatterns = [
    path('', admin.site.urls),
    path('login/', include('login.urls')),
    path('marker/', include('marker.urls'))
]
