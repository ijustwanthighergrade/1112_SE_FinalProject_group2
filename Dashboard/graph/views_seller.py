from django.http import JsonResponse
from django.views.generic import View
from django.shortcuts import render
import pandas as pd
import plotly.express as px
from plotly.offline import plot
from rest_framework.views import APIView
from rest_framework.response import Response
from django.contrib.auth import get_user_model
from graph.models import Sp,manage
from django.views.decorators.csrf import csrf_exempt
from django.http import HttpRequest

User =get_user_model()
@csrf_exempt
def seller_page(request: HttpRequest):
    all_Cus_id=""
    if request.method == 'GET':
        all_Sp_id=Sp.objects.values('Sp_id')
        return render(request,"seller.html",{
            'all_Sp_id':all_Sp_id
        })
    
    elif request.method == 'POST' and request.headers.get('x-requested-with') == 'XMLHttpRequest':
        id = request.POST.get('id')  # 获取按钮的编号值
        all_Cus_id=id
        # Cus_id= manage.objects.filter(Sp_id=id)
        # all_Cus_id =list(Cus_id.values())
        # 根据编号值从数据库或其他数据源中获取对应的数据
        # 进行相应的操作
        
        # 返回结果
        return JsonResponse({'all_Cus_id':id},safe=False)
    
    # all_Sp_id =list(Sp_id.values())
    
    


class ChartData(APIView):
    authentication_classes = []
    permission_classes = []

    def get(self, request, format=None):
        qs_count=User.objects.all().count()
        defaultdata = [qs_count, 52, 2, 3, 4, 5, 4, 5]
        defaultdata1 = [qs_count, 32, 4, 44, 45, 3, 34, 45]
        labels = ["Users","Red", "Blue", "Yellow", "Green", "Purple", "Green", "Purple"]
        content = {
            'default': defaultdata,
            'default1': defaultdata1,
            'labels': labels,
        }
        return Response(content)
    

# def get_data(request, *args, **kwargs):
#     data = [1, 2, 3, 4, 5]
#     labels = ["Red", "Blue", "Yellow", "Green", "Purple"]
#     content = {
#         'data': data,
#         'labels': labels,
#     }
#     return JsonResponse(content)
