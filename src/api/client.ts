import axios from 'axios';

const baseURL = 'http://13.125.212.172:8080'

const client = axios.create({
    baseURL,
});

export default client;