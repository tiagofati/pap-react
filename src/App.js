import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Home from './Home.js';
import NavBar from './NavBar.js';
import Container from 'react-bootstrap/Container'

function App() {
  return (
    <Container fluid>
      <NavBar />
      <BrowserRouter>
        <Switch>
          <Route exact path="/home" component={Home} />
          <Redirect to="/home" />
        </Switch>
      </BrowserRouter>
      
    </Container>
  );
}

export default App;
