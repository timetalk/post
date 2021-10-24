from rest_framework import serializers
from .models import Post
from posts.comments.serializers import CommentSerializers
from .models import Comment
from profiles.serializers import ProifleSerializers
from posts.comments.serializers import CommentSerializers


OPTION_ACTION_BUTTON = ["like", "unlike"]

class ActionSerializer(serializers.Serializer):
    id = serializers.IntegerField()
    action = serializers.CharField()

    def get_action(self, value):
        content = value.lower().strip()
        if not content in OPTION_ACTION_BUTTON:
            return serializers.ValidationError("The choice is not there")
        return content


class PostCreateSerializer(serializers.ModelSerializer):
    user = ProifleSerializers(source="user.profile", read_only=True)
    class Meta:
        model = Post
        fields = ["user", "title", "content", "image"]


class PostSerializer(serializers.ModelSerializer):
    user = ProifleSerializers(source="user.profile", read_only=True)
    comments = serializers.SerializerMethodField(read_only=True)
    like = serializers.SerializerMethodField(read_only=True)
    comment_count= serializers.SerializerMethodField(read_only=True)
    class Meta:
        model = Post
        fields = ["id", "user", "title", "content", "image", "like", "timestamp", "comments", "comment_count"]
    
    def get_like(self, obj):
        return obj.like.count()


    def get_comments(self, obj):
        comment_qs = Comment.objects.all().filter(post=obj)
        serializer = CommentSerializers(comment_qs, read_only=True, many=True).data
        return serializer
    
    def get_comment_count(self, obj):
        comment_qs = Comment.objects.filter(post=obj)
        return comment_qs.count()
      
    

