import React, { Component } from "react";
import { HashRouter as Router, Switch, Route, Link, Redirect, withRouter } from 'react-router-dom';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import HomePage from '../HomePage/HomePage';
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import firebase from "firebase";



class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inputtedText: "",
    }
  }

  handleChange = (e) => {
    this.setState({ inputtedText: e.target.value });
  }

  handleSearch = (e) => {
    e.preventDefault();
    this.props.handleSearch(this.state.inputtedText);
    this.setState({
      inputtedText: ''
    });
  }

  handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      this.props.handleSearch(this.state.inputtedText);
      this.setState({
        inputtedText: ''
      });
      this.props.history.push("/list")
    }
  }

  render() {
    return (
      <header>
        <nav class="navbar universal-nav">
          <div id="nav-link">
            <Link to="/" class="navbar-brand mb-0 h1 text-white" onClick={(e) => this.props.renderLocations()}>
              <span id="name">Accessibility Finder</span>
              <span id="acronym">Access</span>
            </Link>
            {this.props.isSignedIn ?
              <span>
                <Link to="/bookmarks" class="nav-item text-white">Bookmarks</Link>
                <Link to="/" onClick={this.props.handleSignOut} class="nav-item text-white">Sign Out</Link>
              </span> :
              <Link to="/signin" class="nav-item text-white" onClick={(e) => this.props.renderLocations()}>Sign In</Link>}
          </div>
          <div class="input-group">
            <input type="text" onKeyPress={this.handleKeyPress} onChange={this.handleChange} onSubmit={this.handleSearch} value={this.state.inputtedText} class="form-control" id="search" placeholder="Search by name of place"/>
            <div class="input-group-append">
              <Link to="/list" id="main-places-search" class="btn btn-outline-light" type="button" onClick={(e) => {
                  this.props.handleSearch(this.state.inputtedText); this.setState({inputtedText: ''}); }
              } >
                <FontAwesomeIcon icon={faSearch} aria-label="search" />
              </Link>
            </div>
          </div>
        </nav>
      </header>
    );
  }
}

export default withRouter(Header);
