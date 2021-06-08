import { Nav, Row, Col, Modal, Button } from "react-bootstrap";
import React from "react";
import './../CSS/navBar.css';

function MyVerticallyCenteredModal(props) {
    return (
        <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Login
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <input type="email" class="inputCampos" placeholder="Email"></input>
                <input type="password" class="inputCampos" placeholder="Password"></input>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Login</Button>
            </Modal.Footer>
        </Modal>
    );
}

function NavBar() {
    const [modalShow, setModalShow] = React.useState(false);
    return (
        <Row className="navBar">
            <Col sm={2} style={{ padding: "5px" }}>
                <a href="/home" className="navbarBrand">FatiExpress</a>
            </Col>
            <Col sm={7}>
                <Row>
                    <Col sm={4}></Col>
                    <Col sn={8}>
                        <Nav>
                            <a href="/home" className="navigation"> Home </a>
                            <a href="/products" className="navigation"> Products </a>
                            <a href="/profile" className="navigation"> Profile </a>
                        </Nav>
                    </Col>
                </Row>
            </Col>
            <Col sm={3}>
                <Row>
                    <Col sm={6}>
                        <div className="divLR">
                            <a onClick={() => setModalShow(true)} className="login"> Login </a>
                            <a href="/register" className="Register"> Register </a>
                            <MyVerticallyCenteredModal show={modalShow} onHide={() => setModalShow(false)} />
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
