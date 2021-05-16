import React from "react";
import { Row, Col, Carousel, Image } from "react-bootstrap";
import './Home.css';



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
                    <Row>
                        <Col sm={3}>
                            <a>
                                <Image src="shoe3.jpg"></Image>
                            </a>
                        </Col>
                        <Col sm={3}>
                            <a>
                                <Image src="shoe3.jpg"></Image>
                            </a>
                        </Col>
                        <Col sm={3}>
                            <a>
                                <Image src="shoe3.jpg"></Image>
                            </a>
                        </Col>
                        <Col sm={3}>
                            <a>
                                <Image src="shoe3.jpg"></Image>
                            </a>
                        </Col>
                    </Row>
                </Col>
                <Col sm={1}></Col>
            </Row>
            <Row>
                <Image src="banner.jpg" fluid></Image>
            </Row>
        </>
    )
}
export default Home;