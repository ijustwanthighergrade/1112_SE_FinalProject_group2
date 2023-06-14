function createChart2() {
    var ctx = document.getElementById("my2");
    my2 =new Chart(ctx, {
        type: 'line',
        data:{
            labels: ["1月", "2月", "3月", "4月", "5月", "6月","7月", "8月", "9月", "10月", "11月", "12月"],
            datasets: [{
                label: '聯絡成功次數',
                data: [1, 0, 2, 3, 1, 5, 2, 1, 3, 4, 1, 1],
                backgroundColor: 'rgba(243, 177, 178)',
                fill: true,
                tension: 0.1
            },{
                label: '聯絡次數',
                data: [5, 3, 8, 3, 5, 5, 4, 5, 8, 10, 5, 4],
                backgroundColor: 'rgba(79, 85, 143)',
                fill: true,
                tension: 0.1
            }]
        }
});
}

// 在页面加载时调用函数
window.addEventListener('load', createChart2);
