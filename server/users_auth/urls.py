from django.urls import path
from users_auth import views

urlpatterns = (
    path('users/', views.ProfileUserListAPIView.as_view()),
)