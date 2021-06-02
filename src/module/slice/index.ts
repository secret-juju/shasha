import { combineReducers } from '@reduxjs/toolkit';

// import bookMarkReducer from '../../features/bookmark/BookmarkSlice';
import loginReducer from '../../features/login/LoginSlice';
import dropDownReducer from '../../features/dropDown/DropDownSlice';
import stockReducer from '../../features/stock/StockSlice';
import stockInfoReducer from '../../features/stockInfo/StockInfoSlice';

const rootReducer = combineReducers({
  // bookmark: bookMarkReducer,
  dropDown: dropDownReducer,
  login: loginReducer,
  stock: stockReducer,
  stockInfo: stockInfoReducer,
});

export type RootReducerType = ReturnType<typeof rootReducer>;

export default rootReducer;
