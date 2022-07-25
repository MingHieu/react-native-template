let ENVIRONMENT = '';
let API_URL = '';
let API_PREFIX = '';

if (__DEV__) {
  API_URL = 'http://localhost:3000';
  API_PREFIX = '';
  ENVIRONMENT = 'Development';
} else {
  API_URL = 'http://localhost:3000';
  API_PREFIX = '';
  ENVIRONMENT = 'Production';
}

export {API_URL, API_PREFIX, ENVIRONMENT};
