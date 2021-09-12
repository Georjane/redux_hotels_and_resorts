import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Login from './Login';
import App from './App';

function Home(props) {
  const { state } = props;
  const { isLoggedIn, hasSignedUp } = state;
  console.log(state);

  if (isLoggedIn) {
    return (
      <div>
        <h1>Home Sweet Home</h1>
        <h1>in</h1>
      </div>
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
      <Login />
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
