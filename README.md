# 1112_SE_FinalProject_group2
1112軟體專案管理期末專案

有問題先找找這裡，不懂可以再來問我-吳岱芸  

##需要遵守的撰寫守則##  
1.每天的程式進度都要註解當天日期，還有紀錄你的開始與結束工作時間，以及今天進度的檔案名稱到EXCEL上，沒紀錄的老兄恭喜你會獲得奪命連環CALL體驗卷  
2.每創一個變數或是FUNCTION都要下註解解釋你在幹嘛，變數請不要隨便取個A B之類的，我看不懂你的程式的話你還是會獲得奪命連環CALL體驗卷  
3.每次PUSH之前都要先PULL，要PUSH上來先檢查好你的程式是不是會讓其他人掛掉，三思而後行  
4.測試程式時除了專門輸入資料的老兄，否則若會動到資料庫資料就不要把你的資料庫PUSH上來，不然WE WILL GO DIE TOGETHER  
5.同樣是資料庫問題，假設你突然發現需要更動欄位請告知所有人你更動了哪裡  

##關於引入的東西##    
tempelates裡面放的是html檔    
css之類的檔案請丟到static    

##如何引入header menu 在你的html下 ##
{% include 'header.html' %}


##有關開始工作的步驟##      
1.去分工表裡打卡  https://docs.google.com/spreadsheets/d/1JDqaZxA5yfKWBMawifZT-NTpyHjTJcQqw2t_Ifw9OJg/edit#gid=1293430266  
2.git pull
3.cd 到 seenve\Scripts 下activate(反正先進去虛擬環境)  
4.回到專案資料夾 python manage.py runserver   
5.工作完麻煩再次回去分工表打卡填寫今日進度與今日結束時間

##如何引入static資料夾中的css/js/images##   
#這是python語法runserver才看得到 不要直接開！！！！！！！！！！！！！   我很抱歉！！！！！   
1.在每個頁面的開頭都加上{% load static %}   
2.css的部份請改成下列這種形式  
ex:<link href="{% static "css/aaa.css" %}" rel="stylesheet">   
3.圖片的部份請改成下列這種形式   
ex:<img class ="logo" src="{% static "images/logo.jpg" %}">   
4.url的部分請依照下面後端注意事項的第一個英文改{% url '對應的英文' %}   
ex:<a href="{% url 'hello' %}"></a>     
 
##如果你的程式不能跑##   
1.檢查你是不是少import套件進去，如下列這些，又或是引用了其他介面的東西然後沒import   
import sqlite3   
import requests  
2.檢查graph的urls是不是少添加那個function的url進去  

##一些可參考的網路文章##  
1.這 40 個 Python 可視化圖表案例，強烈建議收藏！  
https://www.readfog.com/a/1646805493350502400  
https://www.python-graph-gallery.com/  
2.安裝與建置環境  
1.python  
https://ithelp.ithome.com.tw/articles/10210071  
2.django  
https://ithelp.ithome.com.tw/articles/10199575  


#目前下載套件，如果有人自己再下載了啥請記得寫上來    
pip install matplotlib    
pip install pandas  
pip install requests    
pip install django-filter    
pip install djangorestframework    
pip install pyecharts -U  
pip3 install plotly     


#django使用圖表  
1.Django中引入echarts图表做数据可视化  
https://blog.csdn.net/qq_42092076/article/details/105209185  
2.python-使用pyecharts實現數據視覺化  
https://cde566.medium.com/python-%E4%BD%BF%E7%94%A8pyecharts%E5%AF%A6%E7%8F%BE%E6%95%B8%E6%93%9A%E8%A6%96%E8%A6%BA%E5%8C%96-1-4d9a0923d81  
3.echart  
https://github.com/pyecharts/pyecharts/tree/ee659c991bcff9c7279402b0c42e48c3c91d8715  
4.盤點 Django 展示可視化圖表的多種方式  
https://www.readfog.com/a/1632284312670932992  
5.Python互動式圖表函數庫初體驗  
https://www.finlab.tw/python-bokeh1-setup-and-first-impression/  
6.用 Python 做出 Gapminder 互動式圖表  
https://hahow.in/contents/articles/626a094dfc2cb700071ca212  
7.Python 互動式圖表筆記(1) ploty  
https://hackmd.io/@SeedFood/DjPloty1  
8.Plotly Python web Framework Django
https://www.youtube.com/watch?v=Fwbn1HMsyng