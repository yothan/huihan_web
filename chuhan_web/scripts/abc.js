
  var a=$('div#design_list a:last').index()+1;
  var b=$(document.body).width();
  var c=a*268-b;
  var d=parseInt($('div#drag_1').css('left'));
  var e=Math.round(0/900*c);
  $('div#design_list').scrollLeft(e);
  alert("图片宽度: " + e);
