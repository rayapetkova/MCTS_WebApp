from django.shortcuts import render
from rest_framework.generics import ListAPIView
from users_auth.models import ProfileUser
from users_auth.serializers import ProfileUserSerializer


class ProfileUserListAPIView(ListAPIView):
    queryset = ProfileUser.objects.all()
    serializer_class = ProfileUserSerializer