from contextvars import Context
from multiprocessing import context
from django.shortcuts import render
 
 
def login_page(request):
 return render(request,"login.html")