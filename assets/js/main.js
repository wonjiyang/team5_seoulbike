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

    // 공통 스타일 설정
    var contentStyle1 = 'width: 180px; height: 40px; line-height: 2.7; font-size: 14px; font-weight: 500; text-align: center; background-color: #3D5567; color: #FFF;';
    var contentStyle2 = 'width: 180px; height: 80px; padding: 10px 29px;';
    var contentStyle3 = 'width: 150px; font-size: 13px; color: #555555; font-weight: 400;';

    // 마커 정보 정의
    var markersInfo = [
        { position: new naver.maps.LatLng(37.504678975306454, 127.02507115055475), title: "신논현역 4번 출구", content: '<div style="' + contentStyle1 + '">신논현역 4번 출구</div><div style="' + contentStyle2 + '"><p style="' + contentStyle3 + '">현재 위치에서 104m</p><p style="' + contentStyle3 + '">대여 가능한 자전거 : 2</p><p style="' + contentStyle3 + '">반납 가능한 거치대 : 8</p></div>', number: "2" },
        { position: new naver.maps.LatLng(37.503283707385826, 127.02476794307636), title: "신논현역 7번 출구", content: '<div style="' + contentStyle1 + '">신논현역 7번 출구</div><div style="' + contentStyle2 + '"><p style="' + contentStyle3 + '">현재 위치에서 129m</p><p style="' + contentStyle3 + '">대여 가능한 자전거 : 7</p><p style="' + contentStyle3 + '">반납 가능한 거치대 : 3</p></div>', number: "7" },
        { position: new naver.maps.LatLng(37.50417055795581, 127.0238787848778), title: "신논현역 9번 출구", content: '<div style="' + contentStyle1 + '">신논현역 9번 출구</div><div style="' + contentStyle2 + '"><p style="' + contentStyle3 + '">현재 위치에서 141m</p><p style="' + contentStyle3 + '">대여 가능한 자전거 : 1</p><p style="' + contentStyle3 + '">반납 가능한 거치대 : 9</p></div>', number: "1" },
        { position: new naver.maps.LatLng(37.499054924605765, 127.0273894974288), title: "강남역 11번 출구", content: '<div style="' + contentStyle1 + '">강남역 11번 출구</div><div style="' + contentStyle2 + '"><p style="' + contentStyle3 + '">현재 위치에서 206m</p><p style="' + contentStyle3 + '">대여 가능한 자전거 : 4</p><p style="' + contentStyle3 + '">반납 가능한 거치대 : 6</p></div>', number: "4" },
        { position: new naver.maps.LatLng(37.49713083531913, 127.02674092376765), title: "강남역 9번 출구", content: '<div style="' + contentStyle1 + '">강남역 9번 출구</div><div style="' + contentStyle2 + '"><p style="' + contentStyle3 + '">현재 위치에서 247m</p><p style="' + contentStyle3 + '">대여 가능한 자전거 : 3</p><p style="' + contentStyle3 + '">반납 가능한 거치대 : 7</p></div>', number: "3" },
        { position: new naver.maps.LatLng(37.495207504971034, 127.02909080684327), title: "강남역 4번 출구", content: '<div style="' + contentStyle1 + '">강남역 4번 출구</div><div style="' + contentStyle2 + '"><p style="' + contentStyle3 + '">현재 위치에서 265m</p><p style="' + contentStyle3 + '">대여 가능한 자전거 : 8</p><p style="' + contentStyle3 + '">반납 가능한 거치대 : 2</p></div>', number: "8" },
        { position: new naver.maps.LatLng(37.50273163511194, 127.02116161073833), title: "서초4동 주민센터", content: '<div style="' + contentStyle1 + '">서초4동 주민센터</div><div style="' + contentStyle2 + '"><p style="' + contentStyle3 + '">현재 위치에서 407m</p><p style="' + contentStyle3 + '">대여 가능한 자전거 : 4</p><p style="' + contentStyle3 + '">반납 가능한 거치대 : 6</p></div>', number: "4" },
        { position: new naver.maps.LatLng(37.50461646459502, 127.01396045976747), title: "사평역 1번 출구", content: '<div style="' + contentStyle1 + '">사평역 1번 출구</div><div style="' + contentStyle2 + '"><p style="' + contentStyle3 + '">현재 위치에서 423m</p><p style="' + contentStyle3 + '">대여 가능한 자전거 : 1</p><p style="' + contentStyle3 + '">반납 가능한 거치대 : 9</p></div>', number: "1" },
        { position: new naver.maps.LatLng(37.503878593656125, 127.01510106433453), title: "사평역 2번 출구", content: '<div style="' + contentStyle1 + '">사평역 2번 출구</div><div style="' + contentStyle2 + '"><p style="' + contentStyle3 + '">현재 위치에서 452m</p><p style="' + contentStyle3 + '">대여 가능한 자전거 : 6</p><p style="' + contentStyle3 + '">반납 가능한 거치대 : 4</p></div>', number: "6" },
        { position: new naver.maps.LatLng(37.49843360998959, 127.01974488360658), title: "명달공원", content: '<div style="' + contentStyle1 + '">명달공원</div><div style="' + contentStyle2 + '"><p style="' + contentStyle3 + '">현재 위치에서 433m</p><p style="' + contentStyle3 + '">대여 가능한 자전거 : 5</p><p style="' + contentStyle3 + '">반납 가능한 거치대 : 5</p></div>', number: "5" },
        { position: new naver.maps.LatLng(37.508120656063255, 127.01188427273634), title: "반포역 1번 출구", content: '<div style="' + contentStyle1 + '">반포역 1번 출구</div><div style="' + contentStyle2 + '"><p style="' + contentStyle3 + '">현재 위치에서 484m</p><p style="' + contentStyle3 + '">대여 가능한 자전거 : 7</p><p style="' + contentStyle3 + '">반납 가능한 거치대 : 3</p></div>', number: "7" },
        { position: new naver.maps.LatLng(37.50737413975164, 127.0097828999944), title: "반포역 3번 출구", content: '<div style="' + contentStyle1 + '">반포역 3번 출구</div><div style="' + contentStyle2 + '"><p style="' + contentStyle3 + '">현재 위치에서 531m</p><p style="' + contentStyle3 + '">대여 가능한 자전거 : 4</p><p style="' + contentStyle3 + '">반납 가능한 거치대 : 6</p></div>', number: "4" },
        { position: new naver.maps.LatLng(37.50975796063328, 127.02197221743674), title: "논현역 3번 출구", content: '<div style="' + contentStyle1 + '">논현역 3번 출구</div><div style="' + contentStyle2 + '"><p style="' + contentStyle3 + '">현재 위치에서 453m</p><p style="' + contentStyle3 + '">대여 가능한 자전거 : 8</p><p style="' + contentStyle3 + '">반납 가능한 거치대 : 2</p></div>', number: "8" },
        { position: new naver.maps.LatLng(37.50847136624841, 127.02592419761257), title: "논현초등학교", content: '<div style="' + contentStyle1 + '">논현초등학교</div><div style="' + contentStyle2 + '"><p style="' + contentStyle3 + '">현재 위치에서 359m</p><p style="' + contentStyle3 + '">대여 가능한 자전거 : 6</p><p style="' + contentStyle3 + '">반납 가능한 거치대 : 4</p></div>', number: "6" },
        { position: new naver.maps.LatLng(37.50705528208045, 127.03272123885583), title: "언주역 1번 출구", content: '<div style="' + contentStyle1 + '">언주역 1번 출구</div><div style="' + contentStyle2 + '"><p style="' + contentStyle3 + '">현재 위치에서 831m</p><p style="' + contentStyle3 + '">대여 가능한 자전거 : 0</p><p style="' + contentStyle3 + '">반납 가능한 거치대 : 10</p></div>', number: "0" },
        { position: new naver.maps.LatLng(37.50015746117207, 127.03476973695598), title: "역삼역 3번 출구", content: '<div style="' + contentStyle1 + '">역삼역 3번 출구</div><div style="' + contentStyle2 + '"><p style="' + contentStyle3 + '">현재 위치에서 1,056m</p><p style="' + contentStyle3 + '">대여 가능한 자전거 : 3</p><p style="' + contentStyle3 + '">반납 가능한 거치대 : 7</p></div>', number: "3" },
    ];

    var infoWindow;

    // 각 마커 생성 및 이벤트 처리
    markersInfo.forEach(function(markerInfo) {
        var marker = new naver.maps.Marker({
            position: markerInfo.position,
            map: map,
            title: markerInfo.title,
            icon: {
                content: '<img src="./images/main/marker.png" alt="" style="width: 100%; height: auto;"><span style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); color: $subcolor; font-size: 15px; font-weight: 700;">' + markerInfo.number + '</span></div>',
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
