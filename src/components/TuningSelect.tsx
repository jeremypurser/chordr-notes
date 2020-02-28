import React from 'react';
import { ALL_NOTES, State, StringNumber, Note } from '../state';
import { useSelector, useDispatch } from 'react-redux';
import { tuningSlice } from '../state';

export default function TuningSelect() {
  const tuning = useSelector((state: State) => state.tuning);
  const dispatch = useDispatch();
  const { actions } = tuningSlice;

  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const note = e.target.value as Note;
    const string = +e.target.id.split('-')[1] as StringNumber;
    dispatch(actions.changeTuning({ string, note }));
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
