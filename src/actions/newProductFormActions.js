import firebase from 'firebase';
import { resetForm } from './setFormFieldActions';

export const saveProduct = product => {
  return async dispatch => {
    await firebase.database().ref('/products').push(product); 

    dispatch(resetForm());
  };
}