import React from 'react';

import { numberAddedComma } from '../../utils/stringUtils';

import * as S from './style';

import { StockSignTheme } from '../../themes/StockTheme';

import FaceAndValue from '../../component/faceAndValue/FaceAndValue';

const StockInfo = ({
  averagePositivity,
  closingPrice,
  differenceFromYesterday,
  fluctuationRate,
  differenceFromYesterdayTheme,
}) => {
  return (
    <S.InfoContainer>
      <S.MainFuncWrapper>
        <S.NumberdFuncWrapper>
          <S.CurrentPriceText differenceFromYesterdayTheme={differenceFromYesterdayTheme}>
            {numberAddedComma(closingPrice)}
          </S.CurrentPriceText>
          <S.DifferenceFromYesterdayWrap>
            <S.DifferenceFromYesterdayImg src={StockSignTheme[differenceFromYesterdayTheme]} />
            <S.DifferenceFromYesterdayText
              differenceFromYesterdayTheme={differenceFromYesterdayTheme}
            >
              {numberAddedComma(differenceFromYesterday)}
            </S.DifferenceFromYesterdayText>
          </S.DifferenceFromYesterdayWrap>
          <S.FluctuationRateText differenceFromYesterdayTheme={differenceFromYesterdayTheme}>
            {fluctuationRate}%
          </S.FluctuationRateText>
        </S.NumberdFuncWrapper>
        <S.PositivityWrapper>
          <S.PositivityHeaderText>긍정도</S.PositivityHeaderText>
          <FaceAndValue funcType='half' value={averagePositivity} />
        </S.PositivityWrapper>
      </S.MainFuncWrapper>
    </S.InfoContainer>
  );
};

export default StockInfo;
