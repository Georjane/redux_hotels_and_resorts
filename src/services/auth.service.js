import axios from 'axios';

const API_URL = 'http://localhost:3001/';

const register = (username, email, password, passwordConfirmation) => axios.post(`${API_URL}registrations`, {
  user: {
    username,
    email,
    password,
    passwordConfirmation,
  },
},
{ withCredentials: true });

const login = (username, email, password) => axios
  .post(`${API_URL}sessions`, {
    user: {
      username,
      email,
      password,
    },
  },
  { withCredentials: true })
  .then((response) => {
    if (response.data.logged_in) {
      localStorage.setItem('user', JSON.stringify(response.data.user));
    }
    return response.data;
  });

const logout = () => axios.delete(`${API_URL}logout`,
  { withCredentials: true })
  .then((res) => {
    console.log('yes logged out');
    localStorage.removeItem('user');
    return res.data;
  });

export default {
  register,
  login,
  logout,
};
