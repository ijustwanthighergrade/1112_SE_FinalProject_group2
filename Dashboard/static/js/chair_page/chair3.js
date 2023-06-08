function createChart3() {
    var ctx = document.getElementById("my3");
    var my3 = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ["Red", "Blue"],
            datasets: [{
                label: '# of Votes',
                data: [12, 19],
                backgroundColor: [
                    'rgba(25, 99, 132, 0.2)'
                ],
                borderColor: [
                    'rgba(194, 252, 2, 0.2)'
                ],
                borderWidth: 1
            },{
                label: '# of Votes',
                data: [12, 19],
                backgroundColor: [
                    'rgba(194, 252, 2, 0.2)'
                ],
                borderColor: [
                    'rgba(194, 253, 2, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {  indexAxis: 'y',
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });
}

// 在页面加载时调用函数
window.addEventListener('load', createChart3);
