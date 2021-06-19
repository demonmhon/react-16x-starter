import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from './app';
import store from './redux/store/index';
import { loadConfig } from 'core/config';
import './scss/styles.scss';

const render = async () => {
  await loadConfig();
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('app')
  );
};

render();
