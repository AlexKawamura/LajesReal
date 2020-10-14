import firebase from 'firebase';
import { Alert } from 'react-native';
import { resetForm } from './setFormFieldActions';

export const SET_PURCHASES = 'SET_PURCHASES';
const setPurchases = purchases => ({
  type: SET_PURCHASES,
  purchases: purchases
});

export const watchClientPurchases = client => {
  return dispatch => {
    firebase.database().ref(`/clients/${client.id}/purchases`)
    .on('value', snapshot => {
      const purchases = snapshot.val();
      const action = setPurchases(purchases);

      dispatch(action);
    });
  }
}

export const saveClientPurchase = (client, purchase) => {
  return async dispatch => {
    if (purchase.id) {
      await firebase.database().ref(`/clients/${client.id}/purchases/${purchase.id}`).set(purchase);
    } else {
      await firebase.database().ref(`/clients/${client.id}/purchases`).push(purchase);
    }
    
    dispatch(resetForm());
  };
}

export const deleteClientPurchase = (client, purchase) => {
  return dispatch => {
    return new Promise((resolve, reject) => {
      Alert.alert(
        'Excluir',
        `Deseja excluir o pedido ${purchase.id}?`,
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
              await firebase.database().ref(`/clients/${client.id}/purchases/${purchase.id}`).remove();
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