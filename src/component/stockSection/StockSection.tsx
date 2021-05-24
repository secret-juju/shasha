import React, { useEffect } from 'react';

import { useAppDispatch, useTypedSelector } from '../../module/store';

import {
  searchCompanyByCompanyIndustryName,
  stockSliceState,
} from '../../features/stock/StockSlice';
import { dropDownSliceState } from '../../features/dropDown/DropDownSlice';

import * as S from './style';

import WithLoginStockBlock from '../withLoginStockBlock/WithLoginStockBlock';
import StockBlock from '../stockBlock/StockBlock';

const isNeedStockHeader = selectDropDownItem => {
  const needHeaderItemArray = ['업종명순'];

  return needHeaderItemArray.includes(selectDropDownItem);
};

const StockSection = () => {
  const dispatch = useAppDispatch();

  const { selectDropDownItem } = useTypedSelector(dropDownSliceState);
  const { industryNames, bookmarked } = useTypedSelector(stockSliceState);

  const { averageFluctuationRate } = bookmarked;

  useEffect(() => {
    industryNames.forEach(industryName => {
      dispatch(searchCompanyByCompanyIndustryName({ companyIndustryName: industryName }));
    });
  }, [industryNames]);

  return (
    <S.StockWrapper>
      <WithLoginStockBlock
        title='즐겨찾기'
        fluctuation={averageFluctuationRate}
        companyInfo={bookmarked}
      />
      {industryNames.map(industryName => (
        <StockBlock
          key={industryName}
          title={industryName}
          isNeedStockHeader={isNeedStockHeader(selectDropDownItem)}
        />
      ))}
    </S.StockWrapper>
  );
};

export default StockSection;
