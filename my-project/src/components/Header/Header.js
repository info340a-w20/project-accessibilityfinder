import React, { Component } from "react";
import { HashRouter as Router, Route, Link, Switch } from 'react-router-dom';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import HomePage from '../HomePage/HomePage';

class Header extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
          <Router>
            <header>
              <nav class="navbar universal-nav">
                <Link to="/" class="navbar-brand mb-0 h1 text-white" href="index.html" />
                  <span id="name">Accessibility Finder</span>
                  <span id="acronym">Access</span>
                  <div class="input-group">
                    <input type="text" class="form-control" id="search" placeholder="Search by name of place"/>
                    <div class="input-group-append">
                      <button id="main-places-search" class="btn btn-outline-light" type="button" onclick="callDataByName()">
                        <FontAwesomeIcon icon={faSearch} aria-label="search" />
                      </button>
                    </div>
                  </div>
              </nav>
              <Switch>
                <Route path="/">
                  <HomePage />
                </Route>
              </Switch>
            </header>
          </Router>
      );
    }
}

export default Header;
