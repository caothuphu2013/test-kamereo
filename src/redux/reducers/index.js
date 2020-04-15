import { combineReducers } from 'redux';
import StoresReducer from './stores';
import RedInvoicesReducer from './red-invoices';

export default combineReducers({
  StoresReducer,
  RedInvoicesReducer
});
