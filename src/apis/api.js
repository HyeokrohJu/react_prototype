import axios from 'axios';

import configs from '@configs/configs';

/**
 * Axios Instance
 */
const instance = axios.create({
  baseURL: configs.API_BASEURL,
});

/**
 * Axios Request Interceptor
 */
instance.interceptors.request.use(
  config => {
    console.log(config);
    return config;
  },
  error => {
    console.log(error);
    return Promise.reject(error);
  },
);

/**
 * Axios Response Interceptor
 */
instance.interceptors.response.use(
  response => {
    console.log(response);
    return response;
  },
  error => {
    console.log(error);
    return Promise.reject(error);
  },
);

export default instance;
