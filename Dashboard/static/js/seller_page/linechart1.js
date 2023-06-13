// var endpoint = '../api/chart/data/'
// var defaultData=[]
// var statelabels=['第一階段','第二階段','第三階段','第四階段']
// $.ajax({
//     method: 'GET',
//     url: endpoint,
//     success: function(data){
        
//         labels = statelabels
//         defaultData = data.default    
//         defaultData1 = data.default1   
//         setlineChart();
//     },
//     error: function(error_data){
//         console.log('error'); 
//     }
// })
// function setlineChart(){
//     var ctx = document.getElementById("mylineChart"); 
//     var mylineChart = new Chart(ctx, {
//         type: 'line',
//         data: {
//             labels: statelabels, // 這裡
//             datasets: [
//                 {
//                     label: '# of Votes',
//                     data: defaultData, // 和這裡
//                     backgroundColor: [
//                         'rgb(243, 177, 178)',
//                     ],
//                     borderColor: [
//                         'rgba(255,99,132,1)',
//                     ],
//                     borderWidth: 1
//                 },
//                 {
//                     label: '# of Votes',
//                     data: defaultData1, // 和這裡
//                     backgroundColor: [
//                         'rgb(198, 226, 229)',
//                     ],
//                     borderColor: [
//                         'rgba(153, 102, 255, 1)',
//                     ],
//                     borderWidth: 1
//                 }
//             ]
//         },
//         options: {
//             scales: {
//                 y: [{
//                     ticks: {
//                         fontSize:allfontsize ,
//                         beginAtZero:true
//                     }
//                 }],
//             },
//             title:{
//                 display: true,
//                 text:"第一階段",
//                 position:'left',
//                 align:'top'
//             }
//         }
//     });
// }