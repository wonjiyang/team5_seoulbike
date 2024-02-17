/* ready event */
$(function () {
  /* 문서 전체 영향 */
  $("body").stop().toggleClass("open");
  $("#header").stop().toggleClass("open");
  $(".m_depth1").stop().toggleClass("open");
  $(".bgblur").stop().toggleClass("blur");

  /* 헤더 */
  /* 헤더 : 메뉴 버튼 */

  /* PC 메뉴 액티브 */

  /* 메뉴 버튼 클릭 시 모바일 메뉴를 표시 */
  $(".btn_menu").click(function () {
    $(".btn_menu").toggleClass("open"), $(".m_header_area").toggle();
  });

  /*  */
  /* 모바일 메뉴 오픈 상태 : 모바일 액티브 전환 */
  $(".m_depth1 > li").click(function () {
    if ($(this).hasClass("active") === true) {
      if ($(this).next().length > 0) {
        $(this).next().removeClass("active");
      }
      $(this).removeClass("active");
    } else {
      if ($(this).next().length > 0) {
        $(this).next().addClass("active");
      }

      // $(".m_depth1 > li > strong").next().removeClass("active");
      $(".m_depth1 > li").removeClass("active");
      $(this).addClass("active");
    }
  });

  /* 블러 영역 클릭 시 메뉴 닫힘 */
  $(".bgblur").click(function () {
    // 모바일 메뉴 닫기
    $(".btn_menu").removeClass("open");
    $(".m_header_area").hide();
  });
});
/* ready end */
