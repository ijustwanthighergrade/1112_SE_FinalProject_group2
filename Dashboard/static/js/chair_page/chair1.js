function createChart() {
    var ctx = document.getElementById("myChart");
    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
            datasets: [{
                label: '# of Votes',
                data: [13, 19, 3, 5, 2, 3],
                backgroundColor: [
                    'rgba(50, 99, 132, 0.2)',
                ],
                borderColor: [
                    'rgba(50, 99, 132, 1)',
                ],
                borderWidth: 1
            },{
                label: '# of Votes',
                data: [12, 19, 3, 5, 2, 3],
                backgroundColor: [
                    'rgba(2, 252, 2, 0.2)'
                ],
                borderColor: [
                    'rgba(2, 253, 2, 1)'
                ],
                borderWidth: 1
            }]
        },
       
    });
}

// 在页面加载时调用函数
window.addEventListener('load', createChart);