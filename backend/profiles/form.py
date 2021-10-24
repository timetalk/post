from django import forms
from django.forms import widgets
from .models import Profile



class ProfileForm(forms.ModelForm):
    first_name = forms.CharField(required=False, 
            widget=forms.TextInput(attrs={
                "class":"form-control labels", "div":"col-md-6"
            }))
    last_name = forms.CharField(required=False, 
            widget=forms.TextInput(attrs={
                "class":"form-control col-md-6 labels" 
            }))
    email = forms.CharField(required=False, 
            widget=forms.TextInput(attrs={
                "class":"form-control col-md-6 labels" 
            }))

    class Meta:
        model = Profile
        fields = ["first_name", "last_name", "location", "email", "bio" ,"phone_number"]
        widgets = {
            "bio": forms.Textarea(attrs={
                "class": "form-control", "label":"Bio", "rows":2
            }),

            "location": forms.TextInput(attrs={
                "class": "form-control", "label":"Bio"
            }),

            "phone_number": forms.TextInput(attrs={
                "class": "form-control", "label":"Bio"
            }),

        
        }