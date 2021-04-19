import React, { useCallback, useState } from 'react';

import * as S from './style';

import type { TogglePropsType } from './ToggleType';

const Toggle = ({ toggleItems }: TogglePropsType) => {
  const [toggle, setToggle] = useState(true);

  const onToggleClick = useCallback(() => {
    setToggle(prev => !prev);
  }, []);

  return (
    <S.ToggleSection>
      <S.ToggleItem onClick={onToggleClick} toggleHere={toggle}>
        {toggleItems[0]}
      </S.ToggleItem>
      <S.ToggleItem onClick={onToggleClick} toggleHere={!toggle}>
        {toggleItems[1]}
      </S.ToggleItem>
    </S.ToggleSection>
  );
};

export default Toggle;
