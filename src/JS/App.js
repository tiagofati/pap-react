import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Home from './Home.js';
import NavBar from './NavBar.js';
import Products from './Products.js';
import Container from 'react-bootstrap/Container'
import ProductsDetails from './ProductsDetails.js';
import Profile from './Profile.js';

function App() {
  return (
    <Container fluid>
      <NavBar />
      <BrowserRouter>
        <Switch>
          <Route exact path="/home" component={Home} />
          <Route exact path="/products" component={Products} />
          <Route exact path="/productsDetails" component={ProductsDetails} />
          <Route exact path="/profile" component={Profile} />
          <Redirect to="/home" />
        </Switch>
      </BrowserRouter>
      
    </Container>
  );
}

export default App;
