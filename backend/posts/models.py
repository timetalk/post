from django.db import models
from django.contrib.auth import get_user_model
from django.db.models import Q


User = get_user_model()

class CommentManager(models.Manager):
    def all(self):
        qs = super(CommentManager, self).filter(parent=None)
        return qs
    


class PostQuerySet(models.QuerySet):
    def feed(self, user):
        profile = user.following.all()
        other_following_profile = []
        if profile.exists():
            other_following_profile = user.following.values_list("user__id", flat=True)
        return self.filter(Q(user__id__in=other_following_profile) | Q(user=user)).distinct().order_by("-timestamp")

class PostManager(models.Manager):
    def get_queryset(self, *args, **kwargs):
        return PostQuerySet(self.model, using=self._db)
    
    def feed(self, user):
        return self.get_queryset().feed(user)

class PostLike(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    post = models.ForeignKey("Post", on_delete=models.CASCADE)
    timestamp = models.DateTimeField(auto_now_add=True)

# Create your models here.
class Post(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    like = models.ManyToManyField(User, blank=True, related_name="likes", through=PostLike)
    title = models.CharField(max_length=200)
    content = models.TextField()
    image = models.FileField(upload_to="static/images", blank=True, null=True)
    objects = PostManager()
    timestamp = models.DateTimeField(auto_now_add=True)

  

    class Meta:
        ordering = ("-timestamp", )


class CommentLike(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    comment = models.ForeignKey("Comment", on_delete=models.CASCADE)
    timestamp = models.DateTimeField(auto_now_add=True)

class Comment(models.Model):
    parent = models.ForeignKey("self", on_delete=models.CASCADE, blank=True, null=True)
    post = models.ForeignKey(Post, on_delete=models.CASCADE)
    user  = models.ForeignKey(User, on_delete=models.CASCADE)
    content = models.TextField()
    likes = models.ManyToManyField(User, blank=True, related_name="commentslikes", through=CommentLike)
    timestamp = models.DateTimeField(auto_now_add=True)
    objects = CommentManager()

    

    class Meta:
        ordering = ("-timestamp", )

    @property
    def is_parent(self):
        if self.parent is not None:
            return False
        return True
    
    def children(self):
        return Comment.objects.filter(parent=self)

