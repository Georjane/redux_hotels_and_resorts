import { connect } from 'react-redux';
import { useState } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router';
import { toast } from 'react-toastify';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { SIGNUP, RESET_TOAST } from '../actions';
import Hero from './Hero';
import Navbar from './Navbar';

function Register(props) {
  const { state } = props;
  const { isLoggedIn, error } = state;
  console.log(state);
  console.log(isLoggedIn);
  console.log('error', error);
  const token = sessionStorage.getItem('token');
  console.log(token);
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

  if (error.length > 0) {
    toast.error(error);
    const { RESET_TOAST } = props;
    RESET_TOAST();
  } else if (token) {
    toast.success('Login successfully!');
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const { SIGNUP } = props;
    SIGNUP({
      username, email, password, passwordConfirmation,
    });
    // if (error.length > 0) {
    //   toast.error(error);
    // }
    // props.history.push('./home');
    // // history.push("/profile");
    // window.location.reload();
  };
  // if (token) {
  //   return (
  //     <div>
  //       <Redirect to="/login" />
  //     </div>
  //   );
  // }

  return token === null ? (
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
            <Link
              to={{
                pathname: '/login',
              }}
            >
              Log In
            </Link>
          </span>
        </form>
      </div>
    </div>
  ) : (
    <Redirect to="/home" />
  );
}
Register.propTypes = {
  // history: PropTypes.objectOf(PropTypes.any).isRequired,
  isLoggedIn: PropTypes.objectOf(PropTypes.any).isRequired,
  state: PropTypes.objectOf(PropTypes.any).isRequired,
  SIGNUP: PropTypes.func.isRequired,
  RESET_TOAST: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  state,
});

const mapDispatchToProps = (dispatch) => ({
  SIGNUP: (username) => { dispatch(SIGNUP(username)); },
  RESET_TOAST: () => { dispatch(RESET_TOAST()); },
});

export default connect(mapStateToProps, mapDispatchToProps)(Register);
