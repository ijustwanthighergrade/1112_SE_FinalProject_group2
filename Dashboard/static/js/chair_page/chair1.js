function createChart() {
    var ctx = document.getElementById("myChart");
    myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ["第一週", "第二週", "第三週", "第四週"],
            datasets: [{
                label: '使用次數',
                data: [13, 19, 3, 5],
                backgroundColor: [
                    'rgba(79, 85, 143)',
                ],
                borderColor: [
                    'rgba(255,255,255)'
                ],
                borderWidth: 2
            },{
                label: '全店',
                data: [58, 80, 30, 50],
                backgroundColor: [
                    'rgba(243, 177, 178)'
                ],
                borderColor: [
                    'rgba(255,255,255)'
                ],
                borderWidth: 2
            }]
        },
    });
}

// 在页面加载时调用函数
window.addEventListener('load', createChart);

