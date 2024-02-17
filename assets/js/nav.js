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

  /* 모바일 메뉴 오픈 상태 */
  // 모든 .m_depth2를 숨김
  $(".m_depth2").hide();

  // 240217 16:01
  // strong 태그를 클릭했을 때의 동작
  $(".m_depth1 > li > strong").click(function () {
    // 다른 strong 태그의 스타일을 초기화
    $(".m_depth1 > li > strong")
      .removeClass("active")
      .css("position", "static");
    $(".m_depth1 > li > strong::before").css("display", "none");
    $(".m_depth1 > li > strong::after").css("display", "none");

    // 클릭한 strong 태그에 스타일 적용
    $(this).addClass("active").css("position", "relative");
    $(this).find("::before").css("display", "block");
    $(this).find("::after").css("display", "block");

    // 클릭한 strong 태그의 부모 요소인 li 태그에만 active 클래스를 추가
    $(this).parent().toggleClass("active");

    // 클릭한 strong 태그의 부모 요소인 li 태그의 다음 형제 요소인 .m_depth2 요소에만 active 클래스를 추가하거나 제거
    $(this).parent().find(".m_depth2").toggleClass("active");

    // 클릭한 strong 태그의 부모 요소인 li 태그에서 해당 .m_depth2를 토글하여 보여주거나 숨김
    $(this).parent().find(".m_depth2").slideToggle();

    // 다른 .m_depth2를 숨김
    $(".m_depth2").not($(this).parent().find(".m_depth2")).hide();

    // 다른 strong 태그의 부모 요소인 li 태그에서 active 클래스를 제거
    $(".m_depth1 > li > strong").not(this).parent().removeClass("active");
  });
});
/* ready end */
