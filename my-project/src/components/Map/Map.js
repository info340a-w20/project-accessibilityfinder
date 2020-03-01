import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import './Map.css'
import render from 'react-dom'
import { AmenityNav } from '../AmenityNav/AmenityNav';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet'




export class MapDisplay extends Component {
    constructor(props) {
        super(props);

        this.state = {
            zoom: 18,
            lat: 47.606209,
            lng: -122.332069,
            boundingbox: [],
            position: [],
        }
    }

    render() {
        return (<div id="leaflet-map" className="leaflet-container" >
            <Map
                center={[this.state.lat, this.state.lng]}
                zoom={this.state.zoom}
            >
                <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
                />

            </Map>
        </div>)

    }
}
export default MapDisplay;
