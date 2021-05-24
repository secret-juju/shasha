import type { devideArrayFunctionType } from './ArrayUtilsType';

export const devideArrayPerItemSize: devideArrayFunctionType = (arr, itemSize) => {
  const tempArr = [];

  for (let i = 0; i < arr.length; i += itemSize) {
    tempArr.push(arr.slice(i, i + itemSize));
  }

  return tempArr;
};

export const devideArrayPerShareSize: devideArrayFunctionType = (arr, shareSize) => {
  const tempArr = [];

  const ceiledDevideLength = Math.ceil(arr.length / shareSize);

  for (let i = 0; i < arr.length; i += ceiledDevideLength) {
    tempArr.push(arr.slice(i, i + ceiledDevideLength));
  }

  return tempArr;
};
