import React, { Component } from "react";
import { HashRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import HomePage from '../HomePage/HomePage';

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
    console.log("done");
    e.preventDefault();
    this.props.handleSearch(this.state.inputtedText);
    this.setState({
      inputtedText: ''
    });
    this.props.history.push('/list');
  }

  handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      this.props.handleSearch(this.state.inputtedText);
      this.setState({
        inputtedText: ''
      });
    }
  }

  //     let input = document.getElementById('search');
  // input.addEventListener('keyup', function (e) {
  //     if (e.key === "Enter") {
  //         callDataByName();
  //     }
  // });

    render() {
        return (
          <header>
            <nav class="navbar universal-nav">
              <Link to="/" class="navbar-brand mb-0 h1 text-white">
                <span id="name">Accessibility Finder</span>
                <span id="acronym">Access</span>
              </Link>
                <div class="input-group">
                  <input type="text" onKeyPress={this.handleKeyPress} onChange={this.handleChange} onSubmit={this.handleSearch} value={this.state.inputtedText} class="form-control" id="search" placeholder="Search by name of place"/>
                  <div class="input-group-append">
                    <button to="/list" id="main-places-search" class="btn btn-outline-light" type="button" onClick={this.handleSearch}>
                      <FontAwesomeIcon icon={faSearch} aria-label="search" />
                    </button>
                  </div>

          </div>
        </nav>
      </header>
    );
  }
}

export default Header;
