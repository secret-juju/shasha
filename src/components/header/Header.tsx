import React from 'react';

import { useHistory } from 'react-router';

import * as S from './style';

import { LogoPng } from '../../assets/header';

const Header = ({}) => {
  const history = useHistory();
  const isLoginMode: boolean = true;

  const onAuthButtonClick = () => {
    if (isLoginMode) {
      onLoginButtonClick();
    } else {
      onLogoutButtonClick();
    }
  };

  const onLoginButtonClick = () => {
    if (history?.location?.pathname !== '/login') {
      history.push('/login');
    }
  };
  const onLogoutButtonClick = () => {
    alert('로그아웃 되었습니다.');
    history.push('/login');
  };

  return (
    <>
      <S.Header>
        <S.HeaderLogo alt='secret juju' src={LogoPng} />
      </S.Header>
      <S.HeaderSubNav>
        <S.HeaderAuthButton onClick={onAuthButtonClick}>
          {isLoginMode ? '로그인' : '로그아웃'}
        </S.HeaderAuthButton>
      </S.HeaderSubNav>
    </>
  );
};

export default Header;
