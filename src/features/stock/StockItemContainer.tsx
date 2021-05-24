import React from 'react';

import type { StockItemContainerPropsType, StockThemeType } from './StockType';

import { half2StockThemeText, sign2StockThemeText } from '../../utils/stockUtils';

import StockItem from './StockItem';

const StockItemContainer = ({
  averagePositivity,
  currentPrice,
  differenceFromYesterday,
  fluctuationRate,
  name,
}: StockItemContainerPropsType) => {
  const averagePositivityStockTheme: StockThemeType = half2StockThemeText(averagePositivity);
  const differenceFromYesterdayStockTheme: StockThemeType = sign2StockThemeText(
    differenceFromYesterday,
  );
  const fluctuationRateStockTheme: StockThemeType = sign2StockThemeText(fluctuationRate);

  const stockItemValues = {
    averagePositivity,
    currentPrice,
    differenceFromYesterday,
    fluctuationRate,
    name,
  };
  const stockItemThemes = {
    averagePositivityStockTheme,
    differenceFromYesterdayStockTheme,
    fluctuationRateStockTheme,
  };

  return <StockItem stockItemValues={stockItemValues} stockItemThemes={stockItemThemes} />;
};

export default StockItemContainer;
