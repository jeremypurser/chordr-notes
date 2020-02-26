import { configureStore } from '@reduxjs/toolkit';
import { guitarNeckSlice } from './guitar-neck-slice';

const reducer = {
  guitarNeck: guitarNeckSlice.reducer,
};

export const store = configureStore({ reducer });
