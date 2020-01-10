import axios from 'axios';

export default axios.create({
  baseURL: 'https://thundercoin-api.herokuapp.com',
});
