import React, { MouseEvent } from 'react';
import { default as SaveButton } from './Button';
import '../styles/ChordDetailsForm.scss';

export default function ChordDetailsForm() {
  const handleSubmit = (e: MouseEvent) => {
    console.log(e);
  };

  return (
    <div className="field">
      <label className="label">Chord Name</label>
      <div className="control details">
        <input className="input" type="text" placeholder="G major" />
      </div>
      <SaveButton clickHandler={handleSubmit} text="Save" />
    </div>
  );
}
