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
        <div>
          <div id="info-Header" class="left-view">
            <img class="infoImgPlaceholder" src="/placeholder.png" alt="location" />
            <div class="locationDetails info">
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
          </div>
          <div class="flex">
              <h4><i id="mobility-icon-main-info" class="fas fa-times-circle icon"></i>
                  Mobility related assistance
              </h4>
          </div>
          <ul class="list-group list-group-flush nobackground">
              <li class="list-group-item nobackground"><i id="wheelchair-icon-main-info" class="fas fa-times-circle "></i>
                  Wheelchair accessible
              </li>
              <li class="list-group-item nobackground"><i class="fas fa-times-circle"></i>
                  ADA doorways
              </li>
              <li class="list-group-item nobackground"><i class="fas fa-times-circle"></i>
                  Stadium seating
              </li>
          </ul>
          <div class="flex">
              <h4><i class="fas fa-times-circle icon"></i>
                  Vision related assistance
              </h4>
          </div>
          <ul class="list-group list-group-flush nobackground">
              <li class="list-group-item nobackground"><i class="fas fa-times-circle"></i>
                  Braille
              </li>
              <li class="list-group-item nobackground"><i class="fas fa-times-circle"></i>
                  Descriptive narration
              </li>
          </ul>
          <div class="flex">
              <h4><i class="fas fa-times-circle icon"></i>
                  Hearing related assistance
              </h4>
          </div>
          <ul class="list-group list-group-flush nobackground">
              <li class="list-group-item nobackground"><i class="fas fa-times-circle"></i>
                  Audio description
              </li>
              <li class="list-group-item nobackground"><i class="fas fa-times-circle"></i>
                  Closed captioning
              </li>
              <li class="list-group-item nobackground"><i class="fas fa-times-circle"></i>
                  Assisted listening devices
              </li>
          </ul>
      </div>
      <hr>
      <div class="photos">
          <h4>Photos</h4>
          <div class="images">
              <img class="infoImg" src="img/placeholder.png" alt="placeholder">
              <img class="infoImg" src="img/placeholder.png" alt="placeholder">
              <img class="infoImg" src="img/placeholder.png" alt="placeholder">
              <img class="infoImg" src="img/placeholder.png" alt="placeholder">
          </div>
      </div>
      <hr>
      <div>
          <div class="flex reviewHeader">
              <h4 class="reviews-title">Reviews</h4>
              <div class="flex reviews-buttons">
                  <!-- <div class="search-bar">
                      <form id="review-search">
                          <input type="search">
                          <i class="fa fa-search" aria-label="search"></i>
                      </form>
                  </div> -->
                  <button type="button" class="btn btn-outline-primary rounded-pill" id="write-review">Write a Review</button>
              </div>
          </div>
          <form id="review-form" style="display:none;">
              <!-- <div class="form-group">
                  <textarea class="form-control" rows="3" id="review-input"></textarea>
                  <button type="button" class="btn btn-primary rounded-pill" id="review-submit">Submit</button>
              </div> -->
          </form>
          <hr>
          <div id="reviews">

          </div>
        </div>
    );
  }
}

export default Info;
