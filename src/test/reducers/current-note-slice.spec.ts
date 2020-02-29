import { CurrentNoteState, currentNoteSlice, initialState } from '../../state';

describe('currentNoteSlice.reducer', () => {
  test('it should change the fretted string on pressString', () => {
    const expectedNote = [
      ['R', 'S', 'S', 'S', 'S', 'S'],
      ['S', 'S', 'S', 'S', 'S', 'S'],
      ['S', 'S', 'S', 'S', 'S', 'S'],
      ['S', 'S', 'S', 'S', 'S', 'S'],
      ['S', 'S', 'S', 'S', 'S', 'S'],
      ['S', 'S', 'S', 'S', 'S', 'S'],
    ];

    const expectedState = {
      ...initialState,
      note: expectedNote,
    };

    expect(
      currentNoteSlice.reducer(initialState, {
        type: 'current-note/pressString',
        payload: { fret: 0, string: 0 },
      })
    ).toEqual(expectedState);
  });

  test('it should only ever have one fret per string', () => {
    const expectedNote = [
      ['S', 'S', 'S', 'S', 'S', 'S'],
      ['S', 'S', 'S', 'S', 'S', 'S'],
      ['S', 'S', 'S', 'S', 'S', 'S'],
      ['R', 'S', 'S', 'S', 'S', 'S'],
      ['S', 'S', 'S', 'S', 'S', 'S'],
      ['S', 'S', 'S', 'S', 'S', 'S'],
    ];

    const expectedState = {
      ...initialState,
      note: expectedNote,
    };

    const fretOnce = currentNoteSlice.reducer(initialState, {
      type: 'current-note/presString',
      payload: { fret: 0, string: 0 },
    });

    const fretTwice = currentNoteSlice.reducer(fretOnce, {
      type: 'current-note/pressString',
      payload: { fret: 3, string: 0 },
    });

    expect(fretTwice).toEqual(expectedState);
  });

  test('it should remove fret when pressing a fretted node', () => {
    const expectedFirstNote = [
      ['S', 'S', 'S', 'S', 'S', 'S'],
      ['S', 'S', 'S', 'S', 'S', 'S'],
      ['S', 'S', 'S', 'S', 'S', 'S'],
      ['S', 'S', 'R', 'S', 'S', 'S'],
      ['S', 'S', 'S', 'S', 'S', 'S'],
      ['S', 'S', 'S', 'S', 'S', 'S'],
    ];

    const expectedFirstState = {
      ...initialState,
      note: expectedFirstNote,
    };

    const fretThreeStringTwo = (state: CurrentNoteState) => {
      return currentNoteSlice.reducer(state, {
        type: 'current-note/pressString',
        payload: { fret: 3, string: 2 },
      });
    };

    const fretOnce = fretThreeStringTwo(initialState);

    expect(fretOnce).toEqual(expectedFirstState);

    expect(fretThreeStringTwo(fretOnce)).toEqual(initialState);
  });
});
