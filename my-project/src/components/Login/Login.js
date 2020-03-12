import React, { Component } from "react";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import { Container } from "react-bootstrap";


class LogIn extends Component{
    constructor(props) {
        super(props);
        this.state = {
        }
      }

      componentDidMount() {
          this.props.login();
      }

      render () {
        return (
            <Container>
                <h1>Sign In To Make A Difference!</h1>
            <div>
                <StyledFirebaseAuth uiConfig={this.props.uiConfig} firebaseAuth={this.props.fbAuth()} />
            </div>
            </Container>
        )
      }
}
export default LogIn;
