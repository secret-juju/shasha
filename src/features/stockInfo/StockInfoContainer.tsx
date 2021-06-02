import React from 'react';

import { half2StockThemeText } from '../../utils/stockUtils';

import { useTypedSelector } from '../../module/store';
import { stockInfoSliceState } from './StockInfoSlice';

import StockInfo from './StockInfo';

const StockInfoContainer = () => {
  const {
    averagePositivity,
    stock: { closingPrice, differenceFromYesterday, fluctuationRate },
  } = useTypedSelector(stockInfoSliceState);

  const differenceFromYesterdayTheme = half2StockThemeText(differenceFromYesterday);

  return (
    <StockInfo
      averagePositivity={averagePositivity}
      closingPrice={closingPrice}
      differenceFromYesterday={differenceFromYesterday}
      fluctuationRate={fluctuationRate}
      differenceFromYesterdayTheme={differenceFromYesterdayTheme}
    />
  );
};

export default StockInfoContainer;
