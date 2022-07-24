import {getData, setData, removeData} from '~core/storage/storage.service';

const USER_TOKEN = 'user_token';

export const UserTokenStorage = {
  set: value => setData(USER_TOKEN, value),
  get: () => getData(USER_TOKEN),
  remove: () => removeData(USER_TOKEN),
};

