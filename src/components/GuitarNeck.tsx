import React from 'react';
import { useSelector } from 'react-redux';
import { State } from '../model';
import { stringCases } from '../util';
import '../styles/GuitarNeck.scss';

export default function GuitarNeckComponent() {
  // pulls in state from Redux store
  const guitarNeck = useSelector((state: State) => state.guitarNeck);

  const renderGuitarNeck = guitarNeck.map((fret, i) => (
    <div key={i}>
      {fret.map((string, j) => (
        <div className={`column ${stringCases(string)}`} key={j}>
          {string}
        </div>
      ))}
    </div>
  ));

  return <section className="columns">{renderGuitarNeck}</section>;
}
