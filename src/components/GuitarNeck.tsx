import React from 'react';
import { useSelector } from 'react-redux';
import { Neck } from '../model';

interface State {
  guitarNeck: Neck;
}

export default function GuitarNeck() {
  const guitarNeck = useSelector((state: State) => state.guitarNeck);
  return (
    <div>{guitarNeck.map(fret => fret.map(string => <div>'hii'</div>))}</div>
  );
}
