import React, { Component } from "react";
import './Info.css';
import { HashRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faHome, faEnvelope, faPhone, faClock, faTimesCircle, faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import Button from 'react-bootstrap/Button';
import OurModal from '../Modal/Modal';
import Review from '../Review/Review'

class Info extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: {},
      show1: false,
      show2: false,
      showTextbox: false,
      reviewText: '',
      reviewList: []
    }
  }

  componentDidMount() {
    let num = this.props.location.pathname.split("/")[2];
    this.setState({item: this.props.itemsToDisplay[num]});
  }

  mobilityCheck() {
    return this.state.item.wheelchair ? faCheckCircle : faTimesCircle ;
  }

  hideModal2 = () => {
    this.setState({show2:false});
  }

  toggleBoth = () => {
    this.toggleModal1();
    this.toggleModal2();
  }

  toggleModal1 = () => {
    this.setState({show1: !this.state.show1});
  }

  toggleModal2 = () => {
    this.setState({show2: !this.state.show2});
  }

  toggleReview = () => {
    this.setState({showTextbox: !this.state.showTextbox});
  }

  handleChange = (e) => {
    this.setState({reviewText: e.target.value});
  }

  addReview = () => {
    let obj = {}
    obj[this.state.item.name] = this.state.reviewText;
    this.setState(prevState => ({
      reviewList: [obj, ...prevState.reviewList]
    }));
    this.setState({reviewText: ''});
  }

  //prolly a better way to access key/value but it is late so brain is dead
  renderReviews() {
    let reviews = [];
    this.state.reviewList.forEach((item, i) => {
      if (Object.keys(item)[0] == this.state.item.name) {
        reviews.push(<Review text={Object.values(item)[0]} />);
      }
    });
    return reviews;
  }

  render() {
    let item = this.state.item;
    return (
      <div className="left-view" id="info-view">
        <div className="infoHeader flex" id="info-Header" >
          <img className="infoImgPlaceholder" src="/placeholder.png" alt="location" />
          <div className="locationDetails info">
            <Link to="/list" id="back-button" className="btn btn-outline-primary rounded-pill">
              <FontAwesomeIcon icon={faChevronLeft} />
            </Link>
            <h2>{item.name}</h2>
            <h6 className="text-secondary">{item.type}</h6>
            <div className="flex info-details">
              <FontAwesomeIcon icon={faHome} className="fa-fw" aria-hidden="true" />
              <a className="info-link" href="">{item.longAddress}</a>
            </div>
            <div className="flex info-details">
              <FontAwesomeIcon icon={faEnvelope} className="fa-fw" aria-hidden="true" />
              <a className="info-link" href="">{item.website}</a>
            </div>
            <div className="flex info-details">
              <FontAwesomeIcon icon={faPhone} className="fa-fw" aria-hidden="true" />
              <a className="info-link" href="">{item.phone}</a>
            </div>
            <div className="flex hours-link info-details">
              <FontAwesomeIcon icon={faClock} className="fa-fw" aria-hidden="true" />
              Hours: {item.hours}
            </div>
          </div>
        </div>
        <div class="info">
          <Button id="edit" variant="outline-primary" className="rounded-pill" onClick={() => this.toggleModal1()}>Edit</Button>
          <OurModal show1={this.state.show1}
                    show2={this.state.show2}
                    toggleModal1={this.toggleModal1}
                    toggleModal2={this.toggleModal2}
                    toggleBoth={this.toggleBoth}
          />
          <div className="flex">
              <h4>
                  <FontAwesomeIcon icon={this.mobilityCheck()} className="icon" />
                  Mobility related assistance
              </h4>
          </div>
          <ul className="list-group list-group-flush nobackground">
              <li className="list-group-item nobackground"
                  ><FontAwesomeIcon icon={this.mobilityCheck()} className="icon" />
                  Wheelchair accessible
              </li>
              <li className="list-group-item nobackground">
                  <FontAwesomeIcon icon={faTimesCircle} />
                  ADA doorways
              </li>
              <li className="list-group-item nobackground">
                  <FontAwesomeIcon icon={faTimesCircle} />
                  Stadium seating
              </li>
          </ul>
          <div className="flex">
              <h4>
                  <FontAwesomeIcon icon={faTimesCircle} className="icon" />
                  Vision related assistance
              </h4>
          </div>
          <ul className="list-group list-group-flush nobackground">
              <li className="list-group-item nobackground">
                  <FontAwesomeIcon icon={faTimesCircle} />
                  Braille
              </li>
              <li className="list-group-item nobackground">
                  <FontAwesomeIcon icon={faTimesCircle} />
                  Descriptive narration
              </li>
          </ul>
          <div className="flex">
              <h4>
                  <FontAwesomeIcon icon={faTimesCircle} className="icon" />
                  Hearing related assistance
              </h4>
          </div>
          <ul className="list-group list-group-flush nobackground">
              <li className="list-group-item nobackground">
                  <FontAwesomeIcon icon={faTimesCircle} />
                  Audio description
              </li>
              <li className="list-group-item nobackground">
                  <FontAwesomeIcon icon={faTimesCircle} />
                  Closed captioning
              </li>
              <li className="list-group-item nobackground">
                  <FontAwesomeIcon icon={faTimesCircle} />
                  Assisted listening devices
              </li>
          </ul>
      <hr />
      <div className="photos">
          <h4>Photos</h4>
          <div className="images">
              <img className="infoImg" src="/placeholder.png" alt="placeholder" />
              <img className="infoImg" src="/placeholder.png" alt="placeholder" />
              <img className="infoImg" src="/placeholder.png" alt="placeholder" />
              <img className="infoImg" src="/placeholder.png" alt="placeholder" />
          </div>
      </div>
      <hr />
      <div>
          <div className="flex reviewHeader">
              <h4 className="reviews-title">Reviews</h4>
              <div className="flex reviews-buttons">
                  <button type="button" className="btn btn-outline-primary rounded-pill" id="write-review" onClick={this.toggleReview}>Write a Review</button>
              </div>
          </div>
          <form id="review-form" style={this.state.showTextbox ? {display:"block"} : {display:"none"}}>
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
