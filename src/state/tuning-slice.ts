import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Tuning, ChangeTuningPayload } from './types';

const initialState: Tuning = ['E', 'A', 'D', 'G', 'B', 'E'];

export const tuningSlice = createSlice({
  name: 'tuning',
  initialState,
  reducers: {
    changeTuning: (
      state,
      action: PayloadAction<ChangeTuningPayload>
    ): Tuning => {
      const newState = Array.from(state);
      newState[action.payload.string] = action.payload.note;
      return newState as Tuning;
    },
  },
});
