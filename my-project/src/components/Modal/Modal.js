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
      modal1: true,
      modal2: false
    }
  }

  toggleModal1 = () => {
    this.setState({modal1: !this.state.modal1});
  }

  toggleModal2 = () => {
    this.setState({modal2: !this.state.modal2});
  }

  toggleBoth = () => {
    this.toggleModal1();
    this.toggleModal2();
  }

  render() {
    console.log("hello");
    return (
      <div>
        <Modal id="editModal" show={this.state.modal1} onHide={this.toggleModal1} aria-labelledby="editModalLabel" aria-hidden="true" centered>
          <Modal.Header closeButton>
            <Modal.Title id="editModalLabel">Submit an edit</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form id="crowdsource">
              <label class="cs-checkbox">
                <input type="checkbox" name="features" value="wheelchair-access" class="features" />
                <span class="fa-stack fa-3x" onclick="color(this)">
                  <FontAwesomeIcon icon={faCircle} className="fa-stack-2x icon-background" style={{color:"lightgray"}} />
                  <FontAwesomeIcon icon={faWheelchair} className="fa-stack-1x" />
                </span>
                <br />
                <span>Wheelchair accessible</span>
              </label>
              <label class="cs-checkbox">
                <input type="checkbox" name="features" value="ada-door" class="features" />
                <span class="fa-stack fa-3x" onclick="color(this)">
                  <FontAwesomeIcon icon={faCircle} className="fa-stack-2x icon-background" style={{color:"lightgray"}} />
                  <FontAwesomeIcon icon={faDoorOpen} className="fa-stack-1x" />
                </span>
                <br />
                <span>ADA doorways</span>
              </label>
              <label class="cs-checkbox">
                <input type="checkbox" name="features" value="stadium" class="features" />
                <span class="fa-stack fa-3x" onclick="color(this)">
                  <FontAwesomeIcon icon={faCircle} className="fa-stack-2x icon-background" style={{color:"lightgray"}} />
                  <FontAwesomeIcon icon={faChair} className="fa-stack-1x" />
                </span>
                <br />
                <span>Stadium seating</span>
              </label>
              <label class="cs-checkbox">
                <input type="checkbox" name="features" value="braille" class="features" />
                <span class="fa-stack fa-3x" onclick="color(this)">
                  <FontAwesomeIcon icon={faCircle} className="fa-stack-2x icon-background" style={{color:"lightgray"}} />
                  <FontAwesomeIcon icon={faBraille} className="fa-stack-1x" />
                </span>
                <br />
                <span>Braille</span>
              </label>
              <label class="cs-checkbox">
                <input type="checkbox" name="features" value="desc-narr" class="features" />
                <span class="fa-stack fa-3x" onclick="color(this)">
                  <FontAwesomeIcon icon={faCircle} className="fa-stack-2x icon-background" style={{color:"lightgray"}} />
                  <FontAwesomeIcon icon={faHeadphonesAlt} className="fa-stack-1x" />
                </span>
                <br />
                <span>Descriptive narration</span>
              </label>
              <label class="cs-checkbox">
                <input type="checkbox" name="features" value="ad" class="features" />
                <span class="fa-stack fa-3x" onclick="color(this)">
                  <FontAwesomeIcon icon={faCircle} className="fa-stack-2x icon-background" style={{color:"lightgray"}} />
                  <FontAwesomeIcon icon={faAudioDescription} className="fa-stack-1x" />
                </span>
                <br />
                <span>Audio description</span>
              </label>
              <label class="cs-checkbox">
                <input type="checkbox" name="features" value="cc" class="features" />
                <span class="fa-stack fa-3x" onclick="color(this)">
                  <FontAwesomeIcon icon={faCircle} className="fa-stack-2x icon-background" style={{color:"lightgray"}} />
                  <FontAwesomeIcon icon={faClosedCaptioning} className="fa-stack-1x" />
                </span>
                <br />
                <span>Closed captioning</span>
              </label>
              <label class="cs-checkbox">
                <input type="checkbox" name="features" value="als" class="features" />
                <span class="fa-stack fa-3x" onclick="color(this)">
                  <FontAwesomeIcon icon={faCircle} className="fa-stack-2x icon-background" style={{color:"lightgray"}} />
                  <FontAwesomeIcon icon={faAssistiveListeningSystems} className="fa-stack-1x" />
                </span>
                <br />
                <span>Assistive listening systems</span>
              </label>
            <Modal.Footer>
              <Button id="cs-submit" disabled="disabled" variant="primary" onClick={this.toggleBoth}>Submit</Button>
            </Modal.Footer>
          </form>
        </Modal.Body>
      </Modal>

      <Modal id="thankModal" show={this.state.modal2} onHide={this.toggleModal2} aria-labelledby="thankModalLabel" aria-hidden="true" centered>
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
