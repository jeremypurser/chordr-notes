import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { State } from '../model';
import { stringCases, strToNum } from '../util';
import { guitarNeckSlice, FretNumbers, StringNumbers } from '../model';
import '../styles/GuitarNeck.scss';

export default function GuitarNeck() {
  // pulls in state from Redux store
  const guitarNeck = useSelector((state: State) => state.guitarNeck);
  const dispatch = useDispatch();
  const { actions } = guitarNeckSlice;

  const handleFretClick = (e: React.MouseEvent) => {
    const [fret, string] = e.currentTarget.id.split('-').map(strToNum) as [
      FretNumbers,
      StringNumbers
    ];

    dispatch(actions.pressString({ fret, string }));
  };

  const renderGuitarNeck = guitarNeck.map((fret, fretIdx) => (
    <div className="neck columns" key={fretIdx}>
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

  return <section className="neck">{renderGuitarNeck}</section>;
}
