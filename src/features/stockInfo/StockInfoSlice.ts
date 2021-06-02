import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { StoreType } from '../../module/store';

import type {
  initialStateType,
  searchStockDetailActionType,
  searchStockDetailSuccessActionType,
} from './StockInfoType';

const sliceName = 'stockInfo';
const initialState: initialStateType = {
  averagePositivity: 0,
  companyName: '',
  isBookmarked: false,
  news: [
    {
      content: 'string',
      positivity: 0,
    },
  ],
  stock: {
    closingPrice: 0,
    differenceFromYesterday: 0,
    fluctuationRate: 0,
    highPrice: 0,
    lowPrice: 0,
    marketCapitalization: 0,
    openingPrice: 0,
    yesterdayClosingPrice: 0,
  },
};
const reducers = {
  searchStockDetail: (
    state = initialState,
    action: PayloadAction<searchStockDetailActionType>,
  ) => {},
  searchStockDetailSuccess: (
    state = initialState,
    action: PayloadAction<searchStockDetailSuccessActionType>,
  ) => {
    state.averagePositivity = action.payload.averagePositivity;
    state.companyName = action.payload.companyName;
    state.isBookmarked = action.payload.isBookmarked;
    state.news = action.payload.news;
    state.stock = action.payload.stock;
  },
};

const stockInfoSlice = createSlice({
  name: sliceName,
  initialState,
  reducers,
});

const { actions, reducer } = stockInfoSlice;

export const { searchStockDetail, searchStockDetailSuccess } = actions;

export const stockInfoSliceState = (state: StoreType) => state.stockInfo;

export default reducer;
