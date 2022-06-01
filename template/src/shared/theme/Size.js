import {Dimensions} from 'react-native';

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;
const width = WIDTH < HEIGHT ? WIDTH : HEIGHT;
const height = WIDTH > HEIGHT ? WIDTH : HEIGHT;

const _mpw = value => {
  const current = width > 500 ? (value * width) / 450 : (value * width) / 375;
  return current;
};

const _mph = value => {
  const current = (value * height) / 667;
  return current;
};

export default {
  WIDTH,
  HEIGHT,
  _mph,
  _mpw,
};
