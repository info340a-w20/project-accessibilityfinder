import React, { Component } from "react";
import './Info.css';
import { HashRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faHome, faEnvelope, faPhone, faClock } from '@fortawesome/free-solid-svg-icons';

class Info extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let len = this.props.location.pathname.length;
        let item = this.props.itemsToDisplay[this.props.location.pathname[len - 1]];
        return (
<div></div>
        );
    }
}

export default Info;
