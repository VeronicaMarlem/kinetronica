var map2 = L.map('map2').setView([20.086148, -98.772565], 15);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map2);

L.marker([20.086148, -98.772565]).addTo(map2)
    .bindPopup('SUCURSAL TEC PACHUCA: Andador 5 No. 16 esquina con Andador 8, Col. Venta Prieta Infonavit, Pachuca de Soto, Hgo.Hgo.')
    .openPopup();




/*Mapa sucursal Tec Pachuca
var map2 = L.map('map2', {center: [20.086148, -98.772565],zoom: 13});

//Marker y Popup sucursal Tec Pachuca
L.marker([20.086148, -98.772565]).addTo(map2)
    .bindPopup('SUCURSAL TEC PACHUCA: Andador 5 No. 16 esquina con Andador 8, Col. Venta Prieta Infonavit, Pachuca de Soto, Hgo.Hgo.')
    .openPopup();*/