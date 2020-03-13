import React, { Component } from "react";
import './Review.css';

class Review extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="review">
        <div class="info">
          <div class="flex reviewHeader">
            <h5>{this.props.username}</h5>
          </div>
          <p class="timestamp">{this.props.date}</p>
          <p class="reviewContent">{this.props.text}</p>
        </div>
      </div>
    );
  }
}

export default Review;
