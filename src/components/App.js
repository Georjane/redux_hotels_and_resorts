import { connect } from 'react-redux';
import { useState } from 'react';
import PropTypes from 'prop-types';
import { SIGNUP } from '../actions';

function App(props) {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  // const { state } = props;
  // console.log(state);

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
    console.log(username);
    SIGNUP({
      username, email, password, passwordConfirmation,
    });
  };

  return (
    <div>
      <h1>Please Signup</h1>
      <form onSubmit={handleSubmit}>
        <input onChange={handleOnchangeUsername} type="text" name="username" placeholder="Username" />
        <input onChange={handleOnchangeEmail} type="email" name="email" placeholder="Email" />
        <input onChange={handleOnchangePassword} type="password" name="password" placeholder="Password" />
        <input onChange={handleOnchangePasswordConfirmation} type="password" name="passwordConfirmation" placeholder="Password Confirmation" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
App.propTypes = {
  // state: PropTypes.objectOf(PropTypes.any).isRequired,
  SIGNUP: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  state,
});

const mapDispatchToProps = (dispatch) => ({
  SIGNUP: (username) => { dispatch(SIGNUP(username)); },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
