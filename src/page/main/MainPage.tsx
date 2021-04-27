import React from 'react';

import * as S from './style';

import HeaderContainer from '../../features/header/HeaderContainer';
import DropDownContainer from '../../features/dropDown/DropDownContainer';
import StockWrapper from '../../component/stockWrapper/StockWrapper';

const MainPage = () => {
  return (
    <S.Container>
      <HeaderContainer />
      <DropDownContainer />
      <StockWrapper />
    </S.Container>
  );
};

export default MainPage;
