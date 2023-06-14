function c2() {
var ctx2 = document.getElementById('myChart2');
var myBarChart = new Chart(ctx2, {
    type: "bar",
    data: {
    labels: ['第一週', '第二週', '第三週','第四週'],
  datasets: [{
    axis: 'y',
    label: '贈與',
    data: [65, 59, 80, 81],
    fill: false,
    backgroundColor: [
      'rgb(251, 219, 198)'
    ],
    borderColor: [
      'rgb(255, 255, 255)'
    ],
    borderWidth: 2
  },
  {
    axis: 'y',
    label: '銷售',
    data: [20, 60, 70, 10],
    fill: false,
    backgroundColor: [
      'rgb(169, 219, 230)'
    ],
    borderColor: [
      'rgb(255, 255, 255)'
    ],
    borderWidth: 2
  }]
},
options: {
    indexAxis: 'y',
  }
});}
window.addEventListener('load', c2);
