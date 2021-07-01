
// 하위 브라우저 호환
document.createElement("article");
document.createElement("section");
document.createElement("aside");
document.createElement("nav");
document.createElement("header");
document.createElement("footer");
document.createElement("main");

$(function () {
  //툴팁
  $("button[data-name=open_tooltip]").on("click", function(){
    $(this).next('.box').addClass("on");
      return false;
  });
  //툴팁 외 영역 클릭하면 닫히게 
  $("body").on('mouseup', function(e) { 
    if(!$(".tooltip .box.on").parent().has(e.target).length) {
      $("button[data-name=open_tooltip]").removeClass("on");
      $(".tooltip .box").removeClass("on");
    };

    //팝업 외 영역 클릭하면 닫히게 
    var popupCont = $('.popup');
    if(popupCont.has(e.target).length === 0){
      popupCont.hide();
    }
  });

  //탭메뉴
  var tabBtn = $('.tab_btns button'); 
  var tabCont = $('.tab_cont');  

  // tabCont.removeClass('active').eq(0).addClass('active');

  tabBtn.click(function(){
    var target = $(this);        
    var index = target.index();  
    tabBtn.removeClass('active');  
    target.addClass('active');  
    tabCont.removeClass('active')
    tabCont.eq(index).addClass('active');
  });

  //팝업 닫기
  $('.pop_close').click(function() {
    $(this).closest('.popup').hide();
  });

});