import React from 'react';
import { connect } from 'react-redux';
// import { useEffect } from 'react';
import PropTypes from 'prop-types';
import Registration from './auth/Registration';
import LOGIN from '../actions';

function Home(props) {
  const { loggedInStatus } = props;
  console.log(props);
  console.log(loggedInStatus);

  const handleSuccessfulAuth = (data) => {
    // redirect to dashboard
    const { LOGIN } = props;
    LOGIN(data);
    console.log(data);
    props.history.push('/dashboard');
  };

  return (
    <div>
      <h1>Home</h1>
      <h1>
        Status:
        {loggedInStatus}
      </h1>
      <Registration handleSuccessfulAuth={handleSuccessfulAuth} />
    </div>
  );
}

Home.propTypes = {
  loggedInStatus: PropTypes.objectOf(PropTypes.any).isRequired,
  history: PropTypes.objectOf(PropTypes.any).isRequired,
  LOGIN: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  loggedInStatus: state,
});

const mapDispatchToProps = (dispatch) => ({
  LOGIN: (data) => { dispatch(LOGIN(data)); },
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
