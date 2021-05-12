import type { TargetValueType } from './type/StockUtilsType';

export const sign2StockThemeText = (targetValue: TargetValueType) => {
  if (targetValue > 0) {
    return 'positive';
  } else if (targetValue < 0) {
    return 'negative';
  }
  return 'zero';
};

export const half2StockThemeText = (targetValue: TargetValueType) => {
  if (targetValue > 50) {
    return 'positive';
  } else if (targetValue < 50) {
    return 'negative';
  }
  return 'zero';
};
