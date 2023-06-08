function createChart() {
var ctx4 = document.getElementById('myChart4');
var myPieChart = new Chart(ctx4, {
    type: "doughnut",
    data: {
  labels: [
    'Red',
    'Blue'
  ],
  datasets: [{
    label: 'My First Dataset',
    data: [300, 50],
    backgroundColor: [
      'rgb(255, 99, 132)',
      'rgb(54, 162, 235)'
    ],
    hoverOffset: 4
  }]
},
options:{
  rotation: -90,
  circumference: 180,
}
});}
window.addEventListener('load', createChart);