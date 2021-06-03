import React, { useCallback, useEffect, useState } from 'react';

import { useLocation } from 'react-router';

import {
  methodType,
  requestApiWithAccessToken,
  requestApiWithBodyAndAccessToken,
} from '../../library/requestLib';
import { BOOKMARK_URL } from '../../library/apiUrlLib';

import { useAppDispatch, useTypedSelector } from '../../module/store';
import { searchStockDetail, stockInfoSliceState } from '../../features/stockInfo/StockInfoSlice';

import * as S from './style';

import { starSvg, unStarSvg } from '../../assets/stockPage';

import Bookmark from '../../features/bookmark/Bookmark';
import StockInfoContainer from '../../features/stockInfo/StockInfoContainer';
import StockNewsSection from '../stockNewsSection/StockNewsSection';
import StockGraphSection from '../stockGraphSection/StockGraphSection';

const StockInfoSection = () => {
  const dispatch = useAppDispatch();
  const location = useLocation();
  const { isBookmarked, companyName, news: newsArray, stock } = useTypedSelector(
    stockInfoSliceState,
  );


  const targetTickerSymbol = location.pathname.split('/')[2];

  const [isBookmark, setIsBookmark] = useState(isBookmarked);

  const bookmarkPropsImg = { bookmark: starSvg, unBookmark: unStarSvg };

  const onClick = useCallback(() => {
    (async () => {
      const companyTickerSymbol = targetTickerSymbol;
      Array.prototype.concat;
      const headers = {};
      const requestUrl = BOOKMARK_URL.subscribeCompany(companyTickerSymbol);
      const body = {};
      const httpMethod = isBookmark ? methodType.DELETE : methodType.POST;

      setIsBookmark(prevState => !prevState);

      if (isBookmark) {
        const res = await requestApiWithAccessToken({ headers, httpMethod, requestUrl });
      } else {
        const res = await requestApiWithBodyAndAccessToken({
          headers,
          httpMethod,
          body,
          requestUrl,
        });
      }
    })();
  }, [isBookmark]);

  useEffect(() => {
    setIsBookmark(isBookmarked);
  }, [isBookmarked]);

  useEffect(() => {
    dispatch(searchStockDetail({ companyTickerSymbol: targetTickerSymbol }));
  }, []);

  return (
    <S.SectionContainer>
      <S.SectionHeader>
        <S.HeaderTitle>{companyName}</S.HeaderTitle>
        <Bookmark isBookmark={isBookmark} img={bookmarkPropsImg} onClick={onClick} />
      </S.SectionHeader>
      <StockGraphSection stock={stock} />
      <StockInfoContainer />
      <StockNewsSection newsArray={newsArray} />
    </S.SectionContainer>
  );
};

export default StockInfoSection;
