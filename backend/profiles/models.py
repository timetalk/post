from django.db import models
from django.contrib.auth import get_user_model
from django.db.models.signals import post_save

User = get_user_model()

# Create your models here.
class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    location = models.CharField(max_length=255, blank=True, null=True)
    bio = models.TextField(blank=True, null=True)
    phone_number = models.CharField(default="+255", max_length=255, blank=True, null=True)
    followers = models.ManyToManyField(User, related_name="following", blank=True)

def user_did_save(created, instance, *args, **kwargs):
    Profile.objects.get_or_create(user=instance)
    if created:
        Profile.objects.get_or_create(user=instance)

post_save.connect(user_did_save, sender=User)



