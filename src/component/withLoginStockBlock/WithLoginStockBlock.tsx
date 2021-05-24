import React from 'react';

import type { WithLoginStockBlockPropsType } from './WithLoginStockBlockType';

import { sign2StockThemeText } from '../../utils/stockUtils';
import { getLocalStorageItem } from '../../library/storage/storage';
import { LOCAL_STORAGE_ACCESS_TOKEN_NAME } from '../../library/requestLib';

import * as S from './style';

import { StockSignTheme } from '../../themes/StockTheme';

import StockItemContainer from '../../features/stock/StockItemContainer';

const WithLoginStockBlock = ({ title, fluctuation, companyInfo }: WithLoginStockBlockPropsType) => {
  const isLogin = !!getLocalStorageItem(LOCAL_STORAGE_ACCESS_TOKEN_NAME);

  const isFluctuationPositive = sign2StockThemeText(fluctuation);

  return (
    <S.StockWrapper>
      {isLogin ? (
        <S.StockHeader>
          <S.StockHeaderTriangle isFluctuationPositive={StockSignTheme[isFluctuationPositive]} />
          <S.StockTitle>{title}</S.StockTitle>
          <S.StockFluctuation isFluctuationPositive={isFluctuationPositive}>
            {fluctuation}%
          </S.StockFluctuation>
        </S.StockHeader>
      ) : (
        <S.WithoutLoginStockHeader>
          <S.StockTitle>{title}</S.StockTitle>
        </S.WithoutLoginStockHeader>
      )}
      <S.StockListHeader>
        <S.StockListHeaderText>종목명</S.StockListHeaderText>
        <S.StockListHeaderText>긍정도</S.StockListHeaderText>
        <S.StockListHeaderText textAlign='right'>현재가</S.StockListHeaderText>
        <S.StockListHeaderText textAlign='right'>전일비</S.StockListHeaderText>
        <S.StockListHeaderText textAlign='right'>등락률</S.StockListHeaderText>
      </S.StockListHeader>
      {isLogin ? (
        <S.StockItemWrapper>
          {companyInfo?.companies?.length ? (
            companyInfo?.companies?.map(data => <StockItemContainer key={data.name} {...data} />)
          ) : (
            <S.NeedBookmarkedText>즐겨찾기 등록 시 바로보기가 가능합니다.</S.NeedBookmarkedText>
          )}
        </S.StockItemWrapper>
      ) : (
        <S.LoginRedirectButton to='/login'>로그인 후 사용가능</S.LoginRedirectButton>
      )}
    </S.StockWrapper>
  );
};

export default WithLoginStockBlock;
