from django.contrib import admin

from users_auth.models import AppUser, ProfileUser


@admin.register(AppUser)
class AppUserAdmin(admin.ModelAdmin):
    pass


@admin.register(ProfileUser)
class ProfileUserAdmin(admin.ModelAdmin):
    pass