import React from 'react';
import { render } from 'react-dom';
import App from './components/App';
import { Provider } from 'react-redux';
import { store } from './state';

const mountNode = document.getElementById('root');

const AppRoot = (
  <Provider store={store}>
    <App />
  </Provider>
);

render(AppRoot, mountNode);
