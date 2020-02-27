export interface State {
  guitarNeck: Neck;
  chordName: string;
  tuning: Tuning;
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

export type FretNumber = 0 | 1 | 2 | 3 | 4 | 5;

export type StringNumber = FretNumber;

export type PressStringPayload = { fret: FretNumber; string: StringNumber };

export const ALL_NOTES = [
  'A',
  'A#',
  'B',
  'C',
  'C#',
  'D',
  'D#',
  'E',
  'F',
  'F',
  'F#',
  'G',
  'G#',
];

export type Note =
  | 'A'
  | 'A#'
  | 'B'
  | 'C'
  | 'C#'
  | 'D'
  | 'D#'
  | 'E'
  | 'F'
  | 'F#'
  | 'G'
  | 'G#';

export type Tuning = [Note, Note, Note, Note, Note, Note];

export type ChangeTuningPayload = { note: Note; string: StringNumber };
