import React from 'react';

import { numberAddedComma, removePercentSign } from '../../utils/StringUtils';
import { half2StockThemeText, sign2StockThemeText } from '../../utils/StockUtils';

import StockItem from './StockItem';

const StockItemContainer = ({ name, positivity, curPrice, diff, fluctuation }) => {
  const curPriceWithComma = numberAddedComma(curPrice);

  const positivityStockTheme = half2StockThemeText(removePercentSign(positivity));
  const diffStockTheme = sign2StockThemeText(diff);
  const fluctuationStockTheme = sign2StockThemeText(removePercentSign(fluctuation));

  const stockItemValues = { name, positivity, curPriceWithComma, diff, fluctuation };
  const stockItemThemes = {
    positivityStockTheme,
    diffStockTheme,
    fluctuationStockTheme,
  };

  return <StockItem stockItemValues={stockItemValues} stockItemThemes={stockItemThemes} />;
};

export default StockItemContainer;
