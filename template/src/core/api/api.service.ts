import {OperationsByMethodAndPath, PathFor} from './helpers/index';
import axios, {AxiosInstance, AxiosPromise, AxiosRequestConfig} from 'axios';
import {API_URL, API_PREFIX} from '~config';
import {UserTokenStorage} from '~core/storage/storage';

class ApiService {
  api: AxiosInstance;

  constructor() {
    this.api = axios.create({
      baseURL: API_URL + API_PREFIX,
      timeout: 5000,
      headers: {
        'Content-Type': 'application/json',
      },
    });

    // Add a request interceptor
    this.api.interceptors.request.use(
      async function (config) {
        config.headers = config.headers ?? {};
        // Do something before request is sent
        if (config.headers.Authorization) {
          return config;
        }
        const token = await UserTokenStorage.get();
        if (token) {
          config.headers.Authorization = token;
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

  get<TPath extends PathFor<'GET'>>(
    url: TPath,
    queryParams?: OperationsByMethodAndPath<'GET', TPath>['queryParams'],
    config: AxiosRequestConfig = {},
  ): AxiosPromise<OperationsByMethodAndPath<'GET', TPath>['result']> {
    return this.api({
      url: url,
      method: 'GET',
      params: queryParams,
      ...config,
    });
  }

  post<TPath extends PathFor<'POST'>>(
    url: TPath,
    params: OperationsByMethodAndPath<'POST', TPath>['params'],
    queryParams?: OperationsByMethodAndPath<'POST', TPath>['queryParams'],
    config: AxiosRequestConfig = {},
  ): AxiosPromise<OperationsByMethodAndPath<'POST', TPath>['result']> {
    return this.api({
      url: url,
      method: 'POST',
      data: params,
      params: queryParams,
      ...config,
    });
  }

  // put<TPath extends PathFor<'PUT'>>(
  //   url: TPath,
  //   params: OperationsByMethodAndPath<'PUT', TPath>['params'],
  //   queryParams?: OperationsByMethodAndPath<'PUT', TPath>['queryParams'],
  //   config: AxiosRequestConfig = {},
  // ): AxiosPromise<OperationsByMethodAndPath<'PUT', TPath>['result']> {
  //   return this.api({
  //     url: url,
  //     method: 'PUT',
  //     data: params,
  //     params: queryParams,
  //     ...config,
  //   });
  // }

  // delete<TPath extends PathFor<'DELETE'>>(
  //   url: TPath,
  //   params?: OperationsByMethodAndPath<'DELETE', TPath>['params'],
  //   queryParams?: OperationsByMethodAndPath<'DELETE', TPath>['queryParams'],
  //   config: AxiosRequestConfig = {},
  // ): AxiosPromise<OperationsByMethodAndPath<'DELETE', TPath>['result']> {
  //   return this.api({
  //     url: url,
  //     method: 'DELETE',
  //     data: params,
  //     params: queryParams,
  //     ...config,
  //   });
  // }
}

export const Request = new ApiService();
