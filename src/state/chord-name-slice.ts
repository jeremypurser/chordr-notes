import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = '';

export const chordNameSlice = createSlice({
  name: 'chordName',
  initialState,
  reducers: {
    enterChordName: (state, action: PayloadAction<string>) => action.payload,
  },
});
