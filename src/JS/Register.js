import { React, useState} from "react";
import { Row, Col, Form } from "react-bootstrap";
import './../CSS/Register.css';
import Footer from './Footer.js';
import firebase from "../fire";
import { Redirect } from 'react-router-dom';



function Register() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [routeRedirect, setRedirect] = useState(false);

    const signin = async(e) => {
        e.preventDefault();
        let user = await firebase.signin(email, password);
        console.log(user)
        setRedirect(true);
    }
    const redirect = routeRedirect;
    if(redirect){
        return <Redirect to="/" />
    }
    return (
        <>
            <Row>
                <Col sm={4}></Col>
                <Col sm={4}>
                    <section className="registerContainer">
                        <div className="navRegister">Join Our Community</div>
                        <Form onSubmit={signin}>
                            <input type="email" class="inputCampos" placeholder="Email" onChange={(e) => setEmail(e.target.value)}></input>
                            <input type="password" class="inputCampos" placeholder="Password" onChange={(e) => setPassword(e.target.value)}></input>
                            <input type="text" class="inputCampos" placeholder="First Name"></input>
                            <input type="text" class="inputCampos" placeholder="Last Name"></input>
                            <input type="tel" class="inputCampos" placeholder="Phone Number"></input>
                            <input type="Date" class="inputCampos" placeholder=" Date of Birth"></input>
                            <p className="terms"> By creating an account, you agree to FatiExpress's Privacy Policy and Terms of Use.</p>
                            <button type="submit" class="submitBtn">Register</button>
                        </Form>
                    </section>
                </Col>
                <Col sm={4}> </Col>
            </Row>
            <Footer />
        </>
    )
}

export default Register;
