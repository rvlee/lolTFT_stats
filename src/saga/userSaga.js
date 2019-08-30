import {
  call, put, takeEvery,
} from 'redux-saga/effects';
import {
  getRequest,
} from '../utils/api';
import {
  FETCH_USER,
  FETCH_USER_SUCCESS,
  FETCH_USER_FAILED,
} from '../action/userAction';
import {
  domain,
} from '../config/api';

function* fetchUser(params) {
  try {
    const info = yield call(getRequest, `${domain}api/user?username=${params.user}`, (data) => data);
    yield put({
      type: FETCH_USER_SUCCESS,
      info,
    });
  } catch (error) {
    yield put({
      type: FETCH_USER_FAILED, error,
    });
  }
}

// eslint-disable-next-line import/prefer-default-export
export function* userSagas() {
  yield takeEvery(FETCH_USER, fetchUser);
}
