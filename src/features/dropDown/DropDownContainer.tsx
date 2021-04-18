import React, { useState } from 'react';

import { DropDownItemType, DropDownContainerPropsType, DropDownItemsType } from './DropDownType';

import DropDown from './DropDown';

const DropDownContainer = ({ dropDownItems, defaultDropDownItem }: DropDownContainerPropsType) => {
  const [selectDropDownItem, setSelectDropDownItem] = useState<DropDownItemType>(
    defaultDropDownItem,
  );
  const [unSelectDropDownItems, setUnSelectDropDownItems] = useState<DropDownItemsType>(
    dropDownItems.filter(dropDownItem => dropDownItem !== defaultDropDownItem),
  );

  const onDropDownItemClick = selectDropDownItem => {
    setSelectDropDownItem(selectDropDownItem);
    setUnSelectDropDownItems(
      dropDownItems.filter(dropDownItem => dropDownItem !== selectDropDownItem),
    );
  };

  return (
    <DropDown
      selectDropDownItem={selectDropDownItem}
      unSelectDropDownItems={unSelectDropDownItems}
      onDropDownItemClick={onDropDownItemClick}
    />
  );
};

export default DropDownContainer;
