import React from 'react';
import {Provider} from 'react-redux';
import {store} from './src/core/redux/store';
import AppRouter from './src/router/index';
import './src/i18n'; // init I18n

const App = () => {
  return (
    <Provider store={store}>
      <AppRouter />
    </Provider>
  );
};

export default App;
