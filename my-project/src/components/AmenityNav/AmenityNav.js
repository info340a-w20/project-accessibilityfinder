import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './AmenityNav.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle, faUtensils, faGlassMartini, faCoffee, faFilm, faTheaterMasks } from '@fortawesome/free-solid-svg-icons';

export class AmenityNav extends Component {
  constructor(props) {
    super(props);
  }

  callDataByAmenityOverPass(amenityFromClient) {
      // let strLatLong = mapBoundOverpass();
      // let homeDiv = document.getElementById("left-view-home");
      // homeDiv.style.display = "none";
      //
      // let amenity = amenityFromClient;
      // let listDiv = document.getElementById("left-view-list");
      // listDiv.style.display = "block";
      //
      // fetch('https://www.overpass-api.de/api/interpreter?data=[timeout:1][out:json];node[amenity=' + amenity + '](' + strLatLong + ');out%20meta;')
      //     .then((response) => {
      //         return response.json();
      //     })
      //     .then((myJson) => {
      //         state.displayedListItems = myJson.elements;
      //         renderMarker();
      //         populateList();
      //     });
  }

  render() {
    return (
      <div id="category">
        <button className="no-background-btn" type="button" onclick="callDataByAmenityOverPass('restaurant')">
          <span className="fa-stack fa-3x">
            <FontAwesomeIcon icon={faCircle} className="fa-stack-2x icon-background" />
            <FontAwesomeIcon icon={faUtensils} className="fa-stack-1x" />
          </span>
          <br />
          <span>Restaurant</span>
        </button>
        <button className="no-background-btn" type="button" onclick="callDataByAmenityOverPass('bar')">
          <span className="fa-stack fa-3x">
            <FontAwesomeIcon icon={faCircle} className="fa-stack-2x icon-background" />
            <FontAwesomeIcon icon={faGlassMartini} className="fa-stack-1x" />
          </span>
          <br />
          <span>Bar</span>
        </button>
        <button className="no-background-btn" type="button" onclick="callDataByAmenityOverPass('cafe')">
          <span className="fa-stack fa-3x">
            <FontAwesomeIcon icon={faCircle} className="fa-stack-2x icon-background" />
            <FontAwesomeIcon icon={faCoffee} className="fa-stack-1x" />
          </span>
          <br />
          <span>Cafe</span>
        </button>
        <button className="no-background-btn" type="button" onclick="callDataByAmenityOverPass('cinema')">
          <span className="fa-stack fa-3x">
            <FontAwesomeIcon icon={faCircle} className="fa-stack-2x icon-background" />
            <FontAwesomeIcon icon={faFilm} className="fa-stack-1x" />
          </span>
          <br />
          <span>Movie</span>
        </button>
        <button className="no-background-btn" type="button" onclick="callDataByAmenityOverPass('theatre')">
          <span className="fa-stack fa-3x">
            <FontAwesomeIcon icon={faCircle} className="fa-stack-2x icon-background" />
            <FontAwesomeIcon icon={faTheaterMasks} className="fa-stack-1x" />
          </span>
          <br />
          <span>Entertainment</span>
        </button>
      </div>
    )
  }
}
