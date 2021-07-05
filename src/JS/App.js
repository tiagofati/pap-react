import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Home from './Home.js';
import NavBar from './NavBar.js';
import Products from './Products.js';
import Container from 'react-bootstrap/Container'
import ProductsDetails from './ProductsDetails.js';
import Profile from './Profile.js';
import Register from './Register.js';
import Test from './Test';

function App() {
  function cart(){

  }

  
  return (
    <Container fluid>
      <NavBar />
      <BrowserRouter>
        <Switch>
          <Route exact path="/home" component={Home} />
          <Route exact path="/products" component={Products} />
          <Route exact path="/productsDetails/:idProd" component={ProductsDetails} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/test" component={Test} />
          <Redirect to="/home" />
        </Switch>0
      </BrowserRouter>

    </Container>
  );
}

export default App;
