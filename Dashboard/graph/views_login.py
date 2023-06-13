from contextvars import Context
from multiprocessing import context
from django.shortcuts import render
from graph.models import Ab
from graph.models import cost
from graph.models import Cu
from graph.models import store
from graph.models import Sp
from graph.models import product
from graph.models import APP_Cus
from graph.models import Cus
from graph.models import storeboard
from graph.models import order
from graph.models import order_detailed
from graph.models import Marketing
from graph.models import record
from graph.models import Cp
from graph.models import Cou
from graph.models import Trade
from graph.models import Referrer
from graph.models import Chair
from graph.models import feedback
from graph.models import An
from graph.models import demand
from graph.models import need
from graph.models import arrange
from graph.models import FALSE
from graph.models import manage

def login_page(request):
 return render(request,"login.html")

if not store.objects.exists():
         store.objects.create(store_id="S001",store_address="桃園市中壢區", store_createtime="2023-06-01 10:00:00", store_member=10)
         store.objects.create(store_id="S002",store_address="台北市信義區", store_createtime="2023-05-11 09:20:35", store_member=5)
         store.objects.create(store_id="S003",store_address="新北市三重區", store_createtime="2023-06-10 15:40:30", store_member=89)
         store.objects.create(store_id="S004",store_address="桃園市平鎮區", store_createtime="2023-05-12 21:10:40", store_member=4)
         store.objects.create(store_id="S005",store_address="桃園市內壢區", store_createtime="2023-06-05 12:30:10", store_member=11)
else:
     pass

if not Sp.objects.exists():
        Sp.objects.create(Sp_id="Sp001",Sp_bonus=4000,Sp_formula=1,Sp_salary=32000,Sp_store="S001", Sp_address="台北市",Sp_tel="0912345678",Sp_name ="張軍糧",Sp_lv ="店長")
        Sp.objects.create(Sp_id="Sp002",Sp_bonus=5000,Sp_formula=1,Sp_salary=22000,Sp_store="S001", Sp_address="新北市",Sp_tel="0922345678",Sp_name ="張紀揚",Sp_lv ="副店長")
        Sp.objects.create(Sp_id="Sp003",Sp_bonus=100,Sp_formula=1,Sp_salary=12000,Sp_store="S001", Sp_address="花蓮縣",Sp_tel="0932345678",Sp_name ="張成貞",Sp_lv ="店員")
        Sp.objects.create(Sp_id="Sp004",Sp_bonus=1000,Sp_formula=1,Sp_salary=54300,Sp_store="S001", Sp_address="桃園市",Sp_tel="0942345678",Sp_name ="張戴云",Sp_lv ="店經理")
        Sp.objects.create(Sp_id="Sp005",Sp_bonus=6000,Sp_formula=1,Sp_salary=33000,Sp_store="S002", Sp_address="澎湖縣",Sp_tel="0952345678",Sp_name ="張羽炫",Sp_lv ="店長")
else:
    pass

if not product.objects.exists():
        product.objects.create(product_id="P001",product_name="天王按摩椅",product_price=130000,product_status=1,product_discript="給天王的高級按摩椅", product_type="尊榮高級",product_size="8.65")
        product.objects.create(product_id="P002",product_name="天后按摩椅",product_price=135000,product_status=1,product_discript="給天后的高級按摩椅", product_type="尊榮高級",product_size="9.65")
        product.objects.create(product_id="P003",product_name="平民按摩椅",product_price=80000,product_status=1,product_discript="給平民的中級按摩椅", product_type="小資中級",product_size="5.65")
        product.objects.create(product_id="P004",product_name="凡人按摩椅",product_price=60000,product_status=1,product_discript="給凡人的中級按摩椅", product_type="小資中級",product_size="3.65")
        product.objects.create(product_id="P005",product_name="普普按摩椅",product_price=990000,product_status=1,product_discript="普普風限定高級按摩椅", product_type="尊榮高級",product_size="200.65")
else:
     pass

if not APP_Cus.objects.exists():
        APP_Cus.objects.create(Cus_id="c20210302121314000",Cus_date="2021-03-02 12:13:14",Cus_user="abcd@gmail.com",Cus_pwd="aabbccdd",Voucher_count=20,Cus_status=1,Referrer_id="", Cus_Name="user1" )
        APP_Cus.objects.create(Cus_id="c20230502111314778",Cus_date="2023-05-02 11:13:14",Cus_user="efgh@gmail.com",Cus_pwd="eeffgghhh",Voucher_count=3,Cus_status=1,Referrer_id="c20210302121314000", Cus_Name="user2" )
        APP_Cus.objects.create(Cus_id="c20230601091315340",Cus_date="2023-06-01 09:13:15",Cus_user="ijkl@gmail.com",Cus_pwd="iijjkkkll",Voucher_count=0,Cus_status=1,Referrer_id="c20210302121314000", Cus_Name="user3" )
        APP_Cus.objects.create(Cus_id="c20230431222222045",Cus_date="2023-04-31 22:22:22",Cus_user="mnop@gmail.com",Cus_pwd="mmnnooppp",Voucher_count=40,Cus_status=1,Referrer_id="c20230601091315340", Cus_Name="user4" )
        APP_Cus.objects.create(Cus_id="c20230605142259011",Cus_date="2023-06-05 14:22:59",Cus_user="qrst@gmail.com",Cus_pwd="uvwxyz",Voucher_count=6,Cus_status=1,Referrer_id="c20230431222222045", Cus_Name="user5" )
        APP_Cus.objects.create(Cus_id="c20230612082345789",Cus_date="2023-06-12 08:23:45",Cus_user="uvwx@gmail.com",Cus_pwd="@@##!",Voucher_count=16,Cus_status=1,Referrer_id="c20230431222222045", Cus_Name="user6" )
else:
 pass

if not Cus.objects.exists():
        Cus.objects.create(Cus_id="c20210302121314000",Cus_FamilyNum=4,Cus_eld=0,Chair_status=0,Chair_floor=0,Chair_ceiling=100000,Chair_position="肩頸", Chair_color="白色, 香檳色", Chair_power="10", product_past="P001", Cus_job="家管" )
        Cus.objects.create(Cus_id="c20230502111314778",Cus_FamilyNum=5,Cus_eld=1,Chair_status=0,Chair_floor=0,Chair_ceiling=10000,Chair_position="肩頸",Chair_color="咖啡色, 香檳色", Cus_PastItem="天王按摩椅", Chair_power="5", product_past="P002", Cus_job="看護" )
        Cus.objects.create(Cus_id="c20230601091315340",Cus_FamilyNum=0,Cus_eld=1,Chair_status=1,Chair_floor=10000,Chair_ceiling=200000,Chair_position="脊椎", Chair_color="黑色", Chair_power="4", product_past="P002", Cus_job="程式設計師" )
        Cus.objects.create(Cus_id="c20230431222222045",Cus_FamilyNum=2,Cus_eld=0,Chair_status=0,Chair_floor=200000,Chair_ceiling=300000,Chair_position="肩頸, 脊椎, 小腿", Chair_color="咖啡色", Chair_power="3", product_past="P003", Cus_job="會計師" )
        Cus.objects.create(Cus_id="c20230605142259011",Cus_FamilyNum=9,Cus_eld=0,Chair_status=0,Chair_floor=100000,Chair_ceiling=200000,Chair_position="小腿", Chair_color="香檳色", Cus_PastItem="天后按摩椅", Chair_power="2", product_past="P001", Cus_job="管家" )
else:
 pass

if not storeboard.objects.exists():
        storeboard.objects.create(storeboard_id="SB2021121314235711",storeboard_time="2021-12-13 14:23:57",store_id="S001",store_username="storeone",store_pwd="onestore",store_status=1)
        storeboard.objects.create(storeboard_id="SB2022040411034734",storeboard_time="2022-04-04 11:03:47",store_id="S002",store_username="storetwo",store_pwd="twostore",store_status=1)
        storeboard.objects.create(storeboard_id="SB2023033123204298",storeboard_time="2023-03-31 23:20:42",store_id="S003",store_username="storethree",store_pwd="threestore",store_status=1)
        storeboard.objects.create(storeboard_id="SB2022050821074467",storeboard_time="2022-05-08 21:07:44",store_id="S004",store_username="storefour",store_pwd="fourstore",store_status=0)
        storeboard.objects.create(storeboard_id="SB2021111417215741",storeboard_time="2021-11-14 17:21:57",store_id="S005",store_username="storefive",store_pwd="fivestore",store_status=0)
else:
 pass

if not order.objects.exists():
        order.objects.create(order_id="order20211013113611000",Sp_id="Sp001",Cus_id="c20210302121314000")
        order.objects.create(order_id="order20221225093059123",Sp_id="Sp001",Cus_id="c20230605142259011")
        order.objects.create(order_id="order20230111234609438",Sp_id="Sp003",Cus_id="c20230601091315340")
        order.objects.create(order_id="order20230502172312846",Sp_id="Sp004",Cus_id="c20230431222222045")
        order.objects.create(order_id="order20230610130923987",Sp_id="Sp005",Cus_id="c20230502111314778")
else:
 pass

if not order_detailed.objects.exists():
        order_detailed.objects.create(order_id="order20211013113611000",product_id="P001",order_time="2021-10-13 11:36:11", totalprice=130000, order_addr="台北市大同區")
        order_detailed.objects.create(order_id="order20221225093059123",product_id="P001",order_time="2022-12-25 09:30:59", totalprice=130000, order_addr="新北市樹林區")
        order_detailed.objects.create(order_id="order20230111234609438",product_id="P004",order_time="2023-01-11 23:46:09", totalprice=60000, order_addr="高雄市美濃區")
        order_detailed.objects.create(order_id="order20230502172312846",product_id="P003",order_time="2023-05-02 17:23:12", totalprice=80000, order_addr="台北市大安區")
        order_detailed.objects.create(order_id="order20230610130923987",product_id="P001",order_time="2023-06-10 13:09:23", totalprice=130000, order_addr="台南市鹽埕區")
else:
 pass

if not Marketing.objects.exists():
        Marketing.objects.create(Marketing_id="M202304231509120001",Marketing_clerk="Sp001",Marketing_client="c20210302121314000",Marketing_reserve="2023-05-12",Marketing_discount="生日慶9折", Marketing_remark="無", Marketing_date="2023-04-23 15:09:12")
        Marketing.objects.create(Marketing_id="M202306061223340004",Marketing_clerk="Sp002",Marketing_client="c20230502111314778",Marketing_reserve="2023-07-06",Marketing_discount="無", Marketing_remark="不喜歡白天聯絡，下次留意", Marketing_date="2023-06-06 12:23:34")
        Marketing.objects.create(Marketing_id="M202209122123110023",Marketing_clerk="Sp002",Marketing_client="c20230601091315340",Marketing_reserve="2023-01-11",Marketing_discount="無", Marketing_remark="意願明顯較上次低落", Marketing_date="2022-09-12 21:23:11")
        Marketing.objects.create(Marketing_id="M202301021345430011",Marketing_clerk="Sp004",Marketing_client="c20230431222222045",Marketing_reserve="2023-01-10",Marketing_discount="新入會5折", Marketing_remark="對他牌產品產生興趣", Marketing_date="2023-01-02 13:45:43")
        Marketing.objects.create(Marketing_id="M202305012145410009",Marketing_clerk="Sp003",Marketing_client="c20230605142259011",Marketing_reserve="2023-05-12",Marketing_discount="無", Marketing_remark="積極感興趣購買", Marketing_date="2023-05-01 21:45:41")
else:
 pass

if not record.objects.exists():
        record.objects.create(Cus_id="c20210302121314000",Marketing_id="M202304231509120001")
        record.objects.create(Cus_id="c20230502111314778",Marketing_id="M202306061223340004",)
        record.objects.create(Cus_id="c20230601091315340",Marketing_id="M202209122123110023")
        record.objects.create(Cus_id="c20230431222222045",Marketing_id="M202301021345430011")
        record.objects.create(Cus_id="c20230605142259011",Marketing_id="M202305012145410009")
else:
 pass

if not Chair.objects.exists():
        Chair.objects.create(Chair_id="C001",Chair_place="S001",Chair_cost=2000,Chair_frequency=100,Chair_state=1,Chair_years=2,Chair_pid="P001")
        Chair.objects.create(Chair_id="C002",Chair_place="S001",Chair_cost=5000,Chair_frequency=40,Chair_state=1,Chair_years=1,Chair_pid="P001")
        Chair.objects.create(Chair_id="C003",Chair_place="S001",Chair_cost=3000,Chair_frequency=3,Chair_state=1,Chair_years=1,Chair_pid="P002")
        Chair.objects.create(Chair_id="C004",Chair_place="S001",Chair_cost=990,Chair_frequency=12,Chair_state=1,Chair_years=6,Chair_pid="P003")
        Chair.objects.create(Chair_id="C005",Chair_place="S001",Chair_cost=1500,Chair_frequency=190,Chair_state=1,Chair_years=10,Chair_pid="P004")
else:
 pass

if not Cu.objects.exists():
        Cu.objects.create(Cu_exID="U20230512181723003",Cu_id="C001",Cu_userid="c20210302121314000",Cu_date="2023-05-12 18:17:23")
        Cu.objects.create(Cu_exID="U20230430131557678",Cu_id="C002",Cu_userid="c20230431222222045",Cu_date="2023-04-30 13:15:57")
        Cu.objects.create(Cu_exID="U20230601202336365",Cu_id="C002",Cu_userid="c20230502111314778",Cu_date="2023-06-01 20:23:36")
        Cu.objects.create(Cu_exID="U20230610123525876",Cu_id="C003",Cu_userid="c20230605142259011",Cu_date="2023-06-10 12:35:25")
        Cu.objects.create(Cu_exID="U20230611232716794",Cu_id="C005",Cu_userid="c20230601091315340",Cu_date="2023-06-11 23:27:16")
else:
 pass

if not Cp.objects.exists():
        Cp.objects.create(Cp_NUM=100,Cp_ID="CP20230404121345678", Cp_DATE="2023-04-04 12:13:45")
        Cp.objects.create(Cp_NUM=60,Cp_ID="CP20230601113320239", Cp_DATE="2023-06-01 11:33:20")
        Cp.objects.create(Cp_NUM=13,Cp_ID="CP20230606234512937", Cp_DATE="2023-06-06 23:45:12")
        Cp.objects.create(Cp_NUM=130,Cp_ID="C20230531165611822", Cp_DATE="2023-05-31 16:56:11")
        Cp.objects.create(Cp_NUM=50,Cp_ID="CP20230514192345459", Cp_DATE="2023-05-14 19:23:45")
else:
 pass

if not Cou.objects.exists():
        Cou.objects.create(Cou_ID="Cou0001", Cou_DATE="2023-04-04",Cou_STATUS=1, Cou_COST=10,Cp_ID="CP20230404121345678")
        Cou.objects.create(Cou_ID="Cou0002", Cou_DATE="2023-06-01",Cou_STATUS=1, Cou_COST=8,Cp_ID="CP20230601113320239")
        Cou.objects.create(Cou_ID="Cou0003", Cou_DATE="2023-06-06",Cou_STATUS=1, Cou_COST=15,Cp_ID="CP20230606234512937")
        Cou.objects.create(Cou_ID="Cou0004", Cou_DATE="2023-05-31",Cou_STATUS=1, Cou_COST=10,Cp_ID="C20230531165611822")
        Cou.objects.create(Cou_ID="Cou0005", Cou_DATE="2023-05-14",Cou_STATUS=1, Cou_COST=12,Cp_ID="CP20230514192345459")
else:
 pass

if not Trade.objects.exists():
        Trade.objects.create(Trade_id="T20230505123423", Cus_id="c20210302121314000", Voucher_id="Cou0001", Voucher_date="2023-05-05 12:34:23",Voucher_provider="Sp001", Voucher_status=1,Voucher_type="銷售")
        Trade.objects.create(Trade_id="T20230605231513", Cus_id="c20230601091315340", Voucher_id="Cou0002", Voucher_date="2023-06-05 23:15:13",Voucher_provider="Sp004", Voucher_status=1,Voucher_type="贈予")
        Trade.objects.create(Trade_id="T20230615201911", Cus_id="c20210302121314000", Voucher_id="Cou0003", Voucher_date="2023-06-15 20:19:11",Voucher_provider="Sp003", Voucher_status=0,Voucher_type="銷售")
        Trade.objects.create(Trade_id="T20230601062334", Cus_id="c20230605142259011", Voucher_id="Cou0004", Voucher_date="2023-06-01 06:23:34",Voucher_provider="Sp001", Voucher_status=1,Voucher_type="贈予")
        Trade.objects.create(Trade_id="T20230518153457", Cus_id="c20230502111314778", Voucher_id="Cou0005", Voucher_date="2023-05-18 15:34:57",Voucher_provider="Sp002", Voucher_status=0,Voucher_type="銷售")
else:
 pass

if not Referrer.objects.exists():
        Referrer.objects.create(Referrer_ID="c20210302121314000", Bref_id="c20230502111314778", ref_date="2023-01-12 22:14:56")
        Referrer.objects.create(Referrer_ID="c20210302121314000", Bref_id="c20230601091315340", ref_date="2023-02-15 11:31:53")
        Referrer.objects.create(Referrer_ID="c20230601091315340", Bref_id="c20230431222222045", ref_date="2023-03-31 20:26:31")
        Referrer.objects.create(Referrer_ID="c20230431222222045", Bref_id="c20230605142259011", ref_date="2023-02-28 18:32:14")
        Referrer.objects.create(Referrer_ID="c20230431222222045", Bref_id="c20230612082345789", ref_date="2023-04-12 21:11:04")
else:
 pass

if not Ab.objects.exists():
        Ab.objects.create(Ab_ID="Sp001",Ab_ON=1,Ab_OFF=1,Ab_DATE="2023-05-31",Ab_REASON="")
        Ab.objects.create(Ab_ID="Sp002",Ab_ON=1,Ab_OFF=1,Ab_DATE="2023-06-01",Ab_REASON="")
        Ab.objects.create(Ab_ID="Sp003",Ab_ON=0,Ab_OFF=0,Ab_DATE="2023-06-02",Ab_REASON="病假")
        Ab.objects.create(Ab_ID="Sp004",Ab_ON=1,Ab_OFF=1,Ab_DATE="2023-06-03",Ab_REASON="")
        Ab.objects.create(Ab_ID="Sp005",Ab_ON=0,Ab_OFF=0,Ab_DATE="2023-06-04",Ab_REASON="健檢公假")
else:
    pass

if not cost.objects.exists():
        cost.objects.create(store_id="S001",physical_cost=15000,rent_cost=1300,voucher_cost=1500,upper_cost=43000,other_cost=0,cost_month="2023-03-05")
        cost.objects.create(store_id="S002",physical_cost=23000,rent_cost=2500,voucher_cost=1500,upper_cost=35000,other_cost=50,cost_month="2023-05-05")
        cost.objects.create(store_id="S001",physical_cost=34000,rent_cost=2300,voucher_cost=1500,upper_cost=23000,other_cost=0,cost_month="2023-04-05")
        cost.objects.create(store_id="S001",physical_cost=23000,rent_cost=4500,voucher_cost=4500,upper_cost=67000,other_cost=60,cost_month="2023-05-05")
        cost.objects.create(store_id="S005",physical_cost=12300,rent_cost=6600,voucher_cost=3000,upper_cost=23000,other_cost=0,cost_month="2023-05-05")
else:
    pass

if not feedback.objects.exists():
        feedback.objects.create(feedback_id="F20230612145624987",feedbackCu_id="C001",feedcus_id="c20230601091315340",feedback_text="很舒適，椅子很乾淨",feedback_date="2023-06-12 14:56:24")
        feedback.objects.create(feedback_id="F20230603224434763",feedbackCu_id="C001",feedcus_id="c20230431222222045",feedback_text="力道似乎有點弱",feedback_date="F2023-06-03 22:44:34")
        feedback.objects.create(feedback_id="F20230601192645037",feedbackCu_id="C002",feedcus_id="c20230601091315340",feedback_text="希望能體驗時間加長，都還沒感覺",feedback_date="2023-06-01 19:26:45")
        feedback.objects.create(feedback_id="F20230602175208295",feedbackCu_id="C003",feedcus_id="c20230502111314778",feedback_text="以後有機會來買一台",feedback_date="2023-06-02 17:52:08")
        feedback.objects.create(feedback_id="F20230608195712274",feedbackCu_id="C004",feedcus_id="c20230605142259011",feedback_text="第一次體驗這台，會來回顧",feedback_date="2023-06-08 19:57:12")
else:
    pass

if not An.objects.exists():
        An.objects.create(An_id="An20230601000000110",An_text="本月開始周年慶促銷，請加強宣導",An_dateON="2023-06-01 00:00:00",An_dateOFF=1)
        An.objects.create(An_id="An20230601103059978",An_text="請記得提醒上下班打卡",An_dateON="F2023-06-01 10:30:59",An_dateOFF=1)
        An.objects.create(An_id="An2023060112305938",An_text="請記得准予員工公假繳交健檢報告",An_dateON="2023-06-01 12:30:59",An_dateOFF=1)
        An.objects.create(An_id="An20230501190000080",An_text="天王按摩椅原料短缺，請告知顧客",An_dateON="2023-05-01 19:00:00",An_dateOFF=1)
        An.objects.create(An_id="An20230501200000948",An_text="買平民按摩椅贈送十份體驗卷活動開跑！",An_dateON="2023-05-01 12:00:00",An_dateOFF=1)
else:
    pass

if not demand.objects.exists():
        demand.objects.create(demand_id="n001",demand_text="主要按摩部位需求")
        demand.objects.create(demand_id="n002",demand_text="按摩力道偏好")
        demand.objects.create(demand_id="n003",demand_text="顏色偏好")
        demand.objects.create(demand_id="n004",demand_text="客戶職業")
        demand.objects.create(demand_id="n005",demand_text="價格上限")
else:
    pass

if not need.objects.exists():
        need.objects.create(type_id="Ty001",demand_id="n001",type_name="肩頸")
        need.objects.create(type_id="Ty002",demand_id="n001",type_name="腿部")
        need.objects.create(type_id="Ty003",demand_id="n003",type_name="香檳色")
        need.objects.create(type_id="Ty004",demand_id="n003",type_name="黑色")
        need.objects.create(type_id="Ty005",demand_id="n003",type_name="白色")
else:
    pass

if not arrange.objects.exists():
        arrange.objects.create(Ab_id="ar001",Ab_Sp="Sp001",Ab_DATE="2023-06-01",Ab_STIME="2023-06-01 10:30:00", Ab_ETIME="2023-06-01 17:30:00")
        arrange.objects.create(Ab_id="ar002",Ab_Sp="Sp002",Ab_DATE="2023-06-01",Ab_STIME="2023-06-01 17:30:00", Ab_ETIME="2023-06-01 22:30:00")
        arrange.objects.create(Ab_id="ar003",Ab_Sp="Sp003",Ab_DATE="2023-06-02",Ab_STIME="2023-06-02 10:30:00", Ab_ETIME="2023-06-02 17:30:00")
        arrange.objects.create(Ab_id="ar004",Ab_Sp="Sp004",Ab_DATE="2023-06-02",Ab_STIME="2023-06-02 17:30:00", Ab_ETIME="2023-06-02 22:30:00")
        arrange.objects.create(Ab_id="ar005",Ab_Sp="Sp001",Ab_DATE="2023-06-03",Ab_STIME="2023-06-03 10:30:00", Ab_ETIME="2023-06-03 22:30:00")
else:
    pass

if not FALSE.objects.exists():
        FALSE.objects.create(FALSE_id="fa001",FALSE_TYPE="經濟需求不符合預期")
        FALSE.objects.create(FALSE_id="fa002",FALSE_TYPE="溝通態度不佳")
        FALSE.objects.create(FALSE_id="fa003",FALSE_TYPE="特殊案例黑名單")
        FALSE.objects.create(FALSE_id="fa004",FALSE_TYPE="其他分店攬客")
        FALSE.objects.create(FALSE_id="fa005",FALSE_TYPE="過久沒有聯繫")
else:
    pass

if not manage.objects.exists():
        manage.objects.create(Cus_id="c20230502111314778",manage_stage=1,manage_date="2023-06-01",manage_deal=1,manage_category="",manage_detail="",manage_frequency=5,Sp_id="Sp001",store_id="S001")
        manage.objects.create(Cus_id="c20230601091315340",manage_stage=1,manage_date="2023-06-02",manage_deal=1,manage_category="",manage_detail="",manage_frequency=10,Sp_id="Sp002",store_id="S001")
        manage.objects.create(Cus_id="c20230431222222045",manage_stage=0,manage_date="2023-06-03",manage_deal=0,manage_category="fa003",manage_detail="對方刻意毀壞按摩椅，列為黑名單",manage_frequency=3,Sp_id="Sp004",store_id="S001")
        manage.objects.create(Cus_id="c20230605142259011",manage_stage=1,manage_date="2023-06-10",manage_deal=1,manage_category="",manage_detail="",manage_frequency=1,Sp_id="Sp003",store_id="S001")
        manage.objects.create(Cus_id="c20230612082345789",manage_stage=1,manage_date="2023-06-11",manage_deal=0,manage_category="",manage_detail="",manage_frequency=4,Sp_id="Sp003",store_id="S002")
else:
    pass
