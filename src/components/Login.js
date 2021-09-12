import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import PropTypes from 'prop-types';
import { LOGIN } from '../actions';

function Login(props) {
  const { state } = props;
  const { isLoggedIn, hasSignedUp } = state;
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const handleOnchangeUsername = (e) => {
    e.preventDefault();
    setUsername(e.target.value);
  };

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
      <h1>Please Login</h1>
      <form onSubmit={handleSubmit}>
        <input onChange={handleOnchangeUsername} type="text" name="username" placeholder="Username" required />
        <input onChange={handleOnchangePassword} type="password" name="password" placeholder="Password" required />
        <button type="submit">Logint</button>
      </form>
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
