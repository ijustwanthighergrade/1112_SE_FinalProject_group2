function createChart3() {
    var ctx = document.getElementById("my3");
    var my3 = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ["c20210302121314000", "c20230502111314778", "c20230601091315340", "c20230431222222045", "c20230605142259011"],
            datasets: [{
                label: '數量',
                data: [20, 3, 0, 40, 6],
                backgroundColor: [
                    'rgba(243, 177, 178)'
                ],
                borderColor: [
                    'rgba(255, 255, 255)'
                ],
                borderWidth: 1
            }]
        },
        options: {  
            indexAxis: 'y',
        }
    });
}

// 在页面加载时调用函数
window.addEventListener('load', createChart3);
