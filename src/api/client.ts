import axios from 'axios';

const baseURL = 'http://54.180.78.103:8080'

const client = axios.create({
    baseURL,
});
/* 
client.interceptors.request.use(
    (config: any) => {
        const token = useToken();
        config.headers['X-AUTH-TOKEN'] = token;
    }
)
*/
client.interceptors.response.use(
    response => {
        return response;
    },
    error => {
        return error;
    }
);

export default client;