import { Nav, Row, Col, Form } from "react-bootstrap";
import Modal from 'react-bootstrap/Modal'
import { React, useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import './../CSS/navBar.css';
import Cart from "./Cart";
import firebase from "../fire";

function NavBar({ cart, deleteOne, addEmail }) {
    const [modalShow, setModalShow] = useState(false);
    const [elementShow, setElementShow] = useState(false);
    const [userState, setUserState] = useState(null);
    const [checkingUserState, setCheckingUserState] = useState(true);
    const [error, setError] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    function MyVerticallyCenteredModal() {
        

        const [routeRedirect, setRedirect] = useState(false);

        const login = async (e) => {
            e.preventDefault();
            let result = await firebase.login(email, password);
            if (result.success) {
                setRedirect(true);
            } else {
                setError(result.data.message)
            }
        }
        const redirect = routeRedirect;
        if (redirect) {
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
                <Modal.Body style={{ height: "280px" }} >
                    <Form style={{paddingLeft:"80px"}} onSubmit={login}>
                        <input type="email" id="email" class="inputCampos" placeholder="Email" onChange={(e) => setEmail(e.target.value)}></input>
                        <input type="password" class="inputCampos" placeholder="Password" onChange={(e) => setPassword(e.target.value)}></input>
                        <p className="error">{error}</p>
                        <button
                            value="Create Account"
                            className="btnSubmitLogin"
                            onClick={() => addEmail(email)}
                        > Login
                        </button>
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

            }
            setCheckingUserState(false)
        })
    })

    const logout = () => {
        firebase.logout();
        setUserState(null);
        
        sessionStorage.removeItem('email');

    }
 

    let buttons;
    if (!checkingUserState) {
        if (userState != null) {
            buttons = (
                <a className="Logout" onClick={logout}>Logout</a>

            )
        } else {

            buttons = (
                <>
                    <a onClick={() => setModalShow(true)} className="login"> Login </a>
                    <a href="/register" className="Register"> Register </a>
                </>

            )
        }
    }

    function total() {
        var total1 = 0;
        cart.map(prod => total1 += prod.price)
        return total1;

    }
    return (
        <>
            {MyVerticallyCenteredModal()}
            <Row className="navBar">
                <Col sm={2} className="d-flex justify-content-center">
                    <a href="/home"> <img src="../images/logo.png" style={{ marginTop: "-1px" }} alt=""></img></a>
                </Col>
                <Col sm={7} className="d-flex justify-content-center">
                    <Nav>
                        <a href="/home" className="navigation"> Home </a>
                        <a href="/products" className="navigation"> Products </a>
                    </Nav>
                </Col>
                <Col sm={3} className="d-flex justify-content-center" style={{ padding: "8px" }}>
                    <div className="divLR">
                        {buttons}
                    </div>
                    <button className="btnCart" id="cart" onClick={() => setElementShow(!elementShow)}>
                        <i class="fas fa-cart-plus fa-2x"></i>
                        <span className="montante">{total()}€</span>
                    </button>
                </Col>

            </Row>
            <Cart isActive={elementShow}  setModalShow={setModalShow} cart={cart} deleteOne={deleteOne} check={userState} email={email}/>
        </>
    )
}
export default NavBar;
