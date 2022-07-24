import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export type UserState = {
  token: string;
  userInfor: {};
};

const initialState: UserState = {
  token: '',
  userInfor: {},
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setCurrentUser: (state, action: PayloadAction<UserState>) => {
      const currentUser = action.payload;
      return currentUser;
    },
    setDefaultUser: () => initialState,
  },
});

// Action creators are generated for each case reducer function
export const {setCurrentUser, setDefaultUser} = userSlice.actions;

export default userSlice.reducer;
