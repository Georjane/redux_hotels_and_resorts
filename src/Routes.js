import React, { useEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import App from './components/App';
import Details from './components/Details';
import Favorites from './components/Favorites';
import Home from './components/Home';
import Login from './components/Login';
import Footer from './components/Footer';
import { ISLOGGEDIN } from './actions';

const Routes = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(ISLOGGEDIN());
  });
  return (
    <BrowserRouter>
      <ToastContainer autoclose={5000} />
      <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/register" component={App} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/favorites" component={Favorites} />
        <Route exact path="/details" component={Details} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
};

export default Routes;
