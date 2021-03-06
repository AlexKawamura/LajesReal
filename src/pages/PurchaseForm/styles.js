import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E2DFE2',
  },

  textInput: {
    borderBottomWidth: 1,
    borderBottomColor: '#1B262C',
    flex: 1,
  },

  registerButton: {
    paddingLeft: 50,
    paddingRight: 50,
    paddingTop: 10
  },

  groupButton: {
    flexDirection: 'row',
    paddingTop: 10
  },

  buttonRegister: {
    flex: 1,
    maxHeight: 50,
    marginRight: 20,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#1B262C',
  },

  buttonDelete: {
    flex: 1,
    maxWidth: 50,
    minHeight: 50,
    marginLeft: 20,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#E75959',
  },

  textButton: {
    fontSize: 15,
    color: '#FFF'
  }
})

export default styles;