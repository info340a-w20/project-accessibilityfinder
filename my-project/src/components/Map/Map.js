import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import './Map.css'
import render from 'react-dom'
import { AmenityNav } from '../AmenityNav/AmenityNav';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet'
import { HashRouter as Router, Switch, Route, Link, Redirect, withRouter } from 'react-router-dom';


export class MapDisplay extends Component {
    constructor(props) {
        super(props);
        this.popup = React.createRef();
        this.state = {
            zoom: 13,
            lat: 47.606209,
            lng: -122.332069,
            boundingbox: [],
            center: [47.606209, -122.332069],
        }
    }

    onMapMoveEnd = (e) => {
        this.props.handleMapMovement(e.target.getBounds());
    }

    render() {
        return (
            <div className="map-display">
                <Map id="leaflet-map" center={this.state.center}
                    zoom={this.state.zoom}
                    ref="map"
                    onMoveend={this.onMapMoveEnd}
                    items={this.props.itemsToDisplay}
                >
                    <TileLayer
                        url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
                        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    />
                    {this.props.itemsToDisplay ? this.props.itemsToDisplay.map((location, id) =>
                        <Marker position={[location.lat, location.lon]}>
                            <Popup ref={this.popup}>{location.name}<br /><Link to={"/info/" + location.id}>Display {location.name} full info</Link></Popup>
                        </Marker>) : <Marker position={this.state.center}></Marker>}
                </Map>
            </div>
        );
    }
}
export default MapDisplay;
