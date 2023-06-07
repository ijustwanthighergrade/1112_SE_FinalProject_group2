from django.http import JsonResponse
from django.views.generic import View
from django.shortcuts import render
import pandas as pd
import plotly.express as px
from plotly.offline import plot
from rest_framework.views import APIView
from rest_framework.response import Response
from django.contrib.auth import get_user_model

User =get_user_model()

def seller_page(request):
    return render(request,"seller.html")

def get_data(request, *args, **kwargs):
    data = [1, 2, 3, 4, 5]
    labels = ["Red", "Blue", "Yellow", "Green", "Purple"]
    content = {
        'data': data,
        'labels': labels,
    }
    return JsonResponse(content)

class ChartData(APIView):
    authentication_classes = []
    permission_classes = []

    def get(self, request, format=None):
        qs_count=User.objects.all().count()
        defaultdata = [qs_count, 52, 2, 3, 4, 5]
        labels = ["Users","Red", "Blue", "Yellow", "Green", "Purple"]
        content = {
            'default': defaultdata,
            'labels': labels,
        }
        return Response(content)