//缩略图 hover 标重
  $('li.designs').hover(function(){
    $(this).addClass('designs_hover');
  },function(){
    $(this).removeClass('designs_hover');
  });

// 缩略图 hover 下滑
//  $('div.content div.thumb_nav').hover(function(){
//    $('.thumb_box').addClass('thumb_box_down');
//    $('.scroll_box').addClass('scroll_box_down');
//  },function(){
//    $('.thumb_box').removeClass('thumb_box_down');
//    $('.scroll_box').removeClass('scroll_box_down');
//  });

// 缩略图点击标重
  $('li.designs').click(function(){
    $('li.designs').removeClass('designs_chosen');
    $(this).addClass('designs_chosen');
  });

// 视频gif播放监听
//function vid_play(){
//  var vid_o = $('.design_display').children().css('opacity');
//  if (vid_o == 1) {
//    $('.video_gif').trigger('play');
//  } else {
//    $('.video_gif').trigger('pause');
//  }
//};

// 点击缩略图切换大图
    $('li.designs').click(function(){
      $('.design_display').children().removeClass('active');
      $('.design_display').children().eq($(this).index()).addClass('active');
      $('video').trigger('pause');
      $('.design_display').children().eq($(this).index()).delay(800).trigger('play');
    });

// hover 箭头透明度增加
    $('.scroll_box').hover(function(){
      $(this).children('img').animate({opacity:'1'},0);
    },function(){
      $(this).children('img').animate({opacity:'0.5'},0);
    });

// 点击右箭头滑动缩略图(通用)
    $('#scroll_right').mousedown(function(){
      var x=$('ul.designs li:last').index();
      var y=x*106-846;
      $('ul.designs').animate({scrollLeft:y},600);
    });
    $('#scroll_right').mouseup(function(){
      $('ul.designs').stop();
    });

// 点击左箭头滑动缩略图(通用)
    $('#scroll_left').mousedown(function(){
      $('ul.designs').animate({scrollLeft:0},600);
    });
    $('#scroll_left').mouseup(function(){
      $('ul.designs').stop();
    });

    // 点击右箭头滑动缩略图(萤石)
        $('#scroll_right_ezviz').mousedown(function(){
          var x=$('ul.designs li:last').index();
          var y=x*106-846;
          $('ul.designs').animate({scrollLeft:y},800);
        });
        $('#scroll_right_ezviz').mouseup(function(){
          $('ul.designs').stop();
        });

    // 点击左箭头滑动缩略图(萤石)
        $('#scroll_left_ezviz').mousedown(function(){
          $('ul.designs').animate({scrollLeft:0},800);
        });
        $('#scroll_left_ezviz').mouseup(function(){
          $('ul.designs').stop();
        });

    // 点击右箭头滑动缩略图(Dolphin)
        $('#scroll_right_Dolphin').mousedown(function(){
          var x=$('ul.designs li:last').index();
          var y=x*106-846;
          $('ul.designs').animate({scrollLeft:y},1000);
        });
        $('#scroll_right_Dolphin').mouseup(function(){
          $('ul.designs').stop();
        });

    // 点击左箭头滑动缩略图(Dolphin)
        $('#scroll_left_Dolphin').mousedown(function(){
          $('ul.designs').animate({scrollLeft:0},1000);
        });
        $('#scroll_left_Dolphin').mouseup(function(){
          $('ul.designs').stop();
        });

// hover 底部导航小箭头漂移
    $('.previous').hover(function(){
      $(this).children('#nav_previous').stop().animate({left:'-7px', opacity:'0.6'},200);
    },function(){
      $(this).children('#nav_previous').stop().animate({left:'0px', opacity:'1'},200);
    });

    $('.next').hover(function(){
      $(this).children('#nav_next').stop().animate({right:'-7px', opacity:'0.6'},200);
    },function(){
      $(this).children('#nav_next').stop().animate({right:'0px', opacity:'1'},200);
    });
