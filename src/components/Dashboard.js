import React from 'react';
import { connect } from 'react-redux';
// import { useEffect } from 'react';
import PropTypes from 'prop-types';

function Dashboard(props) {
  const { loggedInStatus } = props;
  console.log(props);
  console.log(loggedInStatus);
  return (
    <div>
      <h1>Dashboard</h1>
      <h1>
        Status:
        {loggedInStatus}
      </h1>
    </div>
  );
}

Dashboard.propTypes = {
  loggedInStatus: PropTypes.objectOf(PropTypes.any).isRequired,
};

const mapStateToProps = (state) => ({
  loggedInStatus: state,
});

export default connect(mapStateToProps)(Dashboard);
