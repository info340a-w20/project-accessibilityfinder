import React, { Component } from "react";
import './Info.css';
import { HashRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faHome, faEnvelope, faPhone, faClock, faTimesCircle, faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import Button from 'react-bootstrap/Button';
import OurModal from '../Modal/Modal';

class Info extends Component {
    constructor(props) {
        super(props);
        this.state = {
          item: this.props.itemsToDisplay[this.props.location.pathname[this.props.location.pathname.length-1]],
          show1: false,
          show2: false
        }
    }

    mobilityCheck() {
      return this.state.item.wheelchair ? faCheckCircle : faTimesCircle ;
    }

    // toggleModal() {
    //   this.setState({modal: !this.state.modal});
    // }

    // showModal1 = () => {
    //   this.setState({ show1: true });
    // };

    // showModal2 = () => {
    //   this.setState({ show1: false });
    //   this.setState({show2:true})
    // }
    // hideModal1 = () => {
    //   this.setState({ show1: false });
    // };

    hideModal2 = () => {
      this.setState({show2:false})
    }
    toggleBoth = () => {
      console.log("toggleboth");
      this.toggleModal1();
      this.toggleModal2();
    }
    // hideModal = () => {
    //   this.setState({ show: false });
    // };
     toggleModal1 = () => {
    this.setState({show1: !this.state.show1});
  }

  toggleModal2 = () => {
    this.setState({show2: !this.state.show2})
  }
  

    render() {
      console.log(this.state);
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
                      toggleModal1 ={this.toggleModal1}
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
                    <button type="button" className="btn btn-outline-primary rounded-pill" id="write-review">Write a Review</button>
                </div>
            </div>
            <form id="review-form" style={{display:'none'}}>
            </form>
            <hr />
            <div id="reviews">

            </div>
          </div>
      </div>
    </div>
    );
  }
}

export default Info;
