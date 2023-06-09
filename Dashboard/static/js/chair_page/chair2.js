function createChart2() {
    var ctx = document.getElementById("my2");
    var my2 = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ["c001", "c002", "c003", "c004", "c005"],
            datasets: [{
                label: '回報的顧客&次數',
                data: [15, 25, 13, 9, 28],
                backgroundColor: [
                    'rgba(243, 177, 178)'
                ],
                borderColor: [
                    'rgba(255,255,255)'
                ],
                borderWidth: 2
            }]
        },
        options: {
            indexAxis: 'y',
            scales: {
                y: {
                  beginAtZero: true
                }
              }
          }
    });
}

// 在页面加载时调用函数
window.addEventListener('load', createChart2);
