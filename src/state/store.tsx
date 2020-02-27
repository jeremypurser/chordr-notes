import { configureStore } from '@reduxjs/toolkit';
import { guitarNeckSlice } from './guitar-neck-slice';
import { chordNameSlice } from './chord-name-slice';
import { tuningSlice } from './tuning-slice';

const reducer = {
  guitarNeck: guitarNeckSlice.reducer,
  chordName: chordNameSlice.reducer,
  tuning: tuningSlice.reducer,
};

export const store = configureStore({ reducer });
