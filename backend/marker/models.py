import uuid
from django.db import models


class Marker(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    lat = models.FloatField()
    long = models.FloatField()
    user = models.CharField(max_length=100)
    type = models.CharField(max_length=50)
    description = models.CharField(max_length=500)
    resolved = models.BooleanField()
    pub_date = models.DateTimeField('date published')
