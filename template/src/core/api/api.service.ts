import axios, {AxiosInstance, AxiosRequestConfig} from 'axios';
import {API_URL} from '~config';
import {UserTokenStorage} from '~core/storage/storage';

class ApiService {
  api: AxiosInstance;

  constructor() {
    this.api = axios.create({
      baseURL: API_URL,
      timeout: 5000,
      headers: {
        'Content-Type': 'application/json',
      },
    });

    // Add a request interceptor
    this.api.interceptors.request.use(
      async function (config) {
        // Do something before request is sent
        if (config.headers['Authorization']) return config;
        const token = await UserTokenStorage.get();
        if (token) {
          config.headers['Authorization'] = token;
        }
        return config;
      },
      function (error) {
        // Do something with request error
        return Promise.reject(error);
      },
    );

    // Add a response interceptor
    this.api.interceptors.response.use(
      function (response) {
        // Any status code that lie within the range of 2xx cause this function to trigger
        // Do something with response data
        return response;
      },
      function (error) {
        // Any status codes that falls outside the range of 2xx cause this function to trigger
        // Do something with response error
        return Promise.reject(error);
      },
    );
  }

  get(url: string, config: AxiosRequestConfig = {}, queryParams = {}) {
    return this.api({
      url: url,
      method: 'GET',
      params: queryParams,
      ...config,
    });
  }

  post(url, data, config: AxiosRequestConfig = {}, queryParams = {}) {
    return this.api({
      url: url,
      method: 'POST',
      params: queryParams,
      data: data,
      ...config,
    });
  }

  put(url, data, config: AxiosRequestConfig = {}, queryParams = {}) {
    return this.api({
      url: url,
      method: 'PUT',
      params: queryParams,
      data: data,
      ...config,
    });
  }

  patch(url, data, config: AxiosRequestConfig = {}, queryParams = {}) {
    return this.api({
      url: url,
      method: 'PATCH',
      params: queryParams,
      data: data,
      ...config,
    });
  }

  delete(url, config: AxiosRequestConfig = {}, queryParams = {}) {
    return this.api({
      url: url,
      method: 'DELETE',
      params: queryParams,
      ...config,
    });
  }
}

export const Request = new ApiService();
