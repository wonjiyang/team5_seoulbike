const searchBtn = document.querySelector('.notice-search_btn')

searchBtn.addEventListener('click', function () {
    location.href = 'http://127.0.0.1:5501/sub_notice.html'
})



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
]

const container = document.getElementById('notice1container');

numberArr.forEach(item => {
    const noticeDiv = document.createElement('div');
    noticeDiv.classList.add('notice-arr');

    const noticeNumT = document.createElement('div');
    noticeNumT.classList.add('notice-num_t');

    const noticeNumTD = document.createElement('div');
    noticeNumTD.classList.add('notice-num_t_d');


    const numberArrNumber = document.createElement('p');
    numberArrNumber.classList.add('notice-arr_number');
    numberArrNumber.textContent = item.number;

    const numberArrText = document.createElement('p');
    numberArrText.classList.add('notice-arr_text');

    const ntcTextlink = document.createElement('a');
    ntcTextlink.href = 'http://127.0.0.1:5501/sub_notice.html';
    ntcTextlink.textContent = item.text;
    numberArrText.appendChild(ntcTextlink);


    noticeNumT.appendChild(numberArrNumber);
    noticeNumT.appendChild(numberArrText);

    for (let i = 1; i <= 5; i++) {
        if (item.number === i) {
            numberArrText.classList.add(`notice-arr_text_c`);
        }
    }

    noticeNumTD.appendChild(noticeNumT);

    const numberArrDate = document.createElement('p');
    numberArrDate.classList.add('notice-arr_date');
    numberArrDate.textContent = item.date;

    noticeNumTD.appendChild(numberArrDate);
    noticeDiv.appendChild(noticeNumTD);
    container.appendChild(noticeDiv);
});



const pageNumberArr = [
    { number : 1},
    { number : 2},
    { number : 3},
    { number : 4},
    { number : 5},
    { number : 6},
]

const pageNumber = document.getElementById('pagenumber');

function updateMaxPageNumber() {
    const viewportWidth = window.innerWidth;
    const maxPageNumber = (viewportWidth <= 375) ? 4 : 6;
    return maxPageNumber;
}

function renderPageNumbers() {
    pageNumber.innerHTML = '';
    const maxPageNumber = updateMaxPageNumber();

    pageNumberArr.forEach(item => {
        if (item.number <= maxPageNumber) {
            const pageNumberP = document.createElement('p');
            pageNumberP.classList.add('pagenum');

            const pgnbLink = document.createElement('a');
            pgnbLink.href = `sub_notice.html?page=${item.number}`;
            pgnbLink.textContent = item.number;

            const currentPageNumber = localStorage.getItem('selectedPageNumber');

            if (currentPageNumber === item.number.toString()) {
                pgnbLink.classList.add('selected');
                pgnbLink.addEventListener('click', (event) => {
                    event.preventDefault();
                });
            } else {
                pgnbLink.addEventListener('click', () => {
                    localStorage.setItem('selectedPageNumber', item.number);
                });
            }

            pageNumberP.appendChild(pgnbLink);
            pageNumber.appendChild(pageNumberP);
        }
    });
}

renderPageNumbers();

window.addEventListener('resize', renderPageNumbers);