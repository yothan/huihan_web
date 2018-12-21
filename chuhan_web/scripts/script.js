$(function(){

  // 点击导航栏定位滚动条
  $('#nav-design').click(function () {
    var design_top = $('#design').offset().top + 50;
    $('html,body').animate({scrollTop:design_top},500);
  });

  $('#nav-photo').click(function () {
    var photo_top = $('#photo').offset().top + 50;
    $('html,body').animate({scrollTop:photo_top},700);
  });

  $('#nav-aboutme').click(function () {
    var aboutme_top = $('#aboutme').offset().top + 50;
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

  // 图片拖动条
  $('.drag').draggable({ axis: "x" ,containment: "parent" });

  $('div#drag_1').draggable({
    drag: function(){
    var a=$('div#design_list a:last').index()+1;
    var b=$(document.body).width();
    var c=a*268-b+136;
    var d=parseInt($('div#drag_1').css('left'));
    var f=Math.round(d/900*c);
    $('div#design_list').scrollLeft(f);
    }
  });

  $('div#design_list').scroll(function(){
    var a=$('div#design_list a:last').index()+1;
    var b=$(document.body).width();
    var c=a*268-b+136;
    var e=$('div#design_list').scrollLeft();
    var g=Math.round(e*900/c)+"px";
    $('div#drag_1').css('left',g)
  //  alert(g);
  //  alert($('div#drag_1').css('left'));
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
