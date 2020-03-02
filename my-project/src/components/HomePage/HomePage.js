import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import './HomePage.css'
import { AmenityNav } from '../AmenityNav/AmenityNav';
import { HashLink as Link } from 'react-router-hash-link';

export class HomePage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="left-view-home" className="home-page-info left-view">
        <nav class="navbar navbar-light bg-light navbar-expand index-nav">
          <ul class="navbar-nav">
            <li class="nav-item active">
              <Link to="#about" class="nav-link"> Who We Are</Link>
            </li>
            <li class="nav-item">
              <Link to="#mobility" class="nav-link">Mobility</Link>
            </li>
            <li class="nav-item">
              <Link to="#vision" class="nav-link">Vision</Link>
            </li>
            <li class="nav-item">
              <Link to="#hearing" class="nav-link">Hearing</Link>
            </li>
          </ul>
        </nav>
        <AmenityNav handleAmenitySearch={this.props.handleAmenitySearch}/>
          <h2 id="about" class="mainPageHeader">Who We Are</h2>
          <p>
            Accessibility Finder's goal is to give people the ability to enjoy and participate in activities
            that they love. Our website empowers people to give feedback through both reviews and
            crowdsourcing in order to share information on accessibility features in various locations.
                    </p>
          <h5 id="mobility">Mobility</h5>
          <p>
            Mobility impairment includes physical defects, including upper or lower limb loss or impairment,
            poor manual dexterity, and damage to one or multiple organs of the body. Disability in mobility
            can be a congenital or acquired problem or a consequence of disease. People who have a broken
            skeletal structure also fall into this category.
                        <a href="https://en.wikipedia.org/wiki/Physical_disability"> (source)</a>
          </p>
          <h5 id="vision">Vision</h5>
          <p>
            Visual impairment, also known as vision impairment or vision loss, is a decreased ability to
            see to a degree that causes problems not fixable by usual means, such as glasses. Some also
            include those who have a decreased ability to see because they do not have access to glasses
            or contact lenses. The term blindness is used for complete or nearly complete vision loss.
            Visual impairment may cause people difficulties with normal daily activities such as driving,
            reading, socializing, and walking.
                        <a href="https://en.wikipedia.org/wiki/Visual_impairment"> (source)</a>
          </p>
          <h5 id="hearing">Hearing</h5>
          <p>
            Hearing loss, also known as hearing impairment, is a partial or total inability to hear. A
            deaf person has little to no hearing. Hearing loss may occur in one or both ears. In children,
            hearing problems can affect the ability to learn spoken language and in adults it can create
            difficulties with social interaction and at work. Hearing loss can be temporary or permanent.
                        <a href="https://en.wikipedia.org/wiki/Hearing_loss"> (source)</a>
          </p>
      </div>
    );
  }
}
export default HomePage;
