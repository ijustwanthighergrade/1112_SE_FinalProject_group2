function createChart3() {
    var ctx = document.getElementById("my3");
    var my3 = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ["五月"],
            datasets: [{
                label: '本月使用次數',
                data: [20],
                backgroundColor: [
                    'rgba(25, 99, 132, 0.2)'
                ],
                borderColor: [
                    'rgba(255,255,255)'
                ],
                borderWidth: 2
            },{
                label: '全店本月使用次數',
                data: [250],
                backgroundColor: [
                    'rgba(243, 177, 178, 0.5)'
                ],
                borderColor: [
                    'rgba(255,255,255)'
                ],
                borderWidth: 2
            }]
        },
        options: {  
            indexAxis: 'y',
        }
    });
}

// 在页面加载时调用函数
window.addEventListener('load', createChart3);
