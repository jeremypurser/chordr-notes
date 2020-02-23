import { stringCases } from '../../util';

describe('stringCases', () => {
  test('it returns ● when passed `R`', () => {
    expect(stringCases('R')).toBe('●');
  });

  test('it returns single space string when pass anything besides`R`', () => {
    expect(stringCases('S')).toBe(' ');
    expect(stringCases('O')).toBe(' ');
  });
});
