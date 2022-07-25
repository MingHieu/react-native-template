import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {IUserState} from './types';

const initialState: IUserState = {
  token: '',
  userInfor: {},
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setCurrentUser: (state, action: PayloadAction<IUserState>) => {
      const currentUser = action.payload;
      return currentUser;
    },
    setDefaultUser: () => initialState,
  },
});

// Action creators are generated for each case reducer function
export const {setCurrentUser, setDefaultUser} = userSlice.actions;

