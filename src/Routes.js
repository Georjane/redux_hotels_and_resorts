import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from './components/App';
import Details from './components/Details';
import Favorites from './components/Favorites';
import Home from './components/Home';
import Login from './components/Login';
// import Footer from './components/Footer';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App} />
      <Route exact path="/register" component={App} />
      <Route exact path="/home" component={Home} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/favorites" component={Favorites} />
      <Route exact path="/details" component={Details} />
    </Switch>
    {/* <Footer /> */}
  </BrowserRouter>
);

export default Routes;
