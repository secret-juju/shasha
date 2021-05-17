import { all, fork } from 'redux-saga/effects';

import loginSaga from '../../features/login/LoginSaga';
import stockSaga from '../../features/stock/StockSaga';

function* rootSaga() {
  yield all([fork(loginSaga), fork(stockSaga)]);
}

export default rootSaga;
