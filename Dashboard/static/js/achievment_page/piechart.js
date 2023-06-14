var pieChart1; // 声明全局变量

function generateChart(data) {
    var ctx = document.getElementById('pieChart1').getContext('2d');
    pieChart1 = new Chart(ctx, {
        type: 'pie',
        data: {
            labels: ['按摩椅', '按摩券', '維護', '折舊', '現金', '業務員薪水'],
            datasets: [{
                label: '成本花費表',
                data: data,
                backgroundColor: [
                    'rgb(243, 177, 178)',
                    'rgb(169, 219, 230)',
                    'rgb(198, 226, 229)',
                    'rgb(251, 219, 198)',
                    'rgb(192, 221, 193)',
                    'rgb(202, 202, 226)'
                ],
                borderColor: [
                    'white'
                ],
                borderWidth: 1
            }]
        },
        options: {
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'right'
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            var label = context.label || '';
                            var value = context.parsed || 0;
                            var total = context.dataset.data.reduce((a, b) => a + b, 0);
                            return label + ': ' + value + ' (' + ((value / total) * 100).toFixed(2) + '%)';
                        }
                    }
                },
                datalabels: {
                    color: '#fff',
                    formatter: function(value, context) {
                        var total = context.dataset.data.reduce((a, b) => a + b, 0);
                        return Math.round((value / total) * 100) + '%';
                    }
                }
            }
            // 其他配置選項...
            // 其他配置選項...
        }
    });
}

window.addEventListener('load', function () {
    // 初始數據
    var initialData = [80, 20, 30, 40, 50, 70];
    generateChart(initialData);

    // 綁定按鈕事件
    var button = document.getElementById('generateChartButton');
    button.addEventListener('click', function () {
        // 新的數據
        var newData = [5, 15, 25, 35, 45, 55];
        pieChart1.destroy();
        generateChart(newData);

    });
});