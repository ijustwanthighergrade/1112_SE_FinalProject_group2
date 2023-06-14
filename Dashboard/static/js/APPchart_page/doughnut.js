function c4() {
var ctx4 = document.getElementById('myChart4');
var myPieChart = new Chart(ctx4, {
    type: "doughnut",
    data: {
  labels: [
    '總使用率',
    '未使用率'
  ],
  datasets: [{
    label: '總使用率',
    data: [300, 50],
    backgroundColor: [
      'rgb(169, 219, 230)',
      'rgb(251, 219, 198)'
    ],
    hoverOffset: 4
  }]
},
options:{
  rotation: -90,
  circumference: 180,
}
});}
window.addEventListener('load', c4);