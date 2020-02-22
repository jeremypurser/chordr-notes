export interface State {
  guitarNeck: Neck;
}

// 'O' === Open, 'R' === Ring, 'S' === Silent
export type GuitarString = 'O' | 'R' | 'S';

type Fret = [
  GuitarString,
  GuitarString,
  GuitarString,
  GuitarString,
  GuitarString,
  GuitarString
];

export type Neck = [Fret, Fret, Fret, Fret, Fret, Fret];

type FretNumbers = 1 | 2 | 3 | 4 | 5 | 6;

type StringNumbers = FretNumbers;

export type PressStringAction = { fret: FretNumbers; string: StringNumbers };
