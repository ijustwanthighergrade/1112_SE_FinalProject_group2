function createChart3() {
    var ctx = document.getElementById("my3");
    var my3 = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ["c001", "c002", "c003", "c004"],
            datasets: [{
                label: '第一階段',
                data: [1, 0, 1, 1],
                backgroundColor: [
                    'rgba(50, 99, 132, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 255, 255)'
                ],
                borderWidth: 2
            },{
                label: '第二階段',
                data: [1, 0, 1, 1],
                backgroundColor: [
                    'rgba(243, 177, 178, 0.5)'
                ],
                borderColor: [
                    'rgba(255, 255, 255)'
                ],
                borderWidth: 2
            },{
                label: '第三階段',
                data: [1, 0, 0, 0],
                backgroundColor: [
                    'rgba(194, 252, 2, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 255, 255)'
                ],
                borderWidth: 2
            }]
        },
        options: {  
            indexAxis: 'y',
        }
    });
}

// 在页面加载时调用函数
window.addEventListener('load', createChart3);
