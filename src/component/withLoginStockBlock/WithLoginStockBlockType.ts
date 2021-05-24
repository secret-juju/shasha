export type companyType = {
  averagePositivity: number;
  currentPrice: number;
  differenceFromYesterday: number;
  fluctuationRate: number;
  name: string;
};
export type companyInfoType = {
  averageFluctuationRate: number;
  companies: companyType[];
  currentPageNumber: number;
  isLastPage: boolean;
};

export type WithLoginStockBlockPropsType = {
  title: string;
  fluctuation: number;
  companyInfo: companyInfoType;
};
