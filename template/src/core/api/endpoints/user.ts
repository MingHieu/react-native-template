import { IUser } from '~types';

export type UserEndpoints = {
  'user/infor': {
    GET: () => {
      data: IUser;
    };
  };
};
