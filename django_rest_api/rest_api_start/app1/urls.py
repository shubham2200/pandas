from django.contrib import admin
from django.urls import path,include
from .views import employelistview

urlpatterns = [
    path('emp/' , employelistview , name='emp')
]
