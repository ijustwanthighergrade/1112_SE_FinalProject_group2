function createChart2() {
    var ctx = document.getElementById("my2");
    var my2 =new Chart(ctx, {
        type: 'line',
        data:{
            labels: ["1月", "2月", "3月", "4月", "5月", "6月"],
            datasets: [{
                label: '聯絡成功次數',
                data: [30, 45, 60, 50, 30, 25, 28],
                backgroundColor: 'rgb(120, 150, 192)',
                fill: true,
                tension: 0.1
            },{
                label: '聯絡次數',
                data: [65, 59, 80, 81, 56, 55, 40],
                backgroundColor: 'rgb(75, 192, 192)',
                fill: true,
                tension: 0.1
            }]
        }
});
}

// 在页面加载时调用函数
window.addEventListener('load', createChart2);
