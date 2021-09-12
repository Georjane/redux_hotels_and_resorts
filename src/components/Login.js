import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { LOGIN } from '../actions';
import Navbar from './Navbar';
import Hero from './Hero';

function Login(props) {
  const { state } = props;
  const { isLoggedIn, hasSignedUp } = state;
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const handleOnchangeUsername = (e) => {
    e.preventDefault();
    setUsername(e.target.value);
  };
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
  const handleOnchangePassword = (e) => {
    e.preventDefault();
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { LOGIN } = props;
    LOGIN({
      username, password,
    });
      <Redirect to="/home" />;
  };

  if (isLoggedIn === true) {
    return (
      <div>
        <Redirect to="/home" />
      </div>
    );
  }
  if (hasSignedUp === false) {
    return (
      <Redirect to="/register" />
    );
  }
  return (
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
          <input id="transparent" onChange={handleOnchangeUsername} type="text" name="username" placeholder="Username" required />
          <input onChange={handleOnchangePassword} type="password" name="password" placeholder="Password" required />
          <Button type="submit">Log In</Button>
          <span>Address Hotels & Resorts</span>
        </form>
      </div>
      <div className="formoverlay" />
    </div>
  );
}
Login.propTypes = {
  state: PropTypes.objectOf(PropTypes.any).isRequired,
  LOGIN: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  state,
});

const mapDispatchToProps = (dispatch) => ({
  LOGIN: (username) => { dispatch(LOGIN(username)); },
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
