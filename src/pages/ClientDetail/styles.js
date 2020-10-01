import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E2DFE2',
  },

  detailsContainer: {
    marginTop: 10,
    paddingHorizontal: 16,
    paddingBottom: 16
  },

  details: {
    alignItems: 'center',
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderColor: '#E6E6F0',
    borderRadius: 20,
    paddingBottom: 20
  },

  avatar: {
    marginTop: 15,
    marginBottom: 5,
    width: 130,
    height: 130,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: '#E6E6F0',
  },

  infos: {
    marginTop: 15,
    alignItems: 'center',
  },

  name: {
    color: '#1B262C',
    textAlign: 'center',
    fontSize: 25
  },

  otherInfos: {
    color: '#1B262C',
    fontSize: 15
  }
})

export default styles;