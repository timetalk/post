from django.contrib import admin
from .models import (
    Post,
    PostLike,
    Comment,
    CommentLike
)

# Register your models here.
class PostLikeAdmin(admin.TabularInline):
    model = PostLike
    
class PostAdmin(admin.ModelAdmin):
    inlines = [PostLikeAdmin]
    list_display = ["id", "user"]
    class Meta:
        model = Post

class CommentLikeAdmin(admin.TabularInline):
    model = CommentLike

class CommentAdmin(admin.ModelAdmin):
    inlines = [CommentLikeAdmin]
    list_display = ["id", "user"]
    class Meta:
        model = Comment


admin.site.register(Post, PostAdmin)
admin.site.register(Comment, CommentAdmin)
