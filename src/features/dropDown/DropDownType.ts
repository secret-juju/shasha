export type DropDownItemType = string;

export type DropDownItemsType = DropDownItemType[];

export type DropDownPropsType = {
  active: boolean;
  selectDropDownItem: DropDownItemType;
  unSelectDropDownItems: DropDownItemsType;
  onDropDownItemClick: (dropDownItem: DropDownItemType) => void;
  onDropDownSectionClick: () => void;
};
export type DropDownContainerPropsType = {
  dropDownItems: DropDownItemsType;
  defaultDropDownItem: DropDownItemType;
};
