import axios from 'axios';

const configBaseUrlStr = 'http://127.0.0.1:7001/';

const Instance = axios.create({
    baseURL: configBaseUrlStr,
    method: 'get',
    url: '/user',
    responseType: 'json',
    timeout: 60000,
    headers: {
        'Access-Control-Max-Age': 1273000
    },
    proxy: {
        host: 'http://127.0.0.1',
        port: 7001
    }
});

export {Instance};
