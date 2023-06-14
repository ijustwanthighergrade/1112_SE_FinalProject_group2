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
                'rgb(243, 177, 178) ',
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