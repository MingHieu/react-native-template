import {getData, setData, removeData} from '~core/storage/storage.service';
import {USER_TOKEN} from './constant';

export const UserTokenStorage = {
  set: value => setData(USER_TOKEN, value),
  get: () => getData(USER_TOKEN),
  remove: () => removeData(USER_TOKEN),
};
