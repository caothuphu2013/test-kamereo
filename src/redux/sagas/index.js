import { fork, all } from 'redux-saga/effects';
import storesSaga from './stores';
import redInvoices from './red-invoices';

export default function* root() {
  yield all([fork(storesSaga), fork(redInvoices)]);
}
