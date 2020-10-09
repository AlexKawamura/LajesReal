import firebase from 'firebase';

export const SET_CLIENTS = 'SET_CLIENTS';
const setClients = clients => ({
  type: SET_CLIENTS,
  clients: clients
});

export const watchClients = () => {
  return dispatch => {
    firebase.database().ref('/clients')
    .on('value', snapshot => {
      const clients = snapshot.val();
      const action = setClients(clients);

      dispatch(action);
    });
  }
}