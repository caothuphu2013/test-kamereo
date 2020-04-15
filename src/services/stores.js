import appFetch from '../utils/appFetch';

export const getAllStores = () => appFetch.get('stores');

export const getStoreById = (id) => appFetch.get(`stores/${id}`);

export const putStoreById = (id, options) => appFetch.put(`stores/${id}`, options);
