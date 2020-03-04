import React, { Component } from "react";
import './Info.css';
import { HashRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faHome, faEnvelope, faPhone, faClock } from '@fortawesome/free-solid-svg-icons';

class Info extends Component {
    constructor(props) {
        super(props);
    }

    render() {
      let len = this.props.location.pathname.length;
      let item = this.props.itemsToDisplay[this.props.location.pathname[len-1]];
      return (
        <div class="locationDetails info">
          <img class="infoImgPlaceholder" src="/placeholder.png" alt="location" />
          <button type="button" id="back-button" onClick="toggleDisplayList()" class="btn btn-outline-primary rounded-pill">
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>
          <h2>{item.name}</h2>
          <h6 class="text-secondary">{item.type}</h6>
          <div class="flex info-details">
            <FontAwesomeIcon icon={faHome} className="fa-fw margin-right" aria-hidden="true" />
            <a class="stretched-link info-link" href="">{item.longAddress}</a>
          </div>
          <div class="flex info-details">
            <FontAwesomeIcon icon={faEnvelope} className="fa-fw" aria-hidden="true" />
            <a class="info-link" href="">{item.website}</a>
          </div>
          <div class="flex info-details">
            <FontAwesomeIcon icon={faPhone} className="fa-fw" aria-hidden="true" />
            <a class="info-link" href="">{item.phone}</a>
          </div>
          <div class="flex hours-link info-details">
            <FontAwesomeIcon icon={faClock} className="hours-link" aria-hidden="true" />
            Hours: {item.hours}
          </div>
        </div>
    );
  }
}

export default Info;
