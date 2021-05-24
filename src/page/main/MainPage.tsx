import React from 'react';

import * as S from './style';

import { useAppDispatch, useTypedSelector } from '../../module/store';

import { reissueAccessToken } from '../../library/requestLib';

import {
  searchBookmarkedCompany,
  searchCompany,
  searchCompanyByCompanyIndustryName,
  searchKindOfIndustry,
} from '../../features/stock/StockSlice';
import { dropDownSliceState } from '../../features/dropDown/DropDownSlice';

import HeaderContainer from '../../features/header/HeaderContainer';
import DropDownContainer from '../../features/dropDown/DropDownContainer';
import Toggle from '../../features/toggle/Toggle';
import StockSection from '../../component/stockSection/StockSection';
import StockSortedSection from '../../component/stockSortedSection/StockSortedSection';

const isSortedSection = selectDropDownItem => {
  const needHeaderItemArray = ['업종명순'];

  return needHeaderItemArray.includes(selectDropDownItem);
};

const MainPage = () => {
  const dispatch = useAppDispatch();

  const { selectDropDownItem } = useTypedSelector(dropDownSliceState);

  dispatch(searchCompany({ 'sorting-condition': 'name', 'sorting-method': 'asc' }));
  dispatch(searchBookmarkedCompany({}));
  dispatch(searchKindOfIndustry({}));
  reissueAccessToken();

  return (
    <S.Container>
      <HeaderContainer />
      <S.StockListWrapper>
        <S.DropDownContainerWrapper>
          <DropDownContainer />
        </S.DropDownContainerWrapper>
        {isSortedSection(selectDropDownItem) ? <StockSection /> : <StockSortedSection />}
      </S.StockListWrapper>
    </S.Container>
  );
};

export default MainPage;
