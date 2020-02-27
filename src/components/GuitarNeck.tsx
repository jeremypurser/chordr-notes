import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { State } from '../state';
import { stringCases, strToNum } from '../util';
import { guitarNeckSlice, FretNumber, StringNumber } from '../state';
import '../styles/GuitarNeck.scss';

export default function GuitarNeck() {
  // pulls in state from Redux store
  const state = useSelector((state: State) => state);
  const { guitarNeck, chordName, tuning } = state;
  const dispatch = useDispatch();
  const { actions } = guitarNeckSlice;

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

  const renderGuitarNeck = guitarNeck.map((fret, fretIdx) => (
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
      <h1 className="title">{chordName}</h1>
      {renderTuning}
      {renderGuitarNeck}
    </>
  );
}
