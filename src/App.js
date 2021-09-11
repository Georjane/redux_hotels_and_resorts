import React, { useEffect } from 'react';
import {
  Router, Switch, Route, Link,
} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { createBrowserHistory } from 'history';
import Login from './components/Login';
import Register from './components/Register';
import Home from './components/Home';
import Hotels from './components/Hotels';
import Favorites from './components/Favourites';
import LandingPage from './Pages/LandingPage';

const App = () => {
  const history = createBrowserHistory();
  useEffect(() => {
    history.listen((location) => {
      console.log(location);
    });
  }, []);

  return (
    <Router history={history}>
      <div>
        <nav className="navbar navbar-expand navbar-dark bg-dark">
          <Link to="/home" className="navbar-brand">
            Hotels & Resorts
          </Link>

          {/* {currentUser.id ? (
            <div className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to="/favorites" className="nav-link">
                  Favorites2
                </Link>
              </li>
              <li className="nav-item">
                <a href="/login" className="nav-link" onClick={logOut}>
                  yes LogOut
                </a>
              </li>
            </div>
          ) : (
            <div className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to="/login" className="nav-link">
                  Login
                </Link>
              </li>
              <a href="/login" className="nav-link" onClick={logOut}>
                LogOut
              </a>
              <li className="nav-item">
                <Link to="/register" className="nav-link">
                  Sign Up
                </Link>
              </li>
            </div>
          )} */}
        </nav>

        <div className="container mt-3">
          <Switch>
            <Route exact path="/home" component={LandingPage} />
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/hotels" component={Hotels} />
            <Route exact path="/favorites" component={Favorites} />
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default App;
