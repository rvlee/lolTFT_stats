import {
  all,
} from 'redux-saga/effects';
import {
  itemSagas,
} from './itemSaga';

export default function* rootSaga() {
  yield all([
    itemSagas(),
  ]);
}
