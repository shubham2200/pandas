from dataclasses import fields
from pyexpat import model
from .models import *
from rest_framework import serializers


class EmployepipSerializer(serializers.ModelSerializer):
    class Meta:
        model = Employee
        fields = '__all__'