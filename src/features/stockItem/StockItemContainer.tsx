import React from 'react';

import type { StockThemeType, StockItemContainerPropsType } from './StockItemType';

import { numberAddedComma, removePercentSign } from '../../utils/StringUtils';
import { half2StockThemeText, sign2StockThemeText } from '../../utils/StockUtils';

import StockItem from './StockItem';

const StockItemContainer = ({
  name,
  positivity,
  curPrice,
  diff,
  fluctuation,
}: StockItemContainerPropsType) => {
  const curPriceWithComma = numberAddedComma(curPrice);

  const positivityStockTheme: StockThemeType = half2StockThemeText(removePercentSign(positivity));
  const diffStockTheme: StockThemeType = sign2StockThemeText(diff);
  const fluctuationStockTheme: StockThemeType = sign2StockThemeText(removePercentSign(fluctuation));

  const stockItemValues = { name, positivity, curPriceWithComma, diff, fluctuation };
  const stockItemThemes = {
    positivityStockTheme,
    diffStockTheme,
    fluctuationStockTheme,
  };

  return <StockItem stockItemValues={stockItemValues} stockItemThemes={stockItemThemes} />;
};

export default StockItemContainer;
