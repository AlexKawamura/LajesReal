import firebase from 'firebase';
import { Alert } from 'react-native';

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

export const deleteClient = client => {
  return dispatch => {
    return new Promise((resolve, reject) => {
      Alert.alert(
        'Excluir',
        `Deseja excluir o cliente ${client.name}?`,
        [{
          text: 'Não',
          onPress: () => {
            resolve(false);
          },
          style: 'cancel'
        }, {
          text: 'Sim',
          onPress: async () => {
            try{
              await firebase.database().ref(`/clients/${client.id}`).remove();
              resolve(true);
            } catch(erro) {
              reject(erro)
            }
          }
        }],
        {cancelable: true}
      );
    });
  }
}