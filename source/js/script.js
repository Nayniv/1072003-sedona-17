var navMain = document.querySelector('.main-nav');
var navToggle = document.querySelector('.main-nav__toggle');
var buttonReview = document.querySelector('.review-form__button');
var popupReview = document.querySelector('.modal-review');
var closeReview = document.querySelector('.modal-close__button--review');
var popupError = document.querySelector('.modal-error');
var closeError = document.querySelector('.modal-close__button--error');
var form = document.querySelector('.review-form');
var firstname = form.querySelector('[name=firstname]');
var surname = form.querySelector('[name=surname]');
var tel = form.querySelector('[name=tel]');
var email = form.querySelector('[name=email]');

navMain.classList.remove('main-nav--nojs');

navToggle.addEventListener('click', function() {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
  }
});

form.addEventListener('submit', function(evt) {
  evt.preventDefault();
  if (firstname.value == 'Петр' || surname.value == 'Иванов' || tel.value == 'Введите телефон') {
    popupError.classList.remove('modal-close');
    popupError.classList.add('modal-show');
  } else {
    popupReview.classList.remove('modal-close');
    popupReview.classList.add('modal-show');
  }
});

closeReview.addEventListener('click', function(evt) {
  evt.preventDefault();
  popupReview.classList.add('modal-close');
});

closeError.addEventListener('click', function(evt) {
  evt.preventDefault();
  popupError.classList.add('modal-close');
});
