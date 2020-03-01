import React, { MouseEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import NotesAPI from '../api';
import { currentNoteSlice, State } from '../state';
import '../styles/ChordDetailsForm.scss';
import Button from './Button';
import TuningSelect from './TuningSelect';

export default function ChordDetailsForm() {
  const dispatch = useDispatch();
  const currentNote = useSelector((state: State) => state.currentNote);
  const { name } = currentNote;
  const { actions } = currentNoteSlice;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(actions.enterChordName(e.target.value));
  };

  const handleSubmit = (e: MouseEvent) => {
    e.preventDefault();
    NotesAPI.post(currentNote);
    dispatch(actions.clearForm());
  };

  const handleClear = (e: MouseEvent) => {
    e.preventDefault();
    dispatch(actions.clearForm());
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
      <Button clickHandler={handleSubmit} text="Save" color="is-primary" />
      <Button clickHandler={handleClear} text="Clear" color="is-warning" />
    </div>
  );
}
