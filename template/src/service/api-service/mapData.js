const mapData = res => {
  return res.data;
};

const mapError = err => {
  if (__DEV__) {
    console.log('response:', err.response);
    console.log('request:', err.request);
  }

  return '';
};

export default {mapData, mapError};
