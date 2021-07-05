import React from "react";
import Footer from './Footer.js';
import { Row, Col, Tab, Nav } from "react-bootstrap";
import './../CSS/Profile.css';


function Profile() {
  return (
    <>
      <Tab.Container defaultActiveKey="first">
        <Row className="containerProfile">
          <Col sm={2}>
            <Nav className="flex-column">
              <Nav.Item>
                <Nav.Link className="tabs" eventKey="first">Personal Data</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link className="tabs" eventKey="second">Orders</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link className="tabs" eventKey="third">Your Favorites</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link className="tabs" eventKey="four">Address List</Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col sm={1}></Col>
          <Col sm={9} style={{borderLeft:"solid black 1px", height:"550px"}}>
            <Tab.Content>
              <Tab.Pane eventKey="first" style={{opacity:1}}>
                <h1 className="title">My Data</h1>
                <p className="text">Please check the details below to ensure they are up to date.</p>

                <h1 className="subTitle">Data</h1>
                <p className="text">Name of user</p>
                <p className="text">Date of user</p>
                <p className="text">Age</p>
                
                <h1 className="subTitle">Login Data</h1>
                <h2 className="subSubTitle">Email</h2>
                <p className="text">Email of user</p>

                <h2 className="subSubTitle">Password</h2>
                <p className="text">Password</p>
              </Tab.Pane>

              <Tab.Pane eventKey="second" style={{opacity:1}}>
                <h1 className="title">My Orders</h1>

              </Tab.Pane>

              <Tab.Pane eventKey="third" style={{opacity:1}}>
                <h1 className="title">My Favorites</h1>

              </Tab.Pane>
              <Tab.Pane eventKey="four" style={{opacity:1}}>
              <h1 className="title">Address List</h1>
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
