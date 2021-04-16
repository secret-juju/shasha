import { PayloadAction } from '@reduxjs/toolkit';
import { call, put, takeLatest } from '@redux-saga/core/effects';

import { AuthLoginPayloadActionType } from './LoginType';
import { methodType, requestApiWithBody } from '../../library/requestApi';

import { ACCOUNT_URL } from '../../library/requestUrl';

import { authLogin, authLoginSuccess, authLoginFailure } from './LoginSlice';

function* authLoginSaga(action: PayloadAction<AuthLoginPayloadActionType>) {
  try {
    const httpMethod = methodType.POST;
    const requestUrl = ACCOUNT_URL.login(action.payload.authType);
    const body = {};
    const headers = {
      'oauth2-token': action.payload['oauth2-token'],
    };

    const res = yield call(requestApiWithBody, { httpMethod, requestUrl, body, headers });

    console.log(res);
    yield put(authLoginSuccess(res.data));
  } catch (error) {
    console.log(error);
    yield put(authLoginFailure(error));
  }
}

export function* watchAuthLogin() {
  yield takeLatest(authLogin.type, authLoginSaga);
}
