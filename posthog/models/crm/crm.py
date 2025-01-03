from django.db import models


class CrmObjectType(models.Model):
    name = models.CharField(max_length=255)
    created_at = models.DateTimeField(auto_now_add=True, blank=True)


class CrmObject(models.Model):
    object_type = models.ForeignKey(CrmObjectType, on_delete=models.CASCADE)
    team = models.ForeignKey("Team", on_delete=models.CASCADE)
    properties = models.JSONField(default=dict)
    created_at = models.DateTimeField(auto_now_add=True, blank=True)
