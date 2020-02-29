import React, { MouseEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TuningSelect from './TuningSelect';
import { default as SaveButton } from './Button';
import { currentNoteSlice, State } from '../state';
import NotesAPI from '../api';
import '../styles/ChordDetailsForm.scss';

export default function ChordDetailsForm() {
  const dispatch = useDispatch();
  const currentNote = useSelector((state: State) => state.currentNote);
  const { name } = currentNote;
  const { actions } = currentNoteSlice;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(actions.enterChordName(e.target.value));
  };

  const handleSubmit = (e: MouseEvent) => {
    NotesAPI.post(currentNote);
    // action to clear state
    // show toast
  };

  return (
    <div className="field">
      <TuningSelect />
      <label className="label">Chord Name</label>
      <div className="control details">
        <input
          onChange={handleChange}
          className="input"
          type="text"
          value={name}
          placeholder="G major"
        />
      </div>
      <SaveButton clickHandler={handleSubmit} text="Save Chord" />
    </div>
  );
}
