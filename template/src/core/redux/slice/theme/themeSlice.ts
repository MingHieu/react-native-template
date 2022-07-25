import {IThemeSliceProps} from './types';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {LIGHT_SCHEME} from '~shared/theme';

const initialState: IThemeSliceProps = LIGHT_SCHEME;

export const themeSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setTheme: (state, action: PayloadAction<IThemeSliceProps>) => {
      return action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {setTheme} = themeSlice.actions;
