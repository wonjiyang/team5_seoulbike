const containEl = document.querySelector('.bikeinfo-layout')
const mapEl = document.querySelector('#map')
const bikeinfoEl = document.querySelector('.bikeinfo-layout')

$(document).ready(function(){
    $(".chatbot-buttonimg").click(function(){
        $(".chatbotbox").toggle();
      $(".chatbot-buttonimg").toggleClass("remove");
    });
});

$(document).ready(function(){
    $(".bikeinfo-box").click(function(){
        $(".bikeinfo-layout").toggle();
        $(".bikeinfo-box").toggleClass("add");
    });

containEl.addEventListener('click', event => {
    event.stopPropagation() // 이벤트 버블링 정지! - 드롭다운 메뉴 영역을 클릭했을 때 메뉴가 사라지지 않아야 함.
})
// 화면 전체를 클릭했을 때 메뉴가 사라짐.
mapEl.addEventListener('click', hideBikeinfo)

function hideBikeinfo() {
    bikeinfoEl.classList.add("hide")
  }
  
});