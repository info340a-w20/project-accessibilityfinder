import React, { Component } from "react";
import './List.css';
import { HashRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { AmenityNav } from '../AmenityNav/AmenityNav';
import Spinner from 'react-bootstrap/Spinner'
import Card from '../Card/Card'

class List extends Component {
    constructor(props) {
        super(props);
    }

    createCards = () => {
        let rows = [];
        for (let i = 0; i < this.props.itemsToDisplay.length; i += 3) {
            rows.push(<div className="row">
                <Card key={this.props.itemsToDisplay[i].name} item={this.props.itemsToDisplay[i]}>  </Card>
                <Card key={this.props.itemsToDisplay[i + 1].name} item={this.props.itemsToDisplay[i + 1]}>  </Card>
                <Card key={this.props.itemsToDisplay[1+2].name} item={this.props.itemsToDisplay[1+2]}>  </Card>
            </div>)
        }
        return rows;
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
