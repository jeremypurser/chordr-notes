import React from 'react';
import { useSelector } from 'react-redux';
import { State } from '../model';

export default function GuitarNeckComponent() {
  const guitarNeck = useSelector((state: State) => state.guitarNeck);
  return (
    <div>
      {guitarNeck.map(fret =>
        fret.map((string, j) => <span key={j}>{string}</span>)
      )}
    </div>
  );
}
