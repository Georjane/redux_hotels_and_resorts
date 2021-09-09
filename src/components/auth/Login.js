import React, { useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

function Login(props) {
  const { handleSuccessfulAuth } = props;
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // const [passwordConfirmation, setPasswordConfirmation] = useState('');

  const handleSubmit = (e) => {
    console.log('clicked on register');
    // const {
    //   username, email, password, passwordConfirmation,
    // } = this.state;
    axios.post('http://localhost:3001/sessions', {
      user: {
        username,
        email,
        password,
      },
    },
    { withCredentials: true })
      .then((res) => {
        console.log('loggin res ', res);
        // console.log(handleSuccessfulAuth(res.data));
        // const { handleSuccessfulAuth } = this.state;
        if (res.data.logged_in) {
          handleSuccessfulAuth(res.data);
        }
      }).catch((err) => {
        console.log('login error ', err);
      });
    e.preventDefault();
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="username" placeholder="Username" value={username} onChange={handleUsernameChange} required />
        <input type="email" name="email" placeholder="Email" value={email} onChange={handleEmailChange} required />
        <input type="password" name="password" placeholder="Password" value={password} onChange={handlePasswordChange} required />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

Login.propTypes = {
  handleSuccessfulAuth: PropTypes.func.isRequired,
};

export default Login;
