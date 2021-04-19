import React from 'react';

import type { ToggleItemsType } from '../../features/toggle/ToggleType';

import * as S from './style';

import Toggle from '../../features/toggle/Toggle';
import DropDownContainer from '../../features/dropDown/DropDownContainer';

const MainPage = () => {
  const toggleItems: ToggleItemsType = ['긍정도순', '업종명순'];

  return (
    <S.Container>
      <Toggle toggleItems={toggleItems} />
      <DropDownContainer />
    </S.Container>
  );
};

export default MainPage;
