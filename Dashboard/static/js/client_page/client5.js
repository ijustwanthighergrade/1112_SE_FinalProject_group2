function createChart5() {
    var ctx = document.getElementById("my5");
    var my5 = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ["家庭成員數", "長者有無", "家中是否有按摩椅"],
            datasets: [{
                label: '第一階段',
                data: [1, 0, 1],
                backgroundColor: [
                    'rgba(79, 85, 143)'
                ],
                borderColor: [
                    'rgba(255,255,255)'
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
window.addEventListener('load', createChart5);
