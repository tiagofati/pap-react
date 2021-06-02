import React from "react";
import { Row, Col } from "react-bootstrap";
import './../CSS/Products.css';
import Footer from './Footer.js';

function Products() {
    return (
        <>
            <Row style={{marginTop:"50px"}}>
                <Col sm={2}></Col>
                <Col sm={8}>
                    <Row>
                        <Col sm={3}>
                            <div className="card">
                                <img src="image1.jpg" className="imgOnCard"></img>
                                <p className="nameProd"> Name of Product </p>
                                <p className="price"> Price </p>
                            </div>
                        </Col>
                        <Col sm={3}>
                            <div className="card">
                                <img src="image1.jpg" className="imgOnCard"></img>
                                <p className="nameProd"> Name of Product </p>
                                <p className="price"> Price </p>
                            </div>
                        </Col>
                        <Col sm={3}>
                            <div className="card">
                                <img src="image1.jpg" className="imgOnCard"></img>
                                <p className="nameProd"> Name of Product </p>
                                <p className="price"> Price </p>
                            </div>
                        </Col>
                        <Col sm={3}>
                            <div className="card">
                                <img src="image1.jpg" className="imgOnCard"></img>
                                <p className="nameProd"> Name of Product </p>
                                <p className="price"> Price </p>
                            </div>
                        </Col>
                        <Col sm={3}>
                            <div className="card">
                                <img src="image1.jpg" className="imgOnCard"></img>
                                <p className="nameProd"> Name of Product </p>
                                <p className="price"> Price </p>
                            </div>
                        </Col>
                        <Col sm={3}>
                            <div className="card">
                                <img src="image1.jpg" className="imgOnCard"></img>
                                <p className="nameProd"> Name of Product </p>
                                <p className="price"> Price </p>
                            </div>
                        </Col>
                        <Col sm={3}>
                            <div className="card">
                                <img src="image1.jpg" className="imgOnCard"></img>
                                <p className="nameProd"> Name of Product </p>
                                <p className="price"> Price </p>
                            </div>
                        </Col>
                        <Col sm={3}>
                            <div className="card">
                                <img src="image1.jpg" className="imgOnCard"></img>
                                <p className="nameProd"> Name of Product </p>
                                <p className="price"> Price </p>
                            </div>
                        </Col>
                        <Col sm={3}>
                            <div className="card">
                                <img src="image1.jpg" className="imgOnCard"></img>
                                <p className="nameProd"> Name of Product </p>
                                <p className="price"> Price </p>
                            </div>
                        </Col>
                        <Col sm={3}>
                            <div className="card">
                                <img src="image1.jpg" className="imgOnCard"></img>
                                <p className="nameProd"> Name of Product </p>
                                <p className="price"> Price </p>
                            </div>
                        </Col>
                        <Col sm={3}>
                            <div className="card">
                                <img src="image1.jpg" className="imgOnCard"></img>
                                <p className="nameProd"> Name of Product </p>
                                <p className="price"> Price </p>
                            </div>
                        </Col>
                        <Col sm={3}>
                            <div className="card">
                                <img src="image1.jpg" className="imgOnCard"></img>
                                <p className="nameProd"> Name of Product </p>
                                <p className="price"> Price </p>
                            </div>
                        </Col> 
                    </Row>
                </Col>
                <Col sm={2}></Col>
            </Row>
            <Footer />
        </>
    )
}

export default Products;