import React, { Component } from "react";
import { HashRouter as Router, Route, Link } from 'react-router-dom'
import './Header.css'



class Header extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (    
        <header>
            <nav class="navbar universal-nav">
                <a class="navbar-brand mb-0 h1 text-white" href="index.html">
                    <span id="name">Accessibility Finder</span>
                    <span id="acronym">Access</span>
                </a>
                <div class="input-group">
                    <input type="text" class="form-control" id="search" placeholder="Search by name of place"/>
                    <div class="input-group-append">
                        <button id="main-places-search" class="btn btn-outline-light" type="button" onclick="callDataByName()">
                            <i class="fa fa-search" aria-label="search"></i>
                        </button>
                    </div>
                </div>
            </nav>
        </header>);
    }

}

export default Header;

