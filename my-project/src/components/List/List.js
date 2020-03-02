import React, { Component } from "react";
import './List.css';
import { HashRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { AmenityNav } from '../AmenityNav/AmenityNav';


class List extends Component {
    constructor(props) {
        super(props);
    }

    createCards = () => {
        
    }

    render() {
        console.log(this.props);
        return (
            <div id="left-view-home" className="home-page-info left-view">
                <AmenityNav handleAmenitySearch={this.props.handleAmenitySearch} />
                <div id="list" class="container">
                    {this.createCards()}
                </div>
            </div>
        );
    }
}

export default List;
