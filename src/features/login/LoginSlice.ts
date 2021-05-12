import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import {
  LOCAL_STORAGE_ACCESS_TOKEN_NAME,
  LOCAL_STORAGE_REFRESH_TOKEN_NAME,
} from '../../library/requestApi';
import { setLocalStorageItem } from '../../library/storage/storage';

import type { StoreType } from '../../module/store';
import type {
  AuthLoginFailurePayloadActionType,
  AuthLoginPayloadActionType,
  AuthLoginSuccessPayloadActionType,
  LoginSliceInitialStateType,
} from './LoginType';

const sliceName = 'login';
const initialState: LoginSliceInitialStateType = {
  loginLoading: false,
  loginData: {},
  loginError: null,
};
const reducers = {
  authLogin: (state = initialState, action: PayloadAction<AuthLoginPayloadActionType>) => {
    state.loginLoading = true;
    state.loginError = null;
  },
  authLoginSuccess: (state, action: PayloadAction<AuthLoginSuccessPayloadActionType>) => {
    state.loginLoading = false;
    state.loginData = action.payload;
    state.loginError = null;

    setLocalStorageItem('authType', action.payload.authType);
    setLocalStorageItem(LOCAL_STORAGE_ACCESS_TOKEN_NAME, action.payload.accessToken);
    setLocalStorageItem(LOCAL_STORAGE_REFRESH_TOKEN_NAME, action.payload.refreshToken);

    alert('로그인 되었습니다');
  },
  authLoginFailure: (state, action: PayloadAction<AuthLoginFailurePayloadActionType>) => {
    state.loginLoading = false;
    state.loginError = action.payload.error;
  },
};

const loginSlice = createSlice({
  name: sliceName,
  initialState,
  reducers,
});

const { actions, reducer } = loginSlice;

export const { authLogin, authLoginSuccess, authLoginFailure } = actions;

export const loginSliceState = (state: StoreType) => state.login;
export const loginLoading = (state: StoreType) => state.login.loginLoading;
export const loginData = (state: StoreType) => state.login.loginData;
export const loginError = (state: StoreType) => state.login.loginError;

export default reducer;
