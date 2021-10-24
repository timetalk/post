from django.core.paginator import Page
from rest_framework import pagination
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes, parser_classes
from rest_framework.parsers import  MultiPartParser
from rest_framework.permissions import IsAuthenticated
from posts.serializers import PostSerializer, PostCreateSerializer, ActionSerializer
from rest_framework.pagination import PageNumberPagination


from posts.models import Post


def get_paginate_queryset_response(qs, request):
    paginator = PageNumberPagination()
    paginator.page_size = 10
    paginator_qs = paginator.paginate_queryset(qs, request)
    serializer = PostSerializer(paginator_qs, many=True)
    return paginator.get_paginated_response(serializer.data)


@api_view(["GET"])
@permission_classes([IsAuthenticated,])
def feed_list_views(request, *args, **kwargs):
    user=request.user
    post_list_qs=Post.objects.feed(user)
    return get_paginate_queryset_response(post_list_qs, request)
 
@api_view(["GET"])
def post_list_views(request, *args, **kwargs):
    post_list_qs = Post.objects.all()
    paginator = PageNumberPagination()
    paginator.page_size = 10
    username = request.GET.get("username")
    if username != None:
        post_list_qs = Post.objects.filter(user__username__iexact=username)
    return get_paginate_queryset_response(post_list_qs, request)

@api_view(["GET"])
def post_detail_views(request, post_id, *args, **kwargs):
    qs = Post.objects.filter(id=post_id)
    if not qs.exists():
        return Response({}, status=404)
    obj = qs.first()
    serializer = PostSerializer(obj)
    return Response(serializer.data, status=200)

@api_view(["POST"])
@permission_classes([IsAuthenticated,])
@parser_classes([MultiPartParser])
def post_create_views(request, *args, **kwargs):
    serializers = PostCreateSerializer(data=request.data)
    if serializers.is_valid(raise_exception=True):
        serializers.save(user=request.user)
        return Response(serializers.data, status=201)
    return Response({}, status=400)


@api_view(["POST"])
@permission_classes([IsAuthenticated])
def action_post_views(request, *args, **kwargs):
    serializer = ActionSerializer(data=request.data)
    if serializer.is_valid(raise_exception=True):
        post_id = serializer.validated_data.get("id")
        action = serializer.validated_data.get("action")
    
    qs = Post.objects.filter(id=post_id)
    if not qs.exists():
        return Response({}, status=404)
    obj = qs.first()
    if action == "like":
        obj.like.add(request.user)
        serializers = PostSerializer(obj)
        return Response(serializers.data, status=200)
    elif action == "unlike":
        obj.like.remove(request.user)
        serializers = PostSerializer(obj)
        return Response(serializers.data, status=200)
    return Response({}, status=400)
    