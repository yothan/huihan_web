$(function(){

  //调用文字动画函数
  motto_move();

  // 点击导航栏定位滚动条
  $('#nav-design').click(function () {
    var design_top = $('#design').offset().top + 60;
    $('html,body').animate({scrollTop:design_top},500);
  });

  $('#nav-photo').click(function () {
    var photo_top = $('#photo').offset().top + 110;
    $('html,body').animate({scrollTop:photo_top},700);
  });

  $('#nav-aboutme').click(function () {
    var aboutme_top = $('#aboutme').offset().top + 110;
    $('html,body').animate({scrollTop:aboutme_top},900);
  });

  // hover 项目放大图片，解决文字遮挡问题
  $('.mix').hover(function(){
    $(this).children('.design_cover').addClass('design_cover_hover');
    $(this).children('.pic_cover').addClass('pic_cover_hover');
    $(this).children('p.design_cover_title').addClass('design_cover_title_hover');
    $(this).children('p.cover_content').addClass('cover_content_hover');
    //$(this).children('p.design_cover_title').stop().animate({bottom:'130px', opacity:'1'},500);
    //$(this).children('p.cover_content').stop().animate({bottom:'152px', opacity:'0.8'},500);
  },function(){
    $(this).children('.design_cover').removeClass('design_cover_hover');
    $(this).children('.pic_cover').removeClass('pic_cover_hover');
    $(this).children('p.design_cover_title').removeClass('design_cover_title_hover');
    $(this).children('p.cover_content').removeClass('cover_content_hover');
    //$(this).children('p.design_cover_title').stop().animate({bottom:'74px', opacity:'1'},500);
    //$(this).children('p.cover_content').stop().animate({bottom:'110px', opacity:'0'},500);
  });

  // 图片拖动条
  $('.drag').draggable({ axis: "x", containment: "parent" });

  //designs 拖动条映射
  $('div#drag_1').draggable({
    drag: function(){
    var a1=$('div#design_list a:last').index()+1;
    var b1=$(document.body).width();
    var c1=a1*268-1000;
    var d1=parseInt($('div#drag_1').css('left'));
    var f1=Math.round(d1/900*c1);
    $('div#design_list').scrollLeft(f1);
    }
  });
  $('div#design_list').scroll(function(){
    var a1=$('div#design_list a:last').index()+1;
    var b1=$(document.body).width();
    var c1=a1*268-1000;
    var e1=$('div#design_list').scrollLeft();
    var g1=Math.round(e1*900/c1)+"px";
    $('div#drag_1').css('left',g1);
  //  alert(g);
  //  alert($('div#drag_1').css('left'));
  });

  //photos 拖动条映射
  $('div#drag_2').draggable({
    drag: function(){
    var a2=$('div#photo_list a:last').index()+1;
    var b2=$(document.body).width();
    var c2=a2*268-1000;
    var d2=parseInt($('div#drag_2').css('left'));
    var f2=Math.round(d2/900*c2);
    $('div#photo_list').scrollLeft(f2);
    }
  });
  $('div#photo_list').scroll(function(){
    var a2=$('div#photo_list a:last').index()+1;
    var b2=$(document.body).width();
    var c2=a2*268-1000;
    var e2=$('div#photo_list').scrollLeft();
    var g2=Math.round(e2*900/c2)+"px";
    $('div#drag_2').css('left',g2);
  });

});

//滚动部分缩进
$(function(){
  var a3=$(document).width();
  var b3=(a3-1000)/2+2;
  $('div#design_list').css('padding-left',b3);
  $('div#photo_list').css('padding-left',b3);
  $('div#drag_box_1').css('margin-left',b3);
  $('div#drag_box_2').css('margin-left',b3);
});

// 首页文字动画函数
function motto_move(){
    $('#motto-bg').delay(500).animate({paddingTop:'90px',opacity:'0.8'},700);
    $('#motto').delay(500).animate({paddingTop:'120px',opacity:'1'},700);
  };
  // $('#header_pre').load(motto_move());
