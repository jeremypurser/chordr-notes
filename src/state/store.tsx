import { configureStore } from '@reduxjs/toolkit';
import { guitarNeckSlice } from './guitar-neck-slice';
import { chordNameSlice } from './chord-name-slice';

const reducer = {
  guitarNeck: guitarNeckSlice.reducer,
  chordName: chordNameSlice.reducer,
};

export const store = configureStore({ reducer });
