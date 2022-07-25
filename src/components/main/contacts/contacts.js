let map2307 = document.getElementById('map-2307');

if (map2307) {
    let scriptMap = document.createElement('script');
    scriptMap.src = 'https://api-maps.yandex.ru/2.1/?apikey=dd0f5e76-e8bb-42be-b558-f7af3b491cd2&lang=ru_RU';
    setTimeout(() => document.head.append(scriptMap), 0);
    scriptMap.onload = function () {
        ymaps.ready(init);
    };

    function init() {
        var myMap = new ymaps.Map("map-2307", {
            center: [59.972271, 30.481347],
            zoom: 14,
            controls: []
        });
        myMap.controls.add('zoomControl', {
            float: 'none',
            position: {
                top: '40px',
                right: '20px'
            }
        });
        var myPlacemark = new ymaps.Placemark([59.972271, 30.481347], {}, {
            iconLayout: 'default#image',
            iconImageHref: '../img/main/contacts/map_point.png',
            iconImageSize: [40, 40],
            iconImageOffset: [-25, -25]
        });
        myMap.geoObjects.add(myPlacemark);
    }
}