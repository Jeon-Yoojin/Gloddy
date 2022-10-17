import axios from 'axios';

const baseURL = 'https://jsonplaceholder.typicode.com/users'

const client = axios.create({
    baseURL,
});

export default client;