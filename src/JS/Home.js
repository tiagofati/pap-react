import React, { useState, useEffect } from "react";
import { Row, Col, Carousel, Image } from "react-bootstrap";
import './../CSS/Home.css';
import Footer from './Footer.js';


function Home() {
    const [bestSellers, setBestSellers] = useState(null);
    const [newReleases, setNewReleases] = useState(null);
    const [loading, setLoading] = useState(true);
    const [loading1, setLoading1] = useState(true);
    const [error, setError] = useState(null);
    const [error1, setError1] = useState(null);
    useEffect(() => {
        fetch("https://localhost:44360/products/bestSellers", {
            method: "GET",
            headers: { "Content-Type": "application/json" }
        })
        
            .then((response) => response.json())

            .then(products => { setBestSellers(products); console.log(products); })

            .catch((error) => {
                console.error("Error fetching data: ", error);
                setError(error);
            })
            .finally(() => {

                setLoading(false);
            });
        fetch("https://localhost:44360/products/newReleases", {
            method: "GET",
            headers: { "Content-Type": "application/json" }
        })
            .then((response) => response.json())

            .then(products => { setNewReleases(products); console.log(products); })

            .catch((error) => {
                console.error("Error fetching data: ", error);
                setError1(error);
            })
            .finally(() => {

                setLoading1(false);
            });
        
    }, []);
    if (loading) return "Loading...";
    if (error) return "Error!";
    if (loading1) return "Loading...";
    if (error1) return "Error!";

    
    function getProductTable() {
        return bestSellers.map(
            product =>
                <Col sm={3} className="d-flex justify-content-center">
                    <div className="blocks">
                        <img src={`../images/LateralEsq/${product.resourceImg}`} className="img123"></img>
                    </div>
                </Col>
        )
    }
    
    function getRandomFour() {
        return newReleases.map(
            product =>
                <Col sm={3} className="d-flex justify-content-center">
                    <div className="blocks">
                        <img src={`../images/LateralEsq/${product.resourceImg}`} className="img123"></img>
                    </div>
                </Col>
        )
    }

    return (
        <>
            <Carousel>
                <Carousel.Item>
                    <img className="d-block w-100" src="../images/carousel1.jpg" alt="First slide" />
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100" src="../images/carousel2.jpg" alt="Second slide" />
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100" src="../images/carousel3.jpg" alt="Third slide" />
                </Carousel.Item>
            </Carousel>
            <Row>
                <div className="subTitleDiv">
                    <h1 className="subTitle">Best Sellers</h1>
                </div>
            </Row>
            <Row className="listBlocks">
                {getProductTable()}
            </Row>
            <Row>
                <Image src="banner.jpg" className="bannerImg"></Image>
            </Row>
            <Row >
                <div className="subTitleDiv">
                    <h1 className="subTitle">New Releases</h1>
                </div>
            </Row>
            <Row className="listBlocks">
                {getRandomFour()}
            </Row>
            <Footer />
        </>
    )
}
export default Home;