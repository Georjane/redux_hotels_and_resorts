import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from './components/App';
import Favorites from './components/Favorites';
import Home from './components/Home';
import Login from './components/Login';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App} />
      <Route exact path="/register" component={App} />
      <Route exact path="/home" component={Home} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/favorites" component={Favorites} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
