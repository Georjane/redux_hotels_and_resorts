import React, { useEffect } from 'react';
import { connect } from 'react-redux';
// import { useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { LOGIN, SIGNOUT, LOGOUT } from '../actions';

function Dashboard(props) {
  const { loggedInStatus } = props;
  console.log(props);
  console.log(loggedInStatus);

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
    // props.history.push('/hotels');
  };

  const checkLoginStatus = () => {
    const { LOGIN, SIGNOUT } = props;
    axios.get('http://localhost:3001/logged_in', { withCredentials: true })
      .then((res) => {
        console.log('logged in? ', res);
        if (res.data.logged_in && loggedInStatus[0] === 'NOT_LOGGED_IN') {
          LOGIN(res.data.user);
        } else if (!res.data.logged_in && loggedInStatus[0] === 'LOGGED_IN') {
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
      <h1>Dashboard</h1>
      <h1>
        Status:
        {loggedInStatus}
      </h1>
      <button type="button" onClick={() => props.history.goBack()}>Go Back</button>
      <button type="button" onClick={handleLogout}>Logout</button>
    </div>
  );
}

Dashboard.propTypes = {
  loggedInStatus: PropTypes.objectOf(PropTypes.any).isRequired,
  LOGOUT: PropTypes.func.isRequired,
  LOGIN: PropTypes.func.isRequired,
  SIGNOUT: PropTypes.func.isRequired,
  history: PropTypes.objectOf(PropTypes.any).isRequired,
};

const mapStateToProps = (state) => ({
  loggedInStatus: state,
});

const mapDispatchToProps = (dispatch) => ({
  LOGOUT: () => { dispatch(LOGOUT()); },
  LOGIN: (data) => { dispatch(LOGIN(data)); },
  SIGNOUT: () => { dispatch(SIGNOUT()); },
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
