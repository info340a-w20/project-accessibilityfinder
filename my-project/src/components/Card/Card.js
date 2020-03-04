import React, { Component } from "react";
import './Card.css';
import { HashRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle, faCheckCircle } from '@fortawesome/free-solid-svg-icons';
// import placeholder from "../../../public/placeholder.png"

class Card extends Component {
    constructor(props) {
        super(props);
    }



    render() {
        return (
            <div className="col">
                <div className="card">
                    <img class="card-img-top" src="/placeholder.png" alt="location" />
                    <div class="card-body">
                        <h5 class="card-title">{this.props.item.name}</h5>
                        <p class="card-text text-secondary">
                            {this.props.item.type}
                            <br />
                            {this.props.item.addr}
                        </p>
                        <div class="features">
                            <span>{this.props.item.mobilityCheck}Mobility</span>
                            <span><FontAwesomeIcon icon={faTimesCircle} />Vision</span>
                            <span><FontAwesomeIcon icon={faTimesCircle} />Hearing</span>
                        </div>
                    </div>
                </div>
            </div>

        );

    }
}

export default Card;
