import React, { Component } from "react";
import './ModalSubmitted.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Modal from 'react-bootstrap/Modal'
import { ModalHeader, ModalTitle, ModalBody, ModalFooter, Button, ModalDialog } from 'react-bootstrap';
import { HashRouter as Router, Switch, Route, Link, Redirect, withRouter } from 'react-router-dom';

export class ModalSubmitted extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  handleSignIn = () => {
    this.props.renderLocations();
    this.props.history.push("/signin");
  }

  render() {
    return (
      <Modal id="subModal" show={this.props.authModal} onHide={this.props.hideAuthModal} aria-labelledby="subModal" aria-hidden="true" centered>
        <Modal.Header closeButton>
          <Modal.Title id="subModalLabel">Oops!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          You've already gave feedback on accessibility features for this location.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={this.props.hideAuthModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>)
  }
}

export default withRouter(ModalSubmitted);
