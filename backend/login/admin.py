from django.contrib import admin
from .models import Login  # add this


class LoginAdmin(admin.ModelAdmin):  # add this
    list_display = ('email', 'password')  # add this


# Register your models here.
admin.site.register(Login, LoginAdmin)  # add this