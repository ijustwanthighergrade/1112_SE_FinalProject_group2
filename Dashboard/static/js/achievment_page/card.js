window.addEventListener('load', function () {
    // 綁定按鈕事件
    var button1 = document.getElementById('generateChartButton1');
    button1.addEventListener('click', function () {
        updateData('2023/1/14<br>又下雨ㄌ', '500000元', '85人');
    });

    var button2 = document.getElementById('generateChartButton2');
    button2.addEventListener('click', function () {
        updateData('2023/2/21<br>天氣晴朗', '300000元', '60人');
    });

    var button3 = document.getElementById('generateChartButton3');
    button3.addEventListener('click', function () {
        updateData('2023/3/10<br>有颱風', '800000元', '120人');
    });

    var button4 = document.getElementById('generateChartButton4');
    button4.addEventListener('click', function () {
        updateData('2023/4/18<br>高溫35度', '200000元', '45人');
    });

    var button5 = document.getElementById('generateChartButton5');
    button5.addEventListener('click', function () {
        updateData('2023/5/2<br>下雪了', '400000元', '75人');
    });

    var button6 = document.getElementById('generateChartButton6');
    button6.addEventListener('click', function () {
        updateData('2023/6/11<br>雨停了', '600000元', '95人');
    });

    // 函數：更新數據
    function updateData(newText, newd, newp) {
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
    }
});