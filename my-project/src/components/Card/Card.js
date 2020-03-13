import React, { Component } from "react";
import './Card.css';
import { HashRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle, faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { withRouter } from 'react-router-dom'
import placeholder from "../../placeholder.png"


class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  componentWillMount() {
    {this.props.crowdsourcingData && Object.entries(this.props.crowdsourcingData).map((d, i) => {
        if (d[0] == this.props.item.uniqueID) {
          Object.entries(d[1]).forEach((r, i) => {
            this.setState({ [r[0]]: Object.keys(r[1]).length })
          })
        }
      })
    }
  }

  mobilityCheck() {
    if (this.props.item.mobilityCheck) {
      return <FontAwesomeIcon icon={faCheckCircle}></FontAwesomeIcon>;
    } else if (this.state.wheelchair || this.state.ada || this.state.stadium) {
      return <FontAwesomeIcon icon={faCheckCircle}></FontAwesomeIcon>;
    } else {
      return <FontAwesomeIcon icon={faTimesCircle}></FontAwesomeIcon>;
    }
  }

  render() {
    let str = "/info/" + this.props.id
    return (
      <div className="col">
        <Link to={str}>
          <div className="card">
            <img class="card-img-top" src={placeholder} alt="location" />
            <div class="card-body">
              <h5 class="card-title">{this.props.item.name}</h5>
              <p class="card-text text-secondary">
                {this.props.item.type}
                <br />
                {this.props.item.addr}
              </p>
              <div class="features">
                <span>{this.mobilityCheck()}Mobility</span>
                <span><FontAwesomeIcon icon={this.state.braille || this.state.dn ? faCheckCircle : faTimesCircle} />Vision</span>
                <span><FontAwesomeIcon icon={this.state.ad || this.state.cc || this.state.als ? faCheckCircle : faTimesCircle} />Hearing</span>
              </div>
            </div>
          </div>
        </Link>
      </div>
    );
  }
}

export default withRouter(Card);
