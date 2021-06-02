import React from 'react';

import { StockFaceTheme, StockSignTheme } from '../../themes/StockTheme';

import { numberAddedComma } from '../../utils/stringUtils';

import * as S from './style';

import { StockItemPropsType } from './StockType';

const StockItem = ({ stockItemValues, stockItemThemes }: StockItemPropsType) => {
  const {
    averagePositivity,
    currentPrice,
    differenceFromYesterday,
    fluctuationRate,
    name,
    tickerSymbol,
  } = stockItemValues;
  const {
    averagePositivityStockTheme,
    differenceFromYesterdayStockTheme,
    fluctuationRateStockTheme,
  } = stockItemThemes;

  return (
    <S.StockItem to={`/stock/${tickerSymbol}`}>
      <S.StockName>{name}</S.StockName>
      <S.StockPositivity>
        <S.PositivityImage src={StockFaceTheme[averagePositivityStockTheme]} />
        <S.PositivityValue positivityStockTheme={averagePositivityStockTheme}>
          {averagePositivity}%
        </S.PositivityValue>
      </S.StockPositivity>
      <S.StockCurPrice>{numberAddedComma(currentPrice)}</S.StockCurPrice>
      <S.StockDiff>
        <S.DiffValue differenceFromYesterdayStockTheme={differenceFromYesterdayStockTheme}>
          {differenceFromYesterday}
        </S.DiffValue>
        <S.DiffSign src={StockSignTheme[differenceFromYesterdayStockTheme]} />
      </S.StockDiff>
      <S.StockFluctuation fluctuationRateStockTheme={fluctuationRateStockTheme}>
        {fluctuationRate}%
      </S.StockFluctuation>
    </S.StockItem>
  );
};

export default StockItem;
