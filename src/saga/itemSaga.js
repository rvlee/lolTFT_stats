import {
  call, put, takeEvery,
} from 'redux-saga/effects';
import {
  getRequest,
  convertItemList,
} from '../utils/api';
import {
  FETCH_ITEMS,
  FETCH_ITEMS_SUCCESS,
  FETCH_ITEMS_FAILED,
} from '../action/itemAction';
import {
  domain,
} from '../config/api';

function* fetchItems() {
  try {
    const {
      baseItems,
      items,
    } = yield call(getRequest, `${domain}api/item`, convertItemList);
    yield put({
      type: FETCH_ITEMS_SUCCESS,
      baseItems,
      items,
    });
  } catch (error) {
    yield put({
      type: FETCH_ITEMS_FAILED, error,
    });
  }
}

// eslint-disable-next-line import/prefer-default-export
export function* itemSagas() {
  yield takeEvery(FETCH_ITEMS, fetchItems);
}
