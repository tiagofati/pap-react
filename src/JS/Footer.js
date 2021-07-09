import React from "react";
import { Row } from "react-bootstrap";
import './../CSS/Footer.css';
import Container from 'react-bootstrap/Container'

function Footer() {
    return (
        <Container fluid>
            <Row>
                <footer class="footerContainer">
                    <section class="leftBox">
                        <h1 class="topic"> About us </h1>
                        <p class="textLeftBox"> We are a market with a few shoes and want to expand our market. With lucky we can reach other countries.</p>
                        <div class="socialMedia">
                            <a class="social" id="socialF" href="https://pt-pt.facebook.com/SLBenfica/"><span class="fab fa-facebook-f"></span></a>
                            <a class="social" id="socialT" href="https://twitter.com/SLBenfica"><span class="fab fa-twitter"></span></a>
                            <a class="social" id="socialI" href="https://www.instagram.com/nataxa.ribeiro/?hl=pt"><span class="fab fa-instagram"></span></a>
                            <a class="social" id="socialY" href="https://www.youtube.com/user/slbenfica"><span class="fab fa-youtube"></span></a>
                        </div>
                    </section>
                    <section class="rightBox">
                        <h1 class="topic">Locations </h1>
                        <div class="adress">
                            <a class="icons" href="https://www.google.pt/maps/place/Oeiras/"> <i class="fas fa-map-marker-alt"></i> </a>
                            <span class="text">Lisboa, Oeiras</span>
                        </div>
                        <div class="adress">
                            <a class="icons"><i class="fas fa-phone-alt"></i></a>
                            <span class="text">+351-915198378</span>
                        </div>
                        <div class="adress">
                            <a class="icons" ><i class="fas fa-envelope"></i></a>
                            <span class="text">teste@gmail.com</span>
                        </div>
                    </section>
                </footer>
            </Row>
        </Container>
    )
}

export default Footer;