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
      $('.design_display').children().removeClass('active');
      $('.design_display').children().eq($(this).index()).addClass('active');
    });

// 点击右箭头滑动缩略图
    $('#scroll_right').mousedown(function(){
      var x=$('ul.designs li:last').index();
      var y=x*106-906;
      $('ul.designs').animate({scrollLeft:y},600);
    });
    $('#scroll_right').mouseup(function(){
      $('ul.designs').stop();
    });

// 点击左箭头滑动缩略图
    $('#scroll_left').mousedown(function(){
      $('ul.designs').animate({scrollLeft:0},600);
    });
    $('#scroll_left').mouseup(function(){
      $('ul.designs').stop();
    });

    // 点击右箭头滑动缩略图(萤石)
        $('#scroll_right_ezviz').mousedown(function(){
          var x=$('ul.designs li:last').index();
          var y=x*106-906;
          $('ul.designs').animate({scrollLeft:y},1000);
        });
        $('#scroll_right_ezviz').mouseup(function(){
          $('ul.designs').stop();
        });

    // 点击左箭头滑动缩略图(萤石)
        $('#scroll_left_ezviz').mousedown(function(){
          $('ul.designs').animate({scrollLeft:0},1000);
        });
        $('#scroll_left_ezviz').mouseup(function(){
          $('ul.designs').stop();
        });

// 点击底部导航小箭头漂移
    $('.previous').hover(function(){
      $(this).children('#nav_previous').stop().animate({left:'-5px', opacity:'0.6'},300);
    },function(){
      $(this).children('#nav_previous').stop().animate({left:'0px', opacity:'1'},300);
    });

    $('.next').hover(function(){
      $(this).children('#nav_next').stop().animate({right:'-5px', opacity:'0.6'},300);
    },function(){
      $(this).children('#nav_next').stop().animate({right:'0px', opacity:'1'},300);
    });
