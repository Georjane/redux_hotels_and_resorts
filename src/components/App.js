import { connect } from 'react-redux';
import { useState } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router';
import styled from 'styled-components';
import { SIGNUP } from '../actions';
import Hero from './Hero';
import Navbar from './Navbar';

function App(props) {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
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

  const handleOnchangeUsername = (e) => {
    e.preventDefault();
    setUsername(e.target.value);
  };

  const handleOnchangeEmail = (e) => {
    e.preventDefault();
    setEmail(e.target.value);
  };

  const handleOnchangePassword = (e) => {
    e.preventDefault();
    setPassword(e.target.value);
  };

  const handleOnchangePasswordConfirmation = (e) => {
    e.preventDefault();
    setPasswordConfirmation(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { SIGNUP } = props;
    SIGNUP({
      username, email, password, passwordConfirmation,
    });
    props.history.push('./home');
      <Redirect to="/home" />;
  };

  return (
    <div>
      <div className="gradient" />
      <Navbar />
      <Hero />
      <div className="formoverlay" />
      <div className="backlay">
        <form className="form" onSubmit={handleSubmit}>
          <h2>Sign Up</h2>
          <span>
            The hotel guests of Address Beach
            Resort can now experience an exclusive Floating
            Breakfast at the worlds highest outdoor infinity pool.
          </span>
          <input onChange={handleOnchangeUsername} type="text" name="username" placeholder="Username" required />
          <input onChange={handleOnchangeEmail} type="email" name="email" placeholder="Email" required />
          <input id="pass" onChange={handleOnchangePassword} type="password" name="password" placeholder="Password" required />
          <input onChange={handleOnchangePasswordConfirmation} type="password" name="passwordConfirmation" placeholder="Password Confirmation" required />
          <Button type="submit">Sign Up</Button>
          <span>Address Hotels & Resorts</span>
        </form>
      </div>
    </div>
  );
}
App.propTypes = {
  history: PropTypes.objectOf(PropTypes.any).isRequired,
  SIGNUP: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  state,
});

const mapDispatchToProps = (dispatch) => ({
  SIGNUP: (username) => { dispatch(SIGNUP(username)); },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
