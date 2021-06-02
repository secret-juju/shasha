import React from 'react';

import type { StockNewsSectionPropsType } from './StockNewsSectionType';

import * as S from './style';

import FaceAndValue from '../faceAndValue/FaceAndValue';

const StockNewsSection = ({ newsArray }: StockNewsSectionPropsType) => {
  return (
    <S.Container>
      {newsArray.map(news => (
        <S.NewsItemWrapper key={news.content}>
          <S.NewsContent>{news.content}</S.NewsContent>
          <FaceAndValue value={news.positivity} funcType='half' />
        </S.NewsItemWrapper>
      ))}
    </S.Container>
  );
};

export default StockNewsSection;
