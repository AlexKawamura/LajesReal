import { combineReducers } from 'redux';

import userReducer from './userReducer';
import newProductForm from './newProductForm';
import newClientForm from './newClientForm';
import productsReducer from './productsReducer';

export default combineReducers({
  user: userReducer,
  productForm: newProductForm,
  clientForm: newClientForm,
  products: productsReducer,
});