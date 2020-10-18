import axios from 'axios';

const api = axios.create({
  baseURL: 'http://192.168.254.165:3333',
})

export default api;
