import React from 'react';

import { removePercentSign } from '../../utils/StringUtils';

import * as S from './style';

import StockItemContainer from '../../features/stockItem/StockItemContainer';

const StockWrapper = ({ title, fluctuation }) => {
  const DATA_ARR = [
    {
      name: '그런증권',
      positivity: '50%',
      curPrice: 10000,
      diff: 255,
      fluctuation: '-23.2%',
    },
    {
      name: '요런증권',
      positivity: '70%',
      curPrice: 10000,
      diff: -255,
      fluctuation: '23.2%',
    },
    {
      name: '고런증권',
      positivity: '0%',
      curPrice: 10000,
      diff: 0,
      fluctuation: '0%',
    },
  ];

  const isFluctuationPositive = removePercentSign(fluctuation);

  return (
    <S.StockWrapper>
      <S.StockHeader>
        <S.StockHeaderTriangle isFluctuationPositive={isFluctuationPositive} />
        <S.StockTitle>{title}</S.StockTitle>
        <S.StockFluctuation isFluctuationPositive={isFluctuationPositive}>
          {fluctuation}
        </S.StockFluctuation>
      </S.StockHeader>
      <S.StockListHeader>
        <S.StockListHeaderText>종목명</S.StockListHeaderText>
        <S.StockListHeaderText>긍정도</S.StockListHeaderText>
        <S.StockListHeaderText textAlign='right'>현재가</S.StockListHeaderText>
        <S.StockListHeaderText textAlign='right'>전일비</S.StockListHeaderText>
        <S.StockListHeaderText textAlign='right'>등락률</S.StockListHeaderText>
      </S.StockListHeader>
      <S.StockItemWrapper>
        {DATA_ARR.map(data => (
          <StockItemContainer key={data.name} {...data} />
        ))}
      </S.StockItemWrapper>
    </S.StockWrapper>
  );
};

export default StockWrapper;