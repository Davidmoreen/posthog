from django.db import models
from posthog.models.utils import UUIDModel

class CrmObjectType(models.Model):
    name = models.CharField(max_length=255)
    created_at = models.DateTimeField(auto_now_add=True)


class CrmObject(models.Model):
    object_type = models.ForeignKey(CrmObjectType, on_delete=models.CASCADE)
    team = models.ForeignKey("Team", on_delete=models.CASCADE)
    properties = models.JSONField(default=dict)
    created_at = models.DateTimeField(auto_now_add=True)

class Form(UUIDModel):
    name = models.CharField(max_length=255)
    team = models.ForeignKey("Team", on_delete=models.CASCADE)
    fields = models.JSONField(default=[]) # and array of object property names
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True, blank=True)