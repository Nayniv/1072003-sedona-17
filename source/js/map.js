var myMap;

ymaps.ready(function() {
  var myMap = new ymaps.Map('map', {
      center: [34.8528665, -111.7952849],
      zoom: 9
    }, {
      searchControlProvider: 'yandex#search'
    }),

    // Создаём макет содержимого.
    MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
      '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
    ),

    myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
      hintContent: 'Sedona',
      balloonContent: 'Sedona'
    }, {
      // Опции.
      // Необходимо указать данный тип макета.
      iconLayout: 'default#image',
      // Своё изображение иконки метки.
      iconImageHref: 'img/icon-map-marker.svg',
      // Размеры метки.
      iconImageSize: [27, 27]
    });

  myMap.geoObjects.add(myPlacemark)
});
