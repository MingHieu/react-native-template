import axios, {AxiosInstance, AxiosRequestConfig} from 'axios';
import {API_URL} from '~config';

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
