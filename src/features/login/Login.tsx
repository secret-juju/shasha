import React, { useEffect } from 'react';

import GoogleLogin from 'react-google-login';
import ReactFacebookLogin from 'react-facebook-login';

import type { LoginType } from './LoginType';

import { FacebookIconPng, GoogleIconPng } from '../../assets/login';

import * as S from './style';

const Login = ({ apiKeyProps, funcProps }: LoginType) => {
  const {
    REACT_APP_GOOGLE_API_KEY,
    REACT_APP_FACEBOOK_API_KEY,
    REACT_APP_NAVER_API_KEY,
  } = apiKeyProps;
  const {
    onSuccessGoogleAuth,
    onFailureGoogleAuth,
    onSuccessFacebookAuth,
    onFailureFacebookAuth,
    initializeNaverAuth,
  } = funcProps;

  if (typeof REACT_APP_GOOGLE_API_KEY !== 'string') {
    return <div>Please Check REACT_APP_GOOGLE_API_KEY</div>;
  }
  if (typeof REACT_APP_FACEBOOK_API_KEY !== 'string') {
    return <div>Please Check REACT_APP_FACEBOOK_API_KEY</div>;
  }
  if (typeof REACT_APP_NAVER_API_KEY !== 'string') {
    return <div>Please Check REACT_APP_NAVER_API_KEY</div>;
  }

  useEffect(() => {
    initializeNaverAuth();
  }, []);

  return (
    <S.LoginSection>
      <S.LoginSectionTitle>Login</S.LoginSectionTitle>
      <S.LoginWrapper>
        <GoogleLogin
          clientId={REACT_APP_GOOGLE_API_KEY}
          onSuccess={onSuccessGoogleAuth}
          onFailure={onFailureGoogleAuth}
          cookiePolicy='single_host_origin'
          render={renderProps => (
            <S.GoogleLoginButton onClick={renderProps.onClick}>
              <S.GoogleLoginImage src={GoogleIconPng} />
              <S.GoogleLoginSpan>구글로 로그인</S.GoogleLoginSpan>
            </S.GoogleLoginButton>
          )}
        />
        <S.NaverIdLogin id='naverIdLogin' />
        <ReactFacebookLogin
          appId={REACT_APP_FACEBOOK_API_KEY}
          autoLoad={false}
          fields='name,first_name,last_name,email,picture'
          callback={onSuccessFacebookAuth}
          onFailure={onFailureFacebookAuth}
          textButton='페이스북으로 로그인'
          icon={<S.FacebookLoginImage src={FacebookIconPng} />}
        />
      </S.LoginWrapper>
    </S.LoginSection>
  );
};

export default Login;
