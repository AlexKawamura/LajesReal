import firebase from 'firebase';
import { resetForm } from './setFormFieldActions';

export const saveClient = client => {
  return async dispatch => {
    await firebase.database().ref('/clients').push(client);

    dispatch(resetForm());
  };
}