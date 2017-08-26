import axios from 'axios';

export default {
  client: axios.create({
    baseURL: 'http://ren-shop-api.herokuapp.com',
    responseType: 'json',
    timeout: 5000
  })
};
