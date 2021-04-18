import React from 'react';

import type { DropDownItemsType, DropDownItemType } from '../../features/dropDown/DropDownType';
import type { ToggleItemsType } from '../../features/toggle/ToggleType';

import * as S from './style';

import Toggle from '../../features/toggle/Toggle';
import DropDownContainer from '../../features/dropDown/DropDownContainer';

const MainPage = () => {
  const toggleItems: ToggleItemsType = ['긍정도순', '업종명순'];

  const defaultDropDownItem: DropDownItemType = '업종명순';
  const dropDownItems: DropDownItemsType = [
    '업종명순',
    '종목명순',
    '긍정도순',
    '현재가순',
    '전일비순',
    '등락률순',
  ];

  return (
    <S.Container>
      <Toggle toggleItems={toggleItems} />
      <DropDownContainer dropDownItems={dropDownItems} defaultDropDownItem={defaultDropDownItem} />
    </S.Container>
  );
};

export default MainPage;
