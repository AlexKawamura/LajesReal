import { combineReducers } from 'redux';

import userReducer from './userReducer';
import clientsReducer from './clientsReducer';
import newClientForm from './newClientForm';
import productsReducer from './productsReducer';
import newProductForm from './newProductForm';

export default combineReducers({
  user: userReducer,
  clients: clientsReducer,
  clientForm: newClientForm,
  products: productsReducer,
  productForm: newProductForm,
});