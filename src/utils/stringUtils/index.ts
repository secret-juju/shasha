import type { NumberAddedCommaPropType, PercentType } from './StringUtilsType';

export const numberAddedComma = (number: NumberAddedCommaPropType) => {
  return String(number)
    .split('')
    .reverse()
    .map((n, index) => (index === 0 || index % 3 ? n : n + ','))
    .reverse()
    .join('');
};

export const removePercentSign = (percentNumber: PercentType) => {
  const splitedPercentNumber = percentNumber.split('');

  splitedPercentNumber.pop();

  return Number(splitedPercentNumber.join(''));
};

export const isNullOfUndefined = target => {
  return target === null || target === undefined;
};
