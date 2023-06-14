function c1() {
var ctx = document.getElementById('myChart1');
var myChart1 = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['c20231230456', 'c20231230456', 'c20231230456', 'c20231230456', 'c20231230456', 'c20231230456', 'c20231230456', 'c20231230456', 'c20231230456'],
    datasets: [{
      backgroundColor: [
        'rgba(243, 177, 178)'
      ],
      borderColor: [
        'rgb(255, 255, 255)'
      ],
      borderWidth: 2,
      label: '客戶引介數量',
      data: [60, 49, 72,60, 49, 72,60, 49, 72]
    }]
  }
});}
window.addEventListener('load', c1);