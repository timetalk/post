from .views import action_post_views, feed_list_views, post_create_views, post_list_views, post_detail_views
from django.urls import path

urlpatterns = [
    path('', post_list_views),
    path('feed/', feed_list_views),
    path('<int:post_id>', post_detail_views),
    path('action/', action_post_views),
    path('create/', post_create_views),
]
