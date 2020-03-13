import React, { Component } from "react";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import { Container } from "react-bootstrap";
import './Login.css';

class LogIn extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.login();
  }

  render() {
    return (
      <div class="signin-outer">
        <div class="signin-text">
          <h1>Sign In To Make A Difference!</h1>
        </div>
        <div id="signin-bkg">
          <StyledFirebaseAuth uiConfig={this.props.uiConfig} firebaseAuth={this.props.fbAuth()} />
        </div>
        <div class="signin-text">
          <p id="credits">Photo by Sergei Akulich from Pexels</p>
        </div>
      </div>
    )
  }
}
export default LogIn;
