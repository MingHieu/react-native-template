import { Dimensions } from 'react-native';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

const PADDING_HORIZONTAL = 24;
const MARGIN = 9;

const CT_HEADER_HEIGHT = 52; // trick

export const SIZE = {
  SCREEN_WIDTH,
  SCREEN_HEIGHT,
  PADDING_HORIZONTAL,
  MARGIN,
  CT_HEADER_HEIGHT,
};
