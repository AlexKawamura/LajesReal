import { combineReducers } from 'redux';

import userReducer from './userReducer';
import newProductForm from './newProductForm';
import newClientForm from './newClientForm';

export default combineReducers({
  user: userReducer,
  productForm: newProductForm,
  clientForm: newClientForm,
});