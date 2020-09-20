import firebase from 'firebase';
import { Alert } from 'react-native';

export const USER_LOGIN = 'USER_LOGIN';
const userLogin = user => ({
  type: USER_LOGIN,
  user,
});

export const USER_LOGOUT = 'USER_LOGOUT';
const userLogout = () => ({
  type: USER_LOGOUT,
});

export const processLoginAction = ({email, password}) => dispatch => {
  return firebase.auth()
    .signInWithEmailAndPassword(email, password)
    .then(user => {
      const action = userLogin(user);
      dispatch(action);
    }).catch(error => {
      return Promise.reject(error);
    });
}

export const registerUserAction = ({email, password}) => dispatch => {
  return new Promise((resolve, reject) => {
    Alert.alert(
      'Cadastrando conta de login',
      `Deseja criar a conta?\nE-mail: ${email}\nSenha: ${password}`,
      [{
        text: 'Não',
        onPress: () => {}
      }, {
        text: 'Sim',
        onPress: () => {
          firebase.auth()
            .createUserWithEmailAndPassword(email, password)
            .then(resolve)
            .catch( reject);
        },
      }],
      { cancelable: true }
    );
  });
}