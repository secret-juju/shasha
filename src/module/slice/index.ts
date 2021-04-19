import { combineReducers } from '@reduxjs/toolkit';

import loginReducer from '../../features/login/LoginSlice';
import dropDownReducer from '../../features/dropDown/DropDownSlice';

const rootReducer = combineReducers({ login: loginReducer, dropDown: dropDownReducer });

export type RootReducerType = ReturnType<typeof rootReducer>;

export default rootReducer;
