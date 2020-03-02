import React, { Component } from "react";
import { HashRouter as Router, Switch, Route, Link } from 'react-router-dom';
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
        console.log(e.target.value);
        this.setState({inputtedText: e.target.value});
    }

    handleSearch = (e) => {
        e.preventDefault();
        console.log(this.state);
        this.props.handleSearch(this.state.inputtedText);
    }

    handleKeyPress = (e) => {
        console.log(e);
     if (e.key === 'Enter') { 
        console.log(this.state);
        this.props.handleSearch(this.state.inputtedText);
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
                    <button id="main-places-search" class="btn btn-outline-light" type="button" onClick={this.handleSearch}>
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
