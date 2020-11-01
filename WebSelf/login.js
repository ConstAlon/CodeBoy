

window.onload = function(){
    //得到时间并写入div
    

     //使用定时器每秒向div写入当前时间
     var inver = setInterval(getDate,1000);

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