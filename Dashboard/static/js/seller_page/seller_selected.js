$(document).ready(function() {
  spid=""
  cusid=""
  $('.btn').click(function() {
    var spid = $(this).data('spid');  // 获取按钮的编号值
    console.log(spid); // 这里可以处理返回的结果
    
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
    var cusid = $(this).data('cusid');  // 获取按钮的编号值
    console.log(cusid); // 这里可以处理返回的结果
    
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
    },
    error: function(xhr, status, error) {
        // 在请求失败时的回调函数中执行操作
        console.log(error); // 这里可以处理错误信息
    }
    });
});
});