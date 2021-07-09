import { Nav, Row, Col, Form } from "react-bootstrap";
import Modal from 'react-bootstrap/Modal'
import { React, useState,  useEffect } from "react";
import { Redirect } from "react-router-dom";
import './../CSS/navBar.css';
import Cart from "./Cart";
import firebase from "../fire";

function NavBar({ cart, props }) {
    const [modalShow, setModalShow] = useState(false);
    const [elementShow, setElementShow] = useState(false);
    const [userState, setUserState] = useState(null);

    function MyVerticallyCenteredModal() {
        const [email, setEmail] = useState("");
        const [password, setPassword] = useState("");

        const [routeRedirect, setRedirect] = useState(false);

        const login = async (e) => {
            e.preventDefault();
            let user = await firebase.login(email, password);
            console.log(user);
            setRedirect(true);
        }
        const redirect = routeRedirect;
        if(redirect){
            return <Redirect to="/" />
        }
        return (
            <Modal
                show={modalShow}
                onHide={() => setModalShow(!modalShow)}
                style={{ opacity: 1 }}
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title className="modalTitle">
                        Login
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body style={{ paddingLeft: "80px", height: "200px" }} >
                    <Form onSubmit={login}>
                        <input type="email" id="email" class="inputCampos" placeholder="Email" onChange={(e) => setEmail(e.target.value)}></input>
                        <input type="password" class="inputCampos" placeholder="Password" onChange={(e) => setPassword(e.target.value)}></input>
                        <button 
                        value="Create Account" 
                        className="btnSubmitLogin" 
                        onClick={() => console.log("abc")}>Login</button>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    
                </Modal.Footer>
            </Modal>
        );
    }

    useEffect(() => {
        firebase.getUserState().then(user => {
            if (user) {
            setUserState(user);
            console.log(user);
            }
    
        })
    })
   
    const logout = () => {
      firebase.logout();
      setUserState(null);
  
    }
    
    let buttons;
    if (userState != null) {
      buttons = (
         <a className="butLogin" onClick={logout}>Logout</a>

      )
    } else {
  
      buttons = (
        <>
            <a onClick={() => setModalShow(true)} className="login"> Login </a>
            <a href="/register" className="Register"> Register </a>
        </>
  
      )
    }
    return (
        <>

            {MyVerticallyCenteredModal()}
            <Row className="navBar">
                <Col sm={2} className="d-flex justify-content-center">
                    <a href="/home"> <img src="../images/logo.png" style={{marginTop:"-1px"}}></img></a>
                </Col>
                <Col sm={7} className="d-flex justify-content-center">
                    <Nav>
                        <a href="/home" className="navigation"> Home </a>
                        <a href="/products" className="navigation"> Products </a>
                    </Nav>
                </Col>
                <Col sm={3} className="d-flex justify-content-center" style={{padding:"8px"}}>  
                    <div className="divLR">
                        {buttons}
                    </div>
                    <button className="btnCart" id="cart" onClick={() => setElementShow(!elementShow)}>
                        <i class="fas fa-cart-plus fa-2x"></i>
                        <span className="montante">00.00€</span>
                    </button>
                </Col>

            </Row>
            <Cart isActive={elementShow} cart={cart} />
        </>
    )
}
export default NavBar;
