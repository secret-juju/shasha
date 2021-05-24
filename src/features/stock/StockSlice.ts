import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { StoreType } from '../../module/store';

import type {
  StockSliceInitialState,
  SearchCompanyPayloadActionType,
  SearchCompanyByCompanyIndustryNamePayloadActionType,
  SearchBookmarkedCompanyPayloadActionType,
  SearchBookmarkedCompanySuccessPayloadActionType,
  SearchKindOfIndustryPayloadActionType,
  SearchKindOfIndustrySuccessPayloadActionType,
  SearchCompanyByCompanyIndustryNameSuccessPayloadActionType,
} from './StockType';

const sliceName = 'stock';
const initialState: StockSliceInitialState = {
  industryNames: [],

  default: {
    companies: [],
    currentPageNumber: 0,
    isLastPage: true,
  },
  industry: {},
  bookmarked: {
    averageFluctuationRate: 0,
    companies: [],
    currentPageNumber: 0,
    isLastPage: true,
  },
};
const reducers = {
  searchCompany: (
    state = initialState,
    action: PayloadAction<SearchCompanyPayloadActionType>,
  ) => {},
  searchCompanySuccess: (state = initialState, action) => {
    state.default = action.payload.companyValue;
  },
  searchCompanyByCompanyIndustryName: (
    state = initialState,
    action: PayloadAction<SearchCompanyByCompanyIndustryNamePayloadActionType>,
  ) => {},
  searchCompanyByCompanyIndustryNameSuccess: (
    state = initialState,
    action: PayloadAction<SearchCompanyByCompanyIndustryNameSuccessPayloadActionType>,
  ) => {
    const { companyIndustryName, companyValue } = action.payload;
    state.industry[companyIndustryName] = companyValue;
  },
  searchBookmarkedCompany: (
    state = initialState,
    action: PayloadAction<SearchBookmarkedCompanyPayloadActionType>,
  ) => {},
  searchBookmarkedCompanySuccess: (
    state = initialState,
    action: PayloadAction<SearchBookmarkedCompanySuccessPayloadActionType>,
  ) => {
    state.bookmarked = action.payload;
  },
  searchKindOfIndustry: (
    state = initialState,
    action: PayloadAction<SearchKindOfIndustryPayloadActionType>,
  ) => {},
  searchKindOfIndustrySuccess: (
    state = initialState,
    action: PayloadAction<SearchKindOfIndustrySuccessPayloadActionType>,
  ) => {
    state.industryNames = action.payload.industryNames;
  },
};

const stockSlice = createSlice({
  name: sliceName,
  initialState,
  reducers,
});

const { actions, reducer } = stockSlice;

export const {
  searchCompany,
  searchCompanySuccess,
  searchCompanyByCompanyIndustryName,
  searchCompanyByCompanyIndustryNameSuccess,
  searchBookmarkedCompany,
  searchBookmarkedCompanySuccess,
  searchKindOfIndustry,
  searchKindOfIndustrySuccess,
} = actions;

export const stockSliceState = (state: StoreType) => state.stock;

export default reducer;
