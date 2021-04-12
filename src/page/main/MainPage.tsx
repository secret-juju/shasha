import React from 'react';

import Toggle from '../../features/toggle/Toggle';

import { ToggleItemsType } from 'src/features/toggle/ToggleType';

import * as S from './style';

const MainPage = () => {
  const toggleItems: ToggleItemsType = ['긍정도순', '업종명순'];

  return (
    <S.Container>
      <Toggle toggleItems={toggleItems} />
    </S.Container>
  );
};

export default MainPage;
