function createChart4() {
    var ctx = document.getElementById("my4");
    my4 = new Chart(ctx, {
        type: 'pie',
        data: data = {
            labels: ['意見回饋數','全部按摩椅意見回饋數'],
            datasets: [{
              label: 'My First Dataset',
              data: [15, 108],
              backgroundColor: [
                'rgba(79, 85, 143)',
                'rgba(243, 177, 178)'
              ],
              borderColor: [
                'rgba(255,255,255)'
              ],
              hoverOffset: 4
            }]
          },
      });
}

// 在页面加载时调用函数
window.addEventListener('load', createChart4);
