import React, { useCallback, useEffect, useState } from 'react';

import { DropDownItemType } from './DropDownType';

import { useAppDispatch, useTypedSelector } from '../../module/store';

import { dropDownSliceState, clickDropDownItem } from './DropDownSlice';

import DropDown from './DropDown';

const DropDownContainer = () => {
  const dispatch = useAppDispatch();
  const { selectDropDownItem, unSelectDropDownItems } = useTypedSelector(dropDownSliceState);

  const [active, setActive] = useState(false);

  const dispatchClickDropDownItem = useCallback(
    (dropDownItem: DropDownItemType) => {
      dispatch(clickDropDownItem({ dropDownItem }));
    },
    [dispatch],
  );

  const onDropDownItemClick = (selectDropDownItem: DropDownItemType) => {
    dispatchClickDropDownItem(selectDropDownItem);
  };
  const onDropDownSectionClick = () => {
    setActive(prevState => !prevState);
  };

  const handleWindowClick = e => {
    if (!e.target.closest(`.drop-down-section`)) {
      setActive(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleWindowClick);

    return () => {
      document.removeEventListener('click', handleWindowClick);
    };
  }, []);

  return (
    <DropDown
      active={active}
      selectDropDownItem={selectDropDownItem}
      unSelectDropDownItems={unSelectDropDownItems}
      onDropDownItemClick={onDropDownItemClick}
      onDropDownSectionClick={onDropDownSectionClick}
    />
  );
};

export default DropDownContainer;
