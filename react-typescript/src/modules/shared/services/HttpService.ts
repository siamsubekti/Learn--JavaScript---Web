import axios from 'axios';

export default axios.create({
  baseURL: '',
  timeout: 30000,
  withCredentials: true,
});
