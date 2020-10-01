import firebase from 'firebase';

export const SET_FIELD_PRODUCTS = 'SET_FIELD_PRODUCTS';
export const setField = (field, value) => {
  return {
    type: SET_FIELD_PRODUCTS,
    field,
    value
  }
}

export const saveProduct = product => {
  return async dispatch => {
    await firebase.database().ref(`/products`).push(product);
  };
}