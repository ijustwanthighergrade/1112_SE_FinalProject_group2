var endpoint = '../api/chart/data/'
var defaultData=[]
var labels=[]
$.ajax({
    method: 'GET',
    url: endpoint,
    success: function(data){
        
        labels = data.labels
        defaultData = data.default    
        setpieChart1();
    },
    error: function(error_data){
        console.log('error'); 
    }
})
function setpieChart1(){
    var ctx = document.getElementById("mypieChart1"); 
    var mypieChart1 = new Chart(ctx, {
        type: 'pie',
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
                    ,
                }]
            },
            plugins:{
                legend: {
                        usePointStyle: true, // 使用点样式来表示标签的颜色框
                        pointStyle: 'circle', // 将点的样式设置为圆形
                        pointRadius: 6, // 设置标签框的半径
                        pointHoverRadius: 8, // 设置鼠标悬停时标签框的半径
                        display: true,
                        position: 'top',
                        align: 'end',
                        labels: {
                          fontColor: '#333',
                          fontSize: 5,
                          boxWidth: 8,
                          padding: 4
                        }
                },
                title:{
                    display: true,
                    text:"業務員失敗因素占比",
                    position:'top',
                    align:'top'
                }
            }
        }
    });
}