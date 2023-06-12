function createChart4() {
    var ctx = document.getElementById("my4");
    var my4 = new Chart(ctx, {
        type: 'pie',
        data: data = {
            labels: ['意見回饋數','全部按摩椅意見回饋數'],
            datasets: [{
              label: 'My First Dataset',
              data: [305, 50],
              backgroundColor: [
                'rgba(25, 99, 132, 0.2)',
                'rgba(243, 177, 178, 0.5)'
              ],
              borderColor: [
                'rgba(50, 99, 132, 1)',
                'rgba(251, 219, 198, 1)'
              ],
              hoverOffset: 4
            }]
          },
      });
}

// 在页面加载时调用函数
window.addEventListener('load', createChart4);
