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
