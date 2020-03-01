import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Neck } from './types';

export type NoteCollectionState = Neck[];

const initialState: NoteCollectionState = [];

export const noteCollectionSlice = createSlice({
  name: 'note-collection',
  initialState,
  reducers: {
    loadNotes: (state, action: PayloadAction<NoteCollectionState>) =>
      action.payload,
  },
});
