from django.contrib import admin
from django.urls import path,include,re_path
from graph import views_login
from graph import views
from graph import views_seller
from graph import views_achievement
from graph import views_chair
from graph import views_client
from graph import views_app
from graph import views_register
import graph
from .views_seller import ChartData
urlpatterns = [
    path('seller_page/',views_seller.seller_page,name='seller_page'),
    path('login/',views_login.login_page,name='login_page'),
    # path('api/data/', views_seller.get_data, name='api-data'),
    path('api/chart/data/', ChartData.as_view(), name='data'),
    path('achievment_page/',views_achievement.achv_page,name='achievment_page'),
    path('chair/',views_chair.chair,name='chair'),
    path('client/',views_client.client,name='client'),
    path('appchart/',views_app.appchart,name='appchart'),
    path('register/',views_register.register_page,name='register_page')
]

