from django.shortcuts import redirect, render
from django.contrib.auth.forms import UserCreationForm, AuthenticationForm
from django.contrib.auth import login, logout

def login_views(request, *args, **kwargs):
    form = AuthenticationForm(request, data=request.POST or None)
    if form.is_valid():
        user = form.get_user()
        login(request, user)
        return redirect('/')
    context = {
        "form": form,
        "title": "Login"
    }
    return render(request, 'pages/login.html', context)


def register_views(request, *args, **kwargs):
    form = UserCreationForm(request.POST or None)
    if form.is_valid():
        user = form.save(commit=True)
        password = form.cleaned_data.get("password1")
        user.set_password(password)
        user.save()
        return redirect("/accounts/login")
    context = {
        "form": form,
        "title": "Register"
    }
    return render(request, 'pages/login.html', context)

def logout_views(request, *args, **kwargs):
    if request.method == "POST":
        logout(request)
        return redirect('/accounts/login')
    return render(request, 'pages/login.html')

