import { call, put, all, takeLatest } from 'redux-saga/effects';
import { storesActions } from '../actions';
import { STORES } from '../../constants/actionTypes';
import * as storesService from '../../services/stores';
import { isValidPhone } from '../../utils/validation';

function* fetchAllStores() {
  try {
    const response = yield call(storesService.getAllStores);
    yield put(storesActions.fetchAllStoresSuccess(response));
  } catch (error) {
    yield put(storesActions.fetchAllStoresFailure(error));
  }
}

function* fetchStoreById({ payload: id }) {
  try {
    const response = yield call(storesService.getStoreById, id);
    const { address, city, state, phone } = response;
    const store = {
      ...response,
      address: address.concat(`, ${city}`).concat(`, ${state}`),
      phone: isValidPhone(phone) ? phone : 'No valid phone'
    };
    yield put(storesActions.fetchStoreByIdSuccess(store));
  } catch (error) {
    yield put(storesActions.fetchStoreByIdFailure(error));
  }
}

function* updateStoreById({ payload }) {
  try {
    const { id, options } = payload;
    const response = yield call(storesService.putStoreById, id, options);
    const { address, city, state, phone } = response;
    const store = {
      ...response,
      address: address.concat(`, ${city}`).concat(`, ${state}`),
      phone: isValidPhone(phone) ? phone : 'No valid phone'
    };
    yield put(storesActions.updateStoreByIdSuccess(store));
  } catch (error) {
    yield put(storesActions.updateStoreByIdFailure(error));
  }
}

export default function* root() {
  yield all([
    takeLatest(STORES.FETCH_ALL_STORES_REQUEST, fetchAllStores),
    takeLatest(STORES.FETCH_STORE_BY_ID_REQUEST, fetchStoreById),
    takeLatest(STORES.UPDATE_STORE_BY_ID_REQUEST, updateStoreById)
  ]);
}
