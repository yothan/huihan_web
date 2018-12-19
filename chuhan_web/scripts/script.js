$(function(){

  // 点击导航栏定位滚动条
  var design_top = $('#design').offset().top;
  $('#nav-design').click(function () {
    $('html,body').animate({scrollTop:design_top},500);
  });

  var photo_top = $('#photo').offset().top;
  $('#nav-photo').click(function () {
    $('html,body').animate({scrollTop:photo_top},700);
  });

  var aboutme_top = $('#aboutme').offset().top;
  $('#nav-aboutme').click(function () {
    $('html,body').animate({scrollTop:aboutme_top},900);
  });

  // hover 项目放大图片，解决文字遮挡问题
  $('.mix').hover(function(){
    $(this).children('.design_cover').addClass('design_cover_hover');
    $(this).children('.pic_cover').addClass('pic_cover_hover');
    $(this).children('p.design_cover_title').stop().animate({bottom:'140px', opacity:'1'},500);
    $(this).children('p.cover_content').stop().animate({bottom:'164px', opacity:'0.8'},500);
  },function(){
    $(this).children('.design_cover').removeClass('design_cover_hover');
    $(this).children('.pic_cover').removeClass('pic_cover_hover');
    $(this).children('p.design_cover_title').stop().animate({bottom:'100px', opacity:'0'},500);
    $(this).children('p.cover_content').stop().animate({bottom:'110px', opacity:'0'},500);
  });

});

// 首页文字动画
function motto_move(){
    $('#motto-bg').delay(500).animate({paddingTop:'90px',opacity:'0.8'},700);
    $('#motto').delay(500).animate({paddingTop:'120px',opacity:'1'},700);
  };
$('#header_pre').load(motto_move());

// 刷新页面返回顶部
$('html,body').onload = function(){$(window).scrollTop(0);}
