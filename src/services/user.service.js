import axios from 'axios';
// import authHeader from "./auth-header";

const API_URL = 'http://localhost:3001/';

const getHotels = () => axios.get(`${API_URL}hotels`);

const getFavorites = () => axios.get(`${API_URL}favorites`);

// const getModeratorBoard = () => {
//   return axios.get(API_URL + "mod", { headers: authHeader() });
// };

// const getAdminBoard = () => {
//   return axios.get(API_URL + "admin", { headers: authHeader() });
// };

export default {
  getHotels,
  getFavorites,
  // getModeratorBoard,
  // getAdminBoard,
};
