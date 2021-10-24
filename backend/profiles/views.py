from django.http.response import HttpResponse
from django.shortcuts import redirect, render
from .form import ProfileForm

# Create your views here.
def home_profile_views(request, username, *args, **kwargs):
    if not request.user.is_authenticated:
        return redirect("/accounts/login")
    context = {
        "username": username
    }
    return render(request, "pages/profile.html", context)

def profile_views(request, *args, **kwargs):
    user = request.user
    if not user.is_authenticated:
        return redirect("/accounts/login")
    profile_obj = user.profile
    user_initial = {
        "first_name": user.first_name,
        "last_name": user.last_name,
        "email": user.email,
    }
    form = ProfileForm(request.POST or None, instance=profile_obj, initial=user_initial)
    if form.is_valid():
        profile = form.save(commit=False)
        first_name = form.cleaned_data.get("first_name")
        last_name = form.cleaned_data.get("last_name")
        email = form.cleaned_data.get("email")
        user.first_name = first_name
        user.last_name = last_name
        user.email = email
        user.save()
        profile.save()
    context = {
        "form": form
    }
    return render(request, 'pages/profile_update_form.html', context)
    

