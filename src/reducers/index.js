import { combineReducers } from 'redux';

import userReducer from './userReducer';
import clientsReducer from './clientsReducer';
import newClientForm from './newClientForm';
import productsReducer from './productsReducer';
import newProductForm from './newProductForm';
import purchasesReducer from './purchasesReducer';
import newPurchaseForm from './newPurchaseForm';

export default combineReducers({
  user: userReducer,
  clients: clientsReducer,
  clientForm: newClientForm,
  products: productsReducer,
  productForm: newProductForm,
  purchases: purchasesReducer,
  purchaseForm: newPurchaseForm
});