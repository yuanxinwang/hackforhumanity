from django.db import models


# Create your models here.

# add this
class Login(models.Model):
    email = models.CharField(max_length=50)
    password = models.CharField(max_length=50)

    def _str_(self):
        return self.email