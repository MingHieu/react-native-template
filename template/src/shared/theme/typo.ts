import {TextStyle} from 'react-native';

export const fontTheme = {
  primary: 'sans-serif',
  secondary: 'sans-serif',
};

export default {
  h1: {
    fontSize: 58,
    fontWeight: '800',
    fontFamily: fontTheme.primary,
  } as TextStyle,
  h2: {
    fontSize: 46,
    fontWeight: '700',
    fontFamily: fontTheme.primary,
  } as TextStyle,
  h3: {
    fontSize: 32,
    fontWeight: '600',
    fontFamily: fontTheme.primary,
  } as TextStyle,
  p: {
    fontSize: 14,
    fontWeight: '500',
    fontFamily: fontTheme.primary,
  } as TextStyle,
};
