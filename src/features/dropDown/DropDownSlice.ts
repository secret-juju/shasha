import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { StoreType } from 'src/module/store';
import type {
  DropDownSliceInitialStateType,
  SelectDropDownItemPayloadActionType,
} from './DropDownType';

const sliceName = 'dropDown';
const initialState: DropDownSliceInitialStateType = {
  selectDropDownItem: '업종명순',
  defaultDropDownItems: ['업종명순', '종목명순', '긍정도순', '현재가순', '전일비순', '등락률순'],
  unSelectDropDownItems: ['종목명순', '긍정도순', '현재가순', '전일비순', '등락률순'],
};
const reducers = {
  clickDropDownItem: (
    state = initialState,
    action: PayloadAction<SelectDropDownItemPayloadActionType>,
  ) => {
    state.selectDropDownItem = action.payload.dropDownItem;
    state.unSelectDropDownItems = state.defaultDropDownItems.filter(
      dropDownItem => dropDownItem !== action.payload.dropDownItem,
    );
  },
};

const dropDownSlice = createSlice({
  name: sliceName,
  initialState,
  reducers,
});

const { actions, reducer } = dropDownSlice;

export const { clickDropDownItem } = actions;

export const dropDownSliceState = (state: StoreType) => state.dropDown;

export default reducer;
