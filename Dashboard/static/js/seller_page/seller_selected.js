window.spid=""
window.cusid=""
var hiddenDatasets = []; // 用于存储隐藏的数据集

$(document).ready(function() {

  $('.btn').click(function() {
    spid = $(this).data('spid');  // 获取按钮的编号值
    console.log(spid); // 这里可以处理返回的结果
    // document.getElementById('selected_spid').textContent = spid;//右下角卡片顯示
    // Create a button element with the provided class and data attributes
    var buttona = document.createElement('button');
    buttona.setAttribute('class', 'spinfo');
    buttona.setAttribute('data-spinfo', spid);
    buttona.textContent = spid;
    element=document.getElementById('selected_spid')
    // Append the button to the 'selected_spid' element
    // var element= document.getElementsByClassName('spinfo')
    // element[0].textContent=spid;
    // element[0].dataset.spinfo = spid;

    while (element.firstChild) {
      element.removeChild(element.firstChild);
    }
    element.appendChild(buttona);

    $(element).on('click', '.spinfo', function() {
      var thisspid = $(this).data('spinfo');  // Retrieve the value of the 'data-spinfo' attribute
      console.log(thisspid);
    
      $.ajax({
        type: 'POST',
        url: '/seller_page/',  // Replace with the URL of your Django view function
        data: {
          thisspid: thisspid
        },
        success: function(response) {
          // Callback function executed after a successful response
          console.log(response); // Process the returned result here
          openModal(response);
        },
        error: function(xhr, status, error) {
          // Callback function executed when the request fails
          console.log(error); // Handle the error message here
        }
      });
    });
    
    function openModal(data) {
      var content = data.spinfo[0][0]; // 获取第一个元素
      var content1 = "";
    
      for (var i = 0; i < data.spinfo.length; i++) {
        var item = data.spinfo[i]; // 获取当前循环中的元素
        content1 += "業務員ID: " + item[0] + "<br>" +
          "本月獎金: " + item[1] + "<br>" +
          "績效公式: " + item[2] + "<br>" +
          "業務員薪水: " + item[3] + "<br>" +
          "店家id: " + item[4] + "<br>" +
          "住家地址: " + item[5] + "<br>" +
          "電話號碼: " + item[6] + "<br>" +
          "業務員姓名: " + item[7] + "<br>" +
          "業務員職位: " + item[8] + "<br><br>";
      }
    
      $('.modal-title').text(content);
      $('#modal-content').html(content1);
      $('#myModal').modal('show');
    }

    //修改折線圖顯示的值
    var canvas = $('#mylineChart2');
    // 获取 Chart.js 图表的实例
    var chartInstance = Chart.getChart(canvas[0]);
    chartInstance.data.datasets.forEach(function(dataset) {
      if (dataset.label !== "全店") {
        if (dataset.label === spid) {
            dataset.hidden = false; // 显示特定标签的数据集
        } else {
            dataset.hidden = true; // 隐藏其他数据集
            if (!hiddenDatasets.includes(dataset.label)) {
                hiddenDatasets.push(dataset.label); // 存储隐藏的数据集标签
            }
        }
      }
  });
    // 更新图表
    chartInstance.update();

    var canvas1 = $('#mylineChart');
    // 获取 Chart.js 图表的实例
    var chartInstance1 = Chart.getChart(canvas1[0]);
    chartInstance1.data.datasets.forEach(function(dataset) {
      if (dataset.label !== "全店") {
        if (dataset.label === spid) {
            dataset.hidden = false; // 显示特定标签的数据集
        } else {
            dataset.hidden = true; // 隐藏其他数据集
            if (!hiddenDatasets.includes(dataset.label)) {
                hiddenDatasets.push(dataset.label); // 存储隐藏的数据集标签
            }
        }
      }
  });
    // 更新图表
    chartInstance1.update();

    var canvas2 = $('#myChart2');
    // 获取 Chart.js 图表的实例
    var chartInstance2 = Chart.getChart(canvas2[0]);
    var dataset2 = chartInstance2.data.datasets[0];
    dataset2.data = [50,50];
    // 更新图表

    var canvas3 = $('#myChart3');
    // 获取 Chart.js 图表的实例
    var chartInstance3 = Chart.getChart(canvas3[0]);
    var dataset3 = chartInstance3.data.datasets[0];
    dataset3.data = [50,50];
    // 更新图表

    var canvas4 = $('#myChart4');
    // 获取 Chart.js 图表的实例
    var chartInstance4 = Chart.getChart(canvas4[0]);
    var dataset4 = chartInstance3.data.datasets[0];
    dataset4.data = [0,100];
    // 更新图表
    var canvas5 = $('#myChart1');
    // 获取 Chart.js 图表的实例
    var chartInstance5 = Chart.getChart(canvas5[0]);
    var dataset5 = chartInstance5.data.datasets[0];
    dataset5.data = [0,100];
    // 更新图表


    if(spid=='Sp001'){
      dataset2.data = [50,50];
      dataset3.data = [50,50];
      dataset4.data = [0,100];
      dataset5.data = [0,100];

    }
    else if(spid=='Sp002'){
      dataset2.data = [50,50];
      dataset3.data = [30,70];
      dataset4.data = [0,100];
      dataset5.data = [0,100];

    }
    else if(spid=='Sp003'){
      dataset2.data = [50,50];
      dataset3.data = [20,20];
      dataset4.data = [90,10];
      dataset5.data = [0,100];
      
    }
    else if(spid=='Sp004'){
      dataset2.data = [40,60];
      dataset3.data = [50,50];
      dataset4.data = [0,100];
      dataset5.data = [0,100];
      
    }
    else if(spid=='Sp005'){
      dataset2.data = [20,80];
      dataset3.data = [50,50];
      dataset4.data = [0,100];
      dataset5.data = [0,100];
      
    }

    chartInstance2.update();
    chartInstance3.update();
    chartInstance4.update();
    chartInstance5.update();
    // 发送Ajax请求
    $.ajax({
      type: 'POST',
      url: '/seller_page/',  // 替换为你的Django视图函数的URL
      data: {
        spid: spid
      },
      success: function(response) {
        // 在成功返回后的回调函数中执行操作
        console.log(response); // 这里可以处理返回的结果
        datesFromBackend=response.arrangedatesp
        // console.log("datesFromBackend:"+datesFromBackend); // 这里可以处理返回的结果

        var currentDate = new Date();
        var currentYear = currentDate.getFullYear();
        var currentMonth = currentDate.getMonth();
        createCalendar(currentYear, currentMonth);

        document.getElementById('selectedrate').textContent = response.selectedrate+"%";

        var datacus = response.all_Cus_id.map(function(item) {
          return item.Cus_id;
        });

        var tableBody = document.getElementById("cus_select");
        
        var rows = tableBody.getElementsByTagName("tr"); // 取得所有的 <tr> 元素

        // 從後往前遍歷所有的 <tr> 元素（除了第一個標題行）
        for (var i = rows.length - 1; i > 0; i--) {
          var row = rows[i];
          // 檢查是否為特定 ID 的行，如果是，保留，否則刪除
          if (row.id !== "cus_title") {
            while (row.firstChild) {
              row.firstChild.remove(); // 刪除行元素的第一個子元素（<td>）
            }
            row.remove(); // 刪除行元素
          }
        }

        if (datacus && Array.isArray(datacus)) {
          datacus.forEach(function(item) {
            var row = document.createElement("tr");
            var col = document.createElement("td");
            var button = document.createElement("button");
            button.className = "btn_cus";
            button.setAttribute("data-cusid", item);
            button.textContent = item;

            col.appendChild(button);
            row.appendChild(col);
            tableBody.appendChild(row);
            
          });






        }
        else{
          console.log(datacus); // 打印包含所有 Cus_id_id 值的數組

        }
        
      },
      error: function(xhr, status, error) {
        // 在请求失败时的回调函数中执行操作
        console.log(error); // 这里可以处理错误信息
      }
    });
  });
  
  $('#cus_select').on('click', '.btn_cus', function() {
    cusid = $(this).data('cusid');  // 获取按钮的编号值
    console.log(cusid); // 这里可以处理返回的结果
    
    document.getElementById('selected_cusid').textContent = cusid;
    // 发送Ajax请求
    $.ajax({
    type: 'POST',
    url: '/seller_page/',  // 替换为你的Django视图函数的URL
    data: {
      cusid: cusid
    },
    success: function(response) {
        // 在成功返回后的回调函数中执行操作
        console.log(response); // 这里可以处理返回的结果
        console.log(response.selectedrate)
        
        var cusid_data = response.cusid_data.map(function(item) {
          Cus_id= item.Cus_id;
          Cus_FamilyNum= item.Cus_FamilyNum;
          Cus_eld= item.Cus_eld;
          Chair_status= item.Chair_status;
          Chair_floor= item.Chair_floor;
          Chair_ceiling= item.Chair_ceiling;
          Chair_color= item.Chair_color;
          Cus_PastItem= item.Cus_PastItem;
          Chair_power= item.Chair_power;
          Cus_job=item.Cus_job
          product_past= item.product_past;
          Chair_position=item.Chair_position
        });
        document.getElementById('selectedrate').textContent = response.selectedrate+"%";
        
        console.log(product_past); // 这里可以处理返回的结果
        document.getElementById('Cus_id_id').textContent = Cus_id;
        document.getElementById('Cus_FamilyNum').textContent = Cus_FamilyNum;
        document.getElementById('Cus_eld').textContent = Cus_eld;
        document.getElementById('Chair_status').textContent = Chair_status;
        document.getElementById('Chair_floor').textContent = Chair_floor;
        document.getElementById('Chair_ceiling').textContent = Chair_ceiling;
        document.getElementById('Chair_color').textContent = Chair_color;
        document.getElementById('Cus_PastItem').textContent = Cus_PastItem;
        document.getElementById('Chair_power').textContent = Chair_power;
        document.getElementById('Cus_job').textContent = Cus_job;
        document.getElementById('product_past').textContent = product_past;
        document.getElementById('Chair_position').textContent = Chair_position;
    },
    error: function(xhr, status, error) {
        // 在请求失败时的回调函数中执行操作
        console.log(error); // 这里可以处理错误信息
    }
    });
});
});
var Cus_id=""
var Cus_FamilyNum=""
var Cus_eld=""
var Chair_status=""
var Chair_floor=""
var Chair_ceiling=""
var Chair_color=""
var Cus_PastItem=""
var Chair_power=""
var product_past=""
var Cus_job=""
var Chair_position=""