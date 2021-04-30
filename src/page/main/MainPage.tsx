import React from 'react';

import * as S from './style';

import HeaderContainer from '../../features/header/HeaderContainer';
import DropDownContainer from '../../features/dropDown/DropDownContainer';
import StockWrapper from '../../component/stockWrapper/StockWrapper';
import WithLoginStockWrapper from '../../component/withLoginStockWrapper/WithLoginStockWrapper';
import Toggle from '../../features/toggle/Toggle';

const MainPage = () => {
  return (
    <S.Container>
      <HeaderContainer />
      <S.StockListWrapper>
        <DropDownContainer />
        <WithLoginStockWrapper title='즐겨찾기' fluctuation='-5.74%' />
        <StockWrapper title='즐겨찾기' fluctuation='+5.74%' />
        {/* <Toggle /> */}
      </S.StockListWrapper>
    </S.Container>
  );
};

export default MainPage;
