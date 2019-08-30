import {
  all,
} from 'redux-saga/effects';
import {
  itemSagas,
} from './itemSaga';

import {
  userSagas,
} from './userSaga';

export default function* rootSaga() {
  yield all([
    userSagas(),
    itemSagas(),
  ]);
}
