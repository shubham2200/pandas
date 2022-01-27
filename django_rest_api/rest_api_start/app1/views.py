from django.shortcuts import render
from .serializers  import *
from .models import *
from django.http import*


# Create your views here
def employelistview(request):
    emp = Employee.objects.all()
    seri = EmployepipSerializer( emp , many= True )
    return JsonResponse({'status':seri.data })
    # return render(request ,'home.html')