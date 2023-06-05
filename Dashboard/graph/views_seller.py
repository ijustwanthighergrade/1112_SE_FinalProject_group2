from django.shortcuts import render

def seller_page(request):
    
    return render(request,"seller.html",locals())