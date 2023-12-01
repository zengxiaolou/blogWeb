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
    if (response.data.metadata.code !== 'ok') {
      return Promise.reject(new Error(response?.data?.metadata?.message || '未知错误'));
    }
    return response.data;
  },
  (error: AxiosError) => {
    if (error.response?.status === 401) {
      Cookie.remove('token');
    }
    return Promise.reject(error);
  }
);

export { default } from 'axios';
