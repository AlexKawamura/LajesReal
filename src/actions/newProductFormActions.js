import firebase from 'firebase';

export const saveProduct = product => {
  return async dispatch => {
    await firebase.database().ref(`/products`).push(product).then(() => {
      console.log('Produto cadastrado com sucesso');
    });
  };
}