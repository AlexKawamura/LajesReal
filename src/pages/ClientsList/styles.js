import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E2DFE2',
  },

  clientsList: {
    marginTop: -40,
    paddingHorizontal: 16,
    paddingBottom: 16
  },

  error: {
    fontSize: 18,
    color: 'red',
    alignSelf: 'center'
  },

  newClientButton: {
    height: 60,
    backgroundColor: '#1B262C',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row'
  },

  newClientLabel: {
    color: '#FFF',
    fontSize: 30,
    marginLeft: 10
  }
});

export default styles;