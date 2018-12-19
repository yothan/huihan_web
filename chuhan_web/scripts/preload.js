// banner 文字加载动画
function motto_move(){
  $('#motto-bg').delay(500).animate({top:'208px',opacity:'0.8'},500);
    $('#motto').delay(500).animate({top:'100px',opacity:'1'},700);
  }

$('#header_pre').onload = motto_move();

//  $(function(){
//    function preload(url) {
//      var img = new Image();
//      img.src = "url" ;
//    };
//    preload(./images/header-bg.jpg);
//    preload(./images/upwards@2x.jpg);
//    $('#a123').onload = motto_move();
//  });
