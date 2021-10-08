import axios from "axios";

// const API_URL = 'https://redux-authentication-api.herokuapp.com/';
const API_URL = "http://localhost:3001/";

class AuthService {
  login(username, password) {
    return axios
      .post(API_URL + "sessions", { username, password })
      .then((response) => {
        if (response.data.token) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }

        return response.data;
      });
  }

  logout() {
    localStorage.removeItem("user");
  }

  register(username, email, password, passwordConfirmation) {
    return axios.post(API_URL + "registrations", {
      username,
      email,
      password,
      passwordConfirmation
    });
  }
}

export default new AuthService();