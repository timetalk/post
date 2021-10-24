from django import urls
from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static
urlpatterns = [
    path('admin/', admin.site.urls),
    path('accounts/', include('accounts.urls')),
    path('profile/', include('profiles.urls')),
    path('', include('posts.urls')),
    path('api/post/', include('posts.api.urls')),
    path('api/comments/', include('posts.comments.api.urls')),
    path('api/profile/', include('profiles.api.urls')),
]

urlpatterns+=static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)

