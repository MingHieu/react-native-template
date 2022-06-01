import authorizedRequest from '../../service/api-service/authorizedRequest';

class HomeApi {
  setToken = token => {
    authorizedRequest.setToken(token);
  };
}

export default new HomeApi();
