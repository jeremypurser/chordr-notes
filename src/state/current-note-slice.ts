import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Neck, PressStringPayload, Tuning, ChangeTuningPayload } from './types';

interface CurrentNoteState {
  name: string;
  note: Neck;
  tuning: Tuning;
}

export const initialState: CurrentNoteState = {
  name: '',
  note: [
    ['S', 'S', 'S', 'S', 'S', 'S'],
    ['S', 'S', 'S', 'S', 'S', 'S'],
    ['S', 'S', 'S', 'S', 'S', 'S'],
    ['S', 'S', 'S', 'S', 'S', 'S'],
    ['S', 'S', 'S', 'S', 'S', 'S'],
    ['S', 'S', 'S', 'S', 'S', 'S'],
  ],
  tuning: ['E', 'A', 'D', 'G', 'B', 'E'],
};

export const currentNoteSlice = createSlice({
  name: 'current-note',
  initialState,
  reducers: {
    pressString: (
      state,
      action: PayloadAction<PressStringPayload>
    ): CurrentNoteState => {
      // Clone state argument, immutability
      const newNote = state.note.map(row => row.slice());
      const { fret, string } = action.payload;

      // Only one fret can be 'R' per string
      newNote.forEach(fret => {
        fret[action.payload.string] = 'S';
      });

      // pressString event toggles on and off
      if (state.note[fret][string] === 'S') {
        newNote[fret][string] = 'R';
      } else {
        newNote[fret][string] = 'S';
      }

      return {
        ...state,
        note: newNote as Neck,
      };
    },
    enterChordName: (
      state,
      action: PayloadAction<string>
    ): CurrentNoteState => ({
      ...state,
      name: action.payload,
    }),
    changeTuning: (
      state,
      action: PayloadAction<ChangeTuningPayload>
    ): CurrentNoteState => {
      const newTuning = Array.from(state.tuning);
      newTuning[action.payload.string] = action.payload.note;
      return {
        ...state,
        tuning: newTuning as Tuning,
      };
    },
  },
});
