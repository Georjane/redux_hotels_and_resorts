import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import Hotels from './Hotels';
import { ADDFAV, RESET_TOAST } from '../actions';
import Hero from './Hero';
import Logout from './Logout';

function Home(props) {
  const { state } = props;
  const { error, favAdded } = state;
  const token = sessionStorage.getItem('token');
  const handleAddFavs = (fav) => {
    const { ADDFAV } = props;
    ADDFAV({
      fav,
    });
  };

  if (error.length > 0) {
    toast.error(error);
    const { RESET_TOAST } = props;
    RESET_TOAST();
  } else if (token && favAdded) {
    toast.success('Added Favorite successfully!');
  }

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
  RESET_TOAST: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  state,
});

const mapDispatchToProps = (dispatch) => ({
  ADDFAV: (fav) => { dispatch(ADDFAV(fav)); },
  RESET_TOAST: () => { dispatch(RESET_TOAST()); },
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
