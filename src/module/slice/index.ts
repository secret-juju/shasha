import { combineReducers } from '@reduxjs/toolkit';

import loginReducer from '../../features/login/LoginSlice';

const rootReducer = combineReducers({ login: loginReducer });

export type RootReducerType = ReturnType<typeof rootReducer>;

export default rootReducer;
