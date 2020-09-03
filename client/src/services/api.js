import axios from 'axios';

const contele = axios.create({ baseURL: '/api/places' });

contele.interceptors.request.use(function (config) {

    const token = window.localStorage.token;

    if (token) {
        config.headers.Authorization = `token ${token}`
    }
    
    return config
}, function (error) {
    return Promise.reject(error);
});

contele.interceptors.response.use(function (response) {
    return response;
}, function (error) {
    return Promise.reject(error);
});

export default { contele };