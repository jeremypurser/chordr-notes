export interface State {
  guitarNeck: Neck;
}

// 'O' === Open, 'R' === Ring, 'S' === Silent
type String = 'O' | 'R' | 'S';

type Fret = [String, String, String, String, String, String];

export type Neck = [Fret, Fret, Fret, Fret, Fret, Fret];

type FretNumbers = 1 | 2 | 3 | 4 | 5 | 6;

type StringNumbers = FretNumbers;

export type PressStringAction = { fret: FretNumbers; string: StringNumbers };
