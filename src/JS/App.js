import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Home from './Home.js';
import NavBar from './NavBar.js';
import Products from './Products.js';
import Container from 'react-bootstrap/Container'
import ProductsDetails from './ProductsDetails.js';
import Profile from './Profile.js';
import Register from './Register.js';


function App() {
  const [cart, setCart ] = useState(sessionStorage.getItem("products") === "" ? JSON.stringify(sessionStorage.getItem("products")) : []); 
  
  function addToCart (product) {
    const currentList = cart
    currentList.push(product)
    sessionStorage.setItem("products", currentList);
    setCart(currentList)
    console.log(sessionStorage.getItem("products"))
  }



  return (
    <Container fluid>
      
      <BrowserRouter>
      <NavBar cart={cart}/>
        <Switch>
          
          <Route exact path="/home" component={Home} />
          <Route exact path="/products" component={Products} />
          <Route exact path="/productsDetails/:idProd" render={(props => <ProductsDetails addToCart={addToCart} props={props}/> )} /> 
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/register" component={Register} />
          <Redirect to="/home" />
        </Switch>
      </BrowserRouter>
    </Container>
  );
}

export default App;
