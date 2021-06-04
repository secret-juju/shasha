import React from 'react';

import * as S from './style';

import StockItemContainer from '../../features/stock/StockItemContainer';

const SortedStockBlock = ({ companies, specialKey }) => {
  return (
    <S.StockBlockArticle specialKey={specialKey}>
      <S.StockListHeader>
        <S.StockListHeaderText>종목명</S.StockListHeaderText>
        <S.StockListHeaderText>긍정도</S.StockListHeaderText>
        <S.StockListHeaderText textAlign='right'>현재가</S.StockListHeaderText>
        <S.StockListHeaderText textAlign='right'>전일비</S.StockListHeaderText>
        <S.StockListHeaderText textAlign='right'>등락률</S.StockListHeaderText>
      </S.StockListHeader>
      <S.StockItemWrapper>
        {companies?.map(company => (
          <StockItemContainer key={company?.name} {...company} />
        ))}
      </S.StockItemWrapper>
    </S.StockBlockArticle>
  );
};

export default SortedStockBlock;
