import { guitarNeckSlice, guitarNeckState } from '../../model';

describe('guitarSlice.reducer', () => {
  test('it should change the fretted string on pressString', () => {
    const expectedState = [
      ['R', 'S', 'S', 'S', 'S', 'S'],
      ['S', 'S', 'S', 'S', 'S', 'S'],
      ['S', 'S', 'S', 'S', 'S', 'S'],
      ['S', 'S', 'S', 'S', 'S', 'S'],
      ['S', 'S', 'S', 'S', 'S', 'S'],
      ['S', 'S', 'S', 'S', 'S', 'S'],
    ];

    expect(
      guitarNeckSlice.reducer(guitarNeckState, {
        type: 'guitarNeck/pressString',
        payload: { fret: 0, string: 0 },
      })
    ).toEqual(expectedState);
  });

  test('it should only ever have one fret per string', () => {
    const expectedState = [
      ['S', 'S', 'S', 'S', 'S', 'S'],
      ['S', 'S', 'S', 'S', 'S', 'S'],
      ['S', 'S', 'S', 'S', 'S', 'S'],
      ['R', 'S', 'S', 'S', 'S', 'S'],
      ['S', 'S', 'S', 'S', 'S', 'S'],
      ['S', 'S', 'S', 'S', 'S', 'S'],
    ];

    const fretOnce = guitarNeckSlice.reducer(guitarNeckState, {
      type: 'guitarNeck/presString',
      payload: { fret: 0, string: 0 },
    });

    const fretTwice = guitarNeckSlice.reducer(fretOnce, {
      type: 'guitarNeck/pressString',
      payload: { fret: 3, string: 0 },
    });

    expect(fretTwice).toEqual(expectedState);
  });
});
