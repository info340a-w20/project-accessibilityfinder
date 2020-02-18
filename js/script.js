let state = {
    displayedListItems: [],
    chosenInfoItem: {},
    inputtedText: ''
}

document.getElementById('search').addEventListener('input', function(input) {
    state.inputtedText = input.target.value;
    update();
});

function update() {
    document.getElementById('search').value = state.inputtedText;
    console.log(state.inputtedText);
}

function callDataByAmenityOverPass(amenityFromClient) {
    let amenity = amenityFromClient;
    // amenity = document.getElementById("search").value;

    let listDiv = document.getElementById("left-view-list");
    listDiv.style.display = "block";

    let homeDiv = document.getElementById("left-view-home");
    homeDiv.style.display = "none";

    fetch('https://www.overpass-api.de/api/interpreter?data=[out:json];node[amenity=' + amenity + '](47.481002,-122.459696,47.734136,-122.224433);out%20meta;')
        .then((response) => {
            return response.json();
        })
        .then((myJson) => {
            console.log(myJson.elements);
            state.displayedListItems = myJson.elements;
            populateList();
        });
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

    let listDiv = document.getElementById("left-view-list");
    listDiv.style.display = "block";

    let homeDiv = document.getElementById("left-view-home");
    homeDiv.style.display = "none";

    name = document.getElementById("search").value;
    //https://nominatim.openstreetmap.org/search?q=target&format=json&viewbox=-122.459696,47.481002,-122.224433,47.734136&bounded=1
    fetch('https://nominatim.openstreetmap.org/search?q=' + name +'&format=json&viewbox=-122.459696,47.481002,-122.224433,47.734136&bounded=1&extratags=1&addressdetails=1')
        .then((response) => {
            return response.json();
        })
        .then((myJson) => {
            console.log(myJson);
            state.displayedListItems = myJson;
        });

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

function convertJson() {

}

function populateList() {
    state.displayedListItems.forEach(function(e, i) {
        if (i % 3 == 0) {
            let row = document.createElement('div');
            row.classList.add('row');
            document.getElementById('list').appendChild(row);
        }
        let col = document.createElement('div');
        col.classList.add('col');
        let mobilityCheck = e.tags.wheelchair != null ? "<i class=\"fas fa-check-circle\"></i>" : "<i class=\"fas fa-times-circle\"></i>";
        let addr = e.tags["addr:street"] != null ? e.tags["addr:housenumber"] + " " + e.tags["addr:street"] : "Address unavailable";
        let content = `
            <div class="card">
                <img class="card-img-top" src="img/placeholder.png" alt="location">
                <div class="card-body">
                    <h5 class="card-title">` + e.tags.name.replace(/^\w/, c => c.toUpperCase()) + `</h5>
                    <p class="card-text text-secondary">`
                        + e.tags.amenity +
                        `<br />
                        <a href="#" class="card-link">` + addr + `</a>
                    </p>
                    <div class="features">
                        <span>` + mobilityCheck + `Mobility</span>
                        <span><i class="fas fa-times-circle"></i>Vision</span>
                        <span><i class="fas fa-times-circle"></i>Hearing</span>
                    </div>
                    <a class="list-link stretched-link" href="#"></a>
                </div>
            </div>
        `;
        col.innerHTML = content;
        let row = document.querySelectorAll('.row');
        row[row.length - 1].appendChild(col);
    });
}
