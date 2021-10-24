from django.urls import path
from .views import action_comment_views, api_comment_list, api_comment_detail, api_create_comment

urlpatterns = [
    path('', api_comment_list),
    path('create', api_create_comment),
    path('action', action_comment_views),
    path('<comment_id>', api_comment_detail),

]
