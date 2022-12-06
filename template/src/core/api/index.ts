import { Request } from './api.service';
import { GetParams } from './helpers';
import { Endpoints } from './endpoints';

const Api = {
  login: (props: GetParams<Endpoints['auth/login']['POST']>) =>
    Request.post('auth/login', props),
};

export default Api;
