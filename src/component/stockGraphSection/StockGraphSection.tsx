import React, { useState } from 'react';

import { StockGraphSectionPropsType } from './StockGraphSectionType';

import * as S from './style';

const StockGraphSection = ({
  stock: { closingPrice, yesterdayClosingPrice, highPrice, lowPrice, marketCapitalization },
}: StockGraphSectionPropsType) => {
  const [selectedItem, setSelectedItem] = useState('1일');

  const selectItemArr = ['1일', '5일', '1개월', '6개월', '1년', '5년', '최대'];

  return (
    <S.Container>
      <S.SelectWrapper>
        {selectItemArr.map(item => (
          <S.SelectItem
            key={item}
            selected={selectedItem === item}
            onClick={() => setSelectedItem(item)}
          >
            {item}
          </S.SelectItem>
        ))}
      </S.SelectWrapper>
      <S.InfoWrapper>
        <S.InfoTextItem>
          <S.InfoText>시가</S.InfoText>
          <S.InfoText>{closingPrice}</S.InfoText>
        </S.InfoTextItem>
        <S.InfoTextItem>
          <S.InfoText>시가총액</S.InfoText>
          <S.InfoText>{marketCapitalization}</S.InfoText>
        </S.InfoTextItem>
        <S.InfoTextItem>
          <S.InfoText>최고</S.InfoText>
          <S.InfoText>{highPrice}</S.InfoText>
        </S.InfoTextItem>
        <S.InfoTextItem>
          <S.InfoText>전일 종가</S.InfoText>
          <S.InfoText>{yesterdayClosingPrice}</S.InfoText>
        </S.InfoTextItem>
        <S.InfoTextItem>
          <S.InfoText>최저</S.InfoText>
          <S.InfoText>{lowPrice}</S.InfoText>
        </S.InfoTextItem>
      </S.InfoWrapper>
    </S.Container>
  );
};

export default StockGraphSection;
