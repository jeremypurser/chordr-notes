import React from 'react';
import { ALL_NOTES, State } from '../state';
import { useSelector } from 'react-redux';

export default function TuningSelect() {
  const tuning = useSelector((state: State) => state.tuning);

  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    console.log(e);
  };

  const Options = ALL_NOTES.map((note, i) => (
    <option key={i} value={note}>
      {note}
    </option>
  ));

  const Selects = tuning.map((note, i) => (
    <select
      className="column select"
      key={i}
      name={note}
      id={`string-${i}`}
      defaultValue={note}
      onChange={handleSelect}
    >
      {Options}
    </select>
  ));
  return (
    <>
      <label className="label">Tuning</label>
      <div className="columns is-gapless">{Selects}</div>
    </>
  );
}
