import { strToNum } from '../../util';

describe('map', () => {
  test('it should convert strings to number', () => {
    expect(strToNum('2')).toBe(2);
  });

  test('it should convert strings to number', () => {
    expect(strToNum('2222')).toBe(2222);
  });

  test('it should return NaN for non-number string', () => {
    expect(strToNum('Hello world')).toBe(NaN);
  });
});
