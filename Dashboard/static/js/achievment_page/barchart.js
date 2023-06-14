var barChart1;

function createChart() {
    var ctx = document.getElementById("barChart1");
    barChart1 = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
            datasets: [
                {
                    type: "line",
                    label: 'a型按摩椅',
                    data: [25, 49, 36, 51, 48, 98, 65, 12, 3, 10, 15, 78],
                    lineTension: 0,
                    fill: true
                },
                {
                    label: 'b型按摩椅',
                    data: [25, 17, 75, 56, 120, 30, 75, 68, 87, 94, 23, 65],
                    backgroundColor: 'rgb(243, 177, 178)',
                    borderColor: 'white',
                    borderWidth: 1
                },
                {
                    label: 'c型按摩椅',
                    data: [25, 17, 75, 56, 120, 30, 75, 68, 87, 94, 23, 65],
                    backgroundColor: 'rgb(169, 219, 230)',
                    borderColor: 'white',
                    borderWidth: 1
                },
                {
                    label: 'd型按摩椅',
                    data: [25, 17, 75, 56, 120, 30, 75, 68, 87, 94, 23, 65],
                    backgroundColor: 'rgb(198, 226, 229)',
                    borderColor: 'white',
                    borderWidth: 1
                },
            ]
        },
        options: {
            scales: {
                x: {
                    stacked: true
                },
                y: {
                    stacked: true,
                    beginAtZero: true
                }
            }
        }
    });
}

window.addEventListener('load', createChart);

window.addEventListener('load', function () {
    // 綁定按鈕事件
    var button = document.getElementById('showDataButton');
    button.addEventListener('click', function () {
        // 獲取目標標籤的索引或標籤名稱
        var targetLabel = 'a型按摩椅'; // 更換為您要顯示的標籤名稱

        // 顯示或隱藏數據集
        barChart1.data.datasets.forEach(function (dataset) {
            if (dataset.label === targetLabel) {
                dataset.hidden = false; // 顯示目標數據集
            } else {
                dataset.hidden = true; // 隱藏其他數據集
            }
        });

        // 更新圖表
        barChart1.update();
    });
});

