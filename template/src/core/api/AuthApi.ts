import {API_PREFIX} from '~config';
import {Request} from './api.service';
import API_CONSTANT from './constant';
import {ILoginBody} from './types';

const AuthApi = {
  login: (body: ILoginBody) =>
    Request.post(API_PREFIX + API_CONSTANT.Auth.LOGIN, body),
};

export default AuthApi;
