import {IUser} from '~types';

export type AuthEndpoints = {
  'auth/login': {
    POST: (params: {username: string; password: string}) => {
      token: string;
      data: IUser;
    };
  };
};
