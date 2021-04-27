export type StockThemeType = 'positive' | 'negative' | 'zero';

export type StockItemContainerPropsType = {
  name: string;
  positivity: string;
  curPrice: number;
  diff: number;
  fluctuation: string;
};
export type StockItemPropsType = {
  stockItemValues: {
    name: string;
    positivity: string;
    curPriceWithComma: string;
    diff: number;
    fluctuation: string;
  };
  stockItemThemes: {
    positivityStockTheme: StockThemeType;
    diffStockTheme: StockThemeType;
    fluctuationStockTheme: StockThemeType;
  };
};
