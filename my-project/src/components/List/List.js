import React, { Component } from "react";
import './List.css';
import { HashRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { AmenityNav } from '../AmenityNav/AmenityNav';
import Spinner from 'react-bootstrap/Spinner'

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
                    {this.props.isFetching
                        ? <Spinner animation="border" role="status">
                            <span className="sr-only">Loading...</span>
                        </Spinner> :
                        this.props.noElements ? <div><p>No results were</p></div> :
                            this.createCards()}
                </div>
            </div>
        );
    }
}

export default List;
