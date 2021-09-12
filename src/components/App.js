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

  const Button1 = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 1px solid white;
  color: white;
  margin: 0.5em 1em;
  padding: 0.25em 1em;
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
      <nav className="navbar navbar-expand-lg bglight">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <a className="navbar-brand white" href="/register">Hotels & Resorts</a>

        <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li className="nav-item active">
              <a className="nav-link white" href="/register">
                Residences
                <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link white" href="/register">Dinning</a>
            </li>
            <li className="nav-item">
              <a className="nav-link white" href="/register" tabIndex="-1" aria-disabled="true">Events</a>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <input className="form-control mr-sm-2 transparent" type="search" placeholder="Search" aria-label="Search" />
          </form>
        </div>
      </nav>
      <div id="carouselExampleCaptions" className="carousel slide landingpage" data-ride="carousel">
        <ol className="carousel-indicators">
          <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active" />
          <li data-target="#carouselExampleCaptions" data-slide-to="1" />
          <li data-target="#carouselExampleCaptions" data-slide-to="2" />
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="images/img7.jpg" className="d-block w-100" alt="carosel" />
            <div className="carousel-caption d-none d-md-block">
              <h2>Leisure and Family Vacations</h2>
              <p>at Address Hotels + Resorts</p>
              <Button1>Learn More</Button1>
            </div>
          </div>
          <div className="carousel-item">
            <img src="images/img3.jpg" className="d-block w-100" alt="carosel" />
            <div className="carousel-caption d-none d-md-block">
              <h2>Fun-Filled Stays</h2>
              <p>at Address Hotels + Resorts</p>
              <Button1>Learn More</Button1>
            </div>
          </div>
          <div className="carousel-item">
            <img src="images/img5.jpg" className="d-block w-100" alt="carosel" />
            <div className="carousel-caption d-none d-md-block">
              <h2>Experience Expo 2021 Free!</h2>
              <p>Get 2 complimentary tickets to the world’s greatest show when you book with us.</p>
              <Button1>Learn More</Button1>
            </div>
          </div>
        </div>
        <a className="carousel-control-prev gradientover" href="#carouselExampleCaptions" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next gradientover" href="#carouselExampleCaptions" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="sr-only">Next</span>
        </a>
      </div>
      <h1>Please Signup</h1>

      <Button>Sign in</Button>
      {/* <img className="landingpage" alt="water" src="https://cdn.addresshotels.com/wp-content/uploads/2021/07/Edited-1-1200x874-1.jpg.webp" /> */}
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
