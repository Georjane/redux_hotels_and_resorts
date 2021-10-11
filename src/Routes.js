import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Register from './components/Register';
import Details from './components/Details';
import Favorites from './components/Favorites';
import Home from './components/Home';
import Login from './components/Login';
import Footer from './components/Footer';

const Routes = () => (

  <BrowserRouter>
    <ToastContainer autoclose={5000} />
    <Switch>
      <Route exact path="/" component={Register} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/home" component={Home} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/favorites" component={Favorites} />
      <Route exact path="/details" component={Details} />
    </Switch>
    <Footer />
  </BrowserRouter>
);
export default Routes;
