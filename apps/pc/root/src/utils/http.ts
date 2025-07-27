import axios from 'axios';

const instance = axios.create({
  baseURL: `${import.meta.env.VITE_BASE_URL}`,
  timeout: 10000,
});

instance.interceptors.request.use(config => {
  config.headers.Authorization = `Bearer ${import.meta.env.VITE_SERVER_TOKEN}`;
  return config;
});

const httpGet = (url: string, params: any, config: any = {}) => {
  return instance.get(url, { params, ...config });
};

const httpPost = (url: string, data: any, config: any = {}) => {
  return instance.post(url, data, config);
};

export { httpGet, httpPost };