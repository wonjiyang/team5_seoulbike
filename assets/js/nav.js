$(
  // menu open?
  $(".btn_menu").click(
    function () {
      var o = $(this).attr("href"),
        o = o.split("#")[1];
      $body.removeClass("srch-open");
      $body.hasClass("nav-open") ? lyrClose(o) : lyrOpen(o);
      return false;
    },
    function (t) {
      return "undefined" != typeof w && w.event.triggered !== t.type
        ? w.event.dispatch.apply(e, arguments)
        : void 0;
    }
    //     function () {
    //     // menu를 열어야 함.

    //     // $('body').stop().toggleClass('open');
    //     // $('#header').stop().toggleClass('open');
    //     $("m_depth1").stop().toggleClass("open");
    //     // $('.h_b2b').stop().toggleClass('open');
    //     // $('.h_language').stop().toggleClass('open');
    //     // $('#container').stop().toggleClass('blur');
    //     // $('#footer').stop().toggleClass('blur');
    //     // $('.h_category').stop().toggleClass('blur');
    //     // $('.hm_partner').stop().toggleClass('blur');
    //   }
  ),

  //depth 1 디테일 온오프
  // $(".m_depth1 > li > strong").click(function () {
  //   if ($(this).hasClass("active") === true) {
  //     if ($(this).next().length > 0) {
  //       // 자식이 하나 이상 있으면
  //       $(this).next().removeClass("active");
  //     }
  //     $(this).removeClass("active");
  //   } else {
  //     if ($(this).next().length > 0) {
  //       $(this).next().addClass("active");
  //     }
  //     $(this).addClass("active");
  //   }
  // })

  // 모든 .m_depth2를 숨김
  $(".m_depth2").hide(),

  // strong 태그를 클릭했을 때의 동작
  $(".m_depth1 > li > strong").click(
    function () {
      if ($(this).hasClass("active") === true) {
        if ($(this).next().length > 0) {
          // 자식이 하나 이상 있으면
          $(this).next().removeClass("active");
        }
        $(this).removeClass("active");
      } else {
        if ($(this).next().length > 0) {
          $(this).next().addClass("active");
        }
        $(this).addClass("active");
      }
    },
    function () {
      // 현재 클릭한 strong 태그의 부모 요소인 li 태그의 다음 형제 요소인 ul 태그를 선택
      var submenu = $(this).parent().find(".m_depth2");

      // 다른 .m_depth2를 숨김
      $(".m_depth2").not(submenu).hide();

      // 현재 클릭한 strong 태그의 부모 요소인 li 태그에서 해당 .m_depth2를 토글하여 보여주거나 숨김
      submenu.slideToggle();
    }
  )
);
