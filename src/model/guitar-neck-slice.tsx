import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Neck, PressStringAction } from './types';

const initialState: Neck = [
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
    pressString: (state, action: PayloadAction<PressStringAction>): Neck => {
      const newState = state.map(row => row.slice());
      newState[action.payload.fret][action.payload.string] = 'R';
      return newState as Neck;
    },
  },
});
