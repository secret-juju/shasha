export type DropDownItemType = string;

export type DropDownItemsType = DropDownItemType[];

export type DropDownPropsType = {
  selectDropDownItem: DropDownItemType;
  unSelectDropDownItems: DropDownItemsType;
  onDropDownItemClick: (dropDownItem: DropDownItemType) => void;
};
export type DropDownContainerPropsType = {
  dropDownItems: DropDownItemsType;
  defaultDropDownItem: DropDownItemType;
};
