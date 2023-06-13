function createChart() {
    var ctx = document.getElementById("myChart");
    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ["6/1", "6/2", "6/3", "6/4", "6/5"],
            datasets: [{
                label: '使用次數',
                data: [13, 19, 3, 5, 2, 3],
                backgroundColor: [
                    'rgba(79, 85, 143, 0.5)',
                ],
                borderColor: [
                    'rgba(255,255,255)'
                ],
                borderWidth: 2
            },{
                label: '全店按摩椅使用次數',
                data: [58, 80, 30, 50, 30, 40],
                backgroundColor: [
                    'rgba(243, 177, 178, 0.5)'
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
