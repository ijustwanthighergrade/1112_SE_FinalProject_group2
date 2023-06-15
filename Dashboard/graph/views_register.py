from contextvars import Context
from multiprocessing import context
from django.shortcuts import render
from graph.models import storeboard
import datetime
import random

def register_page(request):
    if request.method == 'POST':
            username = request.POST.get('username')
            password = request.POST.get('password')
            if storeboard.objects.filter(store_username=username).exists():
                error_message = '此帳號名已被使用，請重新命名'
                return render(request, 'register.html', {'error_message': error_message})
            else:
                current_time = datetime.datetime.now() # 获取当前时间
                formatted_time = current_time.strftime("%Y%m%d%H%M%S") # 将时间格式化为字符串
                random_digits = random.randint(000, 999) # 生成随机三位数
                storeboard(store_username=username, store_pwd=password, storeboard_id= "SB" + formatted_time + str(random_digits)).save()
                success_message = '註冊成功，請重新登入！'
            return render(request, 'login.html', {'success_message': success_message})
    else:
        return render(request, 'register.html')