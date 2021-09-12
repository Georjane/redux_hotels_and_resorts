import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import PropTypes from 'prop-types';
import App from './App';

function Login(props) {
  const { state } = props;
  const { isLoggedIn, hasSignedUp } = state;
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  console.log(state);
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
    console.log(username, password);
    // const { SIGNUP } = props;
    // SIGNUP({
    //   username, email, password, passwordConfirmation,
    // });
      <Redirect to="/home" />;
  };

  if (isLoggedIn) {
    return (
      <div>
        <h1>Login Sweet Login</h1>
        <h1>in</h1>
      </div>
    );
  }
  if (hasSignedUp === false) {
    return (
      <div>
        <App />
      </div>
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
};

const mapStateToProps = (state) => ({
  state,
});

export default connect(mapStateToProps)(Login);
