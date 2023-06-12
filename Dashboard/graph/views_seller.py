from django.http import JsonResponse
from django.views.generic import View
from django.shortcuts import render
import pandas as pd
import plotly.express as px
from plotly.offline import plot
from rest_framework.views import APIView
from rest_framework.response import Response
from django.contrib.auth import get_user_model
from graph.models import Sp,manage,Cus
from django.views.decorators.csrf import csrf_exempt
from django.http import HttpRequest

User =get_user_model()
@csrf_exempt
def seller_page(request: HttpRequest):
    all_Cus_id=""
    spid=""
    cusid="" #前端傳回客戶id
    if request.method == 'GET':
        all_Sp_id=Sp.objects.values('Sp_id')
        all_Cus_id=manage.objects.values('Cus_id')
        #獲取資料庫各欄位的說明文字
        totalamount_Cus_id=manage.objects.all().count()
        # 業務員資料蒐集完整度表 魔改表現方式
        isnull=totalamount_Cus_id*10
        for Cus_id in all_Cus_id:
            if Cus.objects.filter(Cus_id=cusid,Cus_FamilyNum__isnull=True):
                isnull-=1
            if Cus.objects.filter(Cus_id=cusid,Cus_eld__isnull=True):
                isnull-=1
            if Cus.objects.filter(Cus_id=cusid,Chair_status__isnull=True):
                isnull-=1
            if Cus.objects.filter(Cus_id=cusid,Chair_floor__isnull=True):
                isnull-=1
            if Cus.objects.filter(Cus_id=cusid,Chair_ceiling__isnull=True):
                isnull-=1
            if Cus.objects.filter(Cus_id=cusid,Chair_position__isnull=True):
                isnull-=1
            if Cus.objects.filter(Cus_id=cusid,Chair_color__isnull=True):
                isnull-=1
            if Cus.objects.filter(Cus_id=cusid,Cus_PastItem__isnull=True):
                isnull-=1
            if Cus.objects.filter(Cus_id=cusid,Chair_power__isnull=True):
                isnull-=1
            if Cus.objects.filter(Cus_id=cusid,Cus_job__isnull=True):
                isnull-=1
        selectedrate=isnull/totalamount_Cus_id*10
        # 業務員資料蒐集完整度表 魔改表現方式
        
        
        return render(request,"seller.html",{
            'all_Sp_id':all_Sp_id,
            'all_Cus_id':all_Cus_id,
            'selectedrate':selectedrate,
        })
    elif request.method == 'POST' and request.headers.get('x-requested-with') == 'XMLHttpRequest':
        if request.POST.get('spid'):
            spid = request.POST.get('spid')  # 前端傳回業務員id
            sp_Cus_id= manage.objects.filter(Sp_id=spid)
            all_Cus_id =list(sp_Cus_id.values())
                        
            totalamount_Cus_id=sp_Cus_id.count()
            # 業務員資料蒐集完整度表 魔改表現方式
            isnull=totalamount_Cus_id*10
            for Cus_id in all_Cus_id:
                if Cus.objects.filter(Cus_id=cusid,Cus_FamilyNum__isnull=True):
                    isnull-=1
                if Cus.objects.filter(Cus_id=cusid,Cus_eld__isnull=True):
                    isnull-=1
                if Cus.objects.filter(Cus_id=cusid,Chair_status__isnull=True):
                    isnull-=1
                if Cus.objects.filter(Cus_id=cusid,Chair_floor__isnull=True):
                    isnull-=1
                if Cus.objects.filter(Cus_id=cusid,Chair_ceiling__isnull=True):
                    isnull-=1
                if Cus.objects.filter(Cus_id=cusid,Chair_position__isnull=True):
                    isnull-=1
                if Cus.objects.filter(Cus_id=cusid,Chair_color__isnull=True):
                    isnull-=1
                if Cus.objects.filter(Cus_id=cusid,Cus_PastItem__isnull=True):
                    isnull-=1
                if Cus.objects.filter(Cus_id=cusid,Chair_power__isnull=True):
                    isnull-=1
                if Cus.objects.filter(Cus_id=cusid,Cus_job__isnull=True):
                    isnull-=1
            selectedrate=isnull/totalamount_Cus_id*10
            # 業務員資料蒐集完整度表 魔改表現方式
            
            
            
            return JsonResponse({'all_Cus_id':all_Cus_id,'selectedrate':selectedrate},safe=False) # 後端傳去該業務員負責之所有客戶id
        if request.POST.get('cusid'): # 業務員資料蒐集完整度表 魔改表現方式
            cusid =  request.POST.get('cusid') # 前端傳回客戶id
            cusid_data = Cus.objects.filter(Cus_id=cusid)
             # 客戶業務資料表 抓出選中之客戶資訊填寫欄位
            cusid_data=list(cusid_data.values())
            
            isnull=10
            if Cus.objects.filter(Cus_id=cusid,Cus_FamilyNum__isnull=True):
                isnull-=1
            if Cus.objects.filter(Cus_id=cusid,Cus_eld__isnull=True):
                isnull-=1
            if Cus.objects.filter(Cus_id=cusid,Chair_status__isnull=True):
                isnull-=1
            if Cus.objects.filter(Cus_id=cusid,Chair_floor__isnull=True):
                isnull-=1
            if Cus.objects.filter(Cus_id=cusid,Chair_ceiling__isnull=True):
                isnull-=1
            if Cus.objects.filter(Cus_id=cusid,Chair_position__isnull=True):
                isnull-=1
            if Cus.objects.filter(Cus_id=cusid,Chair_color__isnull=True):
                isnull-=1
            if Cus.objects.filter(Cus_id=cusid,Cus_PastItem__isnull=True):
                isnull-=1
            if Cus.objects.filter(Cus_id=cusid,Chair_power__isnull=True):
                isnull-=1
            if Cus.objects.filter(Cus_id=cusid,Cus_job__isnull=True):
                isnull-=1
                
            selectedrate= isnull*10
            return JsonResponse({'cusid':cusid,'cusid_data':cusid_data,'isnull':isnull,'selectedrate':selectedrate},safe=False)
            
            
        # 根据编号值从数据库或其他数据源中获取对应的数据
        # 进行相应的操作
        
        # 返回结果
        return JsonResponse({'all_Cus_id':all_Cus_id,'cusid':cusid},safe=False)
    


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
