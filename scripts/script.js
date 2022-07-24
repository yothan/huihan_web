

//初始执行
$(function(){
  $(".bg_image img:first-child").addClass("active");
});


//定时函数
var curIndex = 0;
var autoChange = setInterval(function(){
    if(curIndex < $(".bg_image img").length-1){
      curIndex ++;
    }else{
      curIndex = 0;
    }
    //调用动画函数
    changeTo(curIndex);
  },5000);


//动画函数
  function changeTo(num){
    $(".bg_image img").removeClass("active").eq(num).addClass("active");
}
