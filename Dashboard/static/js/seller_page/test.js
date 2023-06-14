
    var canvas2 = $('#myChart2');
    // 获取 Chart.js 图表的实例
    var chartInstance2 = Chart.getChart(canvas2[0]);
    var dataset = chartInstance2.data.datasets[0];
    dataset.data = [50,50];
    // 更新图表
    chartInstance2.update();