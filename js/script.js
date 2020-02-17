// function callData() {
    
//     amenity = document.getElementById("search").value;

//     fetch('https://www.overpass-api.de/api/interpreter?data=[out:json];node[amenity=' + amenity + '](47.481002,-122.459696,47.734136,-122.224433);out%20meta;')
//         .then((response) => {
//             return response.json();
//         })
//         .then((myJson) => {
//             console.log(myJson.elements);
//         });
// }

// function callDataByName() {
    
//     name = document.getElementById("search").value;

//     fetch('https://www.overpass-api.de/api/interpreter?data=[out:json];node[name="' + name + '"](47.481002,-122.459696,47.734136,-122.224433);out%20meta;')
//         .then((response) => {
//             return response.json();
//         })
//         .then((myJson) => {
//             console.log(myJson.elements);
//         });
// }

function callDataByName() {

    var listDiv = document.getElementById("left-view-list");
    listDiv.style.display = "block";

    var homeDiv = document.getElementById("left-view-home");
    homeDiv.style.display = "none";
    
    name = document.getElementById("search").value;
    https://nominatim.openstreetmap.org/search?q=target&format=json&viewbox=-122.459696,47.481002,-122.224433,47.734136&bounded=1
    fetch('https://nominatim.openstreetmap.org/search?q=' + name +'&format=json&viewbox=-122.459696,47.481002,-122.224433,47.734136&bounded=1&extratags=1')
        .then((response) => {
            return response.json();
        })
        .then((myJson) => {
            console.log(myJson);
        });
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

// var mymap = L.map('mapid').setView([51.505, -0.09], 13);
// L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
//     attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
//     maxZoom: 18,
//     id: 'mapbox/streets-v11',
//     tileSize: 512,
//     zoomOffset: -1,
//     accessToken: 'your.mapbox.access.token'
// }).addTo(mymap);


// function displayDivs {
//     $('a.showlink').click(function(){
//         var toShow = this.id.substr(5);
//         $('div.section:visible').fadeOut(600, function(){
//             $('#' + toShow).fadeIn(600);
//         });
//     });
// }