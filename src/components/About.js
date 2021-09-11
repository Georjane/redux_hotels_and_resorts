import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
// import UserService from '../services/user.service';
// import { register } from '../actions/auth';

function About(props) {
  const { user } = props;
  console.log(user);

  return (
    <div />
  );
}

About.propTypes = {
  user: PropTypes.objectOf(PropTypes.any).isRequired,
};

const mapStateToProps = (state) => ({
  user: state,
});

// const mapDispatchToProps = (dispatch) => ({
//   CHANGE_FILTER: (filter) => { dispatch(CHANGE_FILTER(filter)); },
//   MEAL_DETAILS: (id) => { dispatch(MEAL_DETAILS(id)); },
//   LIST_MEALS: () => { dispatch(LIST_MEALS()); },
// });

export default connect(mapStateToProps)(About);
