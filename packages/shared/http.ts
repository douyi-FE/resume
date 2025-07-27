import axios, { InternalAxiosRequestConfig, CreateAxiosDefaults } from 'axios';

interface AxiosRequestConfig extends InternalAxiosRequestConfig {
    retryCount?: number;
    retryDelay?: number;
}

const instance = axios.create({
  baseURL: 'https://api.example.com',
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  },
});

instance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    error.config.retryCount = error.config.retryCount + 1;
    if (error.config.retryCount < 3) {
      console.log('error', error);
      return instance.request(error.config);
    }
    return Promise.reject(error);
  }
);

instance.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    config.retryCount = config.retryCount ?? 0;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export const get = (url: string) => {  
  return instance.get(url);
};

export const post = (url: string, data: any) => {
  return instance.post(url, data);
};