function createChart() {
var ctx = document.getElementById("barChart1");
var barChart1 = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["1月", "2月", "3月", "4月", "5月", "6月","7月","8月","9月","10月","11月","12月"], // 換成自己的labels
        datasets: [
        {
            type:"line",
            label:'D型按摩椅',
            data:[25,49,36,51,48,98,65,12,3,10,15,78],
            lineTension:0,
            fill:true

        },
        {
            label: 'a型按摩椅', 
            data: [25, 17, 75, 56, 120, 30,75,68,87,94,23,65], // 換成自己的data
            backgroundColor: [
                'rgba(54, 162, 235, 0.2)',
            ],
            borderColor: [
                'rgba(54, 162, 235, 1)',
            ],
            borderWidth: 1
        },
        {
            label: 'b型按摩椅', 
            data: [25, 17, 75, 56, 120, 30,75,68,87,94,23,65], // 換成自己的data
            backgroundColor: [
                'yellow',
            ],
            borderColor: [
                'rgba(54, 162, 235, 1)',

            ],
            borderWidth: 1
        },
        {
            label: 'c型按摩椅', 
            data: [25, 17, 75, 56, 120, 30,75,68,87,94,23,65], // 換成自己的data
            backgroundColor: [
                'gray',
            ],
            borderColor: [
                'rgba(54, 162, 235, 1)',

            ],
            borderWidth: 1
        },
        
        ]
    },
    options: {
        scales: {
            x:{
                stacked:true

            },
            y:{
                stacked:true
            },
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
});}
window.addEventListener('load', createChart);