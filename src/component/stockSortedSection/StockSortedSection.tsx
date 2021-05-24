import React from 'react';

import { useTypedSelector } from '../../module/store';

import { stockSliceState } from '../../features/stock/StockSlice';

import { devideArrayPerShareSize } from '../../utils/arrayUtils';

import * as S from './style';

import WithLoginStockBlock from '../withLoginStockBlock/WithLoginStockBlock';
import SortedStockBlock from '../stockBlock/SortedStockBlock';

const StockSortedSection = () => {
  const {
    bookmarked,
    default: { companies: defaultStockCompanies },
  } = useTypedSelector(stockSliceState);

  const [...restDefaultStockCompanies] = devideArrayPerShareSize(defaultStockCompanies, 3);

  const { averageFluctuationRate } = bookmarked;

  return (
    <S.StockWrapper>
      <WithLoginStockBlock
        title='즐겨찾기'
        fluctuation={averageFluctuationRate}
        companyInfo={bookmarked}
      />
      {restDefaultStockCompanies.map(companies => (
        <SortedStockBlock key={companies[0].name} companies={companies} />
      ))}
    </S.StockWrapper>
  );
};

export default StockSortedSection;
