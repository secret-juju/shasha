import React, { useEffect, useState } from 'react';

import type { DropDownPropsType } from './DropDownType';

import { DropDownArrowSvg } from '../../assets/dropdown';

import * as S from './style';

const DropDown = ({ dropDownItems, selectDropDownItem }: DropDownPropsType) => {
  const [active, setActive] = useState(false);
  const [firstLoading, setFirstLoading] = useState(true);

  useEffect(() => {
    if (active === true) setFirstLoading(false);
  }, [active]);

  return (
    <S.DropDownSection onClick={() => setActive(prev => !prev)}>
      <S.SelectDropDownItemWrapper active={active}>
        <S.SelectDropDownItem>{selectDropDownItem}</S.SelectDropDownItem>
        <S.SelectDropDownArrow src={DropDownArrowSvg} active={active} />
      </S.SelectDropDownItemWrapper>
      {dropDownItems.length ? (
        <S.DropDownItemWrapper active={active} firstLoading={firstLoading}>
          {dropDownItems.map(dropDownItem => (
            <S.DropDownItem key={dropDownItem} value={dropDownItem}>
              {dropDownItem}
            </S.DropDownItem>
          ))}
        </S.DropDownItemWrapper>
      ) : (
        ''
      )}
    </S.DropDownSection>
  );
};

export default DropDown;
