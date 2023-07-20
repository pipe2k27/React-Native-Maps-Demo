import axios from 'axios';

type Env = {
  baseURL: string;
  port: string;
  path: string;
};

const getEnv = () => {
  const envAPI: Env = {
    // format envAPI for server connection
    baseURL: 'http://10.0.2.2',
    port: '8080',
    path: '/',
  };
  return `${envAPI.baseURL}:${envAPI.port}${envAPI.path}`;
};

// Save URL in variable for axios
export const API_URL = getEnv();

const basicContentType = { 'Content-Type': 'application/json' };

const axiosInstance = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
    get: basicContentType,
    post: basicContentType,
    put: basicContentType,
    delete: basicContentType,
    patch: basicContentType,
  },
});

axiosInstance.interceptors.request.use((config) => {
  config.timeout = 18000;
  return config;
});

export default axiosInstance;
