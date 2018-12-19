//缩略图 hover 标重
  $('li.designs').hover(function(){
    $(this).addClass('designs_hover');
  },function(){
    $(this).removeClass('designs_hover');
  });

// 缩略图 hover 下滑
  $('div.thumb_nav').hover(function(){
    $('.thumb_box').addClass('thumb_box_down');
    $('.scroll_box').addClass('scroll_box_down');
  },function(){
    $('.thumb_box').removeClass('thumb_box_down');
    $('.scroll_box').removeClass('scroll_box_down');
  });

// 缩略图点击标重
  $('li.designs').click(function(){
    $('li.designs').removeClass('designs_chosen');
    $(this).addClass('designs_chosen');
  });
// 点击缩略图切换大图
    $('li.designs').click(function(){
      $('.design_display').children('img').removeClass('active');
      $('.design_display').children('img').eq($(this).index()).addClass('active');
    });
// 点击右箭头滑动缩略图
    $('#scroll_right').mousedown(function(){
      $('ul.designs').animate({scrollLeft:48},500);
    });
    $('#scroll_right').mouseup(function(){
      $('ul.designs').stop();
    });
// 点击左箭头滑动缩略图
    $('#scroll_left').mousedown(function(){
      $('ul.designs').animate({scrollLeft:0},500);
    });
    $('#scroll_left').mouseup(function(){
      $('ul.designs').stop();
    });
