import React from 'react';

import * as S from './style';

import HeaderContainer from '../../features/header/HeaderContainer';
import StockInfoSection from '../../component/stockInfoSection/StockInfoSection';

const StockInfoPage = () => {
  return (
    <S.StockPageContainer>
      <HeaderContainer />
      <S.StockWrapper>
        <StockInfoSection />
      </S.StockWrapper>
    </S.StockPageContainer>
  );
};

export default StockInfoPage;
