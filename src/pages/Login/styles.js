import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#BBE1FA'
  },

  title: {
    width: '100%',
    color: '#1B262C',
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingTop: 100,
    paddingBottom: 50
  },

  subTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingLeft: 50,
    paddingRight: 50,
    paddingBottom: 30
  },

  form: {
    marginRight: 50,
    marginLeft: 50,
    paddingBottom: 20,
    paddingTop: 20,
    backgroundColor: '#FFF',
    borderRadius: 10,
    elevation: 4
  },

  message: {
    alignItems: 'center',
    marginBottom: 5,
  },

  error: {
    color: 'red',
    textAlign: 'center'
  },

  success: {
    color: 'green',
    textAlign: 'center'
  },

  textInput: {
    borderBottomWidth: 1,
    borderBottomColor: '#1B262C'
  },

  loginButton: {
    paddingLeft: 50,
    paddingRight: 50,
    paddingTop: 10
  },

  registerButton: {
    paddingLeft: 50,
    paddingRight: 50,
    paddingTop: 20
  }
});

export default styles;