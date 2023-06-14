window.addEventListener('load', function() {
    // 綁定按鈕事件
    var button = document.getElementById('generateChartButton');
    button.addEventListener('click', function() {
        // 新的內容
        var newText = '2023/1/14<br>又下雨ㄌ';
        var newd ='500000元'
        var newp ='85人'

        // 取得要修改的元素
        var td1 = document.getElementById('ann1');
        var td2 = document.getElementById('ann2');
        var td3 = document.getElementById('ann3');
        var td4 = document.getElementById('d1');
        var td5 = document.getElementById('p1');
        

        // 清空舊的內容
        td1.innerHTML = '';
        td2.innerHTML = '';
        td3.innerHTML = '';
        td4.innerHTML = '';
        td5.innerHTML = '';

        // 更新內容
        td1.innerHTML = newText;
        td2.innerHTML = newText;
        td3.innerHTML = newText;
        td4.innerHTML = newd;
        td5.innerHTML = newp;
    });
});