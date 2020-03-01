import React, { Component } from "react";
import {Header} from "../Header/Header";
import {Footer} from "../Footer/Footer";



export class Layout extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div >
                <Header />
                
                <Footer />
            </div>
        );
    }

}
