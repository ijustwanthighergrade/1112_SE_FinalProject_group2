function createChart() {
var ctx = document.getElementById("barChart2");
var barChart2 = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["老人","中年人","年輕人","肩頸加強","腿部按摩"], // 換成自己的labels
        datasets: [{
            label: '睡魔智眠椅', 
            data: [12, 19, 3, 5,10], // 換成自己的data
            backgroundColor: [
                'rgba(255,99,131,0.4)'
            ],
            borderColor: [
                'rgba(255,99,132,1)',            
            ],
            borderWidth: 1
        },
        {
            label: '大師椅', 
            data: [17, 9, 5, 7,19], // 換成自己的data
            backgroundColor: [
                'black'
            ],
            borderColor: [
                'rgba(255,99,132,1)',            
            ],
            borderWidth: 1

        },
        {
            label: '天王按摩椅', 
            data: [17, 9, 5, 7,19], // 換成自己的data
            backgroundColor: [
                'red'
            ],
            borderColor: [
                'rgba(255,99,132,1)',            
            ],
            borderWidth: 1

        },
        {
            label: 'v-motion', 
            data: [17, 9, 5, 7,19], // 換成自己的data
            backgroundColor: [
                'green'
            ],
            borderColor: [
                'rgba(255,99,132,1)',            
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