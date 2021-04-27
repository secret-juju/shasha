import React from 'react';

import * as S from './style';

import LoginContainer from '../../features/login/LoginContainer';
import HeaderContainer from '../../features/header/HeaderContainer';

const LoginPage = () => {
  return (
    <S.Container>
      <HeaderContainer />
      <S.LoginWrapper>
        <LoginContainer />
      </S.LoginWrapper>
    </S.Container>
  );
};

export default LoginPage;
