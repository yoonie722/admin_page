# Vrix

사용 기술 및 대응 브라우저
기술 :  html5, Sass, Gulp, jQuery, 
대응 : ie10이상, Chrome
## 이번에 작업하면서 알게된 점 정리

1. css로 처리 가능한 동작은 css로 우선적으로 처리 ( 예: virx GNB )
2. 넓이나 크기는 가변적으로 적용시킨다. 어떤 문구가 들어가도 적용되어 보여질 수 있도록.
3. 스크립트 유형은 통일, 제이쿼리면 제이쿼리만 사용 , 자바스크립트면 자바스크립트만 사용

피드백
1. gnb css로 -ok
2. 툴팁 타입 2개 1) 후버시 나타나는거 2) 클릭시 나타나는거 (다른영역 클릭시 닫힘) -ok
3. popup 제이퀴리로 여러개의 팝업일 경우 고려 -ok
4. 코드 리뷰 할거 고려하려 코드 정리 발표할 내용 알아두기

//gnb
// var _gnb = $('.gnb');
// _gnb.find('>li>a').on('mouseenter focus',function(){
//   _gnb.find('li.on').removeClass('on').children('.sub_gnb').hide();
//   $(this).next().show().parent().addClass('on');
// });
// _gnb.find('.sub_gnb').on('mouseleave',function(){
//   $(this).parent('li.on').removeClass('on');
//   $(this).hide();
// });

