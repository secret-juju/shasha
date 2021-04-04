import { combineReducers } from "@reduxjs/toolkit";

const rootReducer = combineReducers({});

export type RootReducerType = ReturnType<typeof rootReducer>;

export default rootReducer;
