import React, { MouseEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import NotesAPI from '../api';
import { currentNoteSlice, noteCollectionSlice, State } from '../state';
import '../styles/ChordDetailsForm.scss';
import Button from './Button';
import TuningSelect from './TuningSelect';

export default function ChordDetailsForm() {
  const dispatch = useDispatch();
  const currentNote = useSelector((state: State) => state.currentNote);
  const { name } = currentNote;
  const noteActions = currentNoteSlice.actions;
  const collectionActions = noteCollectionSlice.actions;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(noteActions.enterChordName(e.target.value));
  };

  const handleSubmit = (e: MouseEvent) => {
    e.preventDefault();
    NotesAPI.saveNote(currentNote).then(status => {
      if (status) {
        dispatch(collectionActions.saveNote(currentNote));
        dispatch(noteActions.clearForm());
      }
    });
  };

  const handleClear = (e: MouseEvent) => {
    e.preventDefault();
    dispatch(noteActions.clearForm());
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
