//初始 文字动画
$(function(){
  motto_move();
});

//顶部导航滚动时 “背景透明度&阴影” 映射
$(document).scroll(function(){
  var a1 = $(document).scrollTop();
  var b1 = a1 / 300;
  if( b1 <= 1){
    c1 = b1*0.8;//*0.4+0.56;
    c2 = b1*0.06;
  }else{
    c1 = 0.8;//0.96;
    c2 = 0.06;
  }
  var d1 = "rgba(255, 255, 255," + c1 + ")";
  var d2 = "0px 4px 8px rgba(0, 0, 0," + c2 + ")";
  var d3 = c1 * 12;
  var d4 = "blur(" + d3 + "px)"
  $('div.nav').css('background-color',d1);
  $('div.nav').css('box-shadow',d2);
  $('div.nav').css('-webkit-backdrop-filter',d4);
//  alert(d1);
});


// About_Me 文字动画函数
function motto_move(){
    $('#motto-bg').delay(500).animate({paddingTop:'0px',opacity:'0.8'},700);
    $('#motto').delay(500).animate({paddingTop:'30px',opacity:'1'},700);
  };
  // $('#header_pre').load(motto_move());
