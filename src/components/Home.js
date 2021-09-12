import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
// import ADDFAV from './ADDFAV';
import { Redirect } from 'react-router';
import App from './App';
import Hotels from './Hotels';
import { ADDFAV } from '../actions';

function Home(props) {
  const { state } = props;
  const { isLoggedIn, hasSignedUp } = state;
  if (isLoggedIn === false) {
    return (
      <Redirect to="/login" />
    );
  }
  if (hasSignedUp === false) {
    console.log('here');
    return (
      <div>
        <App />
      </div>
    );
  }

  const handleAddFavs = (fav) => {
    console.log('fav==================');
    console.log(fav);
    console.log('fav==================');
    const { ADDFAV } = props;
    ADDFAV({
      fav,
    });
  };

  return (
    <div>
      <h1>Home SweetHome</h1>
      <h1>in</h1>
      <Hotels user={state.users} handleAddFavs={handleAddFavs} />
    </div>
  );
}
Home.propTypes = {
  state: PropTypes.objectOf(PropTypes.any).isRequired,
  ADDFAV: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  state,
});

const mapDispatchToProps = (dispatch) => ({
  ADDFAV: (fav) => { dispatch(ADDFAV(fav)); },
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
