import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E2DFE2',
  },

  details: {
    paddingRight: 20,
    paddingLeft: 20
  },

  avatar: {
    width: 130,
    height: 130,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: '#E6E6F0',
    alignSelf: 'center'
  },

  infos: {
    marginTop: 15
  },

  infoLine: {
    flexDirection: 'row'
  },

  name: {
    color: '#1B262C',
    textAlign: 'center',
    fontSize: 25,
    marginBottom: 15
  },

  label: {
    fontWeight: 'bold',
    fontSize: 16,
    paddingBottom: 5
  },

  info: {
    color: '#1B262C',
    fontSize: 16,
    paddingBottom: 5
  },

  editButton: {
    marginTop: 15
  }
})

export default styles;