function createChart4() {
    var ctx = document.getElementById("my4");
    var my4 = new Chart(ctx, {
        type: 'pie',
        data: data = {
            labels: [
              '123',
              'Blue'
            ],
            datasets: [{
              label: 'My First Dataset',
              data: [305, 50],
              backgroundColor: [
                'rgba(243, 177, 178, 0.5)',
                'rgba(50, 99, 132, 0.2)'
              ],
              hoverOffset: 4
            }]
          },
      });
}

// 在页面加载时调用函数
window.addEventListener('load', createChart4);
