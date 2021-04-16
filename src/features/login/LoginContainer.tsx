import React from 'react';

import Login from './Login';

import { DotEnvType } from '../../types';
import { GoogleFailureResponseType, GoogleResponseType } from './LoginType';

import { useAppDispatch, useTypedSelector } from '../../module/store';

import { authLogin, loginData, loginSliceState } from './LoginSlice';

const { naver } = window as any;

const LoginContainer = () => {
  const dispatch = useAppDispatch();

  const REACT_APP_GOOGLE_API_KEY: DotEnvType = process.env.REACT_APP_GOOGLE_API_KEY;
  const REACT_APP_FACEBOOK_API_KEY: DotEnvType = process.env.REACT_APP_FACEBOOK_API_KEY;
  const REACT_APP_NAVER_API_KEY: DotEnvType = process.env.REACT_APP_NAVER_API_KEY;

  const onSuccessGoogleAuth = async (response: GoogleResponseType) => {
    if ('tokenId' in response) {
      dispatch(authLogin({ authType: 'google', 'oauth2-token': response.tokenId }));
    }
  };
  const onFailureGoogleAuth = (error: GoogleFailureResponseType) => {
    alert('구글 로그인에 실패하였습니다. 다시 시도해주세요.');
  };

  const onSuccessFacebookAuth = userInfo => {
    console.log(userInfo);
  };
  const onFailureFacebookAuth = response => {
    alert('페이스북 로그인에 실패하였습니다. 다시 시도해주세요.');
  };

  const initializeNaverAuth = () => {
    const naverLogin = new naver.LoginWithNaverId({
      clientId: REACT_APP_NAVER_API_KEY,
      callbackUrl: 'http://localhost:3000/login/naver/redirect',
      isPopup: false,
      loginButton: { color: 'green', type: 3, height: '75' },
    });
    naverLogin.init();
  };

  const apiKeyProps = {
    REACT_APP_GOOGLE_API_KEY,
    REACT_APP_FACEBOOK_API_KEY,
    REACT_APP_NAVER_API_KEY,
  };

  const funcProps = {
    onSuccessGoogleAuth,
    onFailureGoogleAuth,
    onSuccessFacebookAuth,
    onFailureFacebookAuth,
    initializeNaverAuth,
  };

  return <Login apiKeyProps={apiKeyProps} funcProps={funcProps} />;
};

export default LoginContainer;
