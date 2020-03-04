import React, { Component } from "react";
import './List.css';
import { HashRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom';
import { AmenityNav } from '../AmenityNav/AmenityNav';
import Spinner from 'react-bootstrap/Spinner'
import Card from '../Card/Card'

class List extends Component {
    constructor(props) {
        super(props);
    }

    createCards = () => {
        let rows = [];
        let cols = [];
        this.props.itemsToDisplay.forEach((item, i) => {
          cols.push(<Card key={item.name} item={item} id={item.id}/>);
          if (i % 3 == 2 || i == this.props.itemsToDisplay.length - 1) {
            rows.push(<div className="row">{cols}</div>);
            cols = [];
          }
        });
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
