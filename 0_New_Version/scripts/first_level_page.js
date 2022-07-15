//初始 文字动画
$(function(){
  motto_move();
});

//顶部导航滚动时 “背景透明度&阴影” 映射
$(document).scroll(function(){
  var a1 = $(document).scrollTop();
  var b1 = a1 / 200;
  if( b1 <= 1){
    c1 = b1*0.96;//*0.4+0.56;
    c2 = b1*0.5;
  }else{
    c1 = 0.96;//0.96;
    c2 = 0.5;
  }
  var d1 = "rgba(255, 255, 255," + c1 + ")";
  var d2 = "0px 0px 1px rgba(0, 0, 0," + c2 + ")";
  $('div.nav').css('background-color',d1);
  $('div.nav').css('box-shadow',d2);
//  alert(d1);
});


// About_Me 文字动画函数
function motto_move(){
    $('#motto-bg').delay(500).animate({paddingTop:'90px',opacity:'0.8'},700);
    $('#motto').delay(500).animate({paddingTop:'120px',opacity:'1'},700);
  };
  // $('#header_pre').load(motto_move());
