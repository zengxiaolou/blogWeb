import axios, { AxiosResponse, AxiosError } from 'axios';
import Cookie from 'js-cookie';
import { ApiResponse } from '@/api/types/base';

axios.interceptors.request.use(config => {
  const token = Cookie.get('token');
  token &&
    Object.assign(config.headers, {
      'X-SSO-Token': token,
    });
  return config;
});

axios.interceptors.response.use(
  // @ts-ignore
  (response: AxiosResponse<ApiResponse>) => {
    if (response?.data?.metadata?.code !== 'ok') {
      return Promise.reject(new Error(response?.data?.metadata?.message || '未知错误'));
    }
    if (response?.config?.url  &&   ['/api/signin',  '/api/signup'].includes(response.config.url)) {
      const token = response.data.result.token;
      if (token) {
        Cookie.set('token', token);
      }
      if (response.config.url === '/api/logout') {
        Cookie.remove('token');
      }
    }
    return response;
  },
  (error: AxiosError) => {
    const { message, ...restError } = error;
    if (error.response) {
      if (error.response.status === 401) {
        Cookie.remove('token');
      }
    } else if (error.request) {
      console.error('No response was received');
    } else {
      console.error('Error', message);
    }

    return Promise.reject({
      // @ts-ignore
      message: error?.response?.data?.message || message || '网络请求错误',
      ...restError,
    });
  }
);

export { default } from 'axios';
