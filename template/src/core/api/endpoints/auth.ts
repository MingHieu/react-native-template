import {IUser} from '~types';

export type AuthEndpoints = {
  'auth/signup': {
    POST: (props: {
      params: {
        name: string;
        username: string;
        password: string;
      };
    }) => IUser;
  };
  'auth/login': {
    POST: (props: {
      params: {
        username: string;
        password: string;
      };
    }) => IUser;
  };
};
