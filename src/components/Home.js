import React, { useEffect } from 'react';
import { connect } from 'react-redux';
// import { useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import Registration from './auth/Registration';
import { LOGIN, SIGNOUT, LOGOUT } from '../actions';
import Login from './auth/Login';

function Home(props) {
  const { storestate } = props;
  // console.log(props);
  console.log(storestate);

  const handleSuccessfulAuth = (data) => {
    // redirect to dashboard
    const { LOGIN } = props;
    LOGIN(data.user);
    // console.log(data.user);
    props.history.push('/dashboard');
  };

  const handleLogout = () => {
    // redirect to dashboard
    const { LOGOUT } = props;
    LOGOUT();
    axios.delete('http://localhost:3001/logout', { withCredentials: true })
      .then((res) => {
        console.log('logout res ', res);
      })
      .catch((err) => {
        console.log('logout error ', err);
      });
    // console.log(data.user);
    props.history.push('/');
  };

  const checkLoginStatus = () => {
    const { LOGIN, SIGNOUT } = props;
    axios.get('http://localhost:3001/logged_in', { withCredentials: true })
      .then((res) => {
        console.log('logged in? ', res);
        if (res.data.logged_in && storestate[0] === 'NOT_LOGGED_IN') {
          LOGIN(res.data.user);
        } else if (!res.data.logged_in && storestate[0] === 'LOGGED_IN') {
          SIGNOUT();
        }
      })
      .catch((err) => {
        console.log('check login error ', err);
      });
  };

  useEffect(() => {
    checkLoginStatus();
  }, []);

  return (
    <div>
      <h1>Home</h1>
      <h1>
        Status:
        {storestate}
      </h1>
      <button type="button" onClick={handleLogout}>Logout</button>
      <Registration handleSuccessfulAuth={handleSuccessfulAuth} />
      <Login handleSuccessfulAuth={handleSuccessfulAuth} />
    </div>
  );
}

Home.propTypes = {
  storestate: PropTypes.objectOf(PropTypes.any).isRequired,
  history: PropTypes.objectOf(PropTypes.any).isRequired,
  LOGIN: PropTypes.func.isRequired,
  SIGNOUT: PropTypes.func.isRequired,
  LOGOUT: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  storestate: state,
});

const mapDispatchToProps = (dispatch) => ({
  LOGIN: (data) => { dispatch(LOGIN(data)); },
  SIGNOUT: () => { dispatch(SIGNOUT()); },
  LOGOUT: () => { dispatch(LOGOUT()); },
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
