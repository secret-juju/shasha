import React from 'react';

import * as S from './style';

import HeaderContainer from '../../features/header/HeaderContainer';

const StockPage = () => {
  return (
    <S.StockPageContainer>
      <HeaderContainer />
      <S.StockWrapper></S.StockWrapper>
    </S.StockPageContainer>
  );
};

export default StockPage;
