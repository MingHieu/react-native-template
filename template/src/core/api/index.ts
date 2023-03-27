import { Request } from './api.service';
import { GetParams } from './helpers';
import { Endpoints } from './endpoints';

const API = {
  signup: (props: GetParams<Endpoints['auth/signup']['POST']>) =>
    Request.post('auth/signup', props),

  login: (props: GetParams<Endpoints['auth/login']['POST']>) =>
    Request.post('auth/login', props),
};

export default API;
