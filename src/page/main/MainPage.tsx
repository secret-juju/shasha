import React from 'react';

import type { DropDownItemsType, DropDownItemType } from '../../features/dropDown/DropDownType';
import type { ToggleItemsType } from '../../features/toggle/ToggleType';

import * as S from './style';

import DropDown from '../../features/dropDown/DropDown';
import Toggle from '../../features/toggle/Toggle';

const MainPage = () => {
  const toggleItems: ToggleItemsType = ['긍정도순', '업종명순'];

  const selectDropDownItem: DropDownItemType = '업종명순';
  const dropDownItems: DropDownItemsType = [
    '업종명순',
    '종목명순',
    '긍정도순',
    '현재가순',
    '전일비순',
    '등락률순',
  ].filter(dropDownItem => dropDownItem !== selectDropDownItem);

  return (
    <S.Container>
      <Toggle toggleItems={toggleItems} />
      <DropDown dropDownItems={dropDownItems} selectDropDownItem={selectDropDownItem} />
    </S.Container>
  );
};

export default MainPage;
