let state = {
    displayedListItems: [],
    chosenInfoItem: {},
    inputtedText: '',
    reviewText: '',
    reviewList: [],
    markers: [],
}

let myMap = L.map('leaflet-map').setView([47.606209, -122.332069], 13);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiYW1pdDE3IiwiYSI6ImNrNnJibmF2bzA0ZXgzbG11dzNkcmh5YWsifQ.tfSRkB3YoUJPPIlc0UxuZQ', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoiYW1pdDE3IiwiYSI6ImNrNnJibmF2bzA0ZXgzbG11dzNkcmh5YWsifQ.tfSRkB3YoUJPPIlc0UxuZQ'
}).addTo(myMap);

let input = document.getElementById('search');
console.log(input);
input.addEventListener('keyup', function (e) {
    if (e.key === "Enter") {
        callDataByName();
    }
});

document.getElementById('search').addEventListener('input', function (input) {
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

    fetch('https://www.overpass-api.de/api/interpreter?data=[timeout:1][out:json];node[amenity=' + amenity + '](' + strLatLong + ');out%20meta;')
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
    fetch('https://nominatim.openstreetmap.org/search?q=' + name + '&format=json&viewbox=-122.459696,47.481002,-122.224433,47.734136&bounded=1&extratags=1&addressdetails=1')
        .then((response) => {
            return response.json();
        })
        .then((myJson) => {
            console.log(myJson);
            data = myJson;
            state.displayedListItems = myJson;
            renderMarker();
            populateList();
        });

    console.log(data);
}

function renderMarker() {
    if (state.markers !== null) {
        myMap.eachLayer(function (layer) {
            if (layer._popup) {
                myMap.removeLayer(layer);
            }
        });
    }
}

// populates info page when card is clicked
function populateInfo(e, info) {
    console.log(e);
    console.log(info);

    if (info.addr == "Address unavailable") {
        info.longAddress = info.addr;
    }

    // let infoHeader = document.createElement('div');
    // infoHeader.classList.add('infoHeader', 'flex');

    let content = `
        <img class="infoImgPlaceholder" src = "img/placeholder.png" alt = "location">
        <div class="locationDetails info">
        <button type="button" id="back-button" onClick="toggleDisplayList()" class="btn btn-outline-primary rounded-pill">
        <i class="fas fa-chevron-left"></i>
    </button>
            <h2>` + info.name + `</h2>
            <h6 class="text-secondary">` + info.type + `</h6>
            <div class="flex info-details">
                <i class="fa fa-home fa-fw margin-right" aria-hidden="true"></i>
                <a class="streched-link info-link" href="">` + info.longAddress + `
                </a>
            </div>
        <div class="flex info-details"><i class="fa fa-envelope fa-fw" aria-hidden="true"></i>
            <a class="info-link" href="">
                ` + info.website + `</a>
        </div>
        <div class="flex info-details"><i class="fa fa-phone fa-fw" aria-hidden="true"></i>
            <a class="info-link" href="">` + info.phone + `</a>
        </div>
        <div class="flex hours-link info-details"><i class="fa fa-clock-o hours-link" aria-hidden="true"></i>
            Hours:` + info.hours + `
        </div>
        </div>
        `

    document.getElementById('info-Header').innerHTML = content;

    if (info.wheelchair) {
        document.getElementById('wheelchair-icon-main-info').classList.remove('fa-times-circle');
        document.getElementById('wheelchair-icon-main-info').classList.add('fa-check-circle');
        document.getElementById('mobility-icon-main-info').classList.remove('fa-times-circle');
        document.getElementById('mobility-icon-main-info').classList.add('fa-check-circle');
    }

        toggleDisplayInfo();
}
function toggleDisplayInfo() {
    let listDiv = document.getElementById("left-view-list");
    listDiv.style.display = "none";

    let infoDiv = document.getElementById("left-view-info");
    infoDiv.style.display = "block";
}

function toggleDisplayList() {
    let listDiv = document.getElementById("left-view-list");
    listDiv.style.display = "block";

    let infoDiv = document.getElementById("left-view-info");
    infoDiv.style.display = "none";
}

function populateList() {
    document.getElementById('list').innerHTML = "";
    if (state.displayedListItems.length == 0) {
        let div = document.createElement('div');
        div.textContent = "No results were found.";
        document.getElementById('list').appendChild(div);
    }
    state.displayedListItems.forEach(function (e, i) {
        // added limit to increase render speed
        if (i > 100) {
            return;
        }
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
        let longAddress = '';
        let website = '';
        let phone = '';
        let hours = '';
        if (e.licence != null) {
            name = e.address[Object.keys(e.address)[0]];
            type = (e.type.charAt(0).toUpperCase() + e.type.substring(1)).replace(/_/g, ' ');
            addr = e.address.house_number != null ? e.address.house_number + " " + e.address.road : "Address unavailable";
            mobilityCheck = e.extratags.wheelchair != null ? "<i class=\"fas fa-check-circle\"></i>" : "<i class=\"fas fa-times-circle\"></i>";
            longAddress = e.address.house_number + " " + e.address.road + ", " + e.address.city + ", " + e.address.state + " " + e.address.postcode;
            website = e.extratags.website != null ? e.extratags.website : "-";
            phone = e.extratags.phone != null ? e.extratags.phone : "-";
            hours = e.extratags.opening_hours != null ? e.extratags.opening_hours : "-";
            wheelchair = e.extratags.wheelchair;

        } else {
            name = e.tags.name;
            type = e.tags.amenity.charAt(0).toUpperCase() + e.tags.amenity.substring(1);
            addr = e.tags["addr:housenumber"] != null ? e.tags["addr:housenumber"] + " " + e.tags["addr:street"] : "Address unavailable";
            mobilityCheck = e.tags.wheelchair != null ? "<i class=\"fas fa-check-circle\"></i>" : "<i class=\"fas fa-times-circle\"></i>";
            longAddress = e.tags["addr:housenumber"] + " " + e.tags["addr:street"] + ", " + e.tags["addr:city"] + " " + e.tags["addr:postcode"];
            website = e.tags.website != null ? e.tags.website : "--";
            phone = e.tags.phone != null ? e.tags.phone : "--";
            hours = e.tags.opening_hours != null ? e.tags.opening_hours : "  --";
            wheelchair = e.tags.wheelchair;
        }


        let info = {
            name: name,
            type: type,
            addr: addr,
            wheelchair: wheelchair,
            longAddress: longAddress,
            website: website,
            phone: phone,
            hours: hours
        }
        let card = document.createElement('div');
        card.classList.add('card');
        card.addEventListener('click', () => populateInfo(e, info));
        let content = `
                <img class="card-img-top" src="img/placeholder.png" alt="location">
                <div class="card-body">
                    <h5 class="card-title">` + name + `</h5>
                    <p class="card-text text-secondary">` +
            type +
            `<br />` +
            addr +
            `</p>
                    <div class="features">
                        <span>` + mobilityCheck + `Mobility</span>
                        <span><i class="fas fa-times-circle"></i>Vision</span>
                        <span><i class="fas fa-times-circle"></i>Hearing</span>
                    </div>
                </div>
        `;
        card.innerHTML = content;
        col.appendChild(card);
        let row = document.querySelectorAll('.row');
        row[row.length - 1].appendChild(col);
        let marker = L.marker([e.lat, e.lon]).addTo(myMap);
        state.markers.push(marker);
        let popup = L.popup();
        popup.setContent(name);
        marker.bindPopup(popup).openPopup();
    });
}

// changes color of checkboxes when selected/deselected
function color(e) {
    let bk = e.querySelector(".icon-background");
    let ic = e.querySelector(".fa-stack-1x");
    if (bk.style.color == "lightgray") {
        bk.style.color = "blue";
        ic.style.color = "white";
    } else {
        bk.style.color = "lightgray";
        ic.style.color = "black";
    }
}

// displays review textbox when "write a review" button is clicked
document.getElementById('write-review').addEventListener('click', function () {
    let textbox = document.getElementById('review-form');
    if (textbox.style.display == "none") {
        textbox.style.display = "block";
    } else {
        textbox.style.display = "none";
    }
});

// enables/disables submit button in crowdsource modal
// https://stackoverflow.com/questions/20687884/disable-button-if-all-checkboxes-are-unchecked-and-enable-it-if-at-least-one-is
let checkBoxes = $('.features');
checkBoxes.change(function () {
    $('#cs-submit').prop('disabled', checkBoxes.filter(':checked').length < 1);
});
checkBoxes.change();


// <div class="review">
//     <div class="info">
//         <div class="flex reviewHeader">
//             <h5>Anonymous</h5>
//         </div>
//         <p class="timestamp"></p>
//         <p></p>
//     </div>
// </div>

// add review based off of ps-5 exercise-2
function renderReviews() {
    document.getElementById('reviews').innerHTML = '';
    state.reviewList.forEach(function (review) {
        let div = document.createElement('div');
        div.classList.add('review');
        let n = new Date();
        let y = n.getFullYear();
        let m = n.getMonth() + 1;
        let d = n.getDate();
        let h = n.getHours() - 12;
        let min = n.getMinutes() < 10 ? "0" + n.getMinutes() : n.getMinutes();
        let ampm = n.getHours() >= 12 ? "PM" : "AM";
        div.innerHTML = `
             <div class="info">
                 <div class="flex reviewHeader">
                     <h5>Anonymous</h5>
                 </div>
                 <p class="timestamp">` + m + "/" + d + "/" + y + " " + h + ":" + min + " " + ampm + `</p>
                 <p class="reviewContent">` + review.text + `</p>
             </div>
        `;
        document.getElementById('reviews').prepend(div);
    });
    renderInput();
}

renderReviews();

function addReview() {
    let num = 0;
    if (state.reviewList.length > 0) {
        num = state.reviewList[state.reviewList.length - 1].id + 1;
    }
    let review = {
        id: num,
        text: state.reviewText
    };
    state.reviewList.push(review);
    state.reviewText = '';
    renderReviews();
}

document.getElementById('review-submit').addEventListener('click', addReview);

document.getElementById('review-input').addEventListener('input', function (input) {
    state.reviewText = input.target.value;
    renderInput();
});

function renderInput() {
    document.getElementById('review-input').value = state.reviewText;
    document.getElementById('review-submit').disabled = state.reviewText == '' ? true : false;
}
