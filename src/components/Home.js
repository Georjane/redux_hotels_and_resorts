import React, { Component } from 'react';
import Registration from './auth/Registration';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      // email: '',
      // password: '',
      // password_confirmation: '',
      // registrationErrors: '',
    };

    // this.handleSubmit = this.handleSubmit.bind(this);
    // this.handleChange = this.handleChange.bind(this);
  }

  render() {
    const { username } = this.state;
    return (
      <div>
        <h1>Home</h1>
        <h1>Home</h1>
        <h1>{username}</h1>
        <Registration />
      </div>
    );
  }
}
