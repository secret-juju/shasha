export const ACCOUNT_URL = {
  login: function (oauthType: string) {
    return `/login/oauth2/code/${oauthType}`;
  },
};

export const BOOKMARK_URL = {
  subscribeCompany: function (companyTickerSymbol) {
    return `/company/${companyTickerSymbol}/bookmark`;
  },
  unsubscribeCompany: function (companyTickerSymbol) {
    return `/company/${companyTickerSymbol}/bookmark`;
  },
};

export const COMPANY_URL = {
  searchCompany: function () {
    return `/company`;
  },
  searchCompanyByCompanyIndustryName: function (companyIndustryName) {
    return `/company${companyIndustryName}`;
  },
  searchBookmarkedCompany: function () {
    return `/company/bookmarked`;
  },
};

export const INDUSTRY_URL = {
  searchKindOfIndustry: function () {
    return `/industry`;
  },
};

export const STOCK_URL = {
  searchStockDetail: function (companyTickerSymbol) {
    return `/company/${companyTickerSymbol}/stock`;
  },
};
