import React from "react";
import { Row } from "react-bootstrap";
import './../CSS/Footer.css';
import Container from 'react-bootstrap/Container'

function Footer() {
    return (
        <Container fluid>
            <Row>
                <footer className="footerContainer">
                    <section className="leftBox">
                        <h1 className="topic"> About us </h1>
                        <p className="textLeftBox"> We are a market with a few shoes and want to expand our market. With lucky we can reach other countries.</p>
                        <div class="socialMedia">
                            <a className="social" id="socialF" href="https://pt-pt.facebook.com/SLBenfica/"><span className="fab fa-facebook-f"></span></a>
                            <a className="social" id="socialT" href="https://twitter.com/SLBenfica"><span className="fab fa-twitter"></span></a>
                            <a className="social" id="socialI" href="https://www.instagram.com/nataxa.ribeiro/?hl=pt"><span className="fab fa-instagram"></span></a>
                            <a className="social" id="socialY" href="https://www.youtube.com/user/slbenfica"><span className="fab fa-youtube"></span></a>
                        </div>
                    </section>
                    <section className="rightBox">
                        <h1 className="topic">Locations </h1>
                        <div className="adress">
                            <a href="" className="icons"> <i className="fas fa-map-marker-alt"></i> </a>
                            <span className="text">Lisboa, Oeiras</span>
                        </div>
                        <div className="adress">
                            <a href="" className="icons"><i className="fas fa-phone-alt"></i></a>
                            <span className="text">+351-915198378</span>
                        </div>
                        <div class="adress">
                            <a href="" className="icons" ><i className="fas fa-envelope"></i></a>
                            <span className="text">teste@gmail.com</span>
                        </div>
                    </section>
                </footer>
            </Row>
        </Container>
    )
}

export default Footer;