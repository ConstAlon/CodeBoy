

window.onload = function(){
    //得到时间并写入div
     document.getElementById("time").innerHTML = new Date().toLocaleString('chinese',{hour12:false});

     //使用定时器每秒向div写入当前时间
     var inver = setInterval(getDate,1000);

    
     var uname = document.getElementById('username');
     var pwd = document.getElementById('pswd');
     var un_span = document.getElementById('un_span');
     var pwd_span =document.getElementById('pw_span');
     var yes = /^[0-9]+.?[0-9]*$/;
     var sub = document.getElementById('b_sub');

     sub.onclick = function () {
          // 用来判断是否输入内容为正确格式

          if (uname.value != "") {
               if (uname.value.length <= 3 || uname.value.length >= 16) 
                    un_span.innerHTML = "用户名长度应大于3位小于16位";
               else
                    un_span.innerHTML = "";
          }else{
               un_span.innerHTML = "请输入账户！";
          }

          if (pwd.value != "") {
               if (pwd.value.length <= 3 || pwd.value.legth >= 20) {
                    pw_span.innerHTML = "密码长度应大于3小于20";
               }else if (!yes.test(pwd.value)) {
                    pw_span.innerHTML = "密码应为数字！！";
               }else
                    pw_span.innerHTML = "";
          }else{
               pw_span.innerHTML = "请输入密码！";
          }

          if (uname.value == "123456" && pwd.value =="123456") {
               window.location.href = "index.html"
          }

     };

}

 function getDate(){
     //获取当前时间
     var date = new Date();
     //格式化为本地时间格式
     var date1 = date.toLocaleString('chinese',{hour12:false});
     //获取div
     var div1 = document.getElementById("time");
     //将时间写入div
     div1.innerHTML = date1;
};

function authentication() {
     // 用来判断是否输入内容为正确格式

     if (uname.value != "") {
          if (uname.length <= 3 || uname.length >= 16) 
               un_span.innerHTML = "用户名长度应大于3位小于16位";
          else
               un_span.innerHTML = "";
     }else{
          un_span.innerHTML = "请输入账户！";
     }

     if (pwd.value != "") {
          if (pwd.length <= 3 || pwd.legth >= 20) {
               pw_span.innerHTML = "密码长度应大于3小于20";
          }else if (!yes.test(pwd.value)) {
               pw_span.innerHTML = "密码应为数字！！";
          }else
               pw_span.innerHTML = "";
     }

     if (uname.value == "123456" && pwd.value =="123456") {
          window.location.href = "index.html"
     }

};