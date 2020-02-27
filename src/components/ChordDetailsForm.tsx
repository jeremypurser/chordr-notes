import React, { MouseEvent } from 'react';
import { default as SaveButton } from './Button';
import '../styles/ChordDetailsForm.scss';
import { useDispatch, useSelector } from 'react-redux';
import { chordNameSlice, State } from '../state';

export default function ChordDetailsForm() {
  const dispatch = useDispatch();
  const chordName = useSelector((state: State) => state.chordName);
  const { actions } = chordNameSlice;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(actions.enterChordName(e.target.value));
  };

  const handleSubmit = (e: MouseEvent) => {
    console.log(e);
  };

  return (
    <div className="field">
      <label className="label">Chord Name</label>
      <div className="control details">
        <input
          onChange={handleChange}
          className="input"
          type="text"
          value={chordName}
          placeholder="G major"
        />
      </div>
      <SaveButton clickHandler={handleSubmit} text="Save Chord" />
    </div>
  );
}
