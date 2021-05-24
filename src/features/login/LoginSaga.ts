import { PayloadAction } from '@reduxjs/toolkit';

import { all, call, fork, put, takeLatest } from '@redux-saga/core/effects';

import { AuthLoginPayloadActionType } from './LoginType';
import { AUTHORIZATION_NAME, methodType, requestApiWithBody } from '../../library/requestLib';

import { ACCOUNT_URL } from '../../library/apiUrlLib';
import { authLogin, authLoginSuccess, authLoginFailure } from './LoginSlice';

function* authLoginSaga(action: PayloadAction<AuthLoginPayloadActionType>) {
  try {
    const authType = action.payload.authType;

    const httpMethod = methodType.POST;
    const requestUrl = ACCOUNT_URL.login(authType);
    const body = {};
    const headers = {
      [AUTHORIZATION_NAME]: action.payload['Authorization'],
    };

    const res = yield call(requestApiWithBody, { httpMethod, requestUrl, body, headers });

    if ('data' in res) {
      const newResDataObj = { ...res.data, authType };

      yield put(authLoginSuccess(newResDataObj));

      location.href = '/';
    } else {
      throw new Error(`request ${requestUrl}, but network error`);
    }
  } catch (error) {
    console.log(error);
    yield put(authLoginFailure(error));
  }
}

function* watchAuthLogin() {
  yield takeLatest(authLogin.type, authLoginSaga);
}

export default function* loginSaga() {
  yield all([fork(watchAuthLogin)]);
}
