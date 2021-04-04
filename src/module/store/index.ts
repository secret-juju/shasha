import rootSaga from "../saga";
import rootReducer from "../slice";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import createSagaMiddleware from "redux-saga";
import { configureStore } from "@reduxjs/toolkit";

const sagaMiddleware = createSagaMiddleware();

const createStore = () => {
  const store = configureStore({
    reducer: rootReducer,
    devTools: true,
    middleware: [sagaMiddleware],
  });

  sagaMiddleware.run(rootSaga);

  return store;
};

const store = createStore();

export type AppDispatch = typeof store.dispatch;
export type StoreType = ReturnType<typeof store.getState>;
export const useTypedSelector: TypedUseSelectorHook<StoreType> = useSelector;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export default store;
