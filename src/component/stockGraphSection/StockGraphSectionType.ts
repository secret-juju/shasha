type stockType = {
  closingPrice: 0;
  differenceFromYesterday: 0;
  fluctuationRate: number;
  highPrice: number;
  lowPrice: number;
  marketCapitalization: number;
  openingPrice: number;
  yesterdayClosingPrice: number;
};

export type StockGraphSectionPropsType = { stock: stockType };
