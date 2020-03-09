import React, { Component } from "react";
import './Review.css';

class Review extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let n = new Date();
    let y = n.getFullYear();
    let m = n.getMonth() + 1;
    let d = n.getDate();
    let h = n.getHours() > 12 ? n.getHours() - 12 : n.getHours();
    let min = n.getMinutes() < 10 ? "0" + n.getMinutes() : n.getMinutes();
    let ampm = n.getHours() >= 12 ? "PM" : "AM";
    return(
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
