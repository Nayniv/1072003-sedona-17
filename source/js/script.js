var navMain = document.querySelector('.main-nav');
var navToggle = document.querySelector('.main-nav__toggle');
var buttonReview = document.querySelector('.review-form__button');
var popupReview = document.querySelector('.modal--review');
var closeReview = document.querySelector('.modal--close__button--review');
var popupError = document.querySelector('.modal--error');
var closeError = document.querySelector('.modal--close__button--error');
var form = document.querySelector('.review-form');
var firstname = document.querySelector('[name=firstname]');
var surname = document.querySelector('[name=surname]');
var tel = document.querySelector('[name=tel]');
var email = document.querySelector('[name=email]');

navMain.classList.remove('main-nav--nojs');
navMain.classList.add('main-nav--closed');
navMain.classList.remove('main-nav--opened');

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

/*function initMap() {
  var element = document.querySelector('.search-hotel__map');
  var options = {
    zoom: 8,
    center: { lat: 34.8528665, lng: -111.7952849 },
  };

  var myMap = new google.maps.Map(element, options);

  var marker = new google.maps.Marker({
    position: { lat: 34.8528665, lng: -111.7952849 },
    map: myMap,
    icon: 'img/icon-map-marker.svg'
  });

  <!-- <script src="js/map.js"></script>
  <script async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyC7b0vPYDgVIOWR54wvFVY7fDKWioabxno&callback=initMap"></script> -->
}*/
