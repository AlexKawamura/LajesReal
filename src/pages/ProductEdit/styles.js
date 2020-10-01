import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E2DFE2',
  },

  formContainer: {
    marginTop: 10,
    paddingHorizontal: 16,
    paddingBottom: 16
  },

  form: {
    paddingTop: 20,
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderColor: '#E6E6F0',
    borderRadius: 20,
    paddingBottom: 20,
  },

  addAvatar: {
    alignItems: 'center',
    marginBottom: 10
  },

  avatarIcon: {
    marginBottom: 5,
  },

  avatar: {
    marginBottom: 5,
    width: 130,
    height: 130,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: '#E6E6F0',
  },

  textInput: {
    borderBottomWidth: 1,
    borderBottomColor: '#1B262C',
    flex: 1,
  },

  inputLocation: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },

  cityInput: {
    borderBottomWidth: 1,
    borderBottomColor: '#1B262C',
    width: 170,
  },

  groupButton: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingTop: 10
  },

  buttonRegister: {
    flex: 1,
    maxHeight: 50,
    marginLeft: 40,
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
    marginRight: 40,
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