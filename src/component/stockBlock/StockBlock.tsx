import React from 'react';

import { sign2StockThemeText } from '../../utils/stockUtils';

import { stockSliceState } from '../../features/stock/StockSlice';
import { useTypedSelector } from '../../module/store';

import { StockSignTheme } from '../../themes/StockTheme';

import * as S from './style';

import StockItemContainer from '../../features/stock/StockItemContainer';

const StockBlock = ({ isNeedStockHeader, title }) => {
  const { industry } = useTypedSelector(stockSliceState);

  console.log(industry);

  const industryDataByTitle = industry[title];
  const averageFluctuationRateTheme = sign2StockThemeText(
    industryDataByTitle?.averageFluctuationRate,
  );

  return (
    <S.StockBlockArticle>
      {isNeedStockHeader && (
        <S.StockHeader>
          <S.StockHeaderTriangle src={StockSignTheme[averageFluctuationRateTheme]} />
          <S.StockTitle>{title}</S.StockTitle>
          <S.StockFluctuation isFluctuationPositive={averageFluctuationRateTheme}>
            {industryDataByTitle?.averageFluctuationRate}%
          </S.StockFluctuation>
        </S.StockHeader>
      )}
      <S.StockListHeader>
        <S.StockListHeaderText>종목명</S.StockListHeaderText>
        <S.StockListHeaderText>긍정도</S.StockListHeaderText>
        <S.StockListHeaderText textAlign='right'>현재가</S.StockListHeaderText>
        <S.StockListHeaderText textAlign='right'>전일비</S.StockListHeaderText>
        <S.StockListHeaderText textAlign='right'>등락률</S.StockListHeaderText>
      </S.StockListHeader>
      <S.StockItemWrapper>
        {industryDataByTitle &&
          industryDataByTitle?.companies?.map(company => (
            <StockItemContainer key={company?.name} {...company} />
          ))}
      </S.StockItemWrapper>
    </S.StockBlockArticle>
  );
};

export default StockBlock;
