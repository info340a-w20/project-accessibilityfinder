let state = {
    displayedListItems: [],
    chosenInfoItem: {},
    inputtedText: '',
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

document.getElementById('search').addEventListener('input', function(input) {
    state.inputtedText = input.target.value;
    update();
});

function update() {
    document.getElementById('search').value = state.inputtedText;
    console.log(state.inputtedText);
}

function callDataByAmenityOverPass(amenityFromClient) {
    let strLatLong = mapBoundOverpass();
    let homeDiv = document.getElementById("left-view-home");
    homeDiv.style.display = "none";

    let amenity = amenityFromClient;
    let listDiv = document.getElementById("left-view-list");
    listDiv.style.display = "block";


    // amenity = document.getElementById("search").value;

    fetch('https://www.overpass-api.de/api/interpreter?data=[out:json];node[amenity=' + amenity + '](' + strLatLong + ');out%20meta;')
        .then((response) => {
            return response.json();
        })
        .then((myJson) => {
            console.log(myJson.elements);
            state.displayedListItems = myJson.elements;
            populateList();
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
// function callDataByName() {
//
//     name = document.getElementById("search").value;
//
//     fetch('https://www.overpass-api.de/api/interpreter?data=[out:json];node[name~"' + name + '"](47.481002,-122.459696,47.734136,-122.224433);out%20meta;')
//         .then((response) => {
//             return response.json();
//         })
//         .then((myJson) => {
//             console.log(myJson.elements);
//         });
// }
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

    name = document.getElementById("search").value;
    //https://nominatim.openstreetmap.org/search?q=target&format=json&viewbox=-122.459696,47.481002,-122.224433,47.734136&bounded=1
    fetch('https://nominatim.openstreetmap.org/search?q=' + name +'&format=json&viewbox=-122.459696,47.481002,-122.224433,47.734136&bounded=1&extratags=1&addressdetails=1')
        .then((response) => {
            return response.json();
        })
        .then((myJson) => {
            console.log(myJson);
            data = myJson;
            state.displayedListItems = myJson;
            populateList();
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

// function convertJson(obj) {
//     let convertedObj = {
//         name: '',
//         type: '',
//         address: '',
//         addressShort: '',
//         wheelchair: '',
//         website: '',
//         phone: '',
//     };
//     obj.forEach(function(e) {
//         if(obj[0].license != null) {
//             convertedObj.name = e.address.test;
//             convertedObj.type = e.type;
//             convertedObj.address = e.address.house_number + " " + e.address.road + ", " + e.address.city + ", " + e.address.state + " " + e.address.postcode;
//             convertedObj.addressShort = e.address.house_number + " " + e.address.road;
//             convertedObj.wheelchair = e.extratags.wheelchair;
//             convertedObj.website = e.extratags.website;
//             convertedObj.phone = e.extratags.phone;
//         } else {
//             convertedObj.name = e.tags.name;
//             convertedObj.type = e.tags.amenity;
//             convertedObj.address = e.tags["addr:housenumber"] + " " + e.tags["addr:street"] + ", " + e.tags["addr:city"] + " " + e.tags["addr:postcode"];
//             convertedObj.addressShort = e.tags["addr:housenumber"] + " " + e.tags["addr:street"];
//             convertedObj.wheelchair = e.tags.wheelchair;
//             convertedObj.website = e.tags.website;
//             convertedObj.phone = e.tags.phone;
//         }
//         state.displayedListItems.push(convertedObj);
//     });
// }

function placeMarker(place) {
    console.log(place);
    // let marker = L.marker([place.lat,place.lon]).addTo(myMap);
    // let popup = L.popup()
    // popup.setContent(place.tags.name);
    // marker.bindPopup(popup).openPopup();

}

function populateList() {
    document.getElementById('list').innerHTML = "";
    state.displayedListItems.forEach(function(e, i) {
        if (i % 3 == 0) {
            let row = document.createElement('div');
            row.classList.add('row');
            document.getElementById('list').appendChild(row);
        }
        let col = document.createElement('div');
        col.classList.add('col');
        let name = '';
        let type = '';
        let addr = '';
        let mobilityCheck = '';
        if (e.licence != null) {
            name = e.address[Object.keys(e.address)[0]];
            type = (e.type.charAt(0).toUpperCase() + e.type.substring(1)).replace(/_/g, ' ');
            addr = e.address.house_number != null ? e.address.house_number + " " + e.address.road : "Address unavailable";
            mobilityCheck = e.extratags.wheelchair != null ? "<i class=\"fas fa-check-circle\"></i>" : "<i class=\"fas fa-times-circle\"></i>";
        } else {
            name = e.tags.name;
            type = e.tags.amenity.charAt(0).toUpperCase() + e.tags.amenity.substring(1);
            addr = e.tags["addr:housenumber"] != null ? e.tags["addr:housenumber"] + " " + e.tags["addr:street"] : "Address unavailable";
            mobilityCheck = e.tags.wheelchair != null ? "<i class=\"fas fa-check-circle\"></i>" : "<i class=\"fas fa-times-circle\"></i>";
        }
        let content = `
            <div class="card" onclick="toggleDisplayInfo()">
                <img class="card-img-top" src="img/placeholder.png" alt="location">
                <div class="card-body">
                    <h5 class="card-title">` + name + `</h5>
                    <p class="card-text text-secondary">`
                        + type +
                        `<br />
                        <a href="#" class="card-link">` + addr + `</a>
                    </p>
                    <div class="features">
                        <span>` + mobilityCheck + `Mobility</span>
                        <span><i class="fas fa-times-circle"></i>Vision</span>
                        <span><i class="fas fa-times-circle"></i>Hearing</span>
                    </div>
                </div>
            </div>
        `;
        col.innerHTML = content;
        let row = document.querySelectorAll('.row');
        row[row.length - 1].appendChild(col);
        let marker = L.marker([e.lat,e.lon]).addTo(myMap);
        let popup = L.popup();
        popup.setContent(name);
        marker.bindPopup(popup).openPopup();
    });
}
