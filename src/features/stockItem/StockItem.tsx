import React from 'react';

import type { StockItemPropsType } from './StockItemType';

import { StockFaceTheme, StockSignTheme } from '../../themes/StockTheme';

import * as S from './style';

const StockItem = ({ stockItemValues, stockItemThemes }: StockItemPropsType) => {
  const { name, positivity, curPriceWithComma, diff, fluctuation } = stockItemValues;
  const { positivityStockTheme, diffStockTheme, fluctuationStockTheme } = stockItemThemes;

  return (
    <S.StockItem>
      <S.StockName>{name}</S.StockName>
      <S.StockPositivity>
        <S.PositivityImage src={StockFaceTheme[positivityStockTheme]} />
        <S.PositivityValue positivityStockTheme={positivityStockTheme}>
          {positivity}
        </S.PositivityValue>
      </S.StockPositivity>
      <S.StockCurPrice>{curPriceWithComma}</S.StockCurPrice>
      <S.StockDiff>
        <S.DiffValue diffStockTheme={diffStockTheme}>{diff}</S.DiffValue>
        <S.DiffSign src={StockSignTheme[diffStockTheme]} />
      </S.StockDiff>
      <S.StockFluctuation fluctuationStockTheme={fluctuationStockTheme}>
        {fluctuation}
      </S.StockFluctuation>
    </S.StockItem>
  );
};

export default StockItem;
