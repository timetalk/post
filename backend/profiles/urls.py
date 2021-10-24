from django.urls import path
from .views import profile_views, home_profile_views

urlpatterns = [
    path('', profile_views),
    path('<username>/', home_profile_views)
]
