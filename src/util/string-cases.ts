import { GuitarString } from '../model';

/**
 * @param string of type `GuitarString` in `src/model/types.ts`
 * @returns CSS className for rendering UI
 */
export function stringCases(string: GuitarString) {
  switch (string) {
    case 'S':
      return 'v-line';
    default:
      return 'v-line';
  }
}
