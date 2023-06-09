function createChart() {
    var ctx = document.getElementById('pieChart2').getContext('2d');
    var pieChart2 = new Chart(ctx, {
        type: 'pie',
        data: {
            labels: ['不是孤兒', '孤兒', '老人', '上班族', '家庭主婦'],
            datasets: [{
                label: '成本花費表',
                data: [10, 20, 30, 40, 50],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.5)',
                    'rgba(54, 162, 235, 0.5)',
                    'rgba(255, 206, 86, 0.5)',
                    'rgba(75, 192, 192, 0.5)',
                    'rgba(153, 102, 255, 0.5)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
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
        }
    });}
    window.addEventListener('load', createChart);