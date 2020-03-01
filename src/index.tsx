import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import App from './components/App';
import { store } from './state';

const mountNode = document.getElementById('root');

const AppRoot = (
  <Provider store={store}>
    <ToastContainer />
    <App />
  </Provider>
);

render(AppRoot, mountNode);
