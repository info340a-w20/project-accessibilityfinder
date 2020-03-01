import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import './Footer.css'



class Footer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <footer class="footer">
                <Container>
                    <p>© 2020 Copyright: Amit Galitzky & Jill Nguyen</p>
                </Container>
            </footer>);
    }

}
export default Footer;
