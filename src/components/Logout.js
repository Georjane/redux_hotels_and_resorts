import styled from 'styled-components';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { LOGOUT } from '../actions';

const Logout = (props) => {
  const [navbar, setNavbar] = useState(false);

  const handleLogout = () => {
    const { LOGOUT } = props;
    LOGOUT();
      <Redirect to="/login" />;
  };
  const changeBackground = () => {
    if (window.scrollY >= 100) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  window.addEventListener('scroll', changeBackground);
  const Button = styled.button`
  background-color: transparent; 
  padding: 5px 0; 
  width: 150px;
  border: 1px solid #E7522B;
  font-size: large;
  border-radius: 10px;
  color: #E7522B;
  font-family: Segoe UI, sans-serif;
  z-index: 5;
  outline: none;
  margin-right: 12px;
`;

  return (
    <nav className={navbar ? 'navbar navbar-expand-lg bglight fixed active' : 'navbar navbar-expand-lg bglight fixed'}>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>
      <Link
        to={{
          pathname: '/home',
        }}
      >
        <span className="navbar-brand white logo">
          <img src="images/logo.png" className="w-25" alt="carosel" />
          <p>
            Address
            <br />
            Hotels & Resorts
          </p>
        </span>
      </Link>

      <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
          <li className="nav-item">
            <Link
              to={{
                pathname: '/home',
              }}
            >
              <span className="nav-link white">Home</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to={{
                pathname: '/home',
              }}
            >
              <span className="nav-link white">Residences</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to={{
                pathname: '/home',
              }}
            >
              <span className="nav-link white">Dinning</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to={{
                pathname: '/home',
              }}
            >
              <span className="nav-link white">Events</span>
            </Link>
          </li>
        </ul>
        <div>
          <a href="login"><Button type="button" onClick={handleLogout}>Log Out</Button></a>
        </div>
        <form className="form-inline my-2 my-lg-0">
          <input className="form-control mr-sm-2 transparent" type="search" placeholder="Search" aria-label="Search" />
        </form>
      </div>
    </nav>
  );
};

Logout.propTypes = {
  LOGOUT: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  state,
});

const mapDispatchToProps = (dispatch) => ({
  LOGOUT: () => { dispatch(LOGOUT()); },
});

export default connect(mapStateToProps, mapDispatchToProps)(Logout);
