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
            position: [47.606209, -122.332069],
        }
    }

    render() {
        // return (<div id="leaflet-map" className="leaflet-container" >
        //     <Map
        //         center={[this.state.lat, this.state.lng]}
        //         zoom={this.state.zoom}
        //     >
        //         <TileLayer
        //             url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
        //             attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        //         />

        //     </Map>
        // </div>)
        return (
            <div className="map-display">
                <Map id="leaflet-map" center={this.state.position} zoom={13}>
                    <TileLayer
                        url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
                        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    />
                    <Marker position={this.state.position}>
                        <Popup>A pretty CSS3 popup.<br />Easily customizable.</Popup>
                    </Marker>
                </Map>
            </div>
        );

        // return (<Map center={[22.5774626732038, 114.04924392700197]} zoom={11}>
        //     <TileLayer
        //       url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
        //       attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        //     />
        //     <CanvasMarkersLayer>
        //       <Marker position={[22.5774626732038, 114.04924392700197]} icon={defaultIcon}>
        //           <Popup>
        //             <div>hello !</div>
        //           </Popup>
        //       </Marker>
        //     </CanvasMarkersLayer>
        //   </Map>);

    }
}
export default MapDisplay;
