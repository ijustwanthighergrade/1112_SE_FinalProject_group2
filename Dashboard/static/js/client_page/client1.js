function createChart() {
    var ctx = document.getElementById("myChart");
    var myChart = new Chart(ctx, {
        type: 'line',
        data:{
            labels: [1, 2, 3, 4],
            datasets: [{
                label: '全店顧客個階段數量',
                data: [65, 59, 80, 81],
                backgroundColor:'rgba(243, 177, 178)',
                tension: 0.1
            }]
        }
});
}

// 在页面加载时调用函数
window.addEventListener('load', createChart);
