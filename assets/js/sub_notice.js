const numberArr = [
    {number : 1, text : '기후동행카드 관련 안내사항', date : '2024.01.26'},
    {number : 2, text : '[안내] 겨울철 따릉이 안전하게 타기', date : '2023.12.19'},
    {number : 3, text : '[안내] 티머니고 앱 결제건 관련 안내', date : '2023.11.06'},
    {number : 4, text : '[안내] 따릉이 안전매너 가이드', date : '2023.10.30'},
    {number : 5, text : '자전거 보험 안내', date : '2022.10.12'},
    {number : 6, text : '[긴급] 따릉이 대여 다수 실패발생할 경우', date : '2023.03.15'},
    {number : 7, text : '개인정보 제공안내', date : '2019.03.11'},
    {number : 8, text : '기후동행카드 관련 안내사항', date : '2024.01.25'},
    {number : 9, text : '2608. 송파구청 대여소 임시 폐쇄(예정) 안내', date : '2024.01.22'},
    {number : 10, text : '574. 아차산역4번출구 대여소 임시 폐쇄 안내', date : '2024.01.16'},
    {number : 11, text : 'H포인트 전환서비스 오픈안내', date : '2024.01.10'},
    {number : 12, text : '1816. 금천폭포공원 앞 대여소 임시 폐쇄 안내', date : '2023.12.26'},
    {number : 13, text : '1748. 방학역 1번출구 대여소 영구 폐쇄(예정) 안내', date : '2023.12.14'},
    {number : 14, text : '270. 증권거래소후문교차로 대여소 임시 폐쇄 안내', date : '2023.11.22'},
    {number : 15, text : '647. 신이문역 1번출구 대여소 영구 폐쇄 안내', date : '2023.11.20'},
    {number : 16, text : '1465.중랑공영차고지 옆 대여소 영구 폐쇄 안내', date : '2023.11.09'},
    {number : 17, text : '2528.함지박 사거리 대여소 영구 폐쇄 안내', date : '2023.11.01'},
    {number : 18, text : '1071.명일근린공원공동체텃밭 대여소 영구 폐쇄 안내', date : '2023.10.30'},
    {number : 19, text : '2395. 개포1단지아파트 입구 (보도육교) 대여소 영구폐쇄(예정) 안내', date : '2023.10.30'},
    {number : 20, text : '1664. 노해근린공원내 대여소 임시 폐쇄 안내', date : '2023.10.20'},
    {number : 21, text : '2527.반포중학교 앞(세화여고 맞은편) 대여소 임시 폐쇄 안내', date : '2023.10.04'},
    {number : 22, text : '125. 서강대 남문 옆 대여소 영구 폐쇄(예정) 안내', date : '2023.09.21'},
    {number : 23, text : '2317. 삼성도로공원 대여소 임시 폐쇄 안내', date : '2023.08.24'},
    {number : 24, text : '509. 이마트 버스정류소 옆 대여소 영구폐쇄 안내', date : '2023.08.18'},
    {number : 25, text : '5094. 호돌이공원 대여소 영구 폐쇄 안내', date : '2023.08.04'},
    {number : 26, text : '따릉이앱 기능 안내드립니다.', date : '2023.07.07'},
    {number : 27, text : '1617. 하계동 중평어린이공원 앞 대여소 임시 폐쇄 안내', date : '2023.06.05'},
    {number : 28, text : '1035. 고덕역 4번출구 대여소 임시 폐쇄 안내', date : '2023.06.05'},
    {number : 29, text : '1026. 대명초교 입구 교차로 대여소 임시 폐쇄 안내', date : '2023.05.29'},
    {number : 30, text : '3403.서울특별시 교육청 대여소 영구 폐쇄 안내', date : '2023.05.12'},
    {number : 31, text : '4339.한국콜마종합기술원 앞 대여소 영구 폐쇄(예정) 안내', date : '2023.04.09'},
    {number : 32, text : '[안내] 따릉이와 함께하는 자전거 이용매너', date : '2023.04.07'},
    {number : 33, text : '972. 수색역 대여소 영구 폐쇄 안내', date : '2023.03.31'},
    {number : 34, text : '1568.4.19민주묘지 입구사거리 대여소 임시 폐쇄 안내', date : '2023.03.28'},
    {number : 35, text : '764. 목동청소년수련관 대여소 임시 폐쇄 안내', date : '2023.02.27'},
    {number : 36, text : '2220. 반포본동 주민센터 앞 대여소 영구 폐쇄 안내', date : '2022.12.05'},
    {number : 37, text : '790.화곡고가 사거리 대여소 임시 폐쇄 안내', date : '2022.07.28'},
    {number : 38, text : '2113. 관악동작견인차량보관소 대여소 임시 폐쇄 안내', date : '2022.04.21'},
    {number : 39, text : '[안내] 임시잠금 해제 안될 경우 및 유의사항', date : '2022.04.15'},
    {number : 40, text : '[안내] 따릉이를 이용한 배달 대행 등 영리행위 금지', date : '2022.03.25'},
    {number : 41, text : '211. 여의도역 4번출구 옆 대여소 임시 폐쇄 안내', date : '2022.03.18'},
    {number : 42, text : '253. 신풍역 5번출구 인근 대여소 임시 폐쇄 안내', date : '2021.12.28'},
    {number : 43, text : '3779. 유광사여성병원 대여소 임시 폐쇄 안내', date : '2021.11.16'},
    {number : 44, text : '3603. 삼성역 2번출구 대여소 임시 폐쇄 안내', date : '2021.10.27'},
    {number : 45, text : '2355. 삼성역 5~6번 출구 사이 대여소 임시 폐쇄 안내', date : '2021.10.27'},
    {number : 46, text : '2322. 삼성역 3번 출구 대여소 임시 폐쇄 안내', date : '2021.10.27'},
    {number : 47, text : '2316. 삼성역 8번출구 대여소 임시 폐쇄 안내', date : '2021.10.27'},
    {number : 48, text : '3605. 봉은사역6번출구(현대아이파크타워앞) 대여소 임시 폐쇄 안내', date : '2021.06.30'},
    {number : 49, text : '3605. 봉은사역 6번출구 대여소 임시폐쇄 안내', date : '2021.06.22'},
    {number : 50, text : '리뉴얼 앱 오픈 안내', date : '2021.03.11'},
    {number : 51, text : '[안내] 새싹따릉이 안전이용 동영상 안내', date : '2021.01.22'},
    {number : 52, text : '유실물 처리 관련 공지사항', date : '2020.10.08'},
    {number : 53, text : '「교통사망사고 줄이기」따릉이 안전수칙 안내', date : '2023.05.09'},
    {number : 54, text : '[안내] 대여, 임시잠금 해제가 안 되시는 경우', date : '2023.06.15'}
]
let currentNumber = [...numberArr]
const noticesPerPage = 15
let currentPage = 1

function renderData(page) {
    const noticeContainer = document.getElementById('notice1container');
    noticeContainer.innerHTML = '';
    const startIndex = (page - 1) * noticesPerPage
    const endIndex = startIndex + noticesPerPage
    const dataNotices = currentNumber.slice(startIndex, endIndex)

    if (dataNotices.length === 0) {
        const noResultsMessage = document.createElement('p');
        noResultsMessage.classList.add('search-Results')
        noResultsMessage.textContent = '검색 결과를 찾을 수 없습니다.';
        noticeContainer.appendChild(noResultsMessage);
        return;
    }

    dataNotices.forEach((item) => {
        const noticeDiv = document.createElement('div');
        noticeDiv.classList.add('notice-arr');
        const noticeNumTD = document.createElement('div')
        noticeNumTD.classList.add('notice-num_t_d')
        const noticeNumT = document.createElement('div')
        noticeNumT.classList.add('notice-num_t')

        noticeNumT.innerHTML = `
            <span class="notice-arr_number">${item.number}</span>
            <a href="#" class="notice-arr_text" data-number="${item.number}">${item.text}</a>
        `
        noticeNumTD.appendChild(noticeNumT)

        noticeNumTD.innerHTML += `<span class="notice-arr_date">${item.date}</span>`;
        
        // noticeDiv.onclick = () => showNoticeDetail(item)
        noticeContainer.appendChild(noticeDiv)
        noticeDiv.appendChild(noticeNumTD)
        
        for (let i = 0; i < numberArr.length; i++) {
            const itemNumber = numberArr[i].number;
            
            if (itemNumber >= 1 && itemNumber <= 5) {
                const noticeArrText = document.querySelector(`.notice-arr_text[data-number="${itemNumber}"]`);
                if (noticeArrText) {
                    noticeArrText.classList.add('notice-arr_text_c');
                }
            }
        }
    })
}

function renderPagination() {
    const pageNumber = document.getElementById('pagenumber');
    pageNumber.innerHTML = ''
    const pageCount = Math.ceil(currentNumber.length / noticesPerPage)
    for (let i = 1; i <= pageCount; i++) {
        const pageNum = document.createElement('a')
        pageNum.classList.add('pagenum')
        pageNum.textContent = i
        if (i === currentPage) pageNum.classList.add('selected')
        pageNum.addEventListener('click', () => {
            currentPage = i
            renderData(currentPage)
            renderPagination()
        })
        pageNumber.appendChild(pageNum)
    }
}

function searchNotices() {
    const searchInput = document.querySelector('.notice-input')

    const keyword = searchInput.value.toLowerCase()

    currentNumber = numberArr.filter(
        (notice) =>
            notice.text.toLowerCase().includes(keyword)
    )
    currentPage = 1
    renderData(currentPage)
    renderPagination()
}

document.addEventListener('DOMContentLoaded', () => {
    renderData(currentPage);
    renderPagination();
    
    const searchButton = document.querySelector('.notice-search_btn');
    searchButton.addEventListener('click', searchNotices);

    const searchInput = document.querySelector('.notice-input');
    searchInput.addEventListener('keypress', function (e) {
        if (e.key === 'Enter') searchNotices();
    });
});