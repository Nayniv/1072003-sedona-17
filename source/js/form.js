var buttonReview = document.querySelector('.review-form__button');
var popupReview = document.querySelector('.modal--review');
var closeReview = document.querySelector('.modal__button--review');
var popupError = document.querySelector('.modal--error');
var closeError = document.querySelector('.modal__button--error');
var form = document.querySelector('.review-form');
var firstname = document.querySelector('[name=firstname]');
var surname = document.querySelector('[name=surname]');
var tel = document.querySelector('[name=tel]');
var email = document.querySelector('[name=email]');

form.addEventListener('submit', function(evt) {
  evt.preventDefault();
  if (firstname.value == 'Петр' || surname.value == 'Иванов' || tel.value == 'Введите телефон') {
    popupError.classList.remove('modal--close');
    popupError.classList.add('modal--show');
  } else {
    popupReview.classList.remove('modal--close');
    popupReview.classList.add('modal--show');
  }
});

closeReview.addEventListener('click', function(evt) {
  evt.preventDefault();
  popupReview.classList.add('modal--close');
});

closeError.addEventListener('click', function(evt) {
  evt.preventDefault();
  popupError.classList.add('modal--close');
});
