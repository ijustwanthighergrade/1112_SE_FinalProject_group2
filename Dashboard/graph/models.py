from django.db import models
from django.utils import timezone

from django.shortcuts import render, redirect
# Create your models here.

#分店基本資料表
class store (models.Model):
    store_id=models.CharField('店家id S+001',max_length=4,null=False,primary_key=True)
    store_address=models.CharField('地址',max_length=512,null=False)
    store_createtime=models.DateTimeField('創立時間',null=False,default=timezone.now)
    store_member=models.IntegerField('員工人數',null=False)
    def __str__(self):
        return self.store_id

#業務員基本資料表
class Sp (models.Model):
    Sp_id=models.CharField('業務員ID(PK)/Sp001',max_length=5,null=False,unique=True,primary_key=True)
    Sp_bonus=models.IntegerField('本月獎金',null=True)
    Sp_formula=models.IntegerField('績效公式',null=False)
    Sp_salary=models.IntegerField('業務員薪水',null=False)
    Sp_store=models.ForeignKey(store,on_delete=models.CASCADE,null=False)
    Sp_address=models.CharField('住家地址',max_length=512,null=False)
    Sp_tel=models.CharField('電話號碼',max_length=12,null=False)
    Sp_name=models.CharField('業務員姓名',max_length=15,null=False)
    Sp_lv=models.CharField('業務員職位',max_length=10,null=False)
    def __str__(self):
        return self.Sp_id

#產品基本資料表
class product (models.Model):
    product_id=models.CharField('產品id P+001',max_length=4,null=False,primary_key=True)
    product_name=models.CharField('產品名',max_length=512,null=False)
    product_price=models.IntegerField('單價',null=False)
    product_status=models.IntegerField('上/下架 1/0',null=False,default=1)
    product_discript=models.TextField('商品說明',max_length=512,null=False)
    product_type=models.CharField('需求用途',max_length=32,null=False)
    product_size=models.FloatField('產品尺寸',null=False)
    def __str__(self):
        return self.product_id

#APP客戶資料表
class APP_Cus (models.Model):
    Cus_id=models.CharField('客戶編號 c+14日期時間+random(3)',max_length=18,null=False,unique=True,primary_key=True)
    Cus_date=models.DateTimeField('創立時間',null=False,default=timezone.now)
    Cus_user=models.CharField('客戶帳號',max_length=512,null=False,unique=True)
    Cus_pwd=models.CharField('客戶密碼',max_length=32,null=False)
    Voucher_count=models.IntegerField('按摩卷擁有數量',null=False)
    Cus_status=models.IntegerField('帳號停用',null=False)
    Referrer_id=models.CharField('引薦人',max_length=18,null=True) 

#客戶業務資料表
class Cus (models.Model):
    Cus_id=models.ForeignKey(APP_Cus,on_delete=models.CASCADE,null=False,primary_key=True)
    Sp_id=models.ForeignKey(Sp,on_delete=models.CASCADE,null=False,primary_key=True)
    Cus_FamilyNum=models.IntegerField('家庭成員數量',max_length=1,null=True)
    Cus_eld=models.IntegerField('長者有無',max_length=1,null=True)
    Chair_status=models.IntegerField('家中是否有按摩椅',max_length=1,null=True)

#儀錶板帳密資料表
class storeboard (models.Model):
    storeboard_id=models.CharField('店家儀錶板流水號 SB+14時間+random(2)',max_length=18,null=False,unique=True,primary_key=True)
    storeboard_time=models.DateTimeField('店家儀錶板成立時間',null=False,default=timezone.now)
    store_id=models.ForeignKey(store,on_delete=models.CASCADE,null=True)
    store_username=models.CharField('店家帳號(供自由發揮)',max_length=512,null=False,unique=True)
    store_pwd=models.CharField('店家密碼',max_length=32,null=False)
    store_status=models.IntegerField('店家帳號狀況',null=True)

#產品販售資料表
class order (models.Model):
    order_id=models.CharField('訂單編號 order+14+random(3)',max_length=22,null=False,primary_key=True)
    Sp_id=models.ForeignKey(Sp,on_delete=models.CASCADE,null=False)
    Cus_id=models.ForeignKey(APP_Cus,on_delete=models.CASCADE,null=True)

#產品販售詳細資料表
class order (models.Model):
    order_id=models.ForeignKey(order,on_delete=models.CASCADE,null=False,primary_key=True)
    product_id=models.ForeignKey(product,on_delete=models.CASCADE,null=False,primary_key=True)
    order_time=models.DateTimeField('下單時間',null=True,default=timezone.now)
    totalprice=models.IntegerField('訂單總額',null=False)
    order_addr=models.CharField('運送地址',max_length=512,null=False)
    def __str__(self):
        return self.order_id

#業務行銷回報資料表
class Marketing (models.Model):
    Marketing_id=models.CharField('編號(M+14date+0001)',max_length=19,null=False,primary_key=True)
    Marketing_clerk=models.ForeignKey(Sp,on_delete=models.CASCADE,null=False)
    Marketing_client=models.ForeignKey(APP_Cus,on_delete=models.CASCADE,null=False)
    Marketing_reserve=models.DateTimeField('預約下次來店日期',null=True)
    Marketing_discount=models.TextField('推薦的優惠',null=True)
    Marketing_remark=models.TextField('備註',null=True)
    Marketing_date=models.DateTimeField('日期',null=False,default=timezone.now) 
    def __str__(self):
        return self.Marketing_id

#客戶連絡紀錄資料表
class record (models.Model):
    Cus_id=models.ForeignKey(APP_Cus,on_delete=models.CASCADE,null=False,primary_key=True)
    Marketing_id=models.ForeignKey(Marketing,on_delete=models.CASCADE,null=False,primary_key=True)

#按摩椅基本資料表
class Chair (models.Model):
    Chair_id=models.CharField('編號 C001',max_length=4,null=False,primary_key=True)
    Chair_place=models.ForeignKey(store,on_delete=models.CASCADE,null=False)
    Chair_cost=models.IntegerField('租金費用',null=False)
    Chair_frequency=models.IntegerField('被騎乘次數',null=True,default=0)
    Chair_state=models.IntegerField('狀態(維修0/正常1/爆炸2/正在使用3)',null=True)
    Chair_years=models.IntegerField('使用年限',null=True)
    Chair_pid=models.ForeignKey(product,null=False,on_delete=models.CASCADE) 

#按摩椅使用狀況資料表
class Cu (models.Model):
    Cu_exID=models.CharField('編號(U+date+001)',max_length=18,null=False,unique=True,primary_key=True)
    Cu_id=models.ForeignKey(Chair,on_delete=models.CASCADE,null=False,unique=True)
    Cu_userid=models.ForeignKey(APP_Cus,on_delete=models.CASCADE,null=False)
    Cu_date=models.DateTimeField('日期',null=False,default=timezone.now)
    
#按摩卷進貨資料表
class Cp (models.Model):
    Cp_NUM=models.IntegerField('剩餘數量',null=False)
    Cp_ID=models.CharField('進貨批號 CP+14日期時間+random(3)',max_length=19,null=False,primary_key=True)
    Cp_DATE=models.DateTimeField('進貨時間',null=False,default=timezone.now)
    
#按摩卷基本資料表
class Cou (models.Model):
    Cou_ID=models.CharField('按摩券編號/Cou00001',max_length=8,null=False,unique=True,primary_key=True)
    Cou_DATE=models.DateTimeField('購入日期',null=False,default=timezone.now)
    Cou_STATUS=models.IntegerField('啟用狀態',null=False)
    Cou_COST=models.IntegerField('售價',null=False)
    Cp_ID=models.ForeignKey(Cp,on_delete=models.CASCADE,null=True)    

#按摩卷交易資料表
class Trade (models.Model):
    Trade_id=models.CharField('交易編號 T+14日期時間+random(3)',max_length=18,null=False,unique=True,primary_key=True)
    Cus_id=models.ForeignKey(APP_Cus,on_delete=models.CASCADE,null=False)      
    Voucher_id=models.ForeignKey(Cou,on_delete=models.CASCADE,null=False) 
    Voucher_date=models.DateTimeField('發放時間',null=False,default=timezone.now)
    Voucher_provider=models.ForeignKey(Sp,on_delete=models.CASCADE,null=False)    #這裡我再研究一下    
    Voucher_status=models.IntegerField('使用狀況',null=False)

#客戶引薦資料表
class Referrer (models.Model):
    Referrer_ID=models.ForeignKey(APP_Cus,on_delete=models.CASCADE,null=False,primary_key=True)      
    Bref_id=models.ForeignKey(APP_Cus,on_delete=models.CASCADE,null=False,primary_key=True) 
    ref_date=models.DateTimeField('日期',null=False,default=timezone.now)

#出勤資料表
class Ab (models.Model):
    Ab_ID=models.ForeignKey(APP_Cus,on_delete=models.CASCADE,null=False,primary_key=True)      
    Ab_ON=models.IntegerField('打卡上班',null=False) 
    Ab_OFF=models.IntegerField('打卡上班',null=False) 
    Ab_DATE=models.DateTimeField('日期',null=False,default=timezone.now,primary_key=True)
    Ab_REASON=models.TextField('請假理由',null=False)
    def __str__(self):
        return self.Ab_ID

#店家成本資料表表
class cost (models.Model):
    store_id=models.ForeignKey(store,on_delete=models.CASCADE,null=False,primary_key=True)      
    physical_cost=models.IntegerField('實體店面營運成本',null=False) 
    rent_cost=models.IntegerField('按摩椅租地成本',null=False) 
    voucher_cost=models.IntegerField('按摩卷申請成本',null=False) 
    upper_cost=models.IntegerField('試坐按摩椅租金成本',null=False) 
    other_cost=models.IntegerField('其他支出',null=False) 
    cost_month=models.DateTimeField('成本月份',null=False,default=timezone.now,primary_key=True)

#按摩椅意見回饋資料表表
class feedback (models.Model):
    feedback_id=models.CharField('回饋表id F+14日期+random(3)',max_length=18,null=False,primary_key=True)
    feedbackCu_id=models.ForeignKey(Chair,on_delete=models.CASCADE,null=False)    
    feedcus_id=models.ForeignKey(APP_Cus,on_delete=models.CASCADE,null=False)      
    feedback_text=models.TextChoices('回饋內容',null=False) 
    feedback_date=models.DateTimeField('回饋日期',null=False,default=timezone.now)
    def __str__(self):
        return self.feedback_id

#公告訊息資料表表
class An (models.Model):
    An_id=models.CharField('公告id  An+14日期+random(3)',max_length=19,null=False,primary_key=True)
    An_text=models.TextChoices('公告內容',null=False) 
    An_dateON=models.DateTimeField('日期',null=False,default=timezone.now)  
    An_dateOFF=models.IntegerField('展示狀態',max_length=1,null=True)
    def __str__(self):
        return self.An_id