import matplotlib.pyplot as plt
import base64
from io import BytesIO
from django.shortcuts import render

def client(request):
 return render(request,"client.html")
