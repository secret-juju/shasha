import { all, fork } from 'redux-saga/effects';

import { watchAuthLogin } from '../../features/login/LoginSaga';

function* rootSaga() {
  yield all([fork(watchAuthLogin)]);
}

export default rootSaga;
