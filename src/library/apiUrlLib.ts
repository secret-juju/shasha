import { isNullOfUndefined } from '../utils/stringUtils';

const getUrlWithQuery = ({ queryObject, defaultURL, queryNameArr }) => {
  const URLArr = [defaultURL];

  for (const queryName of queryNameArr) {
    if (!isNullOfUndefined(queryObject[queryName])) {
      if (URLArr.length === 1) {
        URLArr.push('?');
      } else {
        URLArr.push('&');
      }

      URLArr.push(`${queryName}=${queryObject[queryName]}`);
    }
  }

  const resultUrl = URLArr.join('');

  return resultUrl;
};

export const ACCOUNT_URL = {
  reissueAccessToken: function () {
    return `/auth/token`;
  },
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
  searchCompany: function (queryObject) {
    const defaultURL = '/company';
    const queryNameArr = ['sorting-condition', 'sorting-method'];

    const resultURL = getUrlWithQuery({ queryObject, defaultURL, queryNameArr });

    return resultURL;
  },
  searchCompanyByCompanyIndustryName: function (queryObject) {
    const { companyIndustryName } = queryObject;

    const queryNameArr = ['page', 'size'];
    const defaultURL = `/company/${companyIndustryName}`;

    const resultURL = getUrlWithQuery({ queryObject, defaultURL, queryNameArr });

    return resultURL;
  },
  searchBookmarkedCompany: function (queryObject) {
    const defaultURL = `/company/bookmarked`;
    const queryNameArr = ['page', 'size'];

    const resultURL = getUrlWithQuery({ queryObject, defaultURL, queryNameArr });

    return resultURL;
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
