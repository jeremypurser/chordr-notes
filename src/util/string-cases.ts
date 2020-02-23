import { GuitarString } from '../model';

type StringContent = '●' | ' ';
/**
 * @param string of type `GuitarString`
 * @returns HTML content
 */
export function stringCases(string: GuitarString): StringContent {
  switch (string) {
    case 'S':
      return ' ';
    case 'R':
      return '●';
    default:
      return ' ';
  }
}
