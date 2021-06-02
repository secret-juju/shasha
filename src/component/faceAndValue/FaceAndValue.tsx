import React from 'react';

import { FaceAndValuePropsType } from './FaceAndValueType';

import { half2StockThemeText, sign2StockThemeText } from '../../utils/stockUtils';

import * as S from './style';

import { StockFaceTheme } from '../../themes/StockTheme';

const FaceAndValue = ({ value, funcType }: FaceAndValuePropsType) => {
  const functionMap = {
    sign: sign2StockThemeText,
    half: half2StockThemeText,
  };
  const tragetFunc = functionMap[funcType];

  const returnValueOfFunc = tragetFunc(value);

  return (
    <S.Container>
      <S.FaceImg src={StockFaceTheme[returnValueOfFunc]} />
      <S.ValueText returnValueOfFunc={returnValueOfFunc}>{value}%</S.ValueText>
    </S.Container>
  );
};

export default FaceAndValue;
