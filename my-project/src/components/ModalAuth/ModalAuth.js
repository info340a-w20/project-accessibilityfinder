import React, { Component } from "react";
import './ModalAuth.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Modal from 'react-bootstrap/Modal'
import { ModalHeader, ModalTitle, ModalBody, ModalFooter, Button, ModalDialog } from 'react-bootstrap';
import { HashRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom';

export class ModalAuth extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }



  render() {
    console.log(this.props.authModal)
    return (
      <Modal id="authModal" show={this.props.authModal} onHide={this.props.hideAuthModal} aria-labelledby="authModal" aria-hidden="true" centered>>
        <Modal.Header closeButton>
          <Modal.Title id="signUpModalLabel">Thank you for intiative to give back feedback!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          However in order to become an active
          member of our community you need to sign in with a Google acount.
          Click on the button below in order to start the sign up process.
                </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={this.props.hideAuthModal}>
            Close
          </Button>
          {/* <Button as="Link" to="/signin">Sign In</Button> */}
          <Link to="/signin">
            <button type="button">
              Sign In
            </button>
          </Link>}
          {/* <Button variant="primary" onClick={this.handleSignIn}>
            Sign In
          </Button> */}
        </Modal.Footer>
      </Modal>)
  }
}

export default ModalAuth;
