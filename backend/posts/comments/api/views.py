from rest_framework.pagination import PageNumberPagination
from rest_framework.permissions import IsAuthenticated
from posts.comments.serializers import ActionCommentSerializer
from posts.comments.serializers import CommentDetailSerializers
from posts.models import Comment
from posts.comments.serializers import CommentSerializers, CommentCreateSerializers
from rest_framework.response import Response
from rest_framework.decorators import api_view, parser_classes, permission_classes
from django.db.models import Q


def get_paginate_queryset_response(qs, request):
    paginator = PageNumberPagination()
    paginator.page_size = 10
    paginator_qs = paginator.paginate_queryset(qs, request)
    serializer = CommentSerializers(paginator_qs, many=True)
    return paginator.get_paginated_response(serializer.data)

# def get_paginate_queryset_response(qs, request):
#     paginator = PageNumberPagination()
#     paginator.page_size = 10
#     paginator_qs = paginator.paginate_queryset(qs, request)
#     serializer = CommentDetailSerializer(paginator_qs, many=True)
#     return paginator.get_paginated_response(serializer.data)

@api_view(["GET"])
def api_comment_list(request, *args, **kwargs):
    comment_qs = Comment.objects.all()
    return get_paginate_queryset_response(comment_qs, request)

@api_view(["POST"])
def api_create_comment(request, *args, **kwargs):
    serializers = CommentCreateSerializers(data=request.data)
    if serializers.is_valid(raise_exception=True):
        serializers.save(user=request.user)
        return Response(serializers.data, status=201)
    return Response({}, status=400)

@api_view(["GET"])
def api_comment_detail(request, comment_id, *args, **kwargs):
    comment_qs = Comment.objects.all().filter(id=comment_id)
    if not comment_qs.exists():
        return Response({}, status=404)
    comment_obj=comment_qs.first()
    serializers = CommentDetailSerializers(comment_obj)
    return Response(serializers.data, status=200)

@api_view(["POST"])
@permission_classes([IsAuthenticated])
def action_comment_views(request, *args, **kwargs):
    serializer = ActionCommentSerializer(data=request.data)
    if serializer.is_valid(raise_exception=True):
        comment_id = serializer.validated_data.get("id")
        action = serializer.validated_data.get("action")
    
    qs = Comment.objects.filter(id=comment_id)
    if not qs.exists():
        return Response({}, status=404)
    obj = qs.first()
    if action == "like":
        obj.likes.add(request.user)
        serializers = CommentSerializers(obj)
        return Response(serializers.data, status=200)
    elif action == "unlike":
        obj.likes.remove(request.user)
        serializers = CommentSerializers(obj)
        return Response(serializers.data, status=200)
    return Response({}, status=400)
