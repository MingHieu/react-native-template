import {DEFAULT_PREFIX} from './api.config';
import {Request} from './api.service';
import {ILoginBody} from './types';

const LOGIN = './login';

const AuthApi = {
  login: (body: ILoginBody) => Request.post(DEFAULT_PREFIX + LOGIN, body),
};

export default AuthApi;
