import firebase from 'firebase';

export const saveClient = client => {
  return async dispatch => {
    await firebase.database().ref(`/clients`).push(client).then(() => {
      console.log('Cliente cadastrado com sucesso!');
    });
  };
}