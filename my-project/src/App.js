import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { HashRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom';
import Header from "./components/Header/Header";
import Map from "./components/Map/Map"
import HomePage from "./components/HomePage/HomePage"
import Footer from "./components/Footer/Footer";
import List from "./components/List/List";
import Info from "./components/Info/Info"
import 'whatwg-fetch';
import createHistory from 'history/createBrowserHistory';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle, faCheckCircle } from '@fortawesome/free-solid-svg-icons';



export class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      displayedListItems: [],
      fetchingAmenity: false,
      amenity: "",
      strLatLong: "47.481002,-122.459696,47.734136,-122.224433",
      reDirect: false,
      noElements: false,
      fetchingNominatim: false,
      searchText: "",
    }
  }


  componentDidUpdate() {
    if (this.state.fetchingAmenity) {
      fetch('https://www.overpass-api.de/api/interpreter?data=[timeout:1][out:json];node[amenity=' + this.state.amenity + '](' + this.state.strLatLong + ');out%20meta;')
        .then((res) => res.json())
      .then((data) => {
          this.processData(data.elements);
          this.setState({ fetchingAmenity: false });
          this.setState({redirect: true});
          // renderMarker();
          // populateList();
        });
    }
    if (this.state.fetchingNominatim) {
      //https://nominatim.openstreetmap.org/search?q=target&format=json&viewbox=-122.459696,47.481002,-122.224433,47.734136&bounded=1
      fetch('https://nominatim.openstreetmap.org/search?q=' + this.state.searchText + '&format=json&viewbox=-122.459696,47.481002,-122.224433,47.734136&bounded=1&extratags=1&addressdetails=1')
            .then((response) => {
              return response.json();
          })
          .then((myJson) => {
            console.log(myJson);
            this.processData(myJson);
            this.setState({fetchingNominatim: false});
            this.setState({redirect: true})
          })
    }
}

  handleSearchBar = (newSearch) => {
    this.setState({
      itemsToDisplay: [],
      searchText: newSearch,
      fetchingNominatim: true,
    });
  }

  // redirect = () => {
  //   if (this.state.redirect) {
  //     console.log("redirect method");
  //     return <Redirect push to="/list" />;
  //   }

  handleAmenitySearch = (newAmenity) => {
    this.setState({
      amenity: newAmenity,
      fetchingAmenity: true,
    });
  }

  processData = (json) => {
    if (json.length == 0) {
      this.setState({ noElements: true })
      return;
    }

    let newItems = [];
    json.forEach(function (e, i) {
      // added limit to increase render speed
      if (i > 100) {
        return;
      }
      let processedData = {
        name: '',
        type: '',
        addr: '',
        mobilityCheck: '',
        longAddress: '',
        website: '',
        phone: '',
        hours: '',
      }

      if (e.licence != null) {
        processedData.name = e.address[Object.keys(e.address)[0]];
        processedData.type = (e.type.charAt(0).toUpperCase() + e.type.substring(1)).replace(/_/g, ' ');
        processedData.addr = e.address.house_number != null ? e.address.house_number + " " + e.address.road : "Address unavailable";
        processedData.mobilityCheck = e.extratags.wheelchair != null ? <FontAwesomeIcon icon={faCheckCircle} /> : <FontAwesomeIcon icon={faTimesCircle} />;
        processedData.longAddress = e.address.house_number + " " + e.address.road + ", " + e.address.city + ", " + e.address.state + " " + e.address.postcode;
        processedData.website = e.extratags.website != null ? e.extratags.website : "-";
        processedData.phone = e.extratags.phone != null ? e.extratags.phone : "-";
        processedData.hours = e.extratags.opening_hours != null ? e.extratags.opening_hours : "-";
        processedData.wheelchair = e.extratags.wheelchair;

      } else {
        processedData.name = e.tags.name;
        processedData.type = e.tags.amenity.charAt(0).toUpperCase() + e.tags.amenity.substring(1);
        processedData.addr = e.tags["addr:housenumber"] != null ? e.tags["addr:housenumber"] + " " + e.tags["addr:street"] : "Address unavailable";
        processedData.mobilityCheck = e.tags.wheelchair != null ? <FontAwesomeIcon icon={faCheckCircle} /> : <FontAwesomeIcon icon={faTimesCircle} />;
        processedData.longAddress = e.tags["addr:housenumber"] + " " + e.tags["addr:street"] + ", " + e.tags["addr:city"] + " " + e.tags["addr:postcode"];
        processedData.website = e.tags.website != null ? e.tags.website : "--";
        processedData.phone = e.tags.phone != null ? e.tags.phone : "--";
        processedData.hours = e.tags.opening_hours != null ? e.tags.opening_hours : "  --";
        processedData.wheelchair = e.tags.wheelchair;
      }
      newItems.push(processedData);
    });
    this.setState({displayedListItems:newItems})
  }



  render() {
    return (
      <main>
        <Header handleSearch={this.handleSearchBar}/>
        <Switch>
          <Route exact path="/" render={(props) => <HomePage {...props} handleAmenitySearch={this.handleAmenitySearch} />} />
          <Route path="/list" render={(props) => <List {...props}
            itemsToDisplay={this.state.displayedListItems}
            handleAmenitySearch={this.handleAmenitySearch}
            isFetching={this.state.fetchingAmenity || this.state.fetchingNominatim}
          />} />
        </Switch>
        <Map />
        <Footer />
      </main>
    );
  }
}

export default App;
