let state = {
    displayedListItems: [],
    chosenInfoItem: {},
    inputtedText: ''
}
let myMap = L.map('leaflet-map').setView([47.606209, -122.332069], 10);
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiYW1pdDE3IiwiYSI6ImNrNnJibmF2bzA0ZXgzbG11dzNkcmh5YWsifQ.tfSRkB3YoUJPPIlc0UxuZQ', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoiYW1pdDE3IiwiYSI6ImNrNnJibmF2bzA0ZXgzbG11dzNkcmh5YWsifQ.tfSRkB3YoUJPPIlc0UxuZQ'
}).addTo(myMap);



function callDataByAmenityOverPass(amenityFromClient) {
    let strLatLong = mapBoundOverpass();

    let amenity = amenityFromClient;
    let listDiv = document.getElementById("left-view-list");
    listDiv.style.display = "block";

    let homeDiv = document.getElementById("left-view-home");
    homeDiv.style.display = "none";

    // amenity = document.getElementById("search").value;

    fetch('https://www.overpass-api.de/api/interpreter?data=[out:json];node[amenity=' + amenity + '](' + strLatLong + ');out%20meta;')
        .then((response) => {
            return response.json();
        })
        .then((myJson) => {
            console.log(myJson.elements);
        });
}

function mapBoundNomi() {
    let latlong = [];
    latlong.push(myMap.getBounds()._southWest);
    latlong.push(myMap.getBounds()._northEast);

    let strLatLong = "" + latlong[0].lng + "," + latlong[0].lat + "," + latlong[1].lng + "," + latlong[1].lat;
    return strLatLong;


}

function mapBoundOverpass() {
    let latlong = [];
    latlong.push(myMap.getBounds()._southWest);
    latlong.push(myMap.getBounds()._northEast);
    console.log(latlong);

    let strLatLong = "" + latlong[0].lat + "," + latlong[0].lng + "," + latlong[1].lat + "," + latlong[1].lng;
    return strLatLong;

}

function callDataByName() {

    let strLatLong = mapBoundNomi();
 
    let listDiv = document.getElementById("left-view-list");
    listDiv.style.display = "block";

    let homeDiv = document.getElementById("left-view-home");
    homeDiv.style.display = "none";
    let data = {};

    name = document.getElementById("search").value;
    //https://nominatim.openstreetmap.org/search?q=target&format=json&viewbox=-122.459696,47.481002,-122.224433,47.734136&bounded=1
    fetch('https://nominatim.openstreetmap.org/search?q=' + name + '&format=json&viewbox=' + strLatLong + '&bounded=1&extratags=1')
        .then((response) => {
            return response.json();
        })
        .then((myJson) => {
            console.log(myJson);
            data = myJson;
        });

    console.log(data);
}

function toggleDisplayInfo() {
    let listDiv = document.getElementById("left-view-list");
    listDiv.style.display = "none";

    let infoDiv = document.getElementById("left-view-info");
    infoDiv.style.display = "block";

}


// function callDataByName() {

//     name = document.getElementById("search").value;
//     https://nominatim.openstreetmap.org/search?q=target&format=json&viewbox=-122.459696,47.481002,-122.224433,47.734136&bounded=1
//     fetch('https://nominatim.openstreetmap.org/search?q=[' + name +']&format=json&viewbox=-122.459696,47.481002,-122.224433,47.734136&bounded=1&extratags=1')
//         .then((response) => {
//             return response.json();
//         })
//         .then((myJson) => {
//             console.log(myJson);
//         });
// }


// let myMap = () => L.map('leaflet-map').setView([47.606209, -122.332069], 10).then(myMap => {
//     L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
//         attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
//         maxZoom: 18,
//         id: 'mapbox/streets-v11',
//         tileSize: 512,
//         zoomOffset: -1,
//         accessToken: 'your.mapbox.access.token'
//     }).addTo(mymap);
// })

// let map = document.getElementById("map-outer");
// let leaflet = document.createElement('div');
// leaflet.classList.add('leaflet-map');
// map.appendChild(leaflet).







// function displayDivs {
//     $('a.showlink').click(function(){
//         var toShow = this.id.substr(5);
//         $('div.section:visible').fadeOut(600, function(){
//             $('#' + toShow).fadeIn(600);
//         });
//     });
// }
