import React from "react";
import Footer from './Footer.js';
import { Row, Col, Tab, Nav } from "react-bootstrap";
import './../CSS/Profile.css';


function Profile() {
  return (
    <>
      <Tab.Container id="left-tabs-example" defaultActiveKey="first">
        <Row>
          <Col sm={3}>
            <Nav variant="pills" className="flex-column">
              <Nav.Item>
                <Nav.Link eventKey="first">Tab 1</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="second">Tab 2</Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col sm={9}>
            <Tab.Content>
              <Tab.Pane eventKey="first">
                <p style={{color:"black"}}>asd</p>
              </Tab.Pane>
              <Tab.Pane eventKey="second">
                <p>asd1</p>
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
      <Footer />
    </>
  )
}

export default Profile;
