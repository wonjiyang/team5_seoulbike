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

$(function() { 
    initMap(); 
});

function initMap() {
    var map = new naver.maps.Map('map', {
        center: new naver.maps.LatLng(37.50294848228215, 127.02284710156980),
        zoom: 16
    });

    // 마커 정보 정의
    var markersInfo = [
        { position: new naver.maps.LatLng(37.504678975306454, 127.02507115055475), title: "신논현역 4번 출구", content: "정보 내용", number: "23" },
        { position: new naver.maps.LatLng(37.503283707385826, 127.02476794307636), title: "신논현역 7번 출구", content: "정보 내용", number: "28" },
        { position: new naver.maps.LatLng(37.50417055795581, 127.0238787848778), title: "신논현역 9번 출구", content: "정보 내용", number: "11" },
    ];

    var infoWindow;

    // 각 마커 생성 및 이벤트 처리
    markersInfo.forEach(function(markerInfo) {
        var marker = new naver.maps.Marker({
            position: markerInfo.position,
            map: map,
            title: markerInfo.title,
            icon: {
                content: 
                '<div style="position: relative; width: 32px; height: 32px; text-align: center;">  <img src="./images/main/marker.png" alt="" style="width: 100%; height: auto;"><span style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); color: $subcolor; font-size: 15px; font-weight: 700;">' + markerInfo.number + '</span></div>',
                size: new naver.maps.Size(32, 32),
                anchor: new naver.maps.Point(16, 32)
            }
        });

        var marker = new naver.maps.Marker({
            position: markerInfo.position,
            map: map,
            title: markerInfo.title,
            icon: {
                content: 
                '<div class="marker-content">' + 
                '<img src="./images/main/marker.png" alt="" style="width: 100%; height: auto;">' +
                '<span>' + markerInfo.number + '</span>' +
                '</div>',
                size: new naver.maps.Size(32, 32),
                anchor: new naver.maps.Point(16, 32)
            }
        });

        // 마커 클릭 이벤트 처리
        naver.maps.Event.addListener(marker, 'click', function() {
            if (infoWindow) {
                infoWindow.close();
            }
            infoWindow = new naver.maps.InfoWindow({
                content: markerInfo.content
            });
            infoWindow.open(map, marker);
        });                  
    });

    // 지도 클릭 시 정보 창 닫기
    naver.maps.Event.addListener(map, 'click', function() {
        if (infoWindow) {
            infoWindow.close();
        }
    });
}

