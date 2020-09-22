import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#E6E6F0',
    borderRadius: 20
  },

  profile: {
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },

  avatar: {
    width: 64,
    height: 64,
    borderRadius: 32,
    borderWidth: 1,
    borderColor: '#E6E6F0'
  },

  profileInfo: {
    width: '60%'
  },

  name: {
    color: '#1B262C',
    fontSize: 20
  },

  tel: {
    color: '#1B262C',
    fontSize: 15
  },

  pedidos: {
    height: 35,
    borderTopWidth: 1,
    borderTopColor: '#E2DFE2',
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFF'
  }
})

export default styles;