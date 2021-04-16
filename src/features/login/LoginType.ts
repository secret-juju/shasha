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
    onSuccessGoogleLogin: (response: GoogleResponseType) => void;
    onFailureGoogleLogin: (error: GoogleFailureResponseType) => void;
    onSuccessFacebookLogin: (userInfo: FacebookReponseType) => void;
    onFailureFacebookLogin: (response: FacebookFailureResponseType) => void;
    initializeNaverLogin: () => void;
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
