$(document).ready(function() {
  $('.btn').click(function() {
    var id = $(this).data('id');  // 获取按钮的编号值
    
    // 发送Ajax请求
    $.ajax({
      type: 'POST',
      url: '/seller_page/',  // 替换为你的Django视图函数的URL
      data: {
        id: id
      },
      success: function(response) {
        // 在成功返回后的回调函数中执行操作
        console.log(response); // 这里可以处理返回的结果
        var datacus = response.all_Cus_id.map(function(item) {
          return item.Cus_id_id;
        });
        var tableBody = document.getElementById("cus_select");
        for (var i = tableBody.children.length - 1; i >= 0; i--) {
          var childElement = tableBody.children[i];
        
          // 檢查子元素的標籤名稱和 ID
          if ((childElement.tagName === "TR") && childElement.id !== "cus_titile") {
            // 子元素是 <div> 且不是擁有特定 ID 的 div，從父級 div 中移除該子元素
            while (childElement.firstChild) {
              removeElement(childElement.firstChild);
              childElement.removeChild(childElement.firstChild);
            }
          }
        }


        if (datacus && Array.isArray(datacus)) {
          datacus.forEach(function(item) {
            var row = document.createElement("tr");
            var col = document.createElement("td");
            var button = document.createElement("button");
            button.className = "btn1";
            button.setAttribute("cusdata-id", item);
            button.textContent = item;
            row.appendChild(button);
            tableBody.appendChild(col);
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
});
$(document).ready(function() {
  $('.btn1').click(function() {
    var id = $(this).data('id');  // 获取按钮的编号值
    
    // 发送Ajax请求
    $.ajax({
      type: 'POST',
      url: '/seller_page/',  // 替换为你的Django视图函数的URL
      data: {
        id: id
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
