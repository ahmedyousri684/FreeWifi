'use strict';

const mb = document.querySelector('.menu .icon');
const ml = document.querySelector('.menu .menu__link');
mb.addEventListener('click', function () {
    ml.classList.toggle('open');
    ml.classList.toggle('active');
});
