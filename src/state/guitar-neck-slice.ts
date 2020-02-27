import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Neck, PressStringPayload } from './types';

export const initialState: Neck = [
  ['S', 'S', 'S', 'S', 'S', 'S'],
  ['S', 'S', 'S', 'S', 'S', 'S'],
  ['S', 'S', 'S', 'S', 'S', 'S'],
  ['S', 'S', 'S', 'S', 'S', 'S'],
  ['S', 'S', 'S', 'S', 'S', 'S'],
  ['S', 'S', 'S', 'S', 'S', 'S'],
];

export const guitarNeckSlice = createSlice({
  name: 'guitarNeck',
  initialState,
  reducers: {
    pressString: (state, action: PayloadAction<PressStringPayload>): Neck => {
      // Clone state argument, immutability
      const newState = state.map(row => row.slice());
      const { fret, string } = action.payload;

      // Only one fret can be 'R' per string
      newState.forEach(fret => {
        fret[action.payload.string] = 'S';
      });

      // pressString event toggles on and off
      if (state[fret][string] === 'S') {
        newState[fret][string] = 'R';
      } else {
        newState[fret][string] = 'S';
      }

      return newState as Neck;
    },
  },
});
