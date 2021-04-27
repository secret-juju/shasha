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
      <StockWrapper title='즐겨찾기' fluctuation='+5.74%' />
    </S.Container>
  );
};

export default MainPage;
