from django.urls import path
from .views import profile_following_views, profile_views

urlpatterns = [
  path('<username>/follow/', profile_following_views),
  path('<username>/', profile_views) 
]
