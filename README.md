# 1112_SE_FinalProject_group2
1112軟體專案管理期末專案

有問題先找找這裡，不懂可以再來問我-吳岱芸  

##需要遵守的撰寫守則##  
1.每天的程式進度都要註解當天日期，還有紀錄你的開始與結束工作時間，以及今天進度的檔案名稱到EXCEL上，沒紀錄的老兄恭喜你會獲得奪命連環CALL體驗卷  
2.每創一個變數或是FUNCTION都要下註解解釋你在幹嘛，變數請不要隨便取個A B之類的，我看不懂你的程式的話你還是會獲得奪命連環CALL體驗卷  
3.每次PUSH之前都要先PULL，要PUSH上來先檢查好你的程式是不是會讓其他人掛掉，三思而後行  
4.測試程式時若會動到資料庫就不要把你的資料庫資料PUSH上來，不然你會害大家一起死 WE WILL DIE  
5.同樣是資料庫問題，假設你突然發現需要更動欄位請告知所有人你更動了哪裡  

##關於引入的東西##    
tempelates裡面放的是html檔    
css之類的檔案請丟到static    

##如何使用架設好的環境##    
cd 到 seevne\Scripts 下activate  

##跑網站的測試指令##     
python manage.py runserver   

##如何引入static資料夾中的css/js/images##    
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