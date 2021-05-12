import React, { useEffect } from 'react';
import axios from 'axios';

import { checkIsLogin } from '../../utils/AuthUtils';

import { useAppDispatch, useTypedSelector } from '../../module/store';

import { DotEnvType } from '../../types';
import { GoogleFailureResponseType, GoogleResponseType } from './LoginType';

import { authLogin, loginSliceState } from './LoginSlice';

import Login from './Login';

const { naver } = window as any;

const LoginContainer = () => {
  const dispatch = useAppDispatch();
  const { loginLoading, loginData } = useTypedSelector(loginSliceState);

  const REACT_APP_GOOGLE_API_KEY: DotEnvType = process.env.REACT_APP_GOOGLE_API_KEY;
  const REACT_APP_FACEBOOK_API_KEY: DotEnvType = process.env.REACT_APP_FACEBOOK_API_KEY;
  const REACT_APP_NAVER_API_KEY: DotEnvType = process.env.REACT_APP_NAVER_API_KEY;

  const onSuccessGoogleAuth = async (response: GoogleResponseType) => {
    if ('tokenId' in response) {
      const res = await dispatch(
        authLogin({ authType: 'google', Authorization: response.tokenId }),
      );
    }
  };
  const onFailureGoogleAuth = (error: GoogleFailureResponseType) => {
    alert('구글 로그인에 실패하였습니다. 다시 시도해주세요.');
  };

  const onSuccessFacebookAuth = async userInfo => {
    try {
      const res = await axios.get(
        `https://graph.facebook.com/v2.8/me?fields=id&access_token=${userInfo.accessToken}`,
      );

      dispatch(authLogin({ authType: 'facebook', Authorization: res.data.id }));
    } catch (error) {
      console.log(error.response);
    }
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

  useEffect(() => {
    checkIsLogin();
  }, []);

  return <Login apiKeyProps={apiKeyProps} funcProps={funcProps} />;
};

export default LoginContainer;
