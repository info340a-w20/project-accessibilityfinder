import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './AmenityNav.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { HashRouter as Router, Switch, Route, Link } from 'react-router-dom';
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

  // handleAmenitySearch = (amenity) => {
  //   console.log("Passed all the way down");
  //   this.props.handleAmenitySearch(amenity);
  // }




  render() {
    return (
      <div id="category">
        <Link className="no-background-btn" type="button" onClick={(e) => this.props.handleAmenitySearch("restaurant")}>
          <span className="fa-stack fa-3x">
            <FontAwesomeIcon icon={faCircle} className="fa-stack-2x icon-background" onclick="callDataByAmenityOverPass('restaurant')" />
            <FontAwesomeIcon icon={faUtensils} className="fa-stack-1x" />
          </span>
          <br />
          <span>Restaurant</span>
        </Link>
        <Link className="no-background-btn" type="button" onClick={(e) => this.props.handleAmenitySearch("bar")}>
          <span className="fa-stack fa-3x">
            <FontAwesomeIcon icon={faCircle} className="fa-stack-2x icon-background" onclick="callDataByAmenityOverPass('bar')" />
            <FontAwesomeIcon icon={faGlassMartini} className="fa-stack-1x" />
          </span>
          <br />
          <span>Bar</span>
        </Link>
        <Link className="no-background-btn" type="button" onClick={(e) => this.props.handleAmenitySearch("cafe")}>
          <span className="fa-stack fa-3x">
            <FontAwesomeIcon icon={faCircle} className="fa-stack-2x icon-background" onclick="callDataByAmenityOverPass('cafe')" />
            <FontAwesomeIcon icon={faCoffee} className="fa-stack-1x" />
          </span>
          <br />
          <span>Cafe</span>
        </Link>
        <Link to ="/list" className="no-background-btn" type="button" onClick={(e) => this.props.handleAmenitySearch("cinema")}>
          <span className="fa-stack fa-3x">
            <FontAwesomeIcon icon={faCircle} className="fa-stack-2x icon-background" onclick="callDataByAmenityOverPass('cinema')" />
            <FontAwesomeIcon icon={faFilm} className="fa-stack-1x" />
          </span>
          <br />
          <span>Movie</span>
        </Link>
        <Link className="no-background-btn" type="button" onClick={(e) => this.props.handleAmenitySearch("theatre")}>
          <span className="fa-stack fa-3x">
            <FontAwesomeIcon icon={faCircle} className="fa-stack-2x icon-background" onclick="callDataByAmenityOverPass('theatre')" />
            <FontAwesomeIcon icon={faTheaterMasks} className="fa-stack-1x" />
          </span>
          <br />
          <span>Entertainment</span>
        </Link>
      </div>
    )
  }
}
