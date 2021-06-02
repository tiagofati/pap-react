import {React, useState, useEffect, render} from "react";
import { Row, Col, Button } from "react-bootstrap";
import Footer from './Footer.js';
import './../CSS/ProductsDetails.css';
import ReactDOM from 'react-dom';


function ProductsDetails() {
    function simulateNetworkRequest() {
        return new Promise((resolve) => setTimeout(resolve, 2000));
    }

    function LoadingButton() {
        const [isLoading, setLoading] = useState(false);

        useEffect(() => {
            if (isLoading) {
                simulateNetworkRequest().then(() => {
                    setLoading(false);
                });
            }
        }, [isLoading]);


        const handleClick = () => setLoading(true);
        return (
            <>
                <Row style={{ marginTop: "50px", height: "1000px" }}>
                    <Col sm={2}></Col>
                    <Col sm={8}>
                        <Row>
                            <Col sm={8} style={{ border: "solid black 1px" }}>
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
                                <h1> Name of Product</h1>
                                <h1>Preço</h1>

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
                                <Button variant="primary" disabled={isLoading} onClick={!isLoading ? handleClick : null}>
                                    {isLoading ? 'Loading…' : 'Click to load'}
                                </Button>

                            </Col>
                        </Row>
                    </Col>
                    <Col sm={2}></Col>
                </Row>
                <Footer />
            </>
        )
    }
    ReactDOM.render(LoadingButton());
}
export default ProductsDetails;

