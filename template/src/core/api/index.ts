import {Request} from './api.service';

const Api = {
  login: (username, password) =>
    Request.post('auth/login', {username, password}),
};

export default Api;
