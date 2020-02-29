import { configureStore } from '@reduxjs/toolkit';
import { currentNoteSlice } from './current-note-slice';

const reducer = {
  currentNote: currentNoteSlice.reducer,
};

export const store = configureStore({ reducer });
