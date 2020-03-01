import { configureStore } from '@reduxjs/toolkit';
import { noteCollectionSlice } from './collection-slice';
import { currentNoteSlice } from './current-note-slice';

const reducer = {
  currentNote: currentNoteSlice.reducer,
  collection: noteCollectionSlice.reducer,
};

export const store = configureStore({ reducer });
