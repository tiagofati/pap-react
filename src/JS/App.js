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
  const [cart, setCart ] = useState([]); 
  const [count, setCount] = useState(0)

  useEffect(() => {
    setCart(JSON.parse(sessionStorage.getItem("products")) || [])   
    
  }, []);

  function deleteOne(idx) { 
    const currentList = cart
    currentList.splice(idx, 1)
    sessionStorage.setItem("products", JSON.stringify(currentList));
    setCart(currentList)
    setCount(count+1)

  }

  function addEmail(email) {
    sessionStorage.setItem("email", email);

  }
  
  function addToCart (product) {
    const currentList = cart
    currentList.push(product)
    sessionStorage.setItem("products", JSON.stringify(currentList));
    setCart(currentList)
    setCount(count+1)
  }
  return (
    <Container fluid>
      <BrowserRouter>
      <NavBar cart={cart} deleteOne={deleteOne} addEmail={addEmail}/>
        <Switch>
          <Route exact path="/home" component={Home} />
          <Route exact path="/products" component={Products} />
          <Route exact path="/productsDetails/:idProd" render={(props => <ProductsDetails addToCart={addToCart} props={props}/> )} /> 
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/register" render={( () => <Register  addEmail={addEmail}/> )}/>
          <Redirect to="/home" />
        </Switch>
      </BrowserRouter>
    </Container>
    
  );
}

export default App;
