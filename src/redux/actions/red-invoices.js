import { createAction } from '@reduxjs/toolkit';
import { RED_INVOICES } from '../../constants/actionTypes';

export const fetchRedInvoiceByIdRequest = createAction(RED_INVOICES.FETCH_RED_INVOICE_BY_ID_REQUEST);
export const fetchRedInvoiceByIdSuccess = createAction(RED_INVOICES.FETCH_RED_INVOICE_BY_ID_SUCCESS);
export const fetchRedInvoiceByIdFailure = createAction(RED_INVOICES.FETCH_RED_INVOICE_BY_ID_FAILURE);
export const updateRedInvoiceByIdRequest = createAction(RED_INVOICES.UPDATE_RED_INVOICE_BY_ID_REQUEST);
export const updateRedInvoiceByIdSuccess = createAction(RED_INVOICES.UPDATE_RED_INVOICE_BY_ID_SUCCESS);
export const updateRedInvoiceByIdFailure = createAction(RED_INVOICES.UPDATE_RED_INVOICE_BY_ID_FAILURE);
