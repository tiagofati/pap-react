import React from "react";
import { Row, Col } from "react-bootstrap";
import Footer from './Footer.js';
import './../CSS/ProductsDetails.css';




function ProductsDetails() {
    return (
        <>
            <Row style={{ marginTop: "50px", height: "1000px" }}>
                <Col sm={2}></Col>
                <Col sm={8}>
                    <Row style={{height:"800px"}}>
                        <Col sm={8} style={{ border: "solid black 1px"}}>
                            <img src="image1.jpg" className="mainImg"></img>
                            <div className="presImg">
                                <img src="image1.jpg" className="presImgs"></img>
                                <img src="image1.jpg" className="presImgs"></img>
                                <img src="image1.jpg" className="presImgs"></img>
                                <img src="image1.jpg" className="presImgs"></img>
                                <img src="image1.jpg" className="presImgs"></img>
                                <img src="image1.jpg" className="presImgs"></img>
                            </div>
                        </Col>
                        <Col sm={4} style={{ border: "solid black 1px" }}>
                            <p className="nameProd"> Name of Product</p>
                            <p className="priceProd">Price </p>

                            <Row className="tableSizes">
                                <Col sm={2}>
                                    <div className="sizes">35</div>
                                    <div className="sizes">37.5</div>
                                    <div className="sizes">40</div>
                                    <div className="sizes">42.5</div>
                                </Col>
                                <Col sm={2}>
                                    <div className="sizes">35.5</div>
                                    <div className="sizes">38</div>
                                    <div className="sizes">40.5</div>
                                    <div className="sizes">43</div>
                                </Col>
                                <Col sm={2}>
                                    <div className="sizes">36</div>
                                    <div className="sizes">38.5</div>
                                    <div className="sizes">41</div>
                                    <div className="sizes">43.5</div>
                                </Col>
                                <Col sm={2}>
                                    <div className="sizes">36.6</div>
                                    <div className="sizes">39</div>
                                    <div className="sizes">41.5</div>
                                    <div className="sizes">44</div>
                                </Col>
                                <Col sm={2}>
                                    <div className="sizes">37</div>
                                    <div className="sizes">39.5</div>
                                    <div className="sizes">42</div>
                                    <div className="sizes">44.5</div>
                                </Col>
                                <Col sm={2}>
                                    <div className="sizes">37</div>
                                    <div className="sizes">39.5</div>
                                    <div className="sizes">42</div>
                                    <div className="sizes">44.5</div>
                                </Col>
                            </Row>
                            <button className="addCart">Add to Cart</button>
                            <p className="description"> 
                                aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa <br /> aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                                aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa <br /> aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                                aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa <br /> aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                                aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa <br /> aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                            </p>
                        </Col>
                    </Row>
                </Col>
                <Col sm={2}></Col>
            </Row>
            <Footer />
        </>
    )
}
export default ProductsDetails;

