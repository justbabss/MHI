var nigeria = L.marker([9.081999, 8.675277]).bindPopup("Nigeria");
var liberia = L.marker([6.428055, -9.429499]).bindPopup("Liberia");
var sierraLeone = L.marker([8.460555, -11.779889]).bindPopup("Sierra Leone");

var map = L.map('map').setView([9.081999, 8.675277], 6);


L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

var locations = L.layerGroup([nigeria, liberia, sierraLeone]);
locations.addTo(map);
