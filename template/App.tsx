import React from 'react';
import {Provider} from 'react-redux';
import {store} from '~core/redux/store';
import AppRouter from '~router';
import '~i18n'; // init I18n

const App = () => {
  return (
    <Provider store={store}>
      <AppRouter />
    </Provider>
  );
};

export default App;
