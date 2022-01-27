from django.db import models
from django.forms import CharField

# Create your models here.

class Employee(models.Model):
    name = models.CharField( max_length=30 , null=True , blank= True )
   
    task = models.CharField( max_length=13  )
    date_time = models.DateTimeField(auto_created= True  ,null= True , blank= True)

    def __str__(self):
        return self.name