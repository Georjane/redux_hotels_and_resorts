import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import PropTypes from 'prop-types';
import Hotels from './Hotels';
import { ADDFAV } from '../actions';
import Hero from './Hero';
import Logout from './Logout';

function Home(props) {
  const { state } = props;
  console.log(state);
  const token = sessionStorage.getItem('token');
  console.log(token);
  // const { user: currentUser } = state;
  const handleAddFavs = (fav) => {
    const { ADDFAV } = props;
    ADDFAV({
      fav,
    });
  };

  // if (token === undefined) {
  //   return <Redirect to="/login" />;
  // }

  return token === null ? (
    <Redirect to="/login" />
  )
    : (
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
};

const mapStateToProps = (state) => ({
  state,
});

const mapDispatchToProps = (dispatch) => ({
  ADDFAV: (fav) => { dispatch(ADDFAV(fav)); },
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
