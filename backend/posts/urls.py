from django.urls import path
from .views import  home_views, post_list_views, post_detail_views

urlpatterns = [
    path('', home_views),
    path('global/', post_list_views),
    path('<str:post_id>/', post_detail_views)
]
