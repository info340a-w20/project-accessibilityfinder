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
import LogIn from "./components/Login/Login"
import createHistory from 'history/createBrowserHistory';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle, faCheckCircle } from '@fortawesome/free-solid-svg-icons';

// Import firebase and StyledFirebaseAuth
import firebase from "firebase";
import 'firebase/database';
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";


var firebaseConfig = {
  apiKey: "AIzaSyC5PS9Zb6WY-lcoIAC5KkdeAkFuozlYkYw",
  authDomain: "accessibility-finder.firebaseapp.com",
  databaseURL: "https://accessibility-finder.firebaseio.com",
  projectId: "accessibility-finder",
  storageBucket: "accessibility-finder.appspot.com",
  messagingSenderId: "781510677391",
  appId: "1:781510677391:web:25b4d030e7615decc731fa",
  measurementId: "G-BCRK4KDM9V"
};


// Initialize your application with the given configuration
firebase.initializeApp(firebaseConfig);

// Set UI config for sign in (see: https://github.com/firebase/firebaseui-web-react)
const uiConfig = {
  // Popup signin flow rather than redirect flow.
  signInFlow: 'popup',
  // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
  signInSuccessUrl: '',
  // We will display Google and Facebook as auth providers.
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
  ]
};


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
      reviewList: {},
      isSignedIn: false,
      onSignInPage: false,
      userName: "Anonymous",
    }
    // Store references to 'favorites' and 'public'
    this.favoritesRef = firebase.database().ref("favorites");
    this.crowdsourcingRef = firebase.database().ref("crowdsourcing");
    this.reviewsRef = firebase.database().ref("reviews");
    this.crowdsourcingRef.on("value", (snapshot) => {
      console.log("something changed on firebase, so I will reset state")
      this.setState({ crowdsourcing: snapshot.val() })
    })

    this.reviewsRef.on("value", (snapshot) => {
      console.log("something changed on firebase, so I will reset state")
      this.setState({ reviews: snapshot.val() })
    })
    //this.like = this.like.bind(this);
  }




  // See: https://github.com/firebase/firebaseui-web-react#using-firebaseauth-with-local-state
  componentDidMount() {
    this.unregisterAuthObserver = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        const userRef = this.favoritesRef.child(user.uid);
        userRef.on("value", (snapshot) => {
          console.log("the value of favorites/userid changed, so i reset the state")
          this.setState({ favorites: snapshot.val() })
        });
      }
      this.setState({ userName: user.displayName })
      this.setState({ isSignedIn: !!user, onSignInPage: false, usern: user })
    });
  }

  handleSignOut = () => {
    firebase.auth().signOut();
    this.setState({ isSignedIn: false });
  }

  componentWillUnmount() {
    this.unregisterAuthObserver();
  }


  //fetching from api according to state change(whether searching by name or clicking on an amenity)
  componentDidUpdate() {
    if (this.state.fetchingAmenity) {
      fetch('https://www.overpass-api.de/api/interpreter?data=[timeout:1][out:json];node[amenity=' + this.state.amenity + '](' + this.state.amenityLatLong + ');out%20meta;')
        .then((res) => res.json())
        .then((data) => {
          this.processData(data.elements);
          this.setState({ fetchingAmenity: false });
          this.setState({ redirect: true });
        });
    }
    if (this.state.fetchingNominatim) {
      fetch('https://nominatim.openstreetmap.org/search?q=' + this.state.searchText + '&format=json&viewbox=' + this.state.searchLatLong + '&bounded=1&extratags=1&addressdetails=1')
        .then((response) => {
          return response.json();
        })
        .then((myJson) => {
          this.processData(myJson);
          this.setState({ fetchingNominatim: false });
          this.setState({ redirect: true })
          this.setState({searchText: ""})
        })
    }
  }

  handleSearchBar = (newSearch) => {
    this.setState({ onSignInPage: false })
    this.setState({
      itemsToDisplay: [],
      searchText: newSearch,
      fetchingNominatim: true,
    });
  }

  handleAmenitySearch = (newAmenity) => {
    this.setState({
      amenity: newAmenity,
      fetchingAmenity: true,
    });
  }

  //clears all location if user presses on nav link to home page
  renderLocation = () => {
    this.setState({ displayedListItems: [] })
    this.setState({ onSignInPage: false })
  }

  //adds reviews added to the state of the item as a name-of-place:review pair
  //deprecated?
  handleReviews = (reviews, key) => {
    this.setState(prevState => ({
      reviewList: {                   // object that we want to update
        ...prevState.reviewList,    // keep all other key-value pairs
        [key]: reviews       // update the value of specific key
      }
    }))

  }

  /*
   * Next 3 methods are for interacting with the leaflet map
   */

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

  //to check whether user is on sign in page
  isLoggingIn = () => {
    this.setState({ onSignInPage: true })
  }

  //Proccesses the data from either overpass or nominatim api calls
  //Organizes the data into simple objects with all the info we need extracted
  processData = (json) => {
    if (json.length == 0) {
      this.setState({ noElements: true })
    } else {
      this.setState({ noElements: false })
      let newItems = [];
      json.forEach( (e, i) => {
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
          uniqueID: '',
          photoURL:'',
        }

        if (e.licence != null) {
          processedData.name = e.address[Object.keys(e.address)[0]];
          processedData.type = (e.type.charAt(0).toUpperCase() + e.type.substring(1)).replace(/_/g, ' ');
          processedData.addr = e.address.house_number != null ? e.address.house_number + " " + e.address.road : "Address unavailable";
          processedData.mobilityCheck = e.extratags.wheelchair != null ? true : false;
          processedData.longAddress = e.address.house_number != null ? e.address.house_number + " " + e.address.road + ", " +
              e.address.city + ", " + e.address.state + " " + e.address.postcode : "Address unavailable";
          processedData.website = e.extratags.website != null ? e.extratags.website : "-";
          processedData.phone = e.extratags.phone != null ? e.extratags.phone : "-";
          processedData.hours = e.extratags.opening_hours != null ? e.extratags.opening_hours : "-";
          processedData.wheelchair = e.extratags.wheelchair;
          processedData.lat = e.lat;
          processedData.lon = e.lon;
          processedData.id = i;
          processedData.uniqueID = e.osm_id;
        } else {
          processedData.name = e.tags.name;
          processedData.type = e.tags.amenity.charAt(0).toUpperCase() + e.tags.amenity.substring(1);
          processedData.addr = e.tags["addr:housenumber"] != null ? e.tags["addr:housenumber"] + " " + e.tags["addr:street"] : "Address unavailable";
          processedData.mobilityCheck = e.tags.wheelchair != null ? true : false;
          processedData.longAddress = e.tags["addr:housenumber"] != null ? e.tags["addr:housenumber"] + " " + e.tags["addr:street"] + ", " +
              e.tags["addr:city"] + " " + e.tags["addr:postcode"] : "Address unavailable";
          processedData.website = e.tags.website != null ? e.tags.website : "--";
          processedData.phone = e.tags.phone != null ? e.tags.phone : "--";
          processedData.hours = e.tags.opening_hours != null ? e.tags.opening_hours : "  --";
          processedData.wheelchair = e.tags.wheelchair;
          processedData.lat = e.lat;
          processedData.lon = e.lon;
          processedData.id = i;
          processedData.uniqueID = e.id;
        }

        // processedData.imageURL = this.googleFetch(processedData.name);

        newItems.push(processedData);
      });
      this.setState({ displayedListItems: newItems })
    }
  }

  // googleFetch = (name) => {
  //   let photoRef ="";

  //   fetch('https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=' + name + '&inputtype=textquery&fields=photos&key=AIzaSyAWUFvN2FQTR7mneTxkpdGn7-IH-8fUDRc')
  //   .then((res) => res.json())

  //   .then((data) => {
  //     console.log(data);
  //   })

    // fetch('https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=' + photoRef + '&key=AIzaSyAWUFvN2FQTR7mneTxkpdGn7-IH-8fUDRc')
    // .then((res) => res.json())
    // .then((data) => {
    //   console.log(data);

  // }

  render() {
    return (
      <main>
        <Header handleSearch={this.handleSearchBar}
                renderLocations={this.renderLocation}
                uiConfig={uiConfig} fbAuth={firebase.auth}
                isSignedIn={this.state.isSignedIn}
                handleSignOut={this.handleSignOut}
                user={this.state.userName} />
        <Switch>
          <Route path="/signin"> {!!firebase.auth().currentUser ? <Redirect to="/" /> : <LogIn login={this.isLoggingIn} uiConfig={uiConfig} fbAuth={firebase.auth} />} </Route>
          <Route exact path="/" render={(props) => <HomePage {...props} handleAmenitySearch={this.handleAmenitySearch} />} />
          <Route path="/list" render={(props) => <List {...props}
            itemsToDisplay={this.state.displayedListItems}
            handleAmenitySearch={this.handleAmenitySearch}
            isFetching={this.state.fetchingAmenity || this.state.fetchingNominatim}
            crowdsourcingData={this.state.crowdsourcing}
            noElements={this.state.noElements}/>}
          />
          <Route path="/info/:id" render={(props) => <Info {...props}
            handleReviews={this.handleReviews}
            reviewList={this.state.reviewList}
            itemsToDisplay={this.state.displayedListItems}
            username={this.state.userName}
            reviewRef={this.reviewsRef}
            reviews={this.state.reviews}
            fbAuth={firebase.auth()}
            renderLocations={this.renderLocation}
            crowdsourcingRef={this.crowdsourcingRef}
            crowdsourcingData={this.state.crowdsourcing} />}
          />
        </Switch>
        {!this.state.onSignInPage ? <MapDisplay handleMapMovement={this.handleMapMovement} itemsToDisplay={this.state.displayedListItems} /> :
          <>
          </>
        }
        <Footer />
      </main>
    );
  }
}

export default App;
