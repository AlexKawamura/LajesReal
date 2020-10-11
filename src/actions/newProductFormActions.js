import firebase from 'firebase';
import { resetForm } from './setFormFieldActions';

export const saveProduct = product => {
  return async dispatch => {
    if (product.id) {
      await firebase.database().ref(`/products/${product.id}`).set(product);
    } else {
      await firebase.database().ref('/products').push(product);
    }

    dispatch(resetForm());
  };
}