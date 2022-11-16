import axios from 'axios';

const baseURL = 'http://54.180.78.103:8080'

const client = axios.create({
    baseURL,
});

export default client;