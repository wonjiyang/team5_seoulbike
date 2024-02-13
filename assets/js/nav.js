$(
    var gd_topmenu = function(){
        $('.depth0 li').on({
            'mouseover':function(){
                $(this).find('> ul').stop(true,true).fadeIn('fast');
                $(this).find('> a').addClass('active');
                //console.log('open');
            },
            'mouseleave':function(){
                $(this).find('> ul').stop(true,true).fadeOut('fast');
                $(this).find('> a').removeClass('active');
                //console.log('hide');
            }
        });
    };
    gd_topmenu();

//   // li 클릭, 터치 시 메뉴 펼치기
//   function () {
//     if ($(this).hasClass("open") === true) {
//       if ($(this).next().length > 0) {
//         $(this).next().removeClass("open");
//       }
//       $(this).removeClass("open");
//     } else {
//       if ($(this).next().length > 0) {
//         $(this).next().addClass("open");
//       }
//       $(this).addClass("open");
//     }
//   };
  

//   // 사용하지 않을 마우스 오버
//   function() {
//     $(this).find('> ul').stop(true, true).fadeIn('fast');
//     $(this).find('> a').addClass('active');
//     //console.log('open');
//   };
//   function() {
//     $(this).find('> ul').stop(true, true).fadeOut('fast');
//     $(this).find('> a').removeClass('active');
//     //console.log('hide');
//   };
);


