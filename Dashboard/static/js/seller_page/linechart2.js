var endpoint = '../api/chart/data/'
var defaultData=[]
var labels=[]
var allfontsize=12;
$.ajax({
    method: 'GET',
    url: endpoint,
    success: function(data){
        
        labels = data.labels
        defaultData = data.default    
        setlineChart2();
    },
    error: function(error_data){
        console.log('error'); 
    }
})
function setlineChart2(){
    var ctx = document.getElementById("mylineChart2"); 
    var mylineChart2 = new Chart(ctx, {
        type: 'line',
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
                }]
            }
        }
    });
}