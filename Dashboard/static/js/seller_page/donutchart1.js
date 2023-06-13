// var endpoint = '../api/chart/data/'
// var defaultData=[]
// var labels=[]
// function setoptions(name){

//     options={
//         scales: {
//             yAxes: [{
//                 ticks: {
//                     fontSize:allfontsize ,
//                     beginAtZero:true
//                 }
//                 ,
//             }]
//         },
//         plugins:{
//             legend: {
//                     usePointStyle: true, // 使用点样式来表示标签的颜色框
//                     pointStyle: 'circle', // 将点的样式设置为圆形
//                     pointRadius: 6, // 设置标签框的半径
//                     pointHoverRadius: 8, // 设置鼠标悬停时标签框的半径
//                     display: true,
//                     position: 'top',
//                     align: 'end',
//                     labels: {
//                       fontColor: '#333',
//                       fontSize: 5,
//                       boxWidth: 8,
//                       padding: 4
//                     }
//             },
//             title:{
//                 display: true,
//                 text:name,
//                 position:'top',
//                 align:'top'
//             }
//         }
//     }

// }
// $.ajax({
//     method: 'GET',
//     url: endpoint,
//     success: function(data){
        
//         labels = oknolabels
//         defaultData = data.default 
//         setoptions("第一階段成敗率")  
//         setdonutChart();
//     },
//     error: function(error_data){
//         console.log('error'); 
//     }
// })
// function setdonutChart(){
//     var ctx = document.getElementById("myChart1"); 
//     var myChart1 = new Chart(ctx, {
//         type: 'doughnut',
//         data: {
//             labels: labels, // 這裡
//             datasets: [{
//                 label: '# of Votes',
//                 data: defaultData, // 和這裡
//                 backgroundColor: [
//                     'rgb(255, 255, 255)',
//                     'rgb(198, 226, 229)',
//                 ],
//                 borderColor: [
//                     'rgb(0, 109, 121)',
//                 ],
//                 borderWidth: 1
//             }]
//         },
//         options: options
//     });
// }