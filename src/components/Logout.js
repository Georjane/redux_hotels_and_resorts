import styled from 'styled-components';
import { connect } from 'react-redux';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';
import { LOGOUT, RESET_TOAST } from '../actions';

const Logout = (props) => {
  const [navbar, setNavbar] = useState(false);
  const { state } = props;
  const token = sessionStorage.getItem('token');
  const { error } = state;
  const handleLogout = (e) => {
    e.preventDefault();
    const { LOGOUT } = props;
    LOGOUT();
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
  if (error.length > 0 && token === null) {
    toast.success(error);
    const { RESET_TOAST } = props;
    RESET_TOAST();
  }

  return (
    <nav className={navbar ? 'navbar navbar-expand-lg bglight fixed active' : 'navbar navbar-expand-lg bglight fixed'}>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
        <span id="menu-span" className="navbar-toggler-icon menu-bar"><i className="fa fa-bars" /></span>
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
          <Button type="submit" onClick={handleLogout}>Log Out</Button>
        </div>
        <form className="form-inline my-2 my-lg-0">
          <input className="form-control mr-sm-2 transparent" type="search" placeholder="Search" aria-label="Search" />
        </form>
      </div>
    </nav>
  );
};

Logout.propTypes = {
  state: PropTypes.objectOf(PropTypes.any).isRequired,
  LOGOUT: PropTypes.func.isRequired,
  RESET_TOAST: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  state,
});

const mapDispatchToProps = (dispatch) => ({
  LOGOUT: () => { dispatch(LOGOUT()); },
  RESET_TOAST: () => { dispatch(RESET_TOAST()); },
});

export default connect(mapStateToProps, mapDispatchToProps)(Logout);
