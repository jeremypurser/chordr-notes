import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { State } from '../state';
import { stringCases, strToNum } from '../util';
import { currentNoteSlice, FretNumber, StringNumber } from '../state';
import '../styles/GuitarNeck.scss';

export default function GuitarNeck() {
  // pulls in state from Redux store
  const currentNote = useSelector((state: State) => state.currentNote);
  const { note, name, tuning } = currentNote;
  const dispatch = useDispatch();
  const { actions } = currentNoteSlice;

  const handleFretClick = (e: React.MouseEvent) => {
    const [fret, string] = e.currentTarget.id.split('-').map(strToNum) as [
      FretNumber,
      StringNumber
    ];
    dispatch(actions.pressString({ fret, string }));
  };

  const renderTuning = (
    <div className="columns is-gapless">
      {tuning.map((note, i) => (
        <div key={i} className="column tuning">
          {note}
        </div>
      ))}
    </div>
  );

  const renderGuitarNeck = note.map((fret, fretIdx) => (
    <div className="neck columns is-gapless" key={fretIdx}>
      {fret.map((string, stringIdx) => (
        <div
          onClick={handleFretClick}
          className="column v-line"
          id={`${fretIdx}-${stringIdx}`}
          key={stringIdx}
        >
          <span>{stringCases(string)}</span>
        </div>
      ))}
    </div>
  ));

  return (
    <>
      <h2 className="title">{name}</h2>
      {renderTuning}
      {renderGuitarNeck}
    </>
  );
}
