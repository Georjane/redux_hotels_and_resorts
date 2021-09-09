// import React, { Component } from 'react';
// import axios from 'axios';
// // import PropTypes from 'prop-types';

// export default class Registration extends Component {
//   constructor(props) {
//     super(props);
//     // const { handleSuccessfulAuth } = props;
//     this.state = {
//       username: '',
//       email: '',
//       password: '',
//       passwordConfirmation: '',
//       handleSuccessfulAuth: props,
//     };

//     this.handleSubmit = this.handleSubmit.bind(this);
//     this.handleChange = this.handleChange.bind(this);
//   }

//   handleChange(e) {
//     this.setState({
//       [e.target.name]: e.target.value,
//     });
//   }

//   handleSubmit(e) {
//     console.log('clicked on register');
//     const {
//       username, email, password, passwordConfirmation,
//     } = this.state;
//     axios.post('http://localhost:3001/registrations', {
//       user: {
//         username,
//         email,
//         password,
//         passwordConfirmation,
//       },
//     },
//     { withCredentials: true })
//       .then((res) => {
//         console.log('registration res ', res);
//         const { handleSuccessfulAuth } = this.state;
//         if (res.data.status === 'created') {
//           handleSuccessfulAuth(res.data);
//         }
//       }).catch((err) => {
//         console.log('registration error ', err);
//       });
//     e.preventDefault();
//   }

//   render() {
//     const {
//       username, email, password, passwordConfirmation,
//     } = this.state;
//     return (
//       <div>
//         <form onSubmit={this.handleSubmit}>
//           <button type="submit">Register</button>
//         </form>
//       </div>
//     );
//   }
// }

// Registration.propTypes = {
//   // handleSuccessfulAuth: PropTypes.objectOf(PropTypes.any).isRequired,
// };

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

function Registration(props) {
  const { handleSuccessfulAuth } = props;
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');

  const handleSubmit = (e) => {
    console.log('clicked on register');
    // const {
    //   username, email, password, passwordConfirmation,
    // } = this.state;
    axios.post('http://localhost:3001/registrations', {
      user: {
        username,
        email,
        password,
        passwordConfirmation,
      },
    },
    { withCredentials: true })
      .then((res) => {
        console.log('registration res ', res);
        // const { handleSuccessfulAuth } = this.state;
        if (res.data.status === 'created') {
          handleSuccessfulAuth(res.data);
        }
      }).catch((err) => {
        console.log('registration error ', err);
      });
    e.preventDefault();
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordConfirmationChange = (e) => {
    setPasswordConfirmation(e.target.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="username" placeholder="Username" value={username} onChange={handleUsernameChange} required />
        <input type="email" name="email" placeholder="Email" value={email} onChange={handleEmailChange} required />
        <input type="password" name="password" placeholder="Password" value={password} onChange={handlePasswordChange} required />
        <input type="password" name="passwordConfirmation" placeholder="Password Confirmation" value={passwordConfirmation} onChange={handlePasswordConfirmationChange} required />
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

Registration.propTypes = {
  handleSuccessfulAuth: PropTypes.func.isRequired,
};

export default Registration;
