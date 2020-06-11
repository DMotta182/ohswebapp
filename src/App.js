import React from 'react';
import './App.css';
import { Container } from 'react-bootstrap'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import ItemDisplay from './components/component-item-show/item-show'
import NavigationBar from './components/component-navbar/navbar'
import Recomendations from './containers/recomandations-container'
import SameVendor from './containers/samevendor-container'
import Login from './components/component-login/login'
import PaymentForm from './components/component-payment-form/payment-form'
import PaymentSuccess from './components/component-payment-success/payment-success'

function App() {
  return (
    <Router>
      <Container className="App bg-light">
        <NavigationBar/>
        <Switch>
          <Route path='/item'>
            <Switch>
              <Route path='/item/show'>
                <ItemDisplay/>
              </Route>
              <Route path='/item/login'>
                <Login/>
              </Route>
              <Route path='/item/pay'>
                <PaymentForm/>
              </Route>
              <Route path='/item/success'>
                <PaymentSuccess/>
              </Route>
            </Switch>
            <SameVendor/>
            <Recomendations/>
          </Route>
        </Switch>
      </Container>
    </Router>
  );
}

export default App;
