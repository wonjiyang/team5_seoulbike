$(
  // menu open?
  $(".btn_menu").click(function () {
    // menu를 열어야 함.

    // $('body').stop().toggleClass('open');
    // $('#header').stop().toggleClass('open');
    $("m_depth1").stop().toggleClass("open");
    // $('.h_b2b').stop().toggleClass('open');
    // $('.h_language').stop().toggleClass('open');
    // $('#container').stop().toggleClass('blur');
    // $('#footer').stop().toggleClass('blur');
    // $('.h_category').stop().toggleClass('blur');
    // $('.hm_partner').stop().toggleClass('blur');
  }),

  //depth 1 디테일 온오프
  $(".m_depth1 > li > strong").click(function () {
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
  })
);
