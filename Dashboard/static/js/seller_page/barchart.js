var endpoint = '../api/chart/data/'
var defaultData=[]
var labels=[]
$.ajax({
    method: 'GET',
    url: endpoint,
    success: function(data){
        
        labels = data.labels
        defaultData = data.default    
        setbarChart();
    },
    error: function(error_data){
        console.log('error'); 
    }
})
function setbarChart(){
    var ctx = document.getElementById("mybarChart"); 
    var mybarChart = new Chart(ctx, {
        type: 'bar',
        data: {
            axis: 'y',
            labels: labels, // 這裡
            datasets: [
            {
                label: '# of Votes',
                data: defaultData, // 和這裡
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                    'rgba(255, 205, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(201, 203, 207, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                    'rgba(255, 205, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(201, 203, 207, 0.2)'
                ],
                borderWidth: 1
            },
            { 
                label: '# of Votes',
                data: defaultData, // 和這裡
                backgroundColor: [
                    'rgba(235, 39, 132, 0.2)',
                    'rgba(53, 132, 235, 0.2)',
                    'rgba(235, 236, 83, 0.2)',
                    'rgba(73, 132, 132, 0.2)',
                    'rgba(155, 132, 235, 0.2)',
                    'rgba(235, 139, 34, 0.2)'
                ],
                borderColor: [
                    'rgba(235,99,135,1)',
                    'rgba(54, 132, 235, 1)',
                    'rgba(255, 246, 86, 1)',
                    'rgba(75, 142, 192, 1)',
                    'rgba(153, 142, 255, 1)',
                    'rgba(255, 154, 64, 1)'
                ],
                borderWidth: 1
            }
            ]
        },
        options: {
            indexAxis: 'y',
            scales: {
                x: {
                    stacked: true
                },
                y: {
                    stacked: true
                }
            },
            title:{
                display: true,
                text:"第一階段",
                position:'left',
                align:'top'
            }
        }
    });
}