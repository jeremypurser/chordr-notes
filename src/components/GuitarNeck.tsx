import React from 'react';
import { useSelector } from 'react-redux';
import { State } from '../model';
import { stringCases } from '../util';
import '../styles/GuitarNeck.scss';

export default function GuitarNeckComponent() {
  // pulls in state from Redux store
  const guitarNeck = useSelector((state: State) => state.guitarNeck);

  // TODO: hard code v-line
  // TODO: change stringeCases to determine node display
  // TODO: rename i and j
  const renderGuitarNeck = guitarNeck.map((fret, i) => (
    <div className="neck" key={i}>
      {fret.map((string, j) => (
        <div
          onClick={() => console.log('i:', i, 'j:', j)}
          className={`column ${stringCases(string)}`}
          key={j}
        >
          <span className="fret-string"> </span>
        </div>
      ))}
    </div>
  ));

  return <section className="columns">{renderGuitarNeck}</section>;
}
