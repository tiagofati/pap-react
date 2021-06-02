import React from "react";
import { Row, Col, Carousel, Image } from "react-bootstrap";
import './../CSS/Home.css';
import Footer from './Footer.js';



function Home() {
    return (
        <>
            <Carousel>
                <Carousel.Item>
                    <img className="d-block w-100" src="image2.jpg" alt="First slide" />
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100" src="image2.jpg" alt="Second slide" />
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100" src="image2.jpg" alt="Third slide" />
                </Carousel.Item>
            </Carousel>
            <Row >
                <div className="subTitleDiv">
                    <h1 className="subTitle">Best Sellers</h1>
                </div>
            </Row>
            <Row>
                <Col sm={1}>
                </Col>
                <Col sm={10}>
                    <div className="listBlocks">
                        <div className="blocks">
                            <Image src="shoe3.jpg" className="imgShoe"></Image>
                        </div>
                        <div className="blocks">
                            <Image src="shoe3.jpg" className="imgShoe"></Image>
                        </div>
                        <div className="blocks">
                            <Image src="shoe3.jpg" className="imgShoe"></Image>
                        </div>
                        <div className="blocks">
                            <Image src="shoe3.jpg" className="imgShoe"></Image>
                        </div>
                    </div>
                </Col>
                <Col sm={1}></Col>
            </Row>
            <Row>
                <Image src="banner.jpg" className="bannerImg"></Image>
            </Row>
            <Row >
                <div className="subTitleDiv">
                    <h1 className="subTitle">New Releases</h1>
                </div>
            </Row>
            <Row>
                <Col sm={1}>
                </Col>
                <Col sm={10}>
                    <div className="listBlocks">
                        <div className="blocks">
                            <Image src="shoe3.jpg" className="imgShoe"></Image>
                        </div>
                        <div className="blocks">
                            <Image src="shoe3.jpg" className="imgShoe"></Image>
                        </div>
                        <div className="blocks">
                            <Image src="shoe3.jpg" className="imgShoe"></Image>
                        </div>
                        <div className="blocks">
                            <Image src="shoe3.jpg" className="imgShoe"></Image>
                        </div>
                    </div>
                </Col>
                <Col sm={1}></Col>
            </Row>
            <Footer />
        </>
    )
}
export default Home;