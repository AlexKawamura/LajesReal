import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#E6E6F0',
    borderRadius: 20
  },

  infosContainer: {
    padding: 15,
    paddingLeft: 25,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },

  infos: {
    width: '90%'
  },

  id: {
    color: '#1B262C',
    fontSize: 20
  },

  text: {
    color: '#1B262C',
    fontSize: 15
  },
});

export default styles;