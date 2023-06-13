function createChart() {
var ctx3 = document.getElementById('myChart3');
var myChart = new Chart(ctx3, {
  type: 'bar',
  data: {
    labels: ['一月', '二月', '三月','四月','五月','六月','七月','八月','九月','十月','十一月','十二月'],
    datasets: [{
      backgroundColor: [
        'rgba(243, 177, 178)'
      ],
      borderColor: [
        'rgb(255, 255, 255)'
      ],
      borderWidth: 2,
      label: '按摩券使用數量',
      data: [60, 49, 72, 88, 20, 50, 60, 30, 40, 26, 80, 10]
    }]
  }
});}
window.addEventListener('load', createChart);