from django.urls import path

from .views import login_views, logout_views, register_views

urlpatterns = [
    path('login/', login_views),
    path('register/', register_views),
    path('logout/', logout_views),
]
