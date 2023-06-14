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