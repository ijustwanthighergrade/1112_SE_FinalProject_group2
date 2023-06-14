var endpoint = '../api/chart/data/'
var defaultData=[]
var statelabels=['第一階段','第二階段','第三階段','第四階段']

var statedefaultData =[3,1,0,0]
$.ajax({
    method: 'GET',
    url: endpoint,
    success: function(data){
        
        labels = statelabels
        statedefaultData1 = data.statedefaultData1    
        statedefaultData2 = data.statedefaultData2   
        statedefaultData3 = data.statedefaultData3   
        statedefaultData4 = data.statedefaultData4   
        statedefaultData5 = data.statedefaultData5    
        setlineChart();
    },
    error: function(error_data){
        console.log('error'); 
    }
})
function setlineChart(){
    var ctx = document.getElementById("mylineChart"); 
    var mylineChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: statelabels, // 這裡
            datasets: [
                {
                    label: '全店',
                    data: statedefaultData, // 和這裡
                    backgroundColor: [
                        'rgb(243, 177, 178)',
                        'rgb(169, 219, 230)',

                    'rgba(75, 192, 192, 0.7)',
                        'rgb(251, 219, 198)',
                        'rgb(192, 221, 193)',
                        'rgb(202, 202, 226)'
                    ],
                    borderColor: [
                        'rgb(243, 177, 178)',
                        'rgb(169, 219, 230)',

                    'rgba(75, 192, 192, 0.7)',
                        'rgb(251, 219, 198)',
                        'rgb(192, 221, 193)',
                        'rgb(202, 202, 226)'
                    ],
                    borderWidth: 1
                },
                {
                    label: 'Sp001',
                    data: statedefaultData1, // 和這裡
                    backgroundColor: [
                        'rgb(243, 177, 178)',
                        'rgb(169, 219, 230)',

                    'rgba(75, 192, 192, 0.7)',
                        'rgb(251, 219, 198)',
                        'rgb(192, 221, 193)',
                        'rgb(202, 202, 226)'
                    ],
                    borderColor: [
                        'rgb(243, 177, 178)',
                        'rgb(169, 219, 230)',

                    'rgba(75, 192, 192, 0.7)',
                        'rgb(251, 219, 198)',
                        'rgb(192, 221, 193)',
                        'rgb(202, 202, 226)'
                    ],
                    borderWidth: 1
                },
                {
                    label: 'Sp002',
                    data: statedefaultData2, // 和這裡
                    backgroundColor: [
                        'rgb(243, 177, 178)',
                        'rgb(169, 219, 230)',

                    'rgba(75, 192, 192, 0.7)',
                        'rgb(251, 219, 198)',
                        'rgb(192, 221, 193)',
                        'rgb(202, 202, 226)'
                    ],
                    borderColor: [
                        'rgb(243, 177, 178)',
                        'rgb(169, 219, 230)',

                    'rgba(75, 192, 192, 0.7)',
                        'rgb(251, 219, 198)',
                        'rgb(192, 221, 193)',
                        'rgb(202, 202, 226)'
                    ],
                    borderWidth: 1
                },
                {
                    label: 'Sp003',
                    data: statedefaultData3, // 和這裡
                    backgroundColor: [
                        'rgb(243, 177, 178)',
                        'rgb(169, 219, 230)',

                    'rgba(75, 192, 192, 0.7)',
                        'rgb(251, 219, 198)',
                        'rgb(192, 221, 193)',
                        'rgb(202, 202, 226)'
                    ],
                    borderColor: [
                        'rgb(243, 177, 178)',
                        'rgb(169, 219, 230)',

                    'rgba(75, 192, 192, 0.7)',
                        'rgb(251, 219, 198)',
                        'rgb(192, 221, 193)',
                        'rgb(202, 202, 226)'
                    ],
                    borderWidth: 1
                },
                {
                    label: 'Sp004',
                    data: statedefaultData4, // 和這裡
                    backgroundColor: [
                        'rgb(243, 177, 178)',
                        'rgb(169, 219, 230)',

                    'rgba(75, 192, 192, 0.7)',
                        'rgb(251, 219, 198)',
                        'rgb(192, 221, 193)',
                        'rgb(202, 202, 226)'
                    ],
                    borderColor: [
                        'rgb(243, 177, 178)',
                        'rgb(169, 219, 230)',

                    'rgba(75, 192, 192, 0.7)',
                        'rgb(251, 219, 198)',
                        'rgb(192, 221, 193)',
                        'rgb(202, 202, 226)'
                    ],
                    borderWidth: 1
                },
                {
                    label: 'Sp005',
                    data: statedefaultData5, // 和這裡
                    backgroundColor: [
                        'rgb(243, 177, 178)',
                        'rgb(169, 219, 230)',

                    'rgba(75, 192, 192, 0.7)',
                        'rgb(251, 219, 198)',
                        'rgb(192, 221, 193)',
                        'rgb(202, 202, 226)'
                    ],
                    borderColor: [
                        'rgb(243, 177, 178)',
                        'rgb(169, 219, 230)',

                    'rgba(75, 192, 192, 0.7)',
                        'rgb(251, 219, 198)',
                        'rgb(192, 221, 193)',
                        'rgb(202, 202, 226)'
                    ],
                    borderWidth: 1
                }
            ]
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