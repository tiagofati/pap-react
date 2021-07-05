import { Nav, Row, Col, Button } from "react-bootstrap";
import Modal from 'react-bootstrap/Modal'
import {React, useState} from "react";
import './../CSS/navBar.css';
import TestComponent from "./Cart";

function NavBar() {
    const [modalShow, setModalShow] = useState(false);
    const [elementShow, setElementShow] = useState(false)

    function MyVerticallyCenteredModal() {
        return (
            <Modal 
                show={modalShow}
                onHide={()=>setModalShow(!modalShow)}
                style={{opacity:1}}
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title className="modalTitle">
                        Login
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body style={{paddingLeft:"80px", height:"200px"}}>
                    
                    <input type="email" id="email" class="inputCampos" placeholder="Email"></input>
                    <input type="password" class="inputCampos" placeholder="Password"></input>
                </Modal.Body>
                <Modal.Footer>
                    <Button className="btnSubmitLogin" onClick={()=>console.log()}>Login</Button>
                </Modal.Footer>
            </Modal>
        );
    }
    return (
        <>
            <TestComponent isActive={elementShow} />
            {MyVerticallyCenteredModal()}
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
                            </div>
                        </Col>
                        <Col sm={6}>
                            <button className="btnCart" id="cart" onClick={() => setElementShow(!elementShow)}>
                                <i class="fas fa-cart-plus fa-2x"></i>
                                <span className="montante">00,00€</span>
                            </button>
                        </Col>
                    </Row>
                </Col>
                
            </Row>
        </>
    )
}
export default NavBar;
