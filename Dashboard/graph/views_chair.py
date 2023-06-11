import matplotlib.pyplot as plt
import base64
from io import BytesIO
from django.shortcuts import render
from graph.models import APP_Cus


def chair(request):
 return render(request,"chair.html")

if not APP_Cus.objects.exists():
        APP_Cus.objects.create(Cus_id="c20210302121314000",Cus_date="2021-03-02 12:13:14",Cus_user="abcd@gmail.com",Cus_pwd="aabbccdd",Voucher_count=20,Cus_status=1,Referrer_id="", Cus_Name="user1" )
        APP_Cus.objects.create(Cus_id="c20230502111314778",Cus_date="2023-05-02 11:13:14",Cus_user="efgh@gmail.com",Cus_pwd="eeffgghhh",Voucher_count=3,Cus_status=1,Referrer_id="c20210302121314000", Cus_Name="user2" )
        APP_Cus.objects.create(Cus_id="c20230601091315340",Cus_date="2023-06-01 09:13:15",Cus_user="ijkl@gmail.com",Cus_pwd="iijjkkkll",Voucher_count=0,Cus_status=1,Referrer_id="c20210302121314000", Cus_Name="user3" )
        APP_Cus.objects.create(Cus_id="c20230431222222045",Cus_date="2023-04-31 22:22:22",Cus_user="mnop@gmail.com",Cus_pwd="mmnnooppp",Voucher_count=40,Cus_status=1,Referrer_id="c20230601091315340", Cus_Name="user4" )
        APP_Cus.objects.create(Cus_id="c20230605142259011",Cus_date="2023-06-05 14:22:59",Cus_user="qrst@gmail.com",Cus_pwd="uvwxyz",Voucher_count=6,Cus_status=1,Referrer_id="c20230431222222045", Cus_Name="user5" )
else:
 pass