import React, { Component } from "react";
import './Modal.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min.js';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Modal, ModalHeader, ModalTitle, ModalBody, ModalFooter, Button, ModalDialog } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle, faWheelchair, faDoorOpen, faChair, faBraille, faHeadphonesAlt, faAudioDescription, faClosedCaptioning, faAssistiveListeningSystems } from '@fortawesome/free-solid-svg-icons';

export class OurModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      wheelchair: false,
      ada: false,
      stadium: false,
      braille: false,
      dn: false,
      ad: false,
      cc: false,
      als: false
    }
  }

  color(key) {
    let obj = {};
    obj[key] = !this.state[key];
    this.setState(obj);
  }

  // fix later. also toggle checked
  toggleSubmit() {
    return false;
    // Object.values(this.state).forEach((item, i) => {
    //   if (item == false) {
    //     return false;
    //   } else {return true;}
    // });
  }

  render() {
    return (
      <div>
        <Modal id="editModal" show={this.props.show1} onHide={this.props.toggleModal1} aria-labelledby="editModalLabel" aria-hidden="true" centered>
          <Modal.Header closeButton>
            <Modal.Title id="editModalLabel">Submit an edit</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form id="crowdsource">
              <label class="cs-checkbox">
                <input type="checkbox" name="features" value="wheelchair" class="features" />
                <span class="fa-stack fa-3x" onClick={() => this.color("wheelchair")}>
                  <FontAwesomeIcon icon={faCircle} className="fa-stack-2x icon-background" style={this.state.wheelchair ? {color:"blue"} : {color:"lightgray"}} />
                  <FontAwesomeIcon icon={faWheelchair} className="fa-stack-1x" style={this.state.wheelchair ? {color:"white"} : {color:"black"}} />
                </span>
                <br />
                <span>Wheelchair accessible</span>
              </label>
              <label class="cs-checkbox">
                <input type="checkbox" name="features" value="ada" class="features" />
                <span class="fa-stack fa-3x" onClick={() => this.color("ada")}>
                  <FontAwesomeIcon icon={faCircle} className="fa-stack-2x icon-background" style={this.state.ada ? {color:"blue"} : {color:"lightgray"}} />
                  <FontAwesomeIcon icon={faDoorOpen} className="fa-stack-1x" style={this.state.ada ? {color:"white"} : {color:"black"}} />
                </span>
                <br />
                <span>ADA doorways</span>
              </label>
              <label class="cs-checkbox">
                <input type="checkbox" name="features" value="stadium" class="features" />
                <span class="fa-stack fa-3x" onClick={() => this.color("stadium")}>
                  <FontAwesomeIcon icon={faCircle} className="fa-stack-2x icon-background" style={this.state.stadium ? {color:"blue"} : {color:"lightgray"}} />
                  <FontAwesomeIcon icon={faChair} className="fa-stack-1x" style={this.state.stadium ? {color:"white"} : {color:"black"}} />
                </span>
                <br />
                <span>Stadium seating</span>
              </label>
              <label class="cs-checkbox">
                <input type="checkbox" name="features" value="braille" class="features" />
                <span class="fa-stack fa-3x" onClick={() => this.color("braille")}>
                  <FontAwesomeIcon icon={faCircle} className="fa-stack-2x icon-background" style={this.state.braille ? {color:"blue"} : {color:"lightgray"}} />
                  <FontAwesomeIcon icon={faBraille} className="fa-stack-1x" style={this.state.braille ? {color:"white"} : {color:"black"}} />
                </span>
                <br />
                <span>Braille</span>
              </label>
              <label class="cs-checkbox">
                <input type="checkbox" name="features" value="dn" class="features" />
                <span class="fa-stack fa-3x" onClick={() => this.color("dn")}>
                  <FontAwesomeIcon icon={faCircle} className="fa-stack-2x icon-background" style={this.state.dn ? {color:"blue"} : {color:"lightgray"}} />
                  <FontAwesomeIcon icon={faHeadphonesAlt} className="fa-stack-1x" style={this.state.dn ? {color:"white"} : {color:"black"}} />
                </span>
                <br />
                <span>Descriptive narration</span>
              </label>
              <label class="cs-checkbox">
                <input type="checkbox" name="features" value="ad" class="features" />
                <span class="fa-stack fa-3x" onClick={() => this.color("ad")}>
                  <FontAwesomeIcon icon={faCircle} className="fa-stack-2x icon-background" style={this.state.ad ? {color:"blue"} : {color:"lightgray"}} />
                  <FontAwesomeIcon icon={faAudioDescription} className="fa-stack-1x" style={this.state.ad ? {color:"white"} : {color:"black"}} />
                </span>
                <br />
                <span>Audio description</span>
              </label>
              <label class="cs-checkbox">
                <input type="checkbox" name="features" value="cc" class="features" />
                <span class="fa-stack fa-3x" onClick={() => this.color("cc")}>
                  <FontAwesomeIcon icon={faCircle} className="fa-stack-2x icon-background" style={this.state.cc ? {color:"blue"} : {color:"lightgray"}} />
                  <FontAwesomeIcon icon={faClosedCaptioning} className="fa-stack-1x" style={this.state.cc ? {color:"white"} : {color:"black"}} />
                </span>
                <br />
                <span>Closed captioning</span>
              </label>
              <label class="cs-checkbox">
                <input type="checkbox" name="features" value="als" class="features" />
                <span class="fa-stack fa-3x" onClick={() => this.color("als")}>
                  <FontAwesomeIcon icon={faCircle} className="fa-stack-2x icon-background" style={this.state.als ? {color:"blue"} : {color:"lightgray"}} />
                  <FontAwesomeIcon icon={faAssistiveListeningSystems} className="fa-stack-1x" style={this.state.als ? {color:"white"} : {color:"black"}} />
                </span>
                <br />
                <span>Assistive listening systems</span>
              </label>
            <Modal.Footer>
              <Button id="cs-submit" disabled={this.toggleSubmit()} variant="primary" onClick={(e) => this.props.toggleBoth()}>Submit</Button>
            </Modal.Footer>
          </form>
        </Modal.Body>
      </Modal>

      <Modal id="thankModal" show={this.props.show2} onHide={this.props.toggleModal2} aria-labelledby="thankModalLabel" aria-hidden="true" centered>
        <Modal.Header closeButton>
          <Modal.Title id="thankModalLabel">Thanks for the help!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Thank you for your submission! You'll get an email when it has been reviewed.
        </Modal.Body>
      </Modal>
    </div>
    );
  }
}

export default OurModal;