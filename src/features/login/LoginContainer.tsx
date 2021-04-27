import React, { useEffect } from 'react';

import Login from './Login';

import { DotEnvType } from '../../types';
import { GoogleFailureResponseType, GoogleResponseType } from './LoginType';

import { useAppDispatch, useTypedSelector } from '../../module/store';

import { authLogin, loginData, loginSliceState } from './LoginSlice';
import axios from 'axios';

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
        authLogin({ authType: 'google', 'oauth2-token': response.tokenId }),
      );
      console.log(`res`);
      console.log(res);
    }
  };
  const onFailureGoogleAuth = (error: GoogleFailureResponseType) => {
    alert('구글 로그인에 실패하였습니다. 다시 시도해주세요.');
  };

  const onSuccessFacebookAuth = async userInfo => {
    console.log(userInfo);

    try {
      const res = await axios.get(
        `https://graph.facebook.com/v2.8/me?fields=id&access_token=${userInfo.accessToken}`,
      );

      dispatch(authLogin({ authType: 'facebook', 'oauth2-token': res.data.id }));
      // const res = await axios.post('http://localhost:3000/v1/facebook_auth', {
      //   token: `${userInfo.accessToken}`,
      // });

      // const res = await axios.get(
      //   `https://graph.facebook.com/v10.0/oauth/access_token?client_id=${305208847694209}&redirect_uri=${'http://localhost:3000/'}&client_secret=${'a467182b1fe8e32367205fa6ac66a237'}&code=${
      //     userInfo.accessToken
      //   }`,
      // );
      console.log(res);
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
    console.log(loginLoading, loginData);
    if (!loginLoading && 'accessToken' in loginData) {
    }
  }, [loginLoading, loginData]);

  return <Login apiKeyProps={apiKeyProps} funcProps={funcProps} />;
};

export default LoginContainer;
