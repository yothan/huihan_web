$(function(){

  // banner 文字加载动画
  $('#motto-bg').animate({top:'208px',opacity:'0.8'},500);
  $('#motto').delay(0).animate({top:'100px',opacity:'1'},700,"swing");

  // 点击导航栏定位滚动条
  var design_top = $('#design').offset().top;
  $('#nav-design').click(function () {
    $('html,body').animate({scrollTop:design_top},500);
  });

  var photo_top = $('#photo').offset().top;
  $('#nav-photo').click(function () {
    $('html,body').animate({scrollTop:photo_top},500);
  });

  var profile_top = $('#profile').offset().top;
  $('#nav-profile').click(function () {
    $('html,body').animate({scrollTop:profile_top},500);
  });

  // 刷新页面返回顶部
  // window.onload = function(){setTimeout(function(){$(window).scrollTop(0)},10);}

  // hover 项目放大图片，解决文字遮挡问题
  $('#mix_b1').hover(function(){
    $('#cover_b1').css("transform","scale(1.1)");
  },function(){
    $('#cover_b1').css("transform","scale(1)");
  });

  $('#mix_b2').hover(function(){
    $('#cover_b2').css("transform","scale(1.1)");
  },function(){
    $('#cover_b2').css("transform","scale(1)");
  });

  $('#mix_b3').hover(function(){
    $('#cover_b3').css("transform","scale(1.1)");
  },function(){
    $('#cover_b3').css("transform","scale(1)");
  });

  $('#mix_b4').hover(function(){
    $('#cover_b4').css("transform","scale(1.1)");
  },function(){
    $('#cover_b4').css("transform","scale(1)");
  });

  $('#mix_b5').hover(function(){
    $('#cover_b5').css("transform","scale(1.1)");
  },function(){
    $('#cover_b5').css("transform","scale(1)");
  });

  $('#mix_b6').hover(function(){
    $('#cover_b6').css("transform","scale(1.1)");
  },function(){
    $('#cover_b6').css("transform","scale(1)");
  });
});
