import axios from 'axios';

const client = axios.create({
  baseURL: 'https://clora-backend.herokuapp.com/v1'
});

export default client;
