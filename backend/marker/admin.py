from django.contrib import admin

from .models import Marker


class MarkerAdmin(admin.ModelAdmin):  # add this
    list_display = ('id', 'description')  # add this


# Register your models here.
admin.site.register(Marker, MarkerAdmin)  # add this
