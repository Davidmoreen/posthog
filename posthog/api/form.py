from posthog.api.routing import TeamAndOrgViewSetMixin
from rest_framework import serializers, viewsets
from posthog.api.shared import UserBasicSerializer
from posthog.models.crm import Form

class FormSerializer(serializers.ModelSerializer):
    created_by = UserBasicSerializer(read_only=True)

    class Meta:
        model = Form
        fields = [
            "id",
            "name",
            "fields",
            "created_at"
        ]
        read_only_fields = ["id", "created_at"]

class FormViewSet(TeamAndOrgViewSetMixin, viewsets.ModelViewSet):
    scope_object = "form"
    queryset = Form.objects.all()
    serializer_class = FormSerializer