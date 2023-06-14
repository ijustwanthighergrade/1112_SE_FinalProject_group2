var barChart2;

function createChart() {
var ctx = document.getElementById("barChart2");
barChart2 = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["老人","中年人","年輕人","肩頸加強","腿部按摩"], // 換成自己的labels
        datasets: [{
            label: '睡魔智眠椅', 
            data: [12, 19, 3, 5,10], // 換成自己的data
            backgroundColor: [
                'rgb(243, 177, 178)',
            ],
            borderColor: [
                'white',
            ],
            borderWidth: 1
        },
        {
            label: '大師椅', 
            data: [17, 9, 5, 7,19], // 換成自己的data
            backgroundColor: [
                'rgb(169, 219, 230)',
            ],
            borderColor: [
                'white',

            ],
            borderWidth: 1
        },
        {
            label: '天王按摩椅', 
            data: [17, 9, 5, 7,19], // 換成自己的data
            backgroundColor: [
                'rgb(198, 226, 229)',
            ],
            borderColor: [
                'white',
            ],
            borderWidth: 1

        },
        {
            label: 'v-motion', 
            data: [17, 9, 5, 7,19], // 換成自己的data
            backgroundColor: [
                'rgb(251, 219, 198)'
            ],
            borderColor: [
                'white',            
            ],
            borderWidth: 1

        },

        
        
        ]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
});}
window.addEventListener('load', createChart);


window.addEventListener('load', function () {
    // 綁定按鈕事件
    var button1 = document.getElementById('button1');
    button1.addEventListener('click', function () {
        updateChartVisibility('睡魔智眠椅');
    });

    var button2 = document.getElementById('button2');
    button2.addEventListener('click', function () {
        updateChartVisibility('大師椅');
    });

    var button3 = document.getElementById('button3');
    button3.addEventListener('click', function () {
        updateChartVisibility('天王按摩椅');
    });

    var button4 = document.getElementById('button4');
    button4.addEventListener('click', function () {
        updateChartVisibility('v-motion');
    });

    // 函數：更新圖表數據集可見性
    function updateChartVisibility(targetLabel) {
        // 顯示或隱藏數據集
        barChart2.data.datasets.forEach(function (dataset) {
            if (dataset.label === targetLabel) {
                dataset.hidden = false; // 顯示目標數據集
            } else {
                dataset.hidden = true; // 隱藏其他數據集
            }
        });

        // 更新圖表
        barChart2.update();
    }
});