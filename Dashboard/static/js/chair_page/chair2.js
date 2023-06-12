function createChart2() {
    var ctx = document.getElementById("my2");
    var my2 = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ["c001", "c002", "c003", "c004"],
            datasets: [{
                label: '回報的顧客&次數',
                data: [12, 19, 3, 5, 2, 3],
                backgroundColor: [
                    'rgba(25, 99, 132, 0.2)'
                ],
                borderColor: [
                    'rgba(194, 252, 2, 0.2)'
                ],
                borderWidth: 1
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
