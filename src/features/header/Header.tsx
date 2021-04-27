import React from 'react';

import { HeaderPropsType } from './HeaderType';

import * as S from './style';

import { LogoPng } from '../../assets/header';

const Header = ({ isLoginNow, onAuthButtonClick }: HeaderPropsType) => {
  return (
    <>
      <S.Header>
        <S.HeaderLogo alt='secret juju' src={LogoPng} />
      </S.Header>
      <S.HeaderSubNav>
        <S.HeaderAuthButton onClick={onAuthButtonClick}>
          {isLoginNow ? '로그아웃' : '로그인'}
        </S.HeaderAuthButton>
      </S.HeaderSubNav>
    </>
  );
};

export default Header;
