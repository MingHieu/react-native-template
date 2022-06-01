import {createSlice} from '@reduxjs/toolkit';
import {sliceTypes} from './constant';

const initialState = {
  token: '',
  userInfor: {},
};

export const userSlice = createSlice({
  name: sliceTypes.USER,
  initialState,
  reducers: {
    setCurrentUser: (state, action) => {
      const currentUser = action.payload;
      return currentUser;
    },
    setDefaultUser: () => initialState,
  },
});

// Action creators are generated for each case reducer function
export const {setCurrentUser, setDefaultUser} = userSlice.actions;

export default userSlice.reducer;
