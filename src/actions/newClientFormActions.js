import firebase from 'firebase';
import { resetForm } from './setFormFieldActions';

export const saveClient = client => {
  return async dispatch => {
    if (client.id) {
      await firebase.database().ref(`/clients/${client.id}`).set(client);
    } else {
      await firebase.database().ref('/clients').push(client);
    }

    dispatch(resetForm());
  };
}