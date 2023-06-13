function createChart() {
var ctx = document.getElementById('pieChart1').getContext('2d');
var pieChart1 = new Chart(ctx, {
    type: 'pie',
    data: {
        labels: ['按摩椅', '按摩券', '維護', '折舊', '現金','業務員薪水'],
        datasets: [{
            label: '成本花費表',
            data: [10, 20, 30, 40, 50,70],
            backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)',
                'rgba(153, 102, 255, 0.5)',
                'rgba(124, 19, 255, 0.5)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(14, 19, 221, 0.5)'
            ],
            borderWidth: 1
        }]
    },
    options: { 
        responsive: true,
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
                        var percent = context.dataset.data.reduce((a, b) => a + b, 0) > 0 ? (value / context.dataset.data.reduce((a, b) => a + b, 0) * 100).toFixed(2) : 0;
                        return label + ': ' + value + ' (' + percent + '%)';
                    }
                }
            }
        }
        // 其他配置選項...
    }
});}
window.addEventListener('load', createChart);