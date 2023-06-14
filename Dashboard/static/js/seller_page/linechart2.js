var endpoint = '../api/chart/data/'
var defaultData=[]
var timelabels=['一月','二月','三月','四月','五月','六月','七月','八月','九月','十月','十一月','十二月']
var allfontsize=12;
$.ajax({
    method: 'GET',
    url: endpoint,
    success: function(data){
        
        labels = data.labels
        defaultData = data.default    
        defaultData1 = data.default1   
        defaultData2 = data.default2   
        defaultData3 = data.default3   
        defaultData4 = data.default4  
        defaultData5 = data.default5   
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
            labels: timelabels, // 這裡
            datasets: [{
                label: '全店',
                data: defaultData, // 和這裡
                backgroundColor: [
                    'rgb(243, 177, 178)',
                    'rgb(169, 219, 230)',
                    'rgb(198, 226, 229)',
                    'rgb(251, 219, 198)',
                    'rgb(192, 221, 193)',
                    'rgb(202, 202, 226)'
                ],
                borderColor: [
                    'rgb(243, 177, 178)',
                    'rgb(169, 219, 230)',
                    'rgb(198, 226, 229)',
                    'rgb(251, 219, 198)',
                    'rgb(192, 221, 193)',
                    'rgb(202, 202, 226)'
                ],
                borderWidth: 1
            },
            {
                label: 'Sp001',
                data: defaultData1, // 和這裡
                backgroundColor: [
                    'rgb(243, 177, 178)',
                    'rgb(169, 219, 230)',
                    'rgb(198, 226, 229)',
                    'rgb(251, 219, 198)',
                    'rgb(192, 221, 193)',
                    'rgb(202, 202, 226)'
                ],
                borderColor: [
                    'rgb(243, 177, 178)',
                    'rgb(169, 219, 230)',
                    'rgb(198, 226, 229)',
                    'rgb(251, 219, 198)',
                    'rgb(192, 221, 193)',
                    'rgb(202, 202, 226)'
                ],
                borderWidth: 1
            },{
                label: 'Sp002',
                data: defaultData2, // 和這裡
                backgroundColor: [
                    'rgb(243, 177, 178)',
                    'rgb(169, 219, 230)',
                    'rgb(198, 226, 229)',
                    'rgb(251, 219, 198)',
                    'rgb(192, 221, 193)',
                    'rgb(202, 202, 226)'
                ],
                borderColor: [
                    'rgb(243, 177, 178)',
                    'rgb(169, 219, 230)',
                    'rgb(198, 226, 229)',
                    'rgb(251, 219, 198)',
                    'rgb(192, 221, 193)',
                    'rgb(202, 202, 226)'
                ],
                borderWidth: 1
            },{
                label: 'Sp003',
                data: defaultData3, // 和這裡
                backgroundColor: [
                    'rgb(243, 177, 178)',
                    'rgb(169, 219, 230)',
                    'rgb(198, 226, 229)',
                    'rgb(251, 219, 198)',
                    'rgb(192, 221, 193)',
                    'rgb(202, 202, 226)'
                ],
                borderColor: [
                    'rgb(243, 177, 178)',
                    'rgb(169, 219, 230)',
                    'rgb(198, 226, 229)',
                    'rgb(251, 219, 198)',
                    'rgb(192, 221, 193)',
                    'rgb(202, 202, 226)'
                ],
                borderWidth: 1
            },{
                label: 'Sp004',
                data: defaultData4, // 和這裡
                backgroundColor: [
                    'rgb(243, 177, 178)',
                    'rgb(169, 219, 230)',
                    'rgb(198, 226, 229)',
                    'rgb(251, 219, 198)',
                    'rgb(192, 221, 193)',
                    'rgb(202, 202, 226)'
                ],
                borderColor: [
                    'rgb(243, 177, 178)',
                    'rgb(169, 219, 230)',
                    'rgb(198, 226, 229)',
                    'rgb(251, 219, 198)',
                    'rgb(192, 221, 193)',
                    'rgb(202, 202, 226)'
                ],
                borderWidth: 1
            },{
                label: 'Sp005',
                data: defaultData5, // 和這裡
                backgroundColor: [
                    'rgb(243, 177, 178)',
                    'rgb(169, 219, 230)',
                    'rgb(198, 226, 229)',
                    'rgb(251, 219, 198)',
                    'rgb(192, 221, 193)',
                    'rgb(202, 202, 226)'
                ],
                borderColor: [
                    'rgb(243, 177, 178)',
                    'rgb(169, 219, 230)',
                    'rgb(198, 226, 229)',
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