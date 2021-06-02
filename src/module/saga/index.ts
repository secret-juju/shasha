import { all, fork } from 'redux-saga/effects';

import loginSaga from '../../features/login/LoginSaga';
import stockSaga from '../../features/stock/StockSaga';
import stockInfoSaga from '../../features/stockInfo/StockInfoSaga';

function* rootSaga() {
  yield all([fork(loginSaga), fork(stockSaga), fork(stockInfoSaga)]);
}

export default rootSaga;
