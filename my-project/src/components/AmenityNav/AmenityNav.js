import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './AmenityNav.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { HashRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom';
import { faCircle, faUtensils, faGlassMartini, faCoffee, faFilm, faTheaterMasks } from '@fortawesome/free-solid-svg-icons';

export class AmenityNav extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="category">
        <Link to ="/list" className="no-background-btn" type="button" onClick={(e) => this.props.handleAmenitySearch("restaurant")}>
          <span className="fa-stack fa-3x">
            <FontAwesomeIcon icon={faCircle} className="fa-stack-2x icon-background" />
            <FontAwesomeIcon icon={faUtensils} className="fa-stack-1x" />
          </span>
          <br />
          <span>Restaurant</span>
        </Link>
        <Link to ="/list" className="no-background-btn" type="button" onClick={(e) => this.props.handleAmenitySearch("bar")}>
          <span className="fa-stack fa-3x">
            <FontAwesomeIcon icon={faCircle} className="fa-stack-2x icon-background" />
            <FontAwesomeIcon icon={faGlassMartini} className="fa-stack-1x" />
          </span>
          <br />
          <span>Bar</span>
        </Link>
        <Link to ="/list" className="no-background-btn" type="button" onClick={(e) => this.props.handleAmenitySearch("cafe")}>
          <span className="fa-stack fa-3x">
            <FontAwesomeIcon icon={faCircle} className="fa-stack-2x icon-background" />
            <FontAwesomeIcon icon={faCoffee} className="fa-stack-1x" />
          </span>
          <br />
          <span>Cafe</span>
        </Link>
        <Link to ="/list" className="no-background-btn" type="button" onClick={(e) => this.props.handleAmenitySearch("cinema")}>
          <span className="fa-stack fa-3x">
            <FontAwesomeIcon icon={faCircle} className="fa-stack-2x icon-background" />
            <FontAwesomeIcon icon={faFilm} className="fa-stack-1x" />
          </span>
          <br />
          <span>Movie</span>
        </Link>
        <Link to ="/list" className="no-background-btn" type="button" onClick={(e) => this.props.handleAmenitySearch("theatre")}>
          <span className="fa-stack fa-3x">
            <FontAwesomeIcon icon={faCircle} className="fa-stack-2x icon-background" />
            <FontAwesomeIcon icon={faTheaterMasks} className="fa-stack-1x" />
          </span>
          <br />
          <span>Entertainment</span>
        </Link>
      </div>
    )
  }
}
