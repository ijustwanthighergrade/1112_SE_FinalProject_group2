window.spid=""
window.cusid=""

window.datesFromBackend="";// calender 替换为您从后端获取的日期数据

$(document).ready(function() {

  $('.btn').click(function() {
    spid = $(this).data('spid');  // 获取按钮的编号值
    console.log(spid); // 这里可以处理返回的结果
    document.getElementById('selected_spid').textContent = spid;//右下角卡片顯示
    
    // 发送Ajax请求
    $.ajax({
      type: 'POST',
      url: '/seller_page/',  // 替换为你的Django视图函数的URL
      data: {
        spid: spid,
        cusid: cusid
      },
      success: function(response) {
        // 在成功返回后的回调函数中执行操作
        console.log(response); // 这里可以处理返回的结果
        datesFromBackend=response.arrangedate
        console.log(datesFromBackend); // 这里可以处理返回的结果



        var datacus = response.all_Cus_id.map(function(item) {
          return item.Cus_id_id;
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
      spid: spid,
      cusid: cusid
    },
    success: function(response) {
        // 在成功返回后的回调函数中执行操作
        console.log(response); // 这里可以处理返回的结果
        console.log(response.selectedrate)
        
        var cusid_data = response.cusid_data.map(function(item) {
          Cus_id_id= item.Cus_id_id;
          Cus_FamilyNum= item.Cus_FamilyNum;
          Cus_eld= item.Cus_eld;
          Chair_status= item.Chair_status;
          Chair_floor= item.Chair_floor;
          Chair_ceiling= item.Chair_ceiling;
          Chair_color= item.Chair_color;
          Cus_PastItem= item.Cus_PastItem;
          Chair_power= item.Chair_power;
          Cus_job=item.Cus_job
          product_past= item.product_past_id;
        });
        
        console.log(product_past); // 这里可以处理返回的结果
        document.getElementById('Cus_id_id').textContent = Cus_id_id;
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
    },
    error: function(xhr, status, error) {
        // 在请求失败时的回调函数中执行操作
        console.log(error); // 这里可以处理错误信息
    }
    });
});


var currentDate = new Date();
var currentYear = currentDate.getFullYear();
var currentMonth = currentDate.getMonth();
// 从 Django 后端获取日期数据，这里使用静态示例数据
// datesFromBackend = ['2023-06-01', '2023-06-07', '2023-06-15']; // 替换为您从后端获取的日期数据

// 创建日历
function createCalendar(year, month) {
    // 添加日期元素
  var dayCell = $('<td>').text(i).addClass('calendar-day').attr('data-date', year + '-' + (month + 1) + '-' + i);
  var calendarBody = $('#calendar-body');
  calendarBody.empty();

  var firstDay = new Date(year, month, 1);
  var lastDay = new Date(year, month + 1, 0);

  // 设置日历标题
  $('#current-month').text(`${year}年 ${month + 1}月`);

  // 创建日期行
  var row = $('<tr>');
  calendarBody.append(row);

  // 补充前面的空白日期
  for (var i = 0; i < firstDay.getDay(); i++) {
    row.append($('<td>'));
  }

  // 添加日期元素
  for (var i = 1; i <= lastDay.getDate(); i++) {
    var day = new Date(year, month, i);
    var isToday = day.toDateString() === currentDate.toDateString();
    var isBackendDate = datesFromBackend.includes(day.toISOString().split('T')[0]);

    var dayCell = $('<td>').text(i).addClass('calendar-day').attr('data-date', year + '-' + (month + 1) + '-' + i);

    if (isToday) {
      dayCell.addClass('today');
    }

    if (isBackendDate) {
      dayCell.addClass('backend-date');
    }

    row.append(dayCell);

    // 创建新的行
    if (row.children().length === 7) {
      row = $('<tr>');
      calendarBody.append(row);
    }
  }

  // 补充后面的空白日期
  while (row.children().length < 7) {
    row.append($('<td>'));
  }
}

// 初始化日历
createCalendar(currentYear, currentMonth);

// 上一个月按钮点击事件
$('#prev-month').on('click', function() {
  currentMonth--;
  if (currentMonth < 0) {
    currentMonth = 11;
    currentYear--;
  }
  createCalendar(currentYear, currentMonth);
});

// 下一个月按钮点击事件
$('#next-month').on('click', function() {
  currentMonth++;
  if (currentMonth > 11) {
    currentMonth = 0;
    currentYear++;
  }
  createCalendar(currentYear, currentMonth);
});

var selectedDate = ""; // 保存选中的日期
$('#calendar-body').on('click', '.calendar-day', function() { //點擊獲取日期排班資訊
    // 获取点击的日期
    selectedDate = $(this).attr('data-date');
    // openModal(selectedDate);
    selected_spid=document.getElementById('selected_spid').textContent
    console.log(spid)
    // 发起 AJAX 请求获取数据
    $.ajax({
      url: '/seller_page/',  // 替换为实际的 Django 后台 URL
      method: 'POST',
      data: { 
        date: selectedDate,
        beselectedspid:selected_spid ,
       },
      success: function(response) {
        // 处理成功响应
        document.getElementById('selected_spid').textContent = response.beselectedspid;
        openModal(response);
        console.log(response)
      },
      error: function(xhr, status, error) {
        // 处理错误
        console.log('发生错误:', error);
      }
    });

  // 打开弹出框
  //之後要改成data和selectedDate兩個引數
  function openModal(data) {
    // 根据实际数据格式，构建弹出框的内容
    // 这里假设返回的数据是一个包含需要显示的内容的 JSON 对象
    
    var content = data.selectedDate;
    var content1 = data.beselectedspid;

    // 使用弹出框库（如Bootstrap Modal）来显示内容
    // 这里假设您已经引入了相应的弹出框库并设置了相应的 HTML 结构和样式
    //console.log(content)
    $('.modal-title').text(content);
    $('#modal-content').text(content1);
    $('#myModal').modal('show');
  }
});
//日曆

});
var Cus_id_id=""
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