import { PayloadAction } from '@reduxjs/toolkit';

import { all, call, fork, put, takeEvery, takeLatest } from '@redux-saga/core/effects';

import {
  SearchBookmarkedCompanyPayloadActionType,
  SearchCompanyByCompanyIndustryNamePayloadActionType,
  SearchCompanyPayloadActionType,
  SearchKindOfIndustryPayloadActionType,
} from './StockType';

import { COMPANY_URL, INDUSTRY_URL } from '../../library/apiUrlLib';
import { methodType, requestApi, requestApiWithAccessToken } from '../../library/requestLib';

import {
  searchBookmarkedCompany,
  searchBookmarkedCompanySuccess,
  searchCompany,
  searchCompanyByCompanyIndustryName,
  searchCompanyByCompanyIndustryNameSuccess,
  searchCompanySuccess,
  searchKindOfIndustry,
  searchKindOfIndustrySuccess,
} from './StockSlice';

function* searchCompanySaga(action: PayloadAction<SearchCompanyPayloadActionType>) {
  try {
    const sortingMethod = action.payload['sorting-method'];
    const sortingCondition = action.payload['sorting-condition'];

    const { page, size } = action.payload;

    const httpMethod = methodType.GET;
    const requestUrl = COMPANY_URL.searchCompany({
      'sorting-method': sortingMethod,
      'sorting-condition': sortingCondition,
      page,
      size,
    });
    const headers = {};

    const res = yield call(requestApi, { httpMethod, requestUrl, headers });

    yield put({
      type: searchCompanySuccess,
      payload: {
        companyValue: res.data,
      },
    });
  } catch (error) {}
}
function* searchCompanyByCompanyIndustryNameSaga(
  action: PayloadAction<SearchCompanyByCompanyIndustryNamePayloadActionType>,
) {
  try {
    const { companyIndustryName, page, size } = action.payload;

    const httpMethod = methodType.GET;
    const requestUrl = COMPANY_URL.searchCompanyByCompanyIndustryName({
      companyIndustryName,
      page,
      size,
    });
    const headers = {};

    const res = yield call(requestApi, { httpMethod, requestUrl, headers });

    yield put({
      type: searchCompanyByCompanyIndustryNameSuccess,
      payload: {
        companyIndustryName,
        companyValue: res.data,
      },
    });

  } catch (error) {}
}
function* searchBookmarkedCompanySaga(
  action: PayloadAction<SearchBookmarkedCompanyPayloadActionType>,
) {
  try {
    const { page, size } = action.payload;

    const httpMethod = methodType.GET;
    const requestUrl = COMPANY_URL.searchBookmarkedCompany({ page, size });
    const headers = {};

    const res = yield call(requestApiWithAccessToken, { httpMethod, requestUrl, headers });

    yield put({ type: searchBookmarkedCompanySuccess, payload: res.data });
  } catch (error) {}
}
function* searchKindOfIndustrySaga(action: PayloadAction<SearchKindOfIndustryPayloadActionType>) {
  try {
    const httpMethod = methodType.GET;
    const requestUrl = INDUSTRY_URL.searchKindOfIndustry();
    const headers = {};

    const res = yield call(requestApi, { httpMethod, requestUrl, headers });


    yield put({ type: searchKindOfIndustrySuccess, payload: res.data });
  } catch (error) {}
}

function* watchSearchCompany() {
  yield takeLatest(searchCompany.type, searchCompanySaga);
}
function* watchSearchCompanyByCompanyIndustryName() {
  yield takeEvery(searchCompanyByCompanyIndustryName.type, searchCompanyByCompanyIndustryNameSaga);
}
function* watchSearchBookmarkedCompany() {
  yield takeLatest(searchBookmarkedCompany.type, searchBookmarkedCompanySaga);
}
function* watchSearchKindOfIndustry() {
  yield takeLatest(searchKindOfIndustry.type, searchKindOfIndustrySaga);
}

export default function* stockSaga() {
  yield all([
    fork(watchSearchCompany),
    fork(watchSearchCompanyByCompanyIndustryName),
    fork(watchSearchBookmarkedCompany),
    fork(watchSearchKindOfIndustry),
  ]);
}
