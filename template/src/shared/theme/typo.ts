import { Platform, TextStyle } from 'react-native';

export const fontTheme = {
  ...Platform.select({
    ios: {
      primary: 'System',
      secondary: 'System',
    },
    android: {
      primary: 'san-serif',
      secondary: 'san-serif',
    },
  }),
};

export const TYPO = {
  h1: {
    fontSize: 58,
    fontWeight: '900',
  } as TextStyle,
  h2: {
    fontSize: 46,
    fontWeight: '800',
  } as TextStyle,
  h3: {
    fontSize: 32,
    fontWeight: '700',
  } as TextStyle,
  h4: {
    fontSize: 20,
    fontWeight: '600',
  } as TextStyle,
  p: {
    fontSize: 14,
    fontWeight: '500',
  } as TextStyle,
};
