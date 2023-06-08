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
      },
      error: function(xhr, status, error) {
        // 在请求失败时的回调函数中执行操作
        console.log(error); // 这里可以处理错误信息
      }
    });
  });
});
