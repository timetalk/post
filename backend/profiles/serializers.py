from django.db import models
from django.db.models import fields
from rest_framework import serializers
from .models import Profile


class ProifleSerializers(serializers.ModelSerializer):
    first_name = serializers.SerializerMethodField(read_only=True)
    last_name = serializers.SerializerMethodField(read_only=True)
    email = serializers.SerializerMethodField(read_only=True)
    followers = serializers.SerializerMethodField(read_only=True)
    following = serializers.SerializerMethodField(read_only=True)
    is_following = serializers.SerializerMethodField(read_only=True)
    username = serializers.SerializerMethodField(read_only=True)

    class Meta:
        model = Profile
        fields = ["username", "first_name", "last_name", "email", "location", "bio", "phone_number", "followers", "following", "is_following"]
    def get_is_following(self, obj):
        is_following = False
        request = self.context.get("request")
        if request:
            is_following = request.user in obj.followers.all()
        return is_following

    def get_first_name(self, obj):
        return obj.user.first_name
    
    def get_last_name(self, obj):
        return obj.user.last_name
    
    def get_email(self, obj):
        return obj.user.email

    def get_username(self, obj):
        return obj.user.username
    
    def get_followers(self, obj):
        return obj.followers.count()
    
    def get_following(self, obj):
        return obj.user.following.count()