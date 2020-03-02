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
import 'whatwg-fetch';
import createHistory from 'history/createBrowserHistory';



export class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      displayedListItems: [],
      fetching: false,
      amenity: "",
      strLatLong: "47.481002,-122.459696,47.734136,-122.224433",
      reDirect: false,
      noElements: false,
    }
  }


  componentDidUpdate() {
    if (this.state.fetching) {
      fetch('https://www.overpass-api.de/api/interpreter?data=[timeout:1][out:json];node[amenity=' + this.state.amenity + '](' + this.state.strLatLong + ');out%20meta;')
        // .then((response) => {
        //   return response.json();
        // })
        .then((res) => res.json())
      .then((data) => {
        console.log(data);
        // .then((myJson) => {
        //   console.log(myJson);
          this.processData(data);
          this.setState({ fetching: false });
          this.setState({redirect: true});
          // const history = createHistory();
          // const listen = history.listen((location, action) => {
          //   console.log(action, location.pathname, location.state);
          // });
          // this.redirect();
        //   // renderMarker();
        //   // populateList();
        });
    //     history.push('/RouteToRedirectTo', { redirect: true });

    //     //redirect to the route you want
    //     history.go('/RouteToRedirectTo');
    // }
  }
}
  

  redirect = () => {
    if (this.state.redirect) {
      console.log("redirect method");
      return <Redirect push to="/list" />;
    }

  }

  processData = (json) => {
    if (json.length == 0) {
      this.setState({ noElements: true })
      return;
    }

    let newItems = [];
    json.elements.forEach(function (e, i) {
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
        processedData.mobilityCheck = e.extratags.wheelchair != null ? "<i class=\"fas fa-check-circle\"></i>" : "<i class=\"fas fa-times-circle\"></i>";
        processedData.longAddress = e.address.house_number + " " + e.address.road + ", " + e.address.city + ", " + e.address.state + " " + e.address.postcode;
        processedData.website = e.extratags.website != null ? e.extratags.website : "-";
        processedData.phone = e.extratags.phone != null ? e.extratags.phone : "-";
        processedData.hours = e.extratags.opening_hours != null ? e.extratags.opening_hours : "-";
        processedData.wheelchair = e.extratags.wheelchair;

      } else {
        processedData.name = e.tags.name;
        processedData.type = e.tags.amenity.charAt(0).toUpperCase() + e.tags.amenity.substring(1);
        processedData.addr = e.tags["addr:housenumber"] != null ? e.tags["addr:housenumber"] + " " + e.tags["addr:street"] : "Address unavailable";
        processedData.mobilityCheck = e.tags.wheelchair != null ? "<i class=\"fas fa-check-circle\"></i>" : "<i class=\"fas fa-times-circle\"></i>";
        processedData.longAddress = e.tags["addr:housenumber"] + " " + e.tags["addr:street"] + ", " + e.tags["addr:city"] + " " + e.tags["addr:postcode"];
        processedData.website = e.tags.website != null ? e.tags.website : "--";
        processedData.phone = e.tags.phone != null ? e.tags.phone : "--";
        processedData.hours = e.tags.opening_hours != null ? e.tags.opening_hours : "  --";
        processedData.wheelchair = e.tags.wheelchair;
      }
      newItems.push(processedData);
    });
    this.setState({displayedListItems:newItems})
    console.log(newItems);
  }

  handleAmenitySearch = (newAmenity) => {
    this.setState({
      amenity: newAmenity,
      fetching: true,
    });
  }


  callDataByAmenityOverPass(amenityFromClient) {
    // let strLatLong = mapBoundOverpass();
    // let homeDiv = document.getElementById("left-view-home");
    // homeDiv.style.display = "none";
    //
    // let amenity = amenityFromClient;
    // let listDiv = document.getElementById("left-view-list");
    // listDiv.style.display = "block";
  }

  render() {
    console.log(this.state);
    return (
      <main>
        <Header />
        <Switch>
          <Route exact path="/" render={(props) => <HomePage {...props} handleAmenitySearch={this.handleAmenitySearch} />} />
          <Route path="/list" render={(props) => <List {...props}
            itemsToDisplay={this.state.displayedListItems}
            handleAmenitySearch={this.handleAmenitySearch}
          />} />
        </Switch>
        <Map />
        <Footer />
      </main>
    )
  }
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
