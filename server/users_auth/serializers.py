from users_auth.models import ProfileUser, AppUser
from rest_framework import serializers


class AppUserSerializer(serializers.ModelSerializer):  # see if this serializer is needed
    class Meta:
        model = AppUser
        fields = "__all__"


class ProfileUserSerializer(serializers.ModelSerializer):

    user = AppUserSerializer(required=True)

    class Meta:
        model = ProfileUser
        fields = ('user', 'first_name', 'last_name')
