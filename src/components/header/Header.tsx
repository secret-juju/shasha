import React from 'react';

import * as S from './style';
import { LogoPng } from '../../assets/header';

const Header = () => {
  return (
    <>
      <S.Header>
        <S.HeaderLogo alt='secret juju' src={LogoPng} />
      </S.Header>
      <S.HeaderSubNav>
        <S.HeaderAuthButton>{true ? '로그인' : '로그아웃'}</S.HeaderAuthButton>
      </S.HeaderSubNav>
    </>
  );
};

export default Header;
