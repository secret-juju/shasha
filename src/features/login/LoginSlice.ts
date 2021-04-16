import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import {
  AuthLoginFailurePayloadActionType,
  AuthLoginPayloadActionType,
  AuthLoginSuccessPayloadActionType,
  LoginSliceInitialStateType,
} from './LoginType';

const sliceName = 'login';
const initialState: LoginSliceInitialStateType = {
  loginLoading: false,
  loginData: {},
  error: null,
};
const reducers = {
  authLogin: (state, action: PayloadAction<AuthLoginPayloadActionType>) => {
    state.loginLoading = true;
    state.error = null;
  },
  authLoginSuccess: (state, action: PayloadAction<AuthLoginSuccessPayloadActionType>) => {
    state.loginLoading = false;
    state.error = null;
  },
  authLoginFailure: (state, action: PayloadAction<AuthLoginFailurePayloadActionType>) => {
    state.loginLoading = false;
  },
};

const loginSlice = createSlice({
  name: sliceName,
  initialState,
  reducers,
});

const { actions, reducer } = loginSlice;
export const { authLogin, authLoginSuccess, authLoginFailure } = actions;
export default reducer;
