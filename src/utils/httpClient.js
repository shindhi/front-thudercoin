import axios from 'axios';

export default axios.create({
  // baseURL: 'https://thundercoin-api.herokuapp.com',
  baseURL: 'http://localhost:8080',
});
