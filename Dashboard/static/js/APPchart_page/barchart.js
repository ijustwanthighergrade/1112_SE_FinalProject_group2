function c1() {
var ctx = document.getElementById('myChart1');
var myChart1 = new Chart(ctx, {
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
      label: '客戶引介數量',
      data: [1, 3, 5,6, 2, 1,10, 3, 7, 1, 2, 4]
    }]
  }
});}
window.addEventListener('load', c1);