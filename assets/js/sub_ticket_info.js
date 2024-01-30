// 만든거 일단 가져옴

$(function () {
  // 토큰 콘텐츠
  function toggleContent() {
    var viewportWidth = window.innerWidth;

    // Check the viewport width and toggle classes accordingly
    if (viewportWidth >= 1024) {
      $(".tic-for-m").addClass("hidden");
      $(".tic-for-d").removeClass("hidden");
    } else {
      $(".tic-for-m").removeClass("hidden");
      $(".tic-for-d").addClass("hidden");
    }
  }

  // Initial toggle check
  toggleContent();

  // Toggle content on window resize
  $(window).resize(function () {
    toggleContent();
  });
});
