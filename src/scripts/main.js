'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

const form = document.querySelector('.questions__form');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  form.reset();
});

const featureItems = document.querySelectorAll('.feature');
const featuresContent = document.querySelector('.features__content');

const featuresList = document.createElement('ul');

featuresList.className = 'features__items--notDesktop';

featuresList.innerHTML
= `<div class ="features__container"> ${Array.from(featureItems).map(el => {
    return `<li>${el.innerHTML}</li>`;
  }).join('')} </div>`;

featuresContent.append(featuresList);

const next = document.querySelector('.slide-switch__button--next');
const container = document.querySelector('.features__container');
const count = document.querySelector('.slide-switch__text--start');

let countClickNext = 1;

next.addEventListener('click', () => {
  prev.removeAttribute('disabled');
  container.style.transform = `translateX(${-260 * countClickNext}px)`;
  countClickNext++;

  if (countClickNext === 3) {
    next.setAttribute('disabled', true);
  };

  count.innerText = `0${countClickNext}`;
});

const prev = document.querySelector('.slide-switch__button--prev');

prev.addEventListener('click', () => {
  next.removeAttribute('disabled');
  container.style.transform = `translateX(${-260 * (countClickNext - 2)}px)`;
  countClickNext--;

  if (countClickNext === 1) {
    prev.setAttribute('disabled', true);
  }

  count.innerText = `0${countClickNext}`;
});

const toggleLang = document.querySelector('.header__checkbox');
let lang = 'en';

toggleLang.addEventListener('change', () => {
  const langUa = '.ua';
  const langEn = '.en';

  const style = document.createElement('style');

  style.innerHTML = lang === 'en'
    ? `@media (min-width: 640px)
      {${langUa}{display: block} ${langEn}{display: none}}`
    : `@media (min-width: 640px) 
      {${langEn}{display: block} ${langUa}{display: none}}`;
  document.head.appendChild(style);
  lang = lang === 'en' ? 'ua' : 'en';
});
