function createChart4() {
    var ctx = document.getElementById("my4");
    my4 = new Chart(ctx, {
        type: 'pie',
        data: data = {
            labels: [
              '已完成',
              '未完成'
            ],
            datasets: [{
              label: 'My First Dataset',
              data: [90, 10],
              backgroundColor: [
                'rgba(243, 177, 178)',
                'rgba(79, 85, 143)'
              ],
              hoverOffset: 4
            }]
          },
      });
}

// 在页面加载时调用函数
window.addEventListener('load', createChart4);
