import React from 'react';

import * as S from './style';

import Header from '../../components/header/Header';
import LoginContainer from '../../features/login/LoginContainer';

const LoginPage = () => {
  return (
    <S.Container>
      <Header />
      <S.LoginWrapper>
        <LoginContainer />
      </S.LoginWrapper>
    </S.Container>
  );
};

export default LoginPage;
