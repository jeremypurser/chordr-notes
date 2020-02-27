export interface State {
  guitarNeck: Neck;
  chordName: string;
}

// 'R' === Ring, 'S' === Silent
export type GuitarString = 'R' | 'S';

type Fret = [
  GuitarString,
  GuitarString,
  GuitarString,
  GuitarString,
  GuitarString,
  GuitarString
];

export type Neck = [Fret, Fret, Fret, Fret, Fret, Fret];

export type FretNumbers = 0 | 1 | 2 | 3 | 4 | 5;

export type StringNumbers = FretNumbers;

export type PressStringAction = { fret: FretNumbers; string: StringNumbers };
