import matplotlib.pyplot as plt
import base64
from io import BytesIO
from django.shortcuts import render

def appchart(request):
 return render(request,"APPchart.html")
