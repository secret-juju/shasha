import React, { useCallback, useEffect, useState } from 'react';

import { DropDownItemType, DropDownContainerPropsType, DropDownItemsType } from './DropDownType';

import DropDown from './DropDown';

const DropDownContainer = ({ dropDownItems, defaultDropDownItem }: DropDownContainerPropsType) => {
  const [active, setActive] = useState(false);
  const [selectDropDownItem, setSelectDropDownItem] = useState<DropDownItemType>(
    defaultDropDownItem,
  );
  const [unSelectDropDownItems, setUnSelectDropDownItems] = useState<DropDownItemsType>([]);

  const onDropDownItemClick = useCallback(selectDropDownItem => {
    setSelectDropDownItem(selectDropDownItem);
    setUnSelectDropDownItems(
      dropDownItems.filter(dropDownItem => dropDownItem !== selectDropDownItem),
    );
  }, []);

  const onDropDownSectionClick = useCallback(() => {
    setActive(prevState => !prevState);
  }, []);

  const handleWindowClick = useCallback(e => {
    if (!e.target.closest(`.drop-down-section`)) {
      setActive(false);
    }
  }, []);

  useEffect(() => {
    setUnSelectDropDownItems(
      dropDownItems.filter(dropDownItem => dropDownItem !== defaultDropDownItem),
    );

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
