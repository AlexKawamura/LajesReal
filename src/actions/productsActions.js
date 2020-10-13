import firebase from 'firebase';
import { Alert } from 'react-native';
import { resetForm } from './setFormFieldActions';

export const SET_PRODUCTS = 'SET_PRODUCTS';
const setProducts = products => ({
  type: SET_PRODUCTS,
  products: products
});

export const watchProducts = () => {
  return dispatch => {
    firebase.database().ref('/products')
    .on('value', snapshot => {
      const products = snapshot.val();
      const action = setProducts(products);

      dispatch(action);
    });
  }
}

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

export const deleteProduct = product => {
  return dispatch => {
    return new Promise((resolve, reject) => {
      Alert.alert(
        'Excluir',
        `Deseja excluir o produto ${product.productName}?`,
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
              await firebase.database().ref(`/products/${product.id}`).remove();
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