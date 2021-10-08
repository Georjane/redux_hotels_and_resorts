import axios from 'axios';

// const API_URL = 'https://redux-authentication-api.herokuapp.com/';
const API_URL = 'http://localhost:3001/';

class AuthService {
  login = (username, password) => axios
    .post(`${API_URL}sessions`, {
      username,
      password,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
    .then((response) => {
      if (response.data.token) {
        localStorage.setItem('user', JSON.stringify(response.data));
      }

      return response.data;
    })

  logout = () => {
    localStorage.removeItem('user');
  }

  register = (username, email, password, passwordConfirmation) => axios.post(`${API_URL}registrations`, {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    user: {
      username,
      email,
      password,
      password_confirmation: passwordConfirmation,
    },
  })
}

export default new AuthService();
