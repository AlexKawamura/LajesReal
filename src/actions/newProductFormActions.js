import firebase from 'firebase';
import { emptyFields } from './setFormFieldActions';

export const saveProduct = product => {
  return async dispatch => {
    await firebase.database().ref(`/products`).push(product); 

    dispatch(emptyFields());
  };
}