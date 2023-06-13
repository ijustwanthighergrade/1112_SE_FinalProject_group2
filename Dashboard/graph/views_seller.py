from django.http import JsonResponse
from django.views.generic import View
from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from django.contrib.auth import get_user_model
from graph.models import *
from django.views.decorators.csrf import csrf_exempt
from django.http import HttpRequest
import json
from django.core.serializers import serialize
from django.utils import timezone
from django.db.models import Q
from datetime import datetime

class DateTimeJSONEncoder(json.JSONEncoder):
    def default(self, obj):
        if isinstance(obj, timezone.datetime):
            return obj.strftime('%Y-%m-%d %H:%M:%S')
        return super().default(obj)


User =get_user_model()
@csrf_exempt
def seller_page(request: HttpRequest):
    all_Cus_id=""
    spid=""
    cusid="" #前端傳回客戶id
    if request.method == 'GET':
        all_Sp_id=Sp.objects.values('Sp_id')        #所有的業務員
        all_Cus_id=manage.objects.values('Cus_id')  #所有的顧客專案
        
        #業績用業務篩產品販售資料表抓詳細資料表的每筆訂單加總訂單總額 piechart1 data
        allsp_turnover=[]       #存所有業務業績
        for Sid in all_Sp_id:   #對所有業務 抓取每一筆產品販售資料表
            totalprice=0
            ordersp=order.objects.filter(Sp_id=Sid)#對單一業務 抓取每一筆產品販售資料表
            totalprice_list=0
            allorder=[]
            for sporder in ordersp:#用業務篩產品販售資料表
                sporder_detailed=order_detailed.objects.filter(order_id=sporder.order_id)#order_id篩產品販售詳細資料表
                totalprice_list = sporder_detailed.values_list('totalprice', flat=True)
                totalprice+=totalprice_list
            allsp_turnover.append(totalprice)
        #業績用業務篩產品販售資料表抓詳細資料表的每筆訂單加總訂單總額
        
        #失敗原因表的labels
        false_labels=list(FALSE.objects.values('FALSE_TYPE'))#失敗原因表的labels
        flase=FALSE.objects.values('FALSE_id','FALSE_TYPE')
        cus_false=manage.objects.values('manage_category')            #客戶專案管理資料表中所有失敗原因
            
        counter = {}

        # for data in cus_false:
        #     false_types = False.objects.filter(FALSE_id=data)
        #     for false_type in false_types:
        #         if false_type in counter:
        #             counter[false_type] += 1
        #         else:
        #             counter[false_type] = 1
                    
         #失敗原因表的labels
         
         
        # 業務員資料蒐集完整度表 魔改表現方式
        totalamount_Cus_id=manage.objects.all().count()
        if totalamount_Cus_id ==0:
            totalamount_Cus_id=1
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
            'allsp_turnover':allsp_turnover,
            'false_labels':false_labels,
            # 'counter':counter
        })
    elif request.method == 'POST' and request.headers.get('x-requested-with') == 'XMLHttpRequest':
               
        if request.POST.get('spid'): #點了篩選業務
            spid = request.POST.get('spid')  # 前端傳回業務員id
            #抓該業務負責之顧客專案
            sp_Cus_id= manage.objects.filter(Sp_id=spid)
            all_Cus_id =list(sp_Cus_id.values())
            request.session['spid'] = spid
            
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
            
            #抓排班日期
            arrangedate =arrange.objects.filter(Ab_id=spid)
            arrangedate = arrangedate.values_list('Ab_DATE')
            arrangedate = list(arrangedate)
            
            
            
            
            
            return JsonResponse({'all_Cus_id':all_Cus_id,
                                 'selectedrate':selectedrate,
                                 'arrangedate':arrangedate,
                                 },safe=False) # 後端傳去該業務員負責之所有客戶id
        
        
        if request.POST.get('cusid'): # 業務員資料蒐集完整度表 魔改表現方式
            cusid =  request.POST.get('cusid') # 前端傳回客戶id
            cusid_data = Cus.objects.filter(Cus_id=cusid)
             # 客戶業務資料表 抓出選中之客戶資訊填寫欄位
            cusid_data=list(cusid_data.values())
            
            request.session['cusid'] = cusid
            
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
            
        if request.POST.get('date'): # 排班日歷)

            selectedDate =  request.POST.get('date') # 前端傳回客戶id 
            beselectedspid =   request.session.get('spid') 
            all_Cus_id =   request.session.get('all_Cus_id') 
            serialized_time  = json.dumps(selectedDate, cls=DateTimeJSONEncoder)
            
            
            return JsonResponse({'all_Cus_id':all_Cus_id,'selectedDate':serialized_time ,'beselectedspid':beselectedspid},safe=False) # 後端傳去該業務員負責之所有客戶id
 
            
        # 根据编号值从数据库或其他数据源中获取对应的数据
        # 进行相应的操作
        
        # 返回结果
    return JsonResponse({'all_Cus_id':request.session.get('all_Cus_id') },safe=False)
    


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
