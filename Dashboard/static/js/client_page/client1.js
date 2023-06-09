function createChart() {
    var ctx = document.getElementById("myChart");
    var myChart = new Chart(ctx, {
        type: 'line',
        data:{
            labels: [1, 2, 3, 4, 5, 6],
            datasets: [{
                label: '全店顧客個階段數量',
                data: [65, 59, 80, 81, 56, 55, 40],
                backgroundColor: 'rgb(75, 192, 192)',
                tension: 0.1
            }]
        }
});
}

// 在页面加载时调用函数
window.addEventListener('load', createChart);
