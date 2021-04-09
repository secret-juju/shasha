import React from 'react';

import * as S from './style';
import { LogoPng } from '../../assets/header';

const Header = () => {
  return (
    <S.Header>
      <S.HeaderLogo alt='secret juju' src={LogoPng} />
    </S.Header>
  );
};

export default Header;
