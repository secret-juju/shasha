import { createSlice, PayloadAction } from '@reduxjs/toolkit';

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

export const loginLoading = (state: StoreType) => state.login.loginLoading;
export const loginData = (state: StoreType) => state.login.loginData;
export const loginError = (state: StoreType) => state.login.loginError;

export default reducer;
