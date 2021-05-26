import React from 'react';

import * as S from './style';

import HeaderContainer from '../../features/header/HeaderContainer';
import StockPageItem from '../../features/stockPage/StockPageItem';

const StockPage = () => {
  return (
    <S.StockPageContainer>
      <HeaderContainer />
      <S.StockWrapper>
        <StockPageItem />
      </S.StockWrapper>
    </S.StockPageContainer>
  );
};

export default StockPage;
