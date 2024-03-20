window.onload = function () {
    updatePageFromURL();
    bindPageClickEvents();
};

function bindPageClickEvents() {
    const pageLinks = document.querySelectorAll('.faq-pagenumber a');
    pageLinks.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();

            const pageNumber = parseInt(this.textContent);
            changePage(pageNumber);

            pageLinks.forEach(link => link.classList.remove('selected'));
            this.classList.add('selected');
        });
    });
}

function changePage(pageNumber) {
    currentPage = pageNumber;

    updateFAQSections();

    updateURL();
}

function updateFAQSections() {
    const allFAQSections = document.querySelectorAll('.faq-question');
        allFAQSections.forEach(section => {
            section.style.display = 'none';
        });

    const currentFAQSection = document.querySelector(`.faq-question${currentPage}`);
        if (currentFAQSection) {
            currentFAQSection.style.display = 'block';
        }
}

function updatePageFromURL() {
    const urlParams = new URLSearchParams(window.location.search);
    const initialPage = parseInt(urlParams.get('page')) || 1;

    currentPage = initialPage;
    updateFAQSections();

    const pageLinks = document.querySelectorAll('.faq-pagenumber a');
    pageLinks.forEach(link => link.classList.remove('selected'));
    pageLinks[currentPage - 1].classList.add('selected');
}

function updateURL() {
    window.history.pushState({}, document.title, window.location.pathname + `?page=${currentPage}`);
}



document.addEventListener('DOMContentLoaded', function () {
    const faqContainer = document.querySelector('.faq-containar');
    const buttons = document.querySelectorAll('.faq-frt_btn');
    let previousClickedButton = null;
    const allAnswers = document.querySelectorAll('.faq-frt_answer');
    const seletForm = document.querySelector('.select_form')
    const depth2 = document.querySelector('.faq-depth2');
    const selectTxt = document.querySelector('.select_txt');
    const searchInput = document.querySelector('.faq-search_input');
    const searchBtn = document.querySelector('.faq-search_btn');
    const pageLinks = document.querySelectorAll('.faq-pagenumber');


    const noResults = document.createElement('p');
    noResults.className = 'no-results-message';
    faqContainer.appendChild(noResults);
    noResults.style.display = 'none';


    if (searchInput && searchBtn) {
        searchInput.addEventListener('keypress', function (e) {
            if (e.key === 'Enter') {
                handleSearch();
            }
        });

        searchBtn.addEventListener('click', function () {
            handleSearch();
        });
    }


    allAnswers.forEach(answer => {
        answer.style.display = 'none';
    });

    buttons.forEach(button => {
        button.addEventListener('click', function () {
            const answer = this.nextElementSibling;
            const currentFractionation = this.parentElement;
            const nextFractionation = currentFractionation.nextElementSibling;
            const arrowDown = this.querySelector('.faq-arrow_down_icon')
            const frtText = this.querySelector('.frt-txt')

            if (answer.style.display === 'block') {
                answer.style.display = 'none';
                frtText.classList.remove('frt-txt_add')
                arrowDown.classList.remove('rotate-arrow');
                if (previousClickedButton) {
                    const nextFractionationOfPrevious = previousClickedButton.parentElement.nextElementSibling;
                    if (nextFractionationOfPrevious && nextFractionationOfPrevious.classList.contains('faq-fractionation')) {
                        nextFractionationOfPrevious.classList.add('hide-before');
                    }
                }
                previousClickedButton = null;
            } else {
                closeOtherAnswers();
                answer.style.display = 'block';
                frtText.classList.add('frt-txt_add')
                arrowDown.classList.add('rotate-arrow');
                if (previousClickedButton) {
                    const nextFractionationOfPrevious = previousClickedButton.parentElement.nextElementSibling;
                    if (nextFractionationOfPrevious && nextFractionationOfPrevious.classList.contains('faq-fractionation')) {
                        nextFractionationOfPrevious.classList.remove('hide-before');
                    }
                }
                previousClickedButton = this;
            }

            if (nextFractionation && nextFractionation.classList.contains('faq-fractionation')) {
                nextFractionation.classList.toggle('hide-before');
            }
        });
    });

  function closeOtherAnswers() {
        const allAnswers = document.querySelectorAll('.faq-frt_answer');
        allAnswers.forEach(answer => {
            answer.style.display = 'none';
        });

        const allArrows = document.querySelectorAll('.faq-arrow_down_icon');
        allArrows.forEach(arrow => {
            arrow.classList.remove('rotate-arrow');
        });

        const allFrtText = document.querySelectorAll('.frt-txt');
        allFrtText.forEach(frtText => {
            frtText.classList.remove('frt-txt_add')
        })
    }

    
    depth2.style.display = 'none';

    seletForm.addEventListener('click', function(event) {
        event.stopPropagation();
        
        if (depth2.style.display === 'none') {
            depth2.style.display = 'flex';
            depth2.classList.add('show-depth2');
            seletForm.classList.add('select-active');
        } else {
            depth2.style.display = 'none';
            depth2.classList.remove('show-depth2');
            seletForm.classList.remove('select-active');
        }
    });

    depth2.addEventListener('click', function(event) {
        if (event.target.tagName === 'P') {
            selectTxt.textContent = event.target.textContent.trim();
            depth2.style.display = 'none';
            depth2.classList.remove('show-depth2');
            seletForm.classList.remove('select-active');
        }
    });

    window.onclick = function(event) {
        if (depth2.style.display === 'flex' && !depth2.contains(event.target)) {
            depth2.style.display = 'none';
            seletForm.classList.remove('select-active');
        }
    };


    function displaynoResults(message) {
        if (noResults) {
            noResults.textContent = message;
            noResults.style.display = 'block';
        }
    }

    function handleSearch() {
        const searchKeyword = searchInput.value.trim().toLowerCase();
        if (searchKeyword) {
            filterResults(searchKeyword);
        } else {
            displaynoResults('검색 결과가 없습니다.');
        }
    }
    
    function filterResults(keyword) {
        const faqQuestions = document.querySelectorAll('.faq-question');
        let hasResults = false;
        
        faqQuestions.forEach(question => {
            const questionText = question.textContent.trim().toLowerCase();
            const faqFraction = question.parentElement.querySelector('.faq-fractionation');
    
            if (questionText.includes(keyword)) {
                question.style.display = 'block';
                if (faqFraction) {
                    faqFraction.style.display = 'block';
                }
                hasResults = true;
            } else {
                question.style.display = 'none';
                if (faqFraction) {
                    faqFraction.style.display = 'none';
                }
            }
        });
    
        if (!hasResults) {
            displaynoResults('검색 결과가 없습니다.');
        } else {
            if (noResults) {
                noResults.style.display = 'none';
            }
        }
    } 
});