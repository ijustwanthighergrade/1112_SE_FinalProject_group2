from django.shortcuts import render
import pandas as pd
import plotly.express as px
from plotly.offline import plot

def seller_page(request):
    
    df = pd.DataFrame([
    ['Czech Republic', 10228744], ['France', 61083916], ['Germany', 82400996],
    ['Greece', 10706290], ['Italy', 58147733], ['Netherlands', 16570613],
    ['Poland', 38518241], ['Portugal', 10642836], ['Romania', 22276056],
    ['Spain', 40448191], ['Turkey', 71158647], ['United Kingdom', 60776238]],
    columns=['country', 'pop'])
    fig = px.pie(df, values='pop', names='country', title='Population', hole=.3)
    plota= plot(fig,output_type="div")
    context={'plot_div':plota}
    
    return render(request,"seller.html",context)