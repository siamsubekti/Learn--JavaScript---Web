import axios from 'axios';

export default axios.create({
    baseURL: '',
    timeout: 3000,
    withCredentials: true,
});