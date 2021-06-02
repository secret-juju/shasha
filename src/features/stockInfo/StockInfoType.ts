type newsType = { content: 'string'; positivity: number };
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

export type initialStateType = {
  averagePositivity: number;
  companyName: string;
  isBookmarked: boolean;
  news: newsType[];
  stock: stockType;
};

export type searchStockDetailActionType = {
  companyTickerSymbol: string;
};
export type searchStockDetailSuccessActionType = {
  averagePositivity: number;
  companyName: string;
  isBookmarked: boolean;
  news: newsType[];
  stock: stockType;
};
