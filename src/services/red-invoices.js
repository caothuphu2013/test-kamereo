import appFetch from '../utils/appFetch';

export const getRedInvoiceById = (id) => appFetch.get(`red-invoices/${id}`);

export const putRedInvoiceById = (id, options) => appFetch.put(`red-invoices/${id}`, options);
