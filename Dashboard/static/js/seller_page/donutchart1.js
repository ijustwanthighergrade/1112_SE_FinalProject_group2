var endpoint = '../api/chart/data/'
var defaultData=[]
var labels=[]
$.ajax({
    method: 'GET',
    url: endpoint,
    success: function(data){
        
        labels = data.labels
        defaultData = data.default    
        setdonutChart();
    },
    error: function(error_data){
        console.log('error'); 
    }
})
function setdonutChart(){
    var ctx = document.getElementById("myChart1"); 
    var myChart1 = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: labels, // 這裡
            datasets: [{
                label: '# of Votes',
                data: defaultData, // 和這裡
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255,99,132,1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        fontSize:allfontsize ,
                        beginAtZero:true
                    }
                    ,legend: {
                        usePointStyle: true, // 使用点样式来表示标签的颜色框
                        pointStyle: 'circle', // 将点的样式设置为圆形
                        pointRadius: 6, // 设置标签框的半径
                        pointHoverRadius: 8, // 设置鼠标悬停时标签框的半径
                        display: true,
                        position: 'top',
                        align: 'end',
                        labels: {
                          fontColor: '#333',
                          fontSize: 12,
                          boxWidth: 12,
                          padding: 10
                        }
                      }
                }]
            },
            
        }
    });
}