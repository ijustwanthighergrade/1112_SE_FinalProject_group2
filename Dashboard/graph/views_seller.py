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
from django.db.models import Count
from collections import defaultdict

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
        all_Sp_id=Sp.objects.values('Sp_id')  
        findspid=Sp.objects.values_list('Sp_id', flat=True)        #所有的業務員
        all_Cus_id=manage.objects.values('Cus_id')  #所有的顧客專案
        findcusid=manage.objects.values_list('Cus_id', flat=True)        #所有的業務員
        
        #業績用業務篩產品販售資料表抓詳細資料表的每筆訂單加總訂單總額 piechart1 data
        allsp_turnover=[]       #存所有業務業績
        for Sid in findspid:   #對所有業務 抓取每一筆產品販售資料表
            totalprice=0
            ordersp=order.objects.filter(Sp_id=Sid)#對單一業務 抓取每一筆產品販售資料表
            print(Sid)
            totalpricea=0
            for sporder in ordersp: #對每一筆產品販售資料表查詢產品販售詳細資料表
                sporder_detailed=order_detailed.objects.filter(order_id=sporder.order_id) # order_id篩產品販售詳細資料表
                totalprice_list = sporder_detailed.values_list('totalprice', flat=True)
                totalpricea+=sum(totalprice_list)
            allsp_turnover.append(totalpricea)
        #業績用業務篩產品販售資料表抓詳細資料表的每筆訂單加總訂單總額
        
        #失敗原因表
        # 首先获取所有的 FALSE 类型数据
        false_types = FALSE.objects.values_list('FALSE_id', flat=True)
        # 创建一个空字典用于存储每个失败类型的出现次数
        failure_counts = {}

        # 遍历每个 FALSE 类型
        for false_type in false_types:
            # 查找与当前 FALSE 类型相关的 manage 数据，并计算每个类型的出现次数
            count = manage.objects.filter(manage_category=false_type).count()
            false_id = FALSE.objects.filter(FALSE_id=false_type).values_list('FALSE_TYPE', flat=True)
            
            # 将失败类型及其出现次数添加到字典中
            failure_counts[str(false_id[0])] = count


        false_keys_list = list(failure_counts.keys())
        false_values_list = list(failure_counts.values())
        #失敗原因表
        
        #類型
        for Sid in findspid:
            order.objects.filter(Sp_id=Sid)

        #抓排班日期
        arrangedate =arrange.objects.all().values_list('Ab_DATE',flat=True)
        arrangedate = [date.strftime('%Y-%m-%d') for date in arrangedate]
        arrangedate=list(arrangedate)
        print(arrangedate)
        
        # 業務員資料蒐集完整度表 魔改表現方式
        totalamount_Cus_id=manage.objects.all().count()
        if totalamount_Cus_id == 0:
            totalamount_Cus_id=1
        isnull=totalamount_Cus_id*11
        for cusid in findcusid:
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
                
        selectedrate=isnull/totalamount_Cus_id/11*100
        selectedrate=round(selectedrate,2)
        print("isnull:",isnull,"totalamount_Cus_id:",totalamount_Cus_id,selectedrate)
        # 業務員資料蒐集完整度表 魔改表現方式
        
        
        barchartdata1=[2,3,5,0,2]
        barchartdata2=[2,8,5,3,5]
        
        
        
        
        return render(request,"seller.html",{
            'all_Sp_id':all_Sp_id,
            'all_Cus_id':all_Cus_id,
            'selectedrate':selectedrate,
            'allsp_turnover':allsp_turnover,
            'false_keys_list':false_keys_list,
            'false_values_list':false_values_list,
            'arrangedate':arrangedate,
            'barchartdata1':barchartdata1,
            'barchartdata2':barchartdata2,
        })
    elif request.method == 'POST' and request.headers.get('x-requested-with') == 'XMLHttpRequest':
               
        if request.POST.get('spid'): #點了篩選業務
            spid = request.POST.get('spid')  # 前端傳回業務員id
            #抓該業務負責之顧客專案
            sp_Cus_id= manage.objects.filter(Sp_id=spid)
            all_Cus_id =list(sp_Cus_id.values())
            request.session['spid'] = spid
            
            findcusid=manage.objects.filter(Sp_id=spid).values_list('Cus_id', flat=True)        #所有的業務員
            totalamount_Cus_id=sp_Cus_id.count()
            # 業務員資料蒐集完整度表 魔改表現方式
            isnull=11*totalamount_Cus_id
            # isnull=totalamount_Cus_id*10
            # print("isnull:",isnull,"totalamount_Cus_id:",totalamount_Cus_id)
            if totalamount_Cus_id!=0:
                for cusid in findcusid:
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
                    if Cus.objects.filter(Cus_id=cusid,product_past__isnull=True):
                        isnull-=1
                selectedrate=isnull/totalamount_Cus_id/11*100
                selectedrate=round(selectedrate,2)
            else:
                selectedrate=0
            # 業務員資料蒐集完整度表 魔改表現方式
            # print("isnull:",isnull,"totalamount_Cus_id:",totalamount_Cus_id)
            
            #抓排班日期
            arrangedate =arrange.objects.filter(Ab_Sp=spid).values_list('Ab_DATE',flat=True)
            arrangedate = list(date.strftime('%Y-%m-%d') for date in arrangedate)
            
            
            
            
            
            return JsonResponse({'all_Cus_id':all_Cus_id,
                                 'selectedrate':selectedrate,
                                 'arrangedatesp':arrangedate,
                                 },safe=False) # 後端傳去該業務員負責之所有客戶id
        
        
        if request.POST.get('cusid'): # 業務員資料蒐集完整度表 魔改表現方式
            cusid =  request.POST.get('cusid') # 前端傳回客戶id
            cusid_data = Cus.objects.filter(Cus_id=cusid)
             # 客戶業務資料表 抓出選中之客戶資訊填寫欄位
            cusid_data=list(cusid_data.values())
            # print(cusid,cusid_data)
            
            request.session['cusid'] = cusid
            
            isnull=11
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
            if Cus.objects.filter(Cus_id=cusid,product_past__isnull=True):
                isnull-=1
                
            selectedrate= isnull/11*100
            selectedrate=round(selectedrate,2)
            # print("isnull:",isnull,"selectedrate:",isnull)
            return JsonResponse({'cusid':cusid,'cusid_data':cusid_data,'isnull':isnull,'selectedrate':selectedrate},safe=False)
            
        if request.POST.get('date'): # 排班日歷)

            selectedDate =  request.POST.get('date') # 前端傳回客戶id 
            beselectedspid =   request.session.get('spid') 
            serialized_time  = json.dumps(selectedDate, cls=DateTimeJSONEncoder)
            arrangedetail=arrange.objects.filter(Ab_Sp=beselectedspid).values()
            arrangedetail=list(arrangedetail)
            
            
            return JsonResponse({'arrangedetail':arrangedetail,
                                 'selectedDate':serialized_time ,
                                 'beselectedspid':beselectedspid},
                                safe=False) # 後端傳去該業務員負責之所有客戶id
 
            
        # 根据编号值从数据库或其他数据源中获取对应的数据
        # 进行相应的操作
        
        # 返回结果
        if request.POST.get('thisspid'): # 業務員資料
            thisspid =  request.POST.get('thisspid') # 前端傳回業務員id
            print("thisspid:"+thisspid)
            spinfo=Sp.objects.filter(Sp_id=thisspid).values_list()  
            spinfo=list(spinfo)
            
            
            return JsonResponse({'spinfo':spinfo},safe=False) # 後端傳去該業務員負責之所有客戶id
            
            
            
    return JsonResponse({'all_Cus_id':request.session.get('all_Cus_id') },safe=False)
    


class ChartData(APIView):
    authentication_classes = []
    permission_classes = []

    def get(self, request, format=None):
        # qs_count=User.objects.all().count()
        defaultdata =   [0, 3, 4, 7, 10, 5 ]
        defaultdata1 =  [0, 1,1, 2, 1, 0]
        defaultdata2 =  [0, 2, 1, 1, 3, 0]
        defaultdata3=   [0, 0, 1, 1, 2, 3]
        defaultdata4=   [0, 0, 0, 1, 2, 3]
        defaultdata5=   [0, 0, 1, 2, 2, 3]
        #linechart2
        labels = ["Users","Red", "Blue", "Yellow", "Green", "Purple", "Green", "Purple"]
        statedefaultData1=[1,0,0,0]
        statedefaultData5=[0,1,0,0]
        statedefaultData4=[1,0,0,0]
        statedefaultData3=[0,1,0,0]
        statedefaultData2=[1,0,0,0]
        
        
        
        
        
        content = {
            'default': defaultdata,
            'default1': defaultdata1,
            'default2': defaultdata2,
            'default3': defaultdata3,
            'default4': defaultdata4,
            'default5': defaultdata5,
            'labels': labels,
            'statedefaultData1': statedefaultData1,
            'statedefaultData5': statedefaultData5,
            'statedefaultData4': statedefaultData4,
            'statedefaultData3': statedefaultData3,
            'statedefaultData2': statedefaultData2,
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
