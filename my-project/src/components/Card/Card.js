import React, { Component } from "react";
import './Card.css';
import { HashRouter as Router, Switch, Route, Link } from 'react-router-dom';
import placeholder from "../../../img/"

class Card extends Component {
    constructor(props) {
        super(props);
    }



    render() {
        return (
            <div className="col">
                <div className="card">
                    <img class="card-img-top" src={placeholder} alt="location" />
                    <div class="card-body">
                        <h5 class="card-title"> {this.props.item.name} </h5>
                        <p class="card-text text-secondary">
                            {this.props.item.type}
                            <br />
                            {this.props.item.addr}
                        </p>
                        <div class="features">
                            <span> + {this.props.item.mobilityCheck} + Mobility</span>
                            <span><i class="fas fa-times-circle"></i>Vision</span>
                            <span><i class="fas fa-times-circle"></i>Hearing</span>
                        </div>
                    </div>
                </div>
            </div>

        );

    }
}

export default Card;
