from django.contrib import admin
from django.urls import include, path

urlpatterns = [
    path('ok/', include('ok.urls')),
    path('admin/', admin.site.urls),
]