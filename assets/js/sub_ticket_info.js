// 만든거 일단 가져옴

$(document).ready(function () {
  // Toggle button click event
  $("#toggleButton").on("click", function () {
    // Toggle the 'hidden' class on the content div
    $("#content").toggleClass("hidden");
  });

  // 토큰 콘텐츠
  function toggleContent() {
    var viewportWidth = window.innerWidth;

    // Check the viewport width and toggle classes accordingly
    if (viewportWidth <= 600) {
      $("#tableContent").addClass("hidden");
      $("#listContent").removeClass("hidden");
    } else {
      $("#tableContent").removeClass("hidden");
      $("#listContent").addClass("hidden");
    }
  }

  // Initial toggle check
  toggleContent();

  // Toggle content on window resize
  $(window).resize(function () {
    toggleContent();
  });
});
