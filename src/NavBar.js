import {Nav, Row, Col } from "react-bootstrap";
import React from "react";
import './navBar.css';

function NavBar() {
    return (
        <Row className="navBar">
            <Col sm={2} style={{padding: "5px"}}>
                <a href="/home" className="navbarBrand">FatiExpress</a>
            </Col>
            <Col sm={7}>
                <Row>
                    <Col sm={4}></Col>
                    <Col sn={8}>
                        <Nav>
                            <a href="/home" className="navigation"> Home </a>
                            <a href="/home" className="navigation"> Products </a>
                            <a href="/home" className="navigation"> Profile </a>
                        </Nav>
                    </Col>
                </Row>
            </Col>
            <Col sm={3}>
                <Row>
                    <Col sm={6}>
                        <div className="divLR">
                            <div href="/home" className="login"> Login </div>
                            <div href="/home" className="Register"> Register </div>
                        </div>
                    </Col>
                    <Col sm={6}>
                        <button className="btnCart" id="cart"> 
                            <i class="fas fa-cart-plus fa-2x"></i>
                            <span className="montante">00,00€</span>
                        </button>                   
                    </Col>
                </Row>
            </Col>
        </Row>

    )
}
export default NavBar;
