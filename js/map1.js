var map1 = L.map('map1').setView([20.104811, -98.747116], 15);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map1);

L.marker([20.104811, -98.747116]).addTo(map1)
    .bindPopup('SUCURSAL PACHUCA: Blvrd Everardo Marquez 300, Coscotitlan, 42094 Pachuca de Soto, Hgo.')
    .openPopup();

/*Mapa sucursal Pachuca
var map1 = L.map('map1', {center: [20.104811, -98.747116],zoom: 13});

//Marker y Popup sucursal Pachuca
L.marker([20.104811, -98.747116]).addTo(map1)
    .bindPopup('SUCURSAL PACHUCA: Blvrd Everardo Márquez 300, Coscotitlán, 42094 Pachuca de Soto, Hgo.')
    .openPopup();*/


