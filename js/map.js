var map = L.map('map').setView([19.335615, -99.176892], 15);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([19.335615, -99.176892]).addTo(map)
    .bindPopup('SUCURSAL MEXICO: Calle Tres Zapotes No. 3D, Coyoacan, 04360 Ciudad de Mexico, CDMX.')
    .openPopup();

/*Mapa sucursal México
var map = L.map('map', {center: [19.335615, -99.176892],zoom: 10});

Marker y Popup sucursal México
L.marker([19.335615, -99.176892]).addTo(map)
    .bindPopup('SUCURSAL MEXICO: Calle Tres Zapotes No. 3D, Coyoacan, 04360 Ciudad de Mexico, CDMX.')
    .openPopup();*/