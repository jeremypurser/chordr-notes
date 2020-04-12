import React from 'react';
import { GuitarNeckProps } from '../containers/GuitarNeckContainer';
import '../styles/GuitarNeck.scss';
import { stringCases } from '../util';

export default function GuitarNeck(props: GuitarNeckProps) {
  return (
    <>
      <h2 className="title">{props.name}</h2>
      <div className="columns is-gapless">
        {/* Tuning */}
        {props.tuning.map((note, i) => (
          <div key={i} className="column tuning">
            {note}
          </div>
        ))}
      </div>
      {/* Guitar Neck */}
      {props.note.map((fret, fretIdx) => (
        <div className="neck columns is-gapless" key={fretIdx}>
          {fret.map((string, stringIdx) => (
            <div
              onClick={props.callback}
              className="column v-line"
              id={`${fretIdx}-${stringIdx}`}
              key={stringIdx}
            >
              <span>{stringCases(string)}</span>
            </div>
          ))}
        </div>
      ))}
    </>
  );
}
