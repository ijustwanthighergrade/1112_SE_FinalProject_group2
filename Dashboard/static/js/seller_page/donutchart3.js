var endpoyChart2int = '../api/chart/data/'
var defaultData=[]
var labels=[]
$.ajax({
    method: 'GET',
    url: endpoint,
    success: function(data){
        
        labels = oknolabels
        defaultData = data.default    
        setoptions("第三階段成敗率")  
        setdonutChart3();
    },
    error: function(error_data){
        console.log('error'); 
    }
})
function setdonutChart3(){
    var ctx = document.getElementById("myChart3"); 
    var myChart3 = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: oknolabels, // 這裡
            datasets: [{
                label: '# of Votes',
                data: defaultData, // 和這裡
                backgroundColor: [
                    'rgb(255, 255, 255)',
                    'rgb(198, 226, 229)',
                ],
                borderColor: [
                    'rgb(0, 109, 121)',
                ],
                borderWidth: 1
            }]
        },
        options: options
    });
}