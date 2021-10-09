import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import styled from 'styled-components';
import { LOGIN, RESET_TOAST } from '../actions';
import Navbar from './Navbar';
import Hero from './Hero';

function Login(props) {
  const { state } = props;
  const { isLoggedIn, error } = state;
  console.log(isLoggedIn);
  const token = sessionStorage.getItem('token');
  console.log(token);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  // const [loading, setLoading] = useState(false);

  const Button = styled.button`
  background-color: #E7522B; 
  padding: 12px 0; 
  width: 150px;
  border: none;
  font-size: larger;
  border-radius: 30px;
  color: white;
  font-weight: bold;
  font-family: Segoe UI, sans-serif;
  z-index: 5;
`;

  const handleSubmit = (e) => {
    e.preventDefault();
    // setLoading(true);
    const { LOGIN } = props;
    LOGIN({
      username, password,
    });
    // props.history.push('/home');
  };

  if (error.length > 0) {
    toast.error(error);
    const { RESET_TOAST } = props;
    RESET_TOAST();
  } else if (token) {
    toast.success('Login successfully!');
  }

  return token === null ? (
    <div>
      <div className="gradient" />
      <Navbar />
      <Hero />
      <div className="backlay">
        <form className="form loginform" onSubmit={handleSubmit}>
          <h2>Sign in</h2>
          <span>
            The hotel guests of Address Beach
            Resort can now experience an exclusive Floating
            Breakfast at the worlds highest outdoor infinity pool.
          </span>
          <input
            id="transparent"
            onChange={(e) => {
              e.preventDefault();
              setUsername(e.target.value);
            }}
            type="text"
            name="username"
            placeholder="Username"
            value={username}
            required
          />
          <input onChange={(e) => setPassword(e.target.value)} type="password" name="password" placeholder="Password" value={password} required />
          <Button type="submit">Log In</Button>
          <span>Address Hotels & Resorts</span>
          <span>
            <Link
              to={{
                pathname: '/register',
              }}
            >
              Sign Up
            </Link>
            {' '}
            if you do not have an account
          </span>
        </form>
      </div>
      <div className="formoverlay" />
    </div>
  ) : (
    <Redirect to="/home" />
  );
}
Login.propTypes = {
  state: PropTypes.objectOf(PropTypes.any).isRequired,
  LOGIN: PropTypes.func.isRequired,
  // history: PropTypes.objectOf(PropTypes.any).isRequired,
  RESET_TOAST: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  state,
});

const mapDispatchToProps = (dispatch) => ({
  LOGIN: (username) => { dispatch(LOGIN(username)); },
  RESET_TOAST: () => { dispatch(RESET_TOAST()); },
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
