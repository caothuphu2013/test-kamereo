import { createReducer } from '@reduxjs/toolkit';
import { RED_INVOICES } from '../../constants/actionTypes';

const initialState = {
  redInvoice: {},
  error: null
};

export default createReducer(initialState, {
  [RED_INVOICES.FETCH_RED_INVOICE_BY_ID_SUCCESS]: (state, { payload: redInvoice }) => ({ ...state, redInvoice }),
  [RED_INVOICES.FETCH_RED_INVOICE_BY_ID_FAILURE]: (state, { payload: error }) => ({ ...state, error }),
  [RED_INVOICES.UPDATE_RED_INVOICE_BY_ID_SUCCESS]: (state, { payload: redInvoice }) => ({ ...state, redInvoice }),
  [RED_INVOICES.UPDATE_RED_INVOICE_BY_ID_FAILURE]: (state, { payload: error }) => ({ ...state, error })
});
