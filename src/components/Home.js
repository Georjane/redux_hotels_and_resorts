import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
// import ADDFAV from './ADDFAV';
import { Redirect } from 'react-router';
import App from './App';
import Hotels from './Hotels';
import { ADDFAV, ISLOGGEDIN } from '../actions';
import Hero from './Hero';
import Logout from './Logout';

function Home(props) {
  const { state } = props;
  // console.log(state.users[0].id);
  const { isLoggedIn, hasSignedUp } = state;
  if (isLoggedIn === false) {
    return (
      <Redirect to="/login" />
    );
  }
  if (hasSignedUp === false) {
    // console.log('here');
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

  const handleAddlog = () => {
    const { ISLOGGEDIN } = props;
    ISLOGGEDIN();
  };

  useEffect(() => {
    const { ISLOGGEDIN } = props;
    ISLOGGEDIN();
  }, []);
  return (
    <div>
      <div className="gradient" />
      <Logout />
      <Hero />
      <button type="button" onClick={handleAddlog}>log</button>
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
  ISLOGGEDIN: (fav) => { dispatch(ISLOGGEDIN(fav)); },
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
