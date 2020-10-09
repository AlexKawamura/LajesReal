import firebase from 'firebase';

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