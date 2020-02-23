from django.urls import path, include
from django.contrib import admin

urlpatterns = [
    path('admin/', admin.site.urls),
    path('login/', include('login.urls')),
    path('marker/', include('marker.urls'))
]
