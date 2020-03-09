import React, { Component } from "react";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";


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
        // this.props.onPage("hello");

        return (
            <div>
                <h1>My App</h1>
                <p>Please sign-in:</p>
                <StyledFirebaseAuth uiConfig={this.props.uiConfig} firebaseAuth={this.props.fbAuth()} />
            </div>
        )
      }
}
export default LogIn;
