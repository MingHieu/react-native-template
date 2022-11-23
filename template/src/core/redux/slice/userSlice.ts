import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {IUser} from '~types';

const initialState: IUser = {
  username: '',
  email: '',
  name: '',
  avatar: '',
  role: '',
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setCurrentUser: (state, action: PayloadAction<IUser>) => action.payload,
    setDefaultUser: () => initialState,
  },
});

// Action creators are generated for each case reducer function
export const {setCurrentUser, setDefaultUser} = userSlice.actions;
