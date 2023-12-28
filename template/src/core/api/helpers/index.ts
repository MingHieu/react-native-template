import { Endpoints } from '../Endpoints';

type KeyOfUnion<T> = T extends T ? keyof T : never;

export type GetParams<T> = T extends (...args: any) => any
  ? Parameters<T>[0]['params']
  : never;
export type GetQueryParams<T> = T extends (...args: any) => any
  ? Parameters<T>[0]['queryParams']
  : never;
type GetResult<T> = T extends (...args: any) => any ? ReturnType<T> : never;

type Operations<
  TPath extends keyof Endpoints = keyof Endpoints,
  TMethod extends KeyOfUnion<Endpoints[TPath]> = KeyOfUnion<Endpoints[TPath]>,
> = TPath extends keyof Endpoints
  ? TMethod extends KeyOfUnion<Endpoints[TPath]>
    ? {
        path: TPath;
        method: TMethod;
        params: TMethod extends 'GET'
          ? never
          : GetParams<Endpoints[TPath][TMethod]>;
        queryParams: GetQueryParams<Endpoints[TPath][TMethod]>;
        result: GetResult<Endpoints[TPath][TMethod]>;
      }
    : never
  : never;

type Method = 'GET' | 'POST' | 'PUT' | 'DELETE';

export type PathFor<TMethod extends Method> = Extract<
  Operations,
  { method: TMethod }
>['path'];

export type OperationsByMethodAndPath<
  TMethod extends Method,
  TPath extends PathFor<TMethod>,
> = Extract<Operations, { path: TPath; method: TMethod }>;
