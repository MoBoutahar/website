/* Documentatie op https://leafletjs.com/ */

/*map*/
let map = L.map('MoMap').setView([51.16940526138052, 4.39408672364546], 15);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 16,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

/*pinnetje*/
var marker = L.marker([51.16940526138052, 4.39408672364546]).addTo(map);

/*Pop-up*/
marker.bindPopup("<b>Bist 1, Wilrijk").openPopup();
