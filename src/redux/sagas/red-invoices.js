import { call, put, all, takeLatest } from 'redux-saga/effects';
import { redInvoicesActions } from '../actions';
import { RED_INVOICES } from '../../constants/actionTypes';
import * as RedInvoicesServices from '../../services/red-invoices';

function* fetchRedInvoiceById({ payload: id }) {
  try {
    const response = yield call(RedInvoicesServices.getRedInvoiceById, id);
    const { address, city, state } = response;
    const redInvoice = {
      ...response,
      address: address.concat(`, ${city}`).concat(`, ${state}`)
    };
    yield put(redInvoicesActions.fetchRedInvoiceByIdSuccess(redInvoice));
  } catch (error) {
    yield put(redInvoicesActions.fetchRedInvoiceByIdFailure(error));
  }
}

function* updateRedInvoiceById({ payload }) {
  try {
    const { id, options } = payload;
    const response = yield call(RedInvoicesServices.putRedInvoiceById, id, options);
    const { address, city, state } = response;
    const redInvoice = {
      ...response,
      address: address.concat(`, ${city}`).concat(`, ${state}`)
    };
    yield put(redInvoicesActions.updateRedInvoiceByIdSuccess(redInvoice));
  } catch (error) {
    yield put(redInvoicesActions.updateRedInvoiceByIdFailure(error));
  }
}

export default function* root() {
  yield all([takeLatest(RED_INVOICES.FETCH_RED_INVOICE_BY_ID_REQUEST, fetchRedInvoiceById), takeLatest(RED_INVOICES.UPDATE_RED_INVOICE_BY_ID_REQUEST, updateRedInvoiceById)]);
}
