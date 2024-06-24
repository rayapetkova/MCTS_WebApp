from django.core import validators
from django.db import models
from django.contrib.auth import models as auth_models
from users_auth.managers import AppUserCustomManager


class AppUser(auth_models.AbstractBaseUser, auth_models.PermissionsMixin):
    email = models.EmailField(
        unique=True,
        null=False,
        blank=False
    )

    is_staff = models.BooleanField(
        default=False
    )

    USERNAME_FIELD = "email"

    objects = AppUserCustomManager()


class ProfileUser(models.Model):
    first_name = models.CharField(
        max_length=150,
        null=False,
        blank=False,
        validators=[
            validators.MinLengthValidator(2, message="Your first name needs to consist of at least 2 letters!")
        ]
    )

    last_name = models.CharField(
        max_length=150,
        null=False,
        blank=False,
        validators=[
            validators.MinLengthValidator(2, message="Your last name needs to consist of at least 2 letters!")
        ]
    )

    user = models.OneToOneField(
        to=AppUser,
        on_delete=models.CASCADE
    )