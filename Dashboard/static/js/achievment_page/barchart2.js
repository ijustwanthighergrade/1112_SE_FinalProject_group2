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