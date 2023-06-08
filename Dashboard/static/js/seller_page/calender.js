$(document).ready(function() {
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    var currentMonth = currentDate.getMonth();
    // 从 Django 后端获取日期数据，这里使用静态示例数据
    var datesFromBackend = ['2023-06-01', '2023-06-07', '2023-06-15']; // 替换为您从后端获取的日期数据
  
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
    $('#calendar-body').on('click', '.calendar-day', function() {
        // 获取点击的日期
        selectedDate = $(this).attr('data-date');
        openModal(selectedDate);
        
        // 发起 AJAX 请求获取数据
    //     $.ajax({
    //       url: '/get_data/',  // 替换为实际的 Django 后台 URL
    //       method: 'GET',
    //       data: { date: selectedDate },
    //       success: function(response) {
    //         // 处理成功响应
    //         openModal(response);
    //       },
    //       error: function(xhr, status, error) {
    //         // 处理错误
    //         console.log('发生错误:', error);
    //       }
    //     });
    //   });
    
      // 打开弹出框
      //之後要改成data和selectedDate兩個引數
      function openModal(data) {
        // 根据实际数据格式，构建弹出框的内容
        // 这里假设返回的数据是一个包含需要显示的内容的 JSON 对象
        
        var content = data;
    
        // 使用弹出框库（如Bootstrap Modal）来显示内容
        // 这里假设您已经引入了相应的弹出框库并设置了相应的 HTML 结构和样式
        //console.log(content)
        $('.modal-title').text(content);
        $('#modal-content').text(content);
        $('#myModal').modal('show');
      }
    });
  });
  