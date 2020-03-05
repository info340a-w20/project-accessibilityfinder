import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { HashRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom';
import Header from "./components/Header/Header";
import MapDisplay from "./components/Map/Map"
import HomePage from "./components/HomePage/HomePage"
import Footer from "./components/Footer/Footer";
import List from "./components/List/List";
import Info from "./components/Info/Info";
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
      amenityLatLong: "47.481002,-122.459696,47.734136,-122.224433",
      searchLatLong: "-122.459696,47.481002,-122.224433,47.734136",
      noElements: false,
      fetchingNominatim: false,
      searchText: "",
      googleFetch: true,
      reviewList: {},
    }
  }


  componentDidUpdate() {
    // if (this.state.googleFetch) {
    //   fetch('https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=&key=AIzaSyAWUFvN2FQTR7mneTxkpdGn7-IH-8fUDRc')
    //   .then((res) => res.json())
    //   .then((data) => {
    //     console.log(data);
    //     this.setState({googleFetch: false});
    //   });


    if (this.state.fetchingAmenity) {
      fetch('https://www.overpass-api.de/api/interpreter?data=[timeout:1][out:json];node[amenity=' + this.state.amenity + '](' + this.state.amenityLatLong + ');out%20meta;')
        .then((res) => res.json())
        .then((data) => {
          this.processData(data.elements);
          this.setState({ fetchingAmenity: false });
          this.setState({ redirect: true });
          // renderMarker();
          // populateList();
        });
    }
    if (this.state.fetchingNominatim) {
      //https://nominatim.openstreetmap.org/search?q=target&format=json&viewbox=-122.459696,47.481002,-122.224433,47.734136&bounded=1
      fetch('https://nominatim.openstreetmap.org/search?q=' + this.state.searchText + '&format=json&viewbox=' + this.state.searchLatLong + '&bounded=1&extratags=1&addressdetails=1')
        .then((response) => {
          return response.json();
        })
        .then((myJson) => {
          this.processData(myJson);
          this.setState({ fetchingNominatim: false });
          this.setState({ redirect: true })
        })
    }
  }

  renderLocation = () => {
    this.setState({ displayedListItems: [] })
  }

  handleSearchBar = (newSearch) => {
    this.setState({
      itemsToDisplay: [],
      searchText: newSearch,
      fetchingNominatim: true,
    });
  }

  handleReviews = (reviews, key) => {
    this.setState(prevState => ({
      reviewList: {                   // object that we want to update
        ...prevState.reviewList,    // keep all other key-value pairs
        [key]: reviews       // update the value of specific key
      }
    }))

  }

  handleAmenitySearch = (newAmenity) => {
    this.setState({
      amenity: newAmenity,
      fetchingAmenity: true,
    });
  }

  handleMapMovement = (bounds) => {
    this.mapBoundNomi(bounds);
    this.mapBoundOverpass(bounds);
  }

  mapBoundNomi = (bounds) => {
    let latlong = [];
    latlong.push(bounds._southWest);
    latlong.push(bounds._northEast);
    let strLatLong = "" + latlong[0].lng + "," + latlong[0].lat + "," + latlong[1].lng + "," + latlong[1].lat;
    this.setState({ searchLatLong: strLatLong });
  }

  mapBoundOverpass = (bounds) => {
    let latlong = [];
    latlong.push(bounds._southWest);
    latlong.push(bounds._northEast);
    let strLatLong = "" + latlong[0].lat + "," + latlong[0].lng + "," + latlong[1].lat + "," + latlong[1].lng;
    this.setState({ amenityLatLong: strLatLong });
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
        lat: '',
        lon: '',
        id: '',
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
        processedData.lat = e.lat;
        processedData.lon = e.lon;
        processedData.id = i;


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
        processedData.lat = e.lat;
        processedData.lon = e.lon;
        processedData.id = i;
      }
      newItems.push(processedData);
    });
    this.setState({ displayedListItems: newItems })
  }

  render() {
    console.log(this.state);
    return (
      <main>
        <Header handleSearch={this.handleSearchBar} renderLocations={this.renderLocation} />
        <Switch>
          <Route exact path="/" render={(props) => <HomePage {...props} handleAmenitySearch={this.handleAmenitySearch} />} />
          <Route path="/list" render={(props) => <List {...props}
            itemsToDisplay={this.state.displayedListItems}
            handleAmenitySearch={this.handleAmenitySearch}
            isFetching={this.state.fetchingAmenity || this.state.fetchingNominatim}
          />} />
          <Route path="/info/:id" render={(props) => <Info {...props} handleReviews={this.handleReviews}
            reviewList={this.state.reviewList}
            itemsToDisplay={this.state.displayedListItems} />} />
        </Switch>
        <MapDisplay handleMapMovement={this.handleMapMovement} itemsToDisplay={this.state.displayedListItems} />
        <Footer />
      </main>
    );
  }
}

export default App;
