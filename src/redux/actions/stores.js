import { STORES } from '../../constants/actionTypes';

import { createAction } from '@reduxjs/toolkit';

export const fetchAllStoresRequest = createAction(STORES.FETCH_ALL_STORES_REQUEST);
export const fetchAllStoresSuccess = createAction(STORES.FETCH_ALL_STORES_SUCCESS);
export const fetchAllStoresFailure = createAction(STORES.FETCH_ALL_STORES_FAILURE);
export const fetchStoreByIdRequest = createAction(STORES.FETCH_STORE_BY_ID_REQUEST);
export const fetchStoreByIdSuccess = createAction(STORES.FETCH_STORE_BY_ID_SUCCESS);
export const fetchStoreByIdFailure = createAction(STORES.FETCH_STORE_BY_ID_FAILURE);
export const updateStoreByIdRequest = createAction(STORES.UPDATE_STORE_BY_ID_REQUEST);
export const updateStoreByIdSuccess = createAction(STORES.UPDATE_STORE_BY_ID_SUCCESS);
export const updateStoreByIdFailure = createAction(STORES.UPDATE_STORE_BY_ID_FAILURE);
