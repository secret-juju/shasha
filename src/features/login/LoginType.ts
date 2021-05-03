import { GoogleLoginResponse, GoogleLoginResponseOffline } from 'react-google-login';
import { ReactFacebookLoginInfo, ReactFacebookFailureResponse } from 'react-facebook-login';
import { DotEnvType } from 'src/types';

export type LoginType = {
  apiKeyProps: {
    REACT_APP_GOOGLE_API_KEY: DotEnvType;
    REACT_APP_FACEBOOK_API_KEY: DotEnvType;
    REACT_APP_NAVER_API_KEY: DotEnvType;
  };
  funcProps: {
    onSuccessGoogleAuth: (response: GoogleResponseType) => void;
    onFailureGoogleAuth: (error: GoogleFailureResponseType) => void;
    onSuccessFacebookAuth: (userInfo: FacebookReponseType) => void;
    onFailureFacebookAuth: (response: FacebookFailureResponseType) => void;
    initializeNaverAuth: () => void;
  };
};

export type GoogleResponseType = GoogleLoginResponse | GoogleLoginResponseOffline;
export type GoogleFailureResponseType = any;
export type FacebookReponseType = ReactFacebookLoginInfo | ReactFacebookFailureResponse;
export type FacebookFailureResponseType = ReactFacebookFailureResponse;

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
  loginError: null | string;
};

type authTypeString = 'google' | 'facebook' | 'naver';
export type AuthLoginPayloadActionType = {
  authType: authTypeString;
  Authorization: string;
};
export type AuthLoginSuccessPayloadActionType = {
  authType: string;
  accessToken: string;
  accountName: string;
  refreshToken: string;
};
export type AuthLoginFailurePayloadActionType = {
  error: string;
};
