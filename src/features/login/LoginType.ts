import { GoogleLoginResponse, GoogleLoginResponseOffline } from 'react-google-login';

export type GoogleResponseType = GoogleLoginResponse | GoogleLoginResponseOffline;

type LoginDataType =
  | {}
  | {
      accessToken: string;
      accountName: string;
      refreshToken: string;
    };
export type LoginSliceInitialStateType = {
  loginLoading: boolean;
  loginData: LoginDataType;
  error: null | string;
};

export type AuthLoginPayloadActionType = {
  authType: string;
  'oauth2-token': string;
};
export type AuthLoginSuccessPayloadActionType = {
  accessToken: string;
  accountName: string;
  refreshToken: string;
};
export type AuthLoginFailurePayloadActionType = {
  error: string;
};
