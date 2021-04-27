import type { numberAddedCommaProp } from './type/StringUtilsType';

export const numberAddedComma = (number: numberAddedCommaProp) => {
  return String(number)
    .split('')
    .reverse()
    .map((n, index) => (index === 0 || index % 3 ? n : n + ','))
    .reverse()
    .join('');
};
