from rest_framework import serializers
from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.contrib.auth import get_user_model
from profiles.models import Profile
from profiles.serializers import ProifleSerializers



User = get_user_model()

@api_view(["GET"])
def profile_views(request, username, *args, **kwargs):
    qs = Profile.objects.filter(user__username=username)
    if not qs.exists():
        return Response({}, status=404)
    qs = qs.first()
    serializer = ProifleSerializers(qs, context={"request": request})
    return Response(serializer.data, status=200)


@api_view(["POST"])
def profile_following_views(request, username, *args, **kwargs):
    me = request.user
    other_user = User.objects.filter(username=username)
    if not other_user.exists():
        return Response({}, status=404)
    other_user_profile = other_user.first()
    profile_obj = other_user_profile.profile

    action = request.data.get("action") or {}
    if action == "follow":
        profile_obj.followers.add(me)
        serializers = ProifleSerializers(profile_obj, context={"request": request})
        return Response(serializers.data, status=200)
    elif action == "unfollow":
        profile_obj.followers.remove(me)
        serializers = ProifleSerializers(profile_obj, context={"request": request})
        return Response(serializers.data, status=200)
    return Response({}, status=400)


    
