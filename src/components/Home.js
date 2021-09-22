// import React from 'react';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router';
import App from './App';
import Hotels from './Hotels';
import { ADDFAV, ISLOGGEDIN } from '../actions';
import Hero from './Hero';
import Logout from './Logout';

function Home(props) {
  const { state } = props;
  const { isLoggedIn, hasSignedUp } = state;
  // const checkLogin = () => {
  //   const { ISLOGGEDIN } = props;
  //   ISLOGGEDIN();
  //   console.log('checking');
  // };

  // checkLogin();
  useEffect(() => {
    const { ISLOGGEDIN } = props;
    ISLOGGEDIN();
  }, []);

  if (isLoggedIn === false) {
    return (
      <Redirect to="/login" />
    );
  }
  if (hasSignedUp === false) {
    return (
      <div>
        <App />
      </div>
    );
  }

  const handleAddFavs = (fav) => {
    const { ADDFAV } = props;
    ADDFAV({
      fav,
    });
  };

  return (
    <div>
      <div className="gradient" />
      <Logout />
      <Hero />
      <Hotels user={state.users} handleAddFavs={handleAddFavs} />
    </div>
  );
}
Home.propTypes = {
  state: PropTypes.objectOf(PropTypes.any).isRequired,
  ADDFAV: PropTypes.func.isRequired,
  ISLOGGEDIN: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  state,
});

const mapDispatchToProps = (dispatch) => ({
  ADDFAV: (fav) => { dispatch(ADDFAV(fav)); },
  ISLOGGEDIN: () => { dispatch(ISLOGGEDIN()); },
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
