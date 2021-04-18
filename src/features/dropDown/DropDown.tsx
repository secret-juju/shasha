import React, { useEffect, useState } from 'react';

import type { DropDownPropsType } from './DropDownType';

import { DropDownArrowSvg } from '../../assets/dropDown';

import * as S from './style';

const DropDown = ({
  active,
  selectDropDownItem,
  unSelectDropDownItems,
  onDropDownItemClick,
  onDropDownSectionClick,
}: DropDownPropsType) => {
  const [firstLoading, setFirstLoading] = useState(true);

  useEffect(() => {
    if (active === true) setFirstLoading(false);
  }, [active]);

  return (
    <S.DropDownSection onClick={onDropDownSectionClick} className='drop-down-section'>
      <S.SelectDropDownItemWrapper active={active}>
        <S.SelectDropDownItem>{selectDropDownItem}</S.SelectDropDownItem>
        <S.SelectDropDownArrow src={DropDownArrowSvg} active={active} />
      </S.SelectDropDownItemWrapper>
      {unSelectDropDownItems.length ? (
        <S.DropDownItemWrapper
          active={active}
          firstLoading={firstLoading}
          itemLength={unSelectDropDownItems.length}
        >
          {unSelectDropDownItems.map(dropDownItem => (
            <S.DropDownItem key={dropDownItem} onClick={() => onDropDownItemClick(dropDownItem)}>
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
