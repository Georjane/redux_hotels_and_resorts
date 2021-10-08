import axios from 'axios';
import authHeader from './auth-header';

// const API_URL = 'https://redux-authentication-api.herokuapp.com/';
const API_URL = "http://localhost:3001/";

class UserService {
  getHotels() {
    return axios.get(API_URL + 'hotels', { headers: authHeader() });
  }

  getHotelsDetails(id) {
    return axios.get(API_URL + 'hotels/' + id, { headers: authHeader() });
  }

  getFavorites() {
    return axios.get(API_URL + 'favorites', { headers: authHeader() });
  }

  // addFavorites(user_id, hotel_id) {
  //   return axios.post(API_URL + 'favorites', { headers: authHeader() });
  // }
}

export default new UserService();