import React from "react";
import { Row, Col } from "react-bootstrap";
import './../CSS/Register.css';
import Footer from './Footer.js';



function Register() {
    return (
        <>
            <Row>
                <Col sm={4}></Col>
                <Col sm={4}>
                    <section className="registerContainer">
                        <div className="navRegister">Join Our Community</div>
                        <form>
                            <input type="email" class="inputCampos" placeholder="Email"></input>
                            <input type="password" class="inputCampos" placeholder="Password"></input>
                            <input type="password" class="inputCampos" placeholder="Confirm Password"></input>
                            <input type="text" class="inputCampos" placeholder="First Name"></input>
                            <input type="text" class="inputCampos" placeholder="Last Name"></input>
                            <input type="tel" class="inputCampos" placeholder="Phone Number"></input>
                            <input type="Date" class="inputCampos" placeholder=" Date of Birth"></input>
                            <p className="terms"> By creating an account, you agree to FatiExpress's Privacy Policy and Terms of Use.</p>
                            <button type="submit" class="submitBtn">Register</button>
                        </form>

                    </section>
                </Col>
                <Col sm={4}> </Col>
            </Row>
            <Footer />
        </>
    )
}

export default Register;
