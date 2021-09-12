import { connect } from 'react-redux';
import { useState } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router';
import styled from 'styled-components';
import { SIGNUP } from '../actions';

function App(props) {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  // const { state } = props;
  const Button = styled.button`
  background: linear-gradient(91.4deg, #E7522B 0%, #ffda95 100%); 
  padding: 12px 0; 
  width: 150px; 
  border: none;
  font-size: larger;
  border-radius: 30px;
  color: white;
  font-weight: bold;
  font-family: Segoe UI, sans-serif;
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
      <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
          <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active" />
          <li data-target="#carouselExampleCaptions" data-slide-to="1" />
          <li data-target="#carouselExampleCaptions" data-slide-to="2" />
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="../images/img1.jpg" className="d-block w-100" alt="carosel" />
            <div className="carousel-caption d-none d-md-block">
              <h5>First slide label</h5>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src="../images/img1.jpg" className="d-block w-100" alt="carosel" />
            <div className="carousel-caption d-none d-md-block">
              <h5>Second slide label</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src="../images/img1.jpg" className="d-block w-100" alt="carosel" />
            <div className="carousel-caption d-none d-md-block">
              <h5>Third slide label</h5>
              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </div>
          </div>
        </div>
        <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="sr-only">Next</span>
        </a>
      </div>
      <h1>Please Signup</h1>

      <Button>Sign in</Button>
      {/* <img alt="water" src="https://cdn.addresshotels.com/wp-content/uploads/2021/07/Edited-1-1200x874-1.jpg.webp" /> */}
      <form onSubmit={handleSubmit}>
        <input onChange={handleOnchangeUsername} type="text" name="username" placeholder="Username" required />
        <input onChange={handleOnchangeEmail} type="email" name="email" placeholder="Email" required />
        <input onChange={handleOnchangePassword} type="password" name="password" placeholder="Password" required />
        <input onChange={handleOnchangePasswordConfirmation} type="password" name="passwordConfirmation" placeholder="Password Confirmation" required />
        <button type="submit">Signup</button>
      </form>
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
