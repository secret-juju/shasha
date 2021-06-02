import { all, call, fork, put, takeLatest } from '@redux-saga/core/effects';

import { methodType, requestApi, requestApiWithAccessToken } from '../../library/requestLib';
import { STOCK_URL } from '../../library/apiUrlLib';

import { searchStockDetail, searchStockDetailSuccess } from './StockInfoSlice';

function* searchStockDetailSaga(action) {
  try {
    const { companyTickerSymbol } = action.payload;

    const httpMethod = methodType.GET;
    const requestUrl = STOCK_URL.searchStockDetail(companyTickerSymbol);
    const headers = {};

    const res = yield call(requestApiWithAccessToken, { httpMethod, requestUrl, headers });

    console.log(res);

    yield put({ type: searchStockDetailSuccess, payload: res.data });
  } catch (error) {
    const { status } = error;

    switch (status) {
      case 404:
        break;
      default:
        break;
    }
    console.log(error);
  }
}

function* watchSearchStockDetail() {
  yield takeLatest(searchStockDetail.type, searchStockDetailSaga);
}

export default function* stockInfoSaga() {
  yield all([fork(watchSearchStockDetail)]);
}
