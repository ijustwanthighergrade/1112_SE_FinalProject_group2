from django.contrib import admin
from django.urls import path,include,re_path
from graph import views
from graph import views_seller
import graph

urlpatterns = [
    path('seller_page/',views_seller.seller_page,name='seller_page'),
    
]
