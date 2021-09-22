import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Hotels from './Hotels';
import { ADDFAV } from '../actions';
import Hero from './Hero';
import Logout from './Logout';

function Home(props) {
  const { state } = props;

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
};

const mapStateToProps = (state) => ({
  state,
});

const mapDispatchToProps = (dispatch) => ({
  ADDFAV: (fav) => { dispatch(ADDFAV(fav)); },
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
