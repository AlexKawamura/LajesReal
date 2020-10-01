import { combineReducers } from 'redux';

import userReducer from './userReducer';
import newProductForm from './newProductForm';

export default combineReducers({
  user: userReducer,
  productForm: newProductForm,
});