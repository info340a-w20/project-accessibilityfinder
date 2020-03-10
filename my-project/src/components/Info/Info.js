import React, { Component } from "react";
import './Info.css';
import { HashRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faHome, faEnvelope, faPhone, faClock, faTimesCircle, faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import Button from 'react-bootstrap/Button';
import OurModal from '../Modal/Modal';
import Review from '../Review/Review';
import firebase from "firebase";

class Info extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: {},
      show1: false,
      show2: false,
      showTextbox: false,
      reviewText: '',
      locationReviews: []
    }
  }

  componentDidMount() {
    let num = this.props.location.pathname.split("/")[2];
    this.setState({ item: this.props.itemsToDisplay[num] });

  }

  mobilityCheck() {
    return this.state.item.wheelchair ? faCheckCircle : faTimesCircle;
  }

  hideModal2 = () => {
    this.setState({ show2: false });
  }

  toggleBoth = () => {
    this.toggleModal1();
    this.toggleModal2();
  }

  toggleModal1 = () => {
    this.setState({ show1: !this.state.show1 });
  }

  toggleModal2 = () => {
    this.setState({ show2: !this.state.show2 });
  }

  toggleReview = () => {
    this.setState({ showTextbox: !this.state.showTextbox });
  }

  handleChange = (e) => {
    this.setState({ reviewText: e.target.value });
  }

  handleReviews = () => {


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
      date:currentDate
    }
    let placeID = this.state.item.uniqueID;
    console.log(placeID);
    let placeRef = firebase.database().ref('reviews/' + placeID);
    // let placeRef = this.props.reviewRev..ref(placeID); //an object of tasks
    // let place = this.props.reviewRef.child(placeID)
    // let placeRef = firebase.database().ref(place)

    

    placeRef.push({
      reviewContent: this.state.reviewText,
      username: currentUser,
      datePosted: currentDate,
      time:firebase.database.ServerValue.TIMESTAMP, 
      likes:0,
      locationName: this.state.item.name
  });

    this.setState({
      locationReviews: [review, ...this.state.locationReviews],
    }, () => {
      this.props.handleReviews(this.state.locationReviews, this.state.item.name);
    });
    this.setState({ reviewText: '' });
  }

  //prolly a better way to access key/value but it is late so brain is dead
  renderReviews() {
    let showReviews = []
    // let name = this.state.item.name;
    // let reviews = this.props.reviewList[name];
    let reviews = this.props.reviews;



    let reviewKeys = Object.keys(reviews);
    {reviews && Object.keys(reviews).map((d, i) => {
      if (d == this.state.item.uniqueID) {
        Object.keys(d).forEach((r, i) => {
          Object.values(r).forEach((k, i) => {
            console.log(k);
          })
          //showReviews.push(<Review id={i} text={r.reviewContent} date={r.datePosted} username={r.username} />)
        })
      }
    })
  }
  return showReviews;
}
    
      // let likes = props.svgs[d].likes ? Object.keys(props.svgs[d].likes).length : 0;
      // return (<Container style={{textAlign:"center", marginTop:"40px"}} key={i}>
      //             <InlineSVG src={props.svgs[d].svg} />                            
      //             {props.showLikes && 
      //                 <span onClick = {() => props.onClick(d)}><FaHeart fill="red" style={{cursor:"pointer"}}/><span>{likes}</span></span>}
  //     //         </Container>)
  // })}



  //   if (reviews) {
  //     reviews.forEach((item, i) => {
  //       showReviews.push(<Review id={i} text={item.reviewContent} date={item.date} username={item.username} />)
  //     })
  //   }
  //   return showReviews;
  // }

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
