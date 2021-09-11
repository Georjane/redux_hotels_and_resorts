import React, { useState, useRef } from 'react';
import { useSelector, connect } from 'react-redux';
import PropTypes from 'prop-types';
import Form from 'react-validation/build/form';
import Input from 'react-validation/build/input';
import CheckButton from 'react-validation/build/button';
import { isEmail } from 'validator';
import {
  SIGNUP,
} from '../actions/auth';
// import { register } from '../actions/auth';
// import Login from '../components/Login';
// import PropTypes from 'prop-types';
const required = (value) => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        This field is required!
      </div>
    );
  }
  return <span />;
};
const validEmail = (value) => {
  if (!isEmail(value)) {
    return (
      <div className="alert alert-danger" role="alert">
        This is not a valid email.
      </div>
    );
  }
  return <span />;
};

const vusername = (value) => {
  if (value.length < 3 || value.length > 20) {
    return (
      <div className="alert alert-danger" role="alert">
        The username must be between 3 and 20 characters.
      </div>
    );
  }
  return <span />;
};

const vpassword = (value) => {
  if (value.length < 6 || value.length > 40) {
    return (
      <div className="alert alert-danger" role="alert">
        The password must be between 6 and 40 characters.
      </div>
    );
  }
  return <span />;
};

const LandingPage = (props) => {
  const form = useRef();
  const checkBtn = useRef();

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const [successful, setSuccessful] = useState(false);

  const { message } = useSelector((state) => state.message);
  // const dispatch = useDispatch();

  const onChangeUsername = (e) => {
    const username = e.target.value;
    setUsername(username);
  };

  const onChangeEmail = (e) => {
    const email = e.target.value;
    setEmail(email);
  };

  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };

  const onChangePasswordConfirmation = (e) => {
    const passwordConfirmation = e.target.value;
    setPasswordConfirmation(passwordConfirmation);
  };

  const handleRegister = (e) => {
    e.preventDefault();
    console.log('clicked');
    setSuccessful(false);
    const { SIGNUP } = props;
    SIGNUP('add');
    form.current.validateAll();
    console.log('succesful regisyter  from dispach landx pag now render home page');
    props.history.push('/home');
    window.location.reload();
    // if (checkBtn.current.context.errors.length === 0) {
    // dispatch(register(username, email, password))
    //   .then(() => {
    //     console.log('succesful regisyter  from dispach landx pag now render home page');
    //     setSuccessful(true);
    //     props.history.push('/home');
    //     window.location.reload();
    //   })
    //   .catch(() => {
    //     setSuccessful(false);
    //   });
    // // }
  };

  return (
    <div>
      <h1>This is my landing page</h1>
      <div className="col-md-12">
        {/* <Login /> */}
        <div className="card card-container">
          <img
            src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
            alt="profile-img"
            className="profile-img-card"
          />

          <Form onSubmit={handleRegister} ref={form}>
            {!successful && (
            <div>
              <div className="form-group">
                {/* <label htmlFor="username">Username</label> */}
                <Input
                  type="text"
                  className="form-control"
                  name="username"
                  value={username}
                  placeholder="Username"
                  onChange={onChangeUsername}
                  validations={[required, vusername]}
                />
              </div>

              <div className="form-group">
                {/* <label htmlFor="email">Email</label> */}
                <Input
                  type="text"
                  className="form-control"
                  name="email"
                  placeholder="Email"
                  value={email}
                  onChange={onChangeEmail}
                  validations={[required, validEmail]}
                />
              </div>

              <div className="form-group">
                {/* <label htmlFor="password">Password</label> */}
                <Input
                  type="password"
                  className="form-control"
                  name="password"
                  placeholder="Password"
                  value={password}
                  onChange={onChangePassword}
                  validations={[required, vpassword]}
                />
              </div>
              <div className="form-group">
                {/* <label htmlFor="password">Password Confirmation</label> */}
                <Input
                  type="password"
                  className="form-control"
                  placeholder="Password Confirmation"
                  name="passwordConfirmation"
                  value={passwordConfirmation}
                  onChange={onChangePasswordConfirmation}
                  validations={[required, vpassword]}
                />
              </div>
              <div className="form-group">
                <button type="submit" className="btn btn-primary btn-block">Sign Upp</button>
              </div>
            </div>
            )}

            {message && (
            <div className="form-group">
              <div className={successful ? 'alert alert-success' : 'alert alert-danger'} role="alert">
                {message}
              </div>
            </div>
            )}
            <CheckButton style={{ display: 'none' }} ref={checkBtn} />
          </Form>
        </div>
      </div>
    </div>

  );
};

LandingPage.propTypes = {
  history: PropTypes.objectOf(PropTypes.any).isRequired,
  SIGNUP: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => ({
  mealsInfo: state,
});

const mapDispatchToProps = (dispatch) => ({
  SIGNUP: (add) => { dispatch(SIGNUP(add)); },
});

export default connect(mapStateToProps, mapDispatchToProps)(LandingPage);
