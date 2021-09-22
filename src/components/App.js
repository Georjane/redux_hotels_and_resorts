import { connect } from 'react-redux';
import { useState } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router';
import styled from 'styled-components';
import { SIGNUP, ISLOGGEDIN } from '../actions';
import Hero from './Hero';
import Navbar from './Navbar';

function App(props) {
  console.log(props);
  const { state } = props;
  const { isLoggedIn } = state;
  console.log(isLoggedIn);
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

  const handleSubmit = (e) => {
    e.preventDefault();
    const { SIGNUP } = props;
    SIGNUP({
      username, email, password, passwordConfirmation,
    });
    props.history.push('./home');
    // <Redirect to="/home" />;
  };
  if (isLoggedIn === true) {
    return (
      <div>
        <Redirect to="/home" />
      </div>
    );
  }
  // const checkLogin = () => {
  //   const { ISLOGGEDIN } = props;
  //   ISLOGGEDIN();
  //   console.log('checking');
  // };

  // console.log(checkLogin());

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
          <input onChange={(e) => setUsername(e.target.value)} type="text" name="username" placeholder="Username" value={username} required />
          <input onChange={(e) => setEmail(e.target.value)} type="email" name="email" placeholder="Email" value={email} required />
          <input id="pass" onChange={(e) => setPassword(e.target.value)} type="password" name="password" placeholder="Password" value={password} required />
          <input onChange={(e) => setPasswordConfirmation(e.target.value)} type="password" name="passwordConfirmation" placeholder="Password Confirmation" value={passwordConfirmation} required />
          <Button type="submit">Sign Up</Button>
          <span>Address Hotels & Resorts</span>
          <span>
            Have an account already?
            {' '}
            <a href="/login">Sign In</a>
          </span>
        </form>
      </div>
    </div>
  );
}
App.propTypes = {
  history: PropTypes.objectOf(PropTypes.any).isRequired,
  isLoggedIn: PropTypes.objectOf(PropTypes.any).isRequired,
  state: PropTypes.objectOf(PropTypes.any).isRequired,
  SIGNUP: PropTypes.func.isRequired,
  // ISLOGGEDIN: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  state,
});

const mapDispatchToProps = (dispatch) => ({
  SIGNUP: (username) => { dispatch(SIGNUP(username)); },
  ISLOGGEDIN: () => { dispatch(ISLOGGEDIN()); },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
