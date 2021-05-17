import { combineReducers } from '@reduxjs/toolkit';

import loginReducer from '../../features/login/LoginSlice';
import dropDownReducer from '../../features/dropDown/DropDownSlice';
import stockReducer from '../../features/stock/StockSlice';

const rootReducer = combineReducers({
  login: loginReducer,
  dropDown: dropDownReducer,
  stock: stockReducer,
});

export type RootReducerType = ReturnType<typeof rootReducer>;

export default rootReducer;
