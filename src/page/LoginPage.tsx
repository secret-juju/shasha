import React from 'react';

import * as S from './style';
import Login from '../features/login/Login';
import Header from '../components/header/Header';

const LoginPage = () => {
  return (
    <S.Container>
      <Header />
      <S.LoginWrapper>
        <Login />
      </S.LoginWrapper>
    </S.Container>
  );
};

export default LoginPage;
