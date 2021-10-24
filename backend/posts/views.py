from django.shortcuts import render


# Create your views here.
def home_views(request, *args, **kwargs):
    return render(request, 'pages/feed.html')

def post_list_views(request, *args, **kwargs):
    return render(request, 'pages/list.html')

def post_detail_views(request, post_id, *args, **kwargs):
    return render(request, 'pages/detail.html', context={"post_id":post_id})

