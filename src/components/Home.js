import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
// import Login from './Login';
import { Redirect } from 'react-router';
import App from './App';
import Hotels from './Hotels';

function Home(props) {
  const { state } = props;
  const { isLoggedIn, hasSignedUp } = state;
  if (isLoggedIn === false) {
    return (
      <Redirect to="/login" />
    );
  }
  if (!hasSignedUp) {
    return (
      <div>
        <App />
      </div>
    );
  }
  return (
    <div>
      <h1>Home Sweet Home</h1>
      <h1>in</h1>
      <Hotels />
    </div>
  );
}
Home.propTypes = {
  state: PropTypes.objectOf(PropTypes.any).isRequired,
};

const mapStateToProps = (state) => ({
  state,
});

export default connect(mapStateToProps)(Home);
