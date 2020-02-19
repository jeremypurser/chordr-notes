import { configureStore } from '@reduxjs/toolkit';
import { guitarNeck } from './guitar-neck-slice';

const reducer = {
  guitarNeck: guitarNeck.reducer
};

export const store = configureStore({ reducer });

