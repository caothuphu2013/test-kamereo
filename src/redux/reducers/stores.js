import { STORES } from '../../constants/actionTypes';
import { createReducer } from '@reduxjs/toolkit';

const initialState = {
  stores: [],
  store: {},
  error: null
};

export default createReducer(initialState, {
  [STORES.FETCH_ALL_STORES_SUCCESS]: (state, { payload: stores }) => ({ ...state, stores }),
  [STORES.FETCH_ALL_STORES_FAILURE]: (state, { payload: error }) => ({ ...state, error }),
  [STORES.FETCH_STORE_BY_ID_SUCCESS]: (state, { payload: store }) => ({ ...state, store }),
  [STORES.FETCH_STORE_BY_ID_FAILURE]: (state, { payload: error }) => ({ ...state, error }),
  [STORES.UPDATE_STORE_BY_ID_SUCCESS]: (state, { payload: store }) => ({ ...state, store }),
  [STORES.UPDATE_STORE_BY_ID_FAILURE]: (state, { payload: error }) => ({ ...state, error })
});
