import React, { Component } from "react";
import './Info.css';
import { HashRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle, faChevronLeft, faHome, faEnvelope, faPhone, faClock, faTimesCircle, faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import Button from 'react-bootstrap/Button';
import OurModal from '../Modal/Modal';
import Review from '../Review/Review';
import firebase from "firebase";
import placeholder from '../../placeholder.png';
import ModalAuth from "../ModalAuth/ModalAuth"

const afterEditingState = {
  item: {},
  show1: false,
  show2: false,
  authModal: false,
  showTextbox: false,
  reviewText: '',
  locationReviews: [],
  wheelchair: false,
  ada: false,
  stadium: false,
  braille: false,
  dn: false,
  ad: false,
  cc: false,
  als: false
}

class Info extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: {},
      show1: false,
      show2: false,
      authModal: false,
      showTextbox: false,
      reviewText: '',
      locationReviews: []
    }
  }

  componentWillMount() {
    let num = this.props.location.pathname.split("/")[2];
    this.setState({ item: this.props.itemsToDisplay[num] });
    {
      this.props.crowdsourcingData &&
        Object.entries(this.props.crowdsourcingData).map((d, i) => {
          if (d[0] == this.props.itemsToDisplay[num].uniqueID) {
            Object.entries(d[1]).forEach((r, i) => {
              this.setState({ [r[0]]: Object.keys(r[1]).length })
            })
          }
        })
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.crowdsourcingData != this.props.crowdsourcingData) {
      this.setState(
        afterEditingState
        , () => {
          this.updateCrowdsourcing();
        });
    }
  }

  componentDidMount() {
    let num = this.props.location.pathname.split("/")[2];
    this.setState({ item: this.props.itemsToDisplay[num] });
  }

  updateCrowdsourcing = () => {
    let num = this.props.location.pathname.split("/")[2];
    this.setState({ item: this.props.itemsToDisplay[num] });
    {
      this.props.crowdsourcingData &&
      Object.entries(this.props.crowdsourcingData).map((d, i) => {
        if (d[0] == this.props.itemsToDisplay[num].uniqueID) {
          Object.entries(d[1]).forEach((r, i) => {
            this.setState({ [r[0]]: Object.keys(r[1]).length })
          })
        }
      })
    }
  }

  handleCrowdsource = (crowdsource, f) => {
    Object.entries(crowdsource).forEach((c, i) => {
      let placeID = this.state.item.uniqueID;
      let placeRef = firebase.database().ref('crowdsourcing/' + placeID);
      const crowdsourceRef = placeRef.child(c[0] + "/" + firebase.auth().currentUser.uid);
      crowdsourceRef.once('value').then(function (snap) {
        if (c[1] === true) {
          crowdsourceRef.set({ val: 1 })
        } else {
          crowdsourceRef.remove()
        }
      })
    })
  }

  mobilityCheck() {
    if (this.state.item.wheelchair) {
      return faCheckCircle;
    } else if (this.state.wheelchair || this.state.ada || this.state.stadium) {
      return faCheckCircle;
    } else {
      return faTimesCircle;
    }
  }

  hideModal2 = () => {
    this.setState({ show2: false });
  }

  toggleBoth = () => {
    this.toggleModal1();
    this.toggleModal2();
  }

  crowdSourceAuth = () => {
    if (!!this.props.fbAuth.currentUser) {
      this.toggleModal1();
    } else {
      this.setState({ authModal: true })
    }
  }

  toggleModal1 = () => {
    this.setState({ show1: !this.state.show1 });
  }

  toggleModal2 = () => {
    this.setState({ show2: !this.state.show2 });
  }

  toggleReview = () => {
    if (!!this.props.fbAuth.currentUser) {
      this.setState({ showTextbox: !this.state.showTextbox })
    } else {
      this.setState({ authModal: true })
    }
  }

  hideAuthModal = () => {
    this.setState({ authModal: false })
  }

  handleChange = (e) => {
    this.setState({ reviewText: e.target.value });
  }

  addReview = () => {
    let n = new Date();
    let y = n.getFullYear();
    let m = n.getMonth() + 1;
    let d = n.getDate();
    let h = n.getHours() > 12 ? n.getHours() - 12 : n.getHours();
    let min = n.getMinutes() < 10 ? "0" + n.getMinutes() : n.getMinutes();
    let ampm = n.getHours() >= 12 ? "PM" : "AM";
    let currentDate = "" + m + "/" + d + "/" + y + " " + h + ":" + min + ampm;
    let currentUser = "";
    if (!this.props.username) {
      currentUser = "Anonymous"
    } else {
      currentUser = this.props.username;
    }

    let review = {
      reviewContent: this.state.reviewText,
      username: currentUser,
      date: currentDate
    }

    let placeID = this.state.item.uniqueID;
    let placeRef = firebase.database().ref('reviews/' + placeID);

    placeRef.push({
      reviewContent: this.state.reviewText,
      username: currentUser,
      datePosted: currentDate,
      time: firebase.database.ServerValue.TIMESTAMP,
      likes: 0,
      locationName: this.state.item.name
    });
    this.setState({ reviewText: '' });
  }

  renderReviews() {
    let showReviews = [];
    {
      this.props.reviews && Object.entries(this.props.reviews).map((d, i) => {
        if (d[0] == this.state.item.uniqueID) {
          Object.values(d[1]).forEach((r, i) => {
            showReviews.unshift(<Review id={i} text={r.reviewContent} date={r.datePosted} username={r.username} />)
          })
        }
      })
    }
    return showReviews;
  }

  render() {
    let item = this.state.item;
    return (
      <div className="left-view" id="info-view">
        <div className="infoHeader flex" id="info-Header" >
          <img className="infoImgPlaceholder" src={placeholder} alt="location" />
          <div className="locationDetails info">
            <Link to="/list" id="back-button" className="btn btn-outline-primary rounded-pill">
              <FontAwesomeIcon icon={faChevronLeft} aria-label="back"/>
            </Link>
            <h2>{item.name}</h2>
            <h6 className="text-secondary">{item.type}</h6>
            <div className="flex info-details">
              <FontAwesomeIcon icon={faHome} className="fa-fw" aria-label="address" />
              <a className="info-link" href={"http://maps.google.com/?q=" + item.longAddress}>{item.longAddress}</a>
            </div>
            <div className="flex info-details">
              <FontAwesomeIcon icon={faEnvelope} className="fa-fw" aria-label="website" />
              <a className="info-link" href={item.website}>{item.website}</a>
            </div>
            <div className="flex info-details">
              <FontAwesomeIcon icon={faPhone} className="fa-fw" aria-label="phone" />
              <a className="info-link" href={"tel:" + item.phone}>{item.phone}</a>
            </div>
            <div className="flex hours-link info-details">
              <FontAwesomeIcon icon={faClock} className="fa-fw" aria-label="hours" />
              Hours: {item.hours}
            </div>
          </div>
        </div>
        <div class="info">
          <Button id="edit" variant="outline-primary" className="rounded-pill" onClick={() => this.crowdSourceAuth()}>Edit</Button>
          <ModalAuth authModal={this.state.authModal}
            hideAuthModal={this.hideAuthModal}
            renderLocations={this.props.renderLocations}
          />
          <OurModal show1={this.state.show1}
            show2={this.state.show2}
            toggleModal1={this.toggleModal1}
            toggleModal2={this.toggleModal2}
            toggleBoth={this.toggleBoth}
            handleCrowdsource={this.handleCrowdsource}
            crowdsourcingData={this.props.crowdsourcingData}
            uniqueID={this.state.item.uniqueID}
            updateCrowdsourcing={this.updateCrowdsourcing}
            userID={firebase.auth().currentUser ? firebase.auth().currentUser.uid : ""}
          />
          <div className="flex">
            <h4>
              <FontAwesomeIcon icon={this.mobilityCheck()} className="icon" />
              Mobility related assistance
            </h4>
          </div>
          <ul className="list-group list-group-flush nobackground">
            <li className="list-group-item nobackground">
              <FontAwesomeIcon icon={this.mobilityCheck()} />
              Wheelchair accessible
              {this.state.wheelchair && this.state.item.wheelchair ? <div class="cs-num">OpenStreetMap and {this.state.wheelchair} person(s) endorsed this </div> : this.state.wheelchair ?
                <div class="cs-num"> {this.state.wheelchair} person(s) endorsed this </div> : this.state.item.wheelchair ? <div class="cs-num"> OpenStreetMap endorsed this </div> : <></>}
            </li>
            <li className="list-group-item nobackground">
              <FontAwesomeIcon icon={this.state.ada ? faCheckCircle : faTimesCircle} />
              ADA doorways
              {this.state.ada ? <div class="cs-num">{this.state.ada} person(s) endorsed this </div> : <></>}
            </li>
            <li className="list-group-item nobackground">
              <FontAwesomeIcon icon={this.state.stadium ? faCheckCircle : faTimesCircle} />
              Stadium seating
              {this.state.stadium ? <div class="cs-num">{this.state.stadium} person(s) endorsed this </div> : <></>}
            </li>
          </ul>
          <div className="flex">
            <h4>
              <FontAwesomeIcon icon={this.state.braille || this.state.dn ? faCheckCircle : faTimesCircle} className="icon" />
              Vision related assistance
            </h4>
          </div>
          <ul className="list-group list-group-flush nobackground">
            <li className="list-group-item nobackground">
              <FontAwesomeIcon icon={this.state.braille ? faCheckCircle : faTimesCircle} />
              Braille
              {this.state.braille ? <div class="cs-num">{this.state.braille} person(s) endorsed this </div> : <></>}
            </li>
            <li className="list-group-item nobackground">
              <FontAwesomeIcon icon={this.state.dn ? faCheckCircle : faTimesCircle} />
              Descriptive narration
              {this.state.dn ? <div class="cs-num">{this.state.dn} person(s) endorsed this </div> : <></>}
            </li>
          </ul>
          <div className="flex">
            <h4>
              <FontAwesomeIcon icon={this.state.ad || this.state.cc || this.state.als ? faCheckCircle : faTimesCircle} className="icon" />
              Hearing related assistance
            </h4>
          </div>
          <ul className="list-group list-group-flush nobackground">
            <li className="list-group-item nobackground">
              <FontAwesomeIcon icon={this.state.ad ? faCheckCircle : faTimesCircle} />
              Audio description
              {this.state.ad ? <div class="cs-num">{this.state.ad} person(s) endorsed this </div> : <></>}
            </li>
            <li className="list-group-item nobackground">
              <FontAwesomeIcon icon={this.state.cc ? faCheckCircle : faTimesCircle} />
              Closed captioning
              {this.state.cc ? <div class="cs-num">{this.state.cc} person(s) endorsed this </div> : <></>}
            </li>
            <li className="list-group-item nobackground">
              <FontAwesomeIcon icon={this.state.als ? faCheckCircle : faTimesCircle} />
              Assisted listening devices
              {this.state.als ? <div class="cs-num">{this.state.als} person(s) endorsed this </div> : <></>}
            </li>
          </ul>
          <hr />
          <div className="photos">
            <h4>Photos</h4>
            <div className="images">
              <img className="infoImg" src={placeholder} alt="placeholder" />
              <img className="infoImg" src={placeholder} alt="placeholder" />
              <img className="infoImg" src={placeholder} alt="placeholder" />
              <img className="infoImg" src={placeholder} alt="placeholder" />
            </div>
          </div>
          <hr />
          <div>
            <div className="flex reviewHeader">
              <h4 className="reviews-title">Reviews</h4>
              <div className="flex reviews-buttons">
                <button type="button" className="btn btn-outline-primary rounded-pill" id="write-review" onClick={this.toggleReview}>Write a Review</button>
                <ModalAuth authModal={this.state.authModal}
                  hideAuthModal={this.hideAuthModal}
                  renderLocations={this.props.renderLocations}
                />
              </div>
            </div>
            <form id="review-form" style={this.state.showTextbox ? { display: "block" } : { display: "none" }}>
              <div class="form-group">
                <textarea class="form-control" rows="3" id="review-input" onChange={this.handleChange} value={this.state.reviewText}></textarea>
                <button type="button" class="btn btn-primary rounded-pill" id="review-submit" onClick={this.addReview} disabled={this.state.reviewText == '' ? true : false}>Submit</button>
              </div>
            </form>
            <hr />
            <div id="reviews">
              {this.renderReviews()}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Info;
