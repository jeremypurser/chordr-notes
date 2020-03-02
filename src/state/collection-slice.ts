import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CurrentNoteState } from './current-note-slice';

export type NoteCollectionState = CurrentNoteState[];

const initialState: NoteCollectionState = [];

export const noteCollectionSlice = createSlice({
  name: 'note-collection',
  initialState,
  reducers: {
    loadNotes: (state, action: PayloadAction<NoteCollectionState>) =>
      action.payload,
  },
});
