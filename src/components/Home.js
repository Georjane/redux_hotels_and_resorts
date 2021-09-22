import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Hotels from './Hotels';
import { ADDFAV, ISLOGGEDIN } from '../actions';
import Hero from './Hero';
import Logout from './Logout';

function Home(props) {
  const { state } = props;
  console.log(sessionStorage.getItem('user_id'));

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
  ISLOGGEDIN: () => { dispatch(ISLOGGEDIN()); },
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
