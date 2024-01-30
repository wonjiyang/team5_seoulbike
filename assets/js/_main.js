$(document).ready(function () {
    // 챗봇 버튼 클릭 시 챗봇 박스 토글
    $('.chatbot-buttonimg').click(function () {
        $('.chatbotbox').toggle()
        $('.chatbot-buttonimg').toggleClass('remove')
    })
    // .bikeinfo-box 요소에 대한 클릭 이벤트 리스너 설정
    var bikeInfoBox = document.querySelector('.bikeinfo-box')
    var bikeInfoLayout = document.querySelector('.bikeinfo-layout')
    var mapArea = document.querySelector('#map') // #map 요소 선택
    bikeInfoBox.addEventListener('click', function (event) {
        bikeInfoLayout.style.display = 'block' // .bikeinfo-layout 요소를 보이게 함
        this.classList.add('add') // 클릭한 .bikeinfo-box에 'add' 클래스 추가
        event.stopPropagation() // 이벤트 버블링 방지
    })
    bikeInfoLayout.addEventListener('click', function (event) {
        event.stopPropagation() // .bikeinfo-layout 내부 클릭 시 이벤트 버블링 방지
    })
    // #map 영역에 클릭 이벤트 리스너를 추가
    mapArea.addEventListener('click', function () {
        bikeInfoLayout.style.display = 'none' // #map 영역 클릭 시 .bikeinfo-layout 요소를 숨김
        bikeInfoBox.classList.remove('add') // 'add' 클래스 제거는 선택적
    })

})