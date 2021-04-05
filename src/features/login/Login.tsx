import axios from 'axios';
import React, { useEffect } from 'react';
import ReactFacebookLogin from 'react-facebook-login';
import GoogleLogin from 'react-google-login';

import * as S from './style';

import { FacebookIconPng, GoogleIconPng } from '../../assets/login';
import { API_KEY, GoogleResponseType } from './LoginType';

const { naver } = window as any;

const Login = () => {
  const REACT_APP_GOOGLE_API_KEY: API_KEY = process.env.REACT_APP_GOOGLE_API_KEY;
  const REACT_APP_FACEBOOK_API_KEY: API_KEY = process.env.REACT_APP_FACEBOOK_API_KEY;
  const REACT_APP_NAVER_API_KEY: API_KEY = process.env.REACT_APP_NAVER_API_KEY;

  if (typeof REACT_APP_GOOGLE_API_KEY !== 'string') {
    return <div>Please Check REACT_APP_GOOGLE_API_KEY</div>;
  }
  if (typeof REACT_APP_FACEBOOK_API_KEY !== 'string') {
    return <div>Please Check REACT_APP_FACEBOOK_API_KEY</div>;
  }
  if (typeof REACT_APP_FACEBOOK_API_KEY !== 'string') {
    return <div>Please Check REACT_APP_NAVER_API_KEY</div>;
  }

  const onSuccessGogle = async (result: GoogleResponseType) => {
    console.log(result);
    if ('tokenId' in result) {
      const res = await axios.get(
        `https://www.googleapis.com/oauth2/v3/tokeninfo?id_token=${result.tokenId}`,
      );

      console.log(res);
    }
  };
  const onFailureGoogle = (error: any) => {
    console.log(error);
  };

  const facebookLoginCallback = res => {
    console.log(res);
  };
  const facebookLoginFailure = response => {
    console.log(response);
  };

  const initializeNaverLogin = () => {
    const naverLogin = new naver.LoginWithNaverId({
      clientId: REACT_APP_NAVER_API_KEY,
      callbackUrl: 'http://localhost:3000/login/naver/redirect',
      isPopup: false,
      loginButton: { color: 'green', type: 3, height: '75' },
    });
    naverLogin.init();
  };

  useEffect(() => {
    initializeNaverLogin();
  }, []);

  return (
    <S.LoginSection>
      <S.LoginSectionTitle>Login</S.LoginSectionTitle>
      <S.LoginWrapper>
        <GoogleLogin
          clientId={REACT_APP_GOOGLE_API_KEY}
          onSuccess={onSuccessGogle}
          onFailure={onFailureGoogle}
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
          callback={userInfo => facebookLoginCallback(userInfo)}
          onFailure={response => facebookLoginFailure(response)}
          textButton='페이스북으로 로그인'
          icon={<S.FacebookLoginImage src={FacebookIconPng} />}
        />
      </S.LoginWrapper>
    </S.LoginSection>
  );
};

export default Login;
