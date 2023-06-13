function createChart5() {
    var ctx = document.getElementById("my6");
    var my6 = new Chart(ctx, {
        type: 'polarArea',
        data: {
            labels: [
              '第一階段',
              '第二階段',
              '第三階段'
            ],
            datasets: [{
              label: 'My First Dataset',
              data: [100, 85, 60],
              backgroundColor: [
                'rgba(50, 99, 132, 0.2)',
                'rgba(243, 177, 178, 0.5)',
                'rgba(194, 252, 2, 0.2)'
            ]
            }]
          },
        options: {  
            indexAxis: 'y',
        }
    });
}

// 在页面加载时调用函数
window.addEventListener('load', createChart5);
