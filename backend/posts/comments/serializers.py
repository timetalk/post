from rest_framework import serializers
from posts.models import Comment
from profiles.serializers import ProifleSerializers

ACTION_OPTION_COMMENTS = ["like", "unlike"]

class ActionCommentSerializer(serializers.Serializer):
    id = serializers.IntegerField()
    action = serializers.CharField()

    def get_action(self, value):
        content = value.lower().strip()
        if not content in ACTION_OPTION_COMMENTS:
            raise serializers.ValidationError("The contnet is not in the list")
        return content

class ChildCommentsSerializers(serializers.ModelSerializer):
    likes = serializers.SerializerMethodField(read_only=True)
    class Meta:
        model = Comment
        fields = ["id", "content", "likes", "timestamp",]
    
    def get_likes(self, obj):
        return obj.likes.count()

class CommentCreateSerializers(serializers.ModelSerializer):
    user = ProifleSerializers(source="user.profile", read_only=True)
    class Meta:
        model = Comment
        fields = ["id", "user", "post", "content"]


class CommentSerializers(serializers.ModelSerializer):
    likes = serializers.SerializerMethodField(read_only=True)
    replies = serializers.SerializerMethodField(read_only=True)
    user = ProifleSerializers(source="user.profile", read_only=True)

    class Meta:
        model = Comment
        fields = ["id", "post", "user", "content", "likes",  "is_parent", "replies", "timestamp",]

    def get_likes(self, obj):
        return obj.likes.count()
    

    def get_replies(self, obj):
        return ChildCommentsSerializers(obj.children(), many=True).data


class CommentDetailSerializers(serializers.ModelSerializer):
    likes = serializers.SerializerMethodField(read_only=True)
    replies = serializers.SerializerMethodField(read_only=True)
    user = ProifleSerializers(source="user.profile", read_only=True)
    class Meta:
        model = Comment
        fields = ["id", "post",  "user", "content", "likes", "is_parent", "replies", "timestamp",]

    def get_likes(self, obj):
        return obj.likes.count()

    def get_replies(self, obj):
        return ChildCommentsSerializers(obj.children(), many=True).data




