const insuranceBefore = [
    { Before : '1.'},
    { Before : '2.'},
    { Before : '3.'},
    { Before : '4.'},
]

const c3p1Elements = document.querySelectorAll('.c3_c-p-1');

for (i = 0; i < insuranceBefore.length; i++) {
    const beforeElement = document.createElement('span');
    beforeElement.classList.add('c3-before-content');
    beforeElement.textContent = insuranceBefore[i].Before;
    c3p1Elements[i].insertBefore(beforeElement, c3p1Elements[i].firstChild);
}