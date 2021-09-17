import axios from 'axios';

const api = axios.create({
    baseURL: 'http://10.3.8.36:3333',
});

export {api};