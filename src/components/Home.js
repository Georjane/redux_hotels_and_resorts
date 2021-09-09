import React from 'react';
import { connect } from 'react-redux';
// import { useEffect } from 'react';
import PropTypes from 'prop-types';
import Registration from './auth/Registration';

function Home(props) {
  const { loggedInStatus } = props;
  console.log(props);
  console.log(loggedInStatus);
  return (
    <div>
      <h1>Home</h1>
      <h1>Home</h1>
      <Registration />
    </div>
  );
}

Home.propTypes = {
  loggedInStatus: PropTypes.objectOf(PropTypes.any).isRequired,
};

const mapStateToProps = (state) => ({
  loggedInStatus: state,
});

export default connect(mapStateToProps)(Home);
