import React from 'react';

import * as S from './style';

import { useAppDispatch } from '../../module/store';

import { reissueAccessToken } from '../../library/requestLib';

import {
  searchBookmarkedCompany,
  searchCompany,
  searchCompanyByCompanyIndustryName,
  searchKindOfIndustry,
} from '../../features/stock/StockSlice';

import HeaderContainer from '../../features/header/HeaderContainer';
import DropDownContainer from '../../features/dropDown/DropDownContainer';
import Toggle from '../../features/toggle/Toggle';
import StockSection from '../../component/stockSection/StockSection';

const MainPage = () => {
  const dispatch = useAppDispatch();

  dispatch(searchCompany({ 'sorting-condition': 'name', 'sorting-method': 'asc' }));
  // dispatch(searchCompanyByCompanyIndustryName({companyIndustryName: ""}));
  dispatch(searchBookmarkedCompany({ page: 1, size: 10 }));
  dispatch(searchKindOfIndustry({}));
  reissueAccessToken();

  return (
    <S.Container>
      <HeaderContainer />
      <S.StockListWrapper>
        <DropDownContainer />
        <StockSection />
      </S.StockListWrapper>
    </S.Container>
  );
};

export default MainPage;
