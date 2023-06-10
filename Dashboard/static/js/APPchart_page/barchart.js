function createChart() {
  var ctx = document.getElementById('myChart1');
var myChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['c20231230456', 'c20231230456', 'c20231230456', 'c20231230456', 'c20231230456', 'c20231230456', 'c20231230456', 'c20231230456', 'c20231230456'],
    datasets: [{
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)'
      ],
      borderColor: [
        'rgba(255,99,132,1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(255,99,132,1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(255,99,132,1)'
      ],
      borderWidth: 1,
      label: '銷售業績(百萬)',
      data: [60, 49, 72,60, 49, 72,60, 49, 72]
    }]
  }
});}
window.addEventListener('load', createChart);