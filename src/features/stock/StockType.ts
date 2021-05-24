export type StockThemeType = 'positive' | 'negative' | 'zero';

export type StockItemContainerPropsType = {
  averagePositivity: number;
  currentPrice: number;
  differenceFromYesterday: number;
  fluctuationRate: number;
  name: string;
};
export type StockItemPropsType = {
  stockItemValues: companyType;
  stockItemThemes: {
    averagePositivityStockTheme: StockThemeType;
    differenceFromYesterdayStockTheme: StockThemeType;
    fluctuationRateStockTheme: StockThemeType;
  };
};

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
export type companyInfoWithoutAverageType = {
  companies: companyType[];
  currentPageNumber: number;
  isLastPage: boolean;
};
export type StockSliceInitialState = {
  industryNames: string[];

  default: companyInfoWithoutAverageType;
  industry: {
    [industryName: string]: companyInfoType;
  };
  bookmarked: companyInfoType;
};

export type SearchCompanyPayloadActionType = {
  'sorting-method': string;
  'sorting-condition': string;
  page?: number;
  size?: number;
};
export type SearchCompanyByCompanyIndustryNamePayloadActionType = {
  companyIndustryName: string;
  page?: number;
  size?: number;
};
export type SearchCompanyByCompanyIndustryNameSuccessPayloadActionType = {
  companyIndustryName: string;
  companyValue: companyInfoType;
};
export type SearchBookmarkedCompanyPayloadActionType = {
  page?: number;
  size?: number;
};
export type SearchBookmarkedCompanySuccessPayloadActionType = {
  averageFluctuationRate: number;
  companies: companyType[];
  currentPageNumber: number;
  isLastPage: boolean;
};
export type SearchKindOfIndustryPayloadActionType = {};
export type SearchKindOfIndustrySuccessPayloadActionType = {
  industryNames: string[];
};
